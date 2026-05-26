# Trust Modules — Sanity Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Connect Testimonios and FAQ on `/como-funciona` to Sanity CMS with carrusel and PortableText accordion, plus execute the pre-written Equipo integration plan (Tasks 1–7 of `2026-05-26-equipo-sanity-integration.md`).

**Architecture:** Same pattern as services and blog — thin async page fetches from Sanity in parallel and passes data to a new `ComoFuncionaTemplate` server component. `TestimonialsCarousel` is a pure-React client component with no external carousel library. FAQ falls back to i18n hardcoded data when Sanity is empty. Equipo follows its own existing plan.

**Tech Stack:** Next.js 14 App Router · next-intl · Sanity v3 / next-sanity@9 · GROQ · `@portabletext/react` · ISR (`revalidate=0` dev / `3600` prod) · Tailwind CSS · lucide-react

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `src/sanity/lib/queries.ts` | Modify (append) | `TestimonialItem` + `FaqItem` types + 2 GROQ queries |
| `src/components/ui/TestimonialsCarousel.tsx` | Create | Client component carrusel con dots + prev/next |
| `src/components/templates/ComoFuncionaTemplate.tsx` | Create | Async server template: hero, steps, FAQ, testimonios, CTA |
| `src/app/[locale]/como-funciona/page.tsx` | Replace | Fetch Sanity in parallel, pass to template |
| `src/sanity/schemaTypes/index.ts` | Verify only | Confirm `caseStudy` is registered (no changes needed) |

**Note:** Equipo tasks are in the separate plan `2026-05-26-equipo-sanity-integration.md` and must be executed after this plan completes.

---

## Task 1: Add GROQ queries and TypeScript types for Testimonials and FAQs

**Files:**
- Modify: `src/sanity/lib/queries.ts` (append after line 485, after `blogPostSlugsQuery`)

### Context
The file ends at line 485 with `blogPostSlugsQuery`. The project already defines `LocaleString = { es: string; en: string }` and uses `@portabletext/types` for PortableText blocks. The `testimonial` schema has `isApproved: boolean` (security flag — only approved testimonials are shown). The `faq` schema has `isActive: boolean` and `answer` of type `localePortableText` (object with `es[]` and `en[]` PortableText arrays).

- [ ] **Step 1: Append the following block at the very end of `src/sanity/lib/queries.ts`**

```typescript
// ─── Testimonials ─────────────────────────────────────────────────────────────

export interface TestimonialItem {
  _id: string
  patientName: string
  patientOrigin?: { es?: string; en?: string }
  quote: { es: string; en: string }
  rating: number
  photo?: {
    asset: { url: string }
    alt?: string
  }
  service?: { title: LocaleString }
}

export const testimonialsQuery = groq`
  *[_type == "testimonial" && isApproved == true] | order(publishedAt desc) {
    _id,
    patientName,
    patientOrigin,
    quote,
    rating,
    photo { asset->{ url }, alt },
    "service": service->{ title }
  }
`

// ─── FAQs ─────────────────────────────────────────────────────────────────────

export interface FaqItem {
  _id: string
  question: LocaleString
  answer?: {
    es: import('@portabletext/types').PortableTextBlock[]
    en: import('@portabletext/types').PortableTextBlock[]
  }
}

export const faqsQuery = groq`
  *[_type == "faq" && isActive == true] | order(order asc) {
    _id,
    question,
    answer {
      es[] {
        ...,
        markDefs[] {
          ...,
          _type == "link" => { "href": href }
        }
      },
      en[] {
        ...,
        markDefs[] {
          ...,
          _type == "link" => { "href": href }
        }
      }
    }
  }
`
```

- [ ] **Step 2: Verify TypeScript compiles**

```powershell
cd "c:\Users\publi\Desktop\ALLURA"; npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```powershell
cd "c:\Users\publi\Desktop\ALLURA"
git add src/sanity/lib/queries.ts
git commit -m "feat(trust): add GROQ queries and TypeScript types for testimonials and FAQs"
```

---

## Task 2: Create TestimonialsCarousel client component

**Files:**
- Create: `src/components/ui/TestimonialsCarousel.tsx`

### Context
Pure React client component — no external carousel library. Uses `useState` for `activeIndex`. Navigation: prev/next chevron buttons + clickable dots. Each slide shows: photo (or avatar with initial), patient name, origin (localized), star rating, quote, service name. `lucide-react` is already installed (`ChevronLeft`, `ChevronRight`). Tailwind CSS for all styles. Brand colors: `brand-navy` (#051c33), `brand-blue` (#8b9fb3), `brand-light` (#eaeeef), `brand-silver` (#abacae).

- [ ] **Step 1: Create `src/components/ui/TestimonialsCarousel.tsx` with the following content**

```typescript
'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { TestimonialItem } from '@/sanity/lib/queries'

interface TestimonialsCarouselProps {
  testimonials: TestimonialItem[]
  locale: string
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < rating ? 'text-yellow-400' : 'text-brand-light'}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  )
}

export function TestimonialsCarousel({ testimonials, locale }: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const loc = locale as 'es' | 'en'
  const total = testimonials.length

  const prev = () => setActiveIndex((i) => (i - 1 + total) % total)
  const next = () => setActiveIndex((i) => (i + 1) % total)

  if (total === 0) return null

  const t = testimonials[activeIndex]
  const origin = t.patientOrigin?.[loc] || t.patientOrigin?.es || ''
  const quote = t.quote?.[loc] || t.quote?.es || ''
  const serviceName = t.service?.title?.[loc] || t.service?.title?.es || ''

  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Slide */}
      <div
        className="bg-white rounded-2xl shadow-sm border border-brand-light p-8 md:p-10 text-center"
        role="group"
        aria-label={`Testimonio ${activeIndex + 1} de ${total}`}
      >
        {/* Avatar */}
        <div className="flex justify-center mb-5">
          {t.photo?.asset?.url ? (
            <img
              src={t.photo.asset.url}
              alt={t.photo.alt || `Foto de ${t.patientName}`}
              className="w-16 h-16 rounded-full object-cover border-2 border-brand-light"
            />
          ) : (
            <div
              className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center border-2 border-brand-light"
              aria-hidden="true"
            >
              <span className="font-heading text-2xl text-brand-navy">
                {t.patientName.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
        </div>

        <StarRating rating={t.rating} />

        <blockquote className="font-body text-base md:text-lg text-brand-navy leading-relaxed mt-5 mb-6 italic">
          &ldquo;{quote}&rdquo;
        </blockquote>

        <p className="font-heading text-sm text-brand-navy font-semibold">{t.patientName}</p>
        {origin && (
          <p className="font-body text-xs text-brand-silver mt-0.5">{origin}</p>
        )}
        {serviceName && (
          <span className="inline-block mt-3 px-3 py-1 bg-brand-light rounded-full font-body text-xs text-brand-blue tracking-wide">
            {serviceName}
          </span>
        )}
      </div>

      {/* Navigation — only show if more than 1 */}
      {total > 1 && (
        <>
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-brand-light hover:bg-brand-light transition-colors text-brand-navy"
              aria-label={loc === 'en' ? 'Previous testimonial' : 'Testimonio anterior'}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Testimonios">
              {Array.from({ length: total }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-current={i === activeIndex ? 'true' : undefined}
                  aria-label={`Testimonio ${i + 1}`}
                  className={[
                    'w-2 h-2 rounded-full transition-all duration-200',
                    i === activeIndex
                      ? 'bg-brand-navy w-4'
                      : 'bg-brand-light hover:bg-brand-blue',
                  ].join(' ')}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full border border-brand-light hover:bg-brand-light transition-colors text-brand-navy"
              aria-label={loc === 'en' ? 'Next testimonial' : 'Siguiente testimonio'}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </>
      )}
    </div>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```powershell
cd "c:\Users\publi\Desktop\ALLURA"; npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```powershell
cd "c:\Users\publi\Desktop\ALLURA"
git add src/components/ui/TestimonialsCarousel.tsx
git commit -m "feat(trust): add TestimonialsCarousel client component"
```

---

## Task 3: Create ComoFuncionaTemplate

**Files:**
- Create: `src/components/templates/ComoFuncionaTemplate.tsx`

### Context
Async server component. Extracts all UI from the current `como-funciona/page.tsx` and adds Testimonios and Sanity-powered FAQ sections. The existing page has these sections in order: Hero → Steps → FAQ → CTA inline → CTABanner. New order: Hero → Steps → FAQ (Sanity + fallback) → Testimonios (solo si hay datos) → CTA inline → CTABanner.

The hardcoded FAQ fallback comes from `t.raw("comoFunciona.faqs")` which is an array of `{ q: string; a: string }`. The step images array is the same 4 local images as today.

The `WHATSAPP_URL` constant from the current page must be preserved exactly:
`"https://wa.me/17862087572?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20Allura%20Healthcare"`

- [ ] **Step 1: Create `src/components/templates/ComoFuncionaTemplate.tsx` with the following content**

```typescript
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTABanner } from '@/components/sections/CTABanner'
import { Button } from '@/components/ui/Button'
import { TestimonialsCarousel } from '@/components/ui/TestimonialsCarousel'
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import { getTranslations } from 'next-intl/server'
import type { TestimonialItem, FaqItem } from '@/sanity/lib/queries'

const WHATSAPP_URL =
  'https://wa.me/17862087572?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20Allura%20Healthcare'

const stepImages = [
  '/images/imagenes_web/allura-healthcare-contacto-inicial-turismo-en-salud-premium.png',
  '/images/imagenes_web/allura-healthcare-consulta-virtual-especialista-turismo-en-salud.jpg',
  '/images/imagenes_web/allura-healthcare-reserva-organizacion-viaje-turismo-en-salud.jpg',
  '/images/imagenes_web/allura-healthcare-tratamiento-acompanamiento-in-situ-turismo-en-salud.png',
]

const faqPortableTextComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="font-body text-sm text-brand-silver leading-relaxed mb-3 last:mb-0">
        {children}
      </p>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-bold text-brand-navy">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    link: ({ value, children }: { value?: { href?: string }; children?: React.ReactNode }) => (
      <a
        href={value?.href || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand-blue underline hover:text-brand-navy transition-colors"
      >
        {children}
      </a>
    ),
  },
}

interface ComoFuncionaTemplateProps {
  testimonials: TestimonialItem[]
  faqs: FaqItem[]
  locale: string
}

export async function ComoFuncionaTemplate({
  testimonials,
  faqs,
  locale,
}: ComoFuncionaTemplateProps) {
  const t = await getTranslations('comoFunciona')
  const loc = locale as 'es' | 'en'

  const steps = t.raw('steps') as Array<{ number: string; title: string; description: string }>
  const hardcodedFaqs = t.raw('faqs') as Array<{ q: string; a: string }>

  const hasSanityFaqs = faqs.length > 0
  const hasTestimonials = testimonials.length > 0

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy pt-40 pb-20 px-6 md:px-12 text-center">
        <SectionHeading
          eyebrow={t('heroEyebrow')}
          title={t('heroTitle')}
          subtitle={t('heroSubtitle')}
          centered
          light
        />
      </section>

      {/* Steps */}
      <section className="section-padding bg-white">
        <div className="container-allura">
          <div className="space-y-16">
            {steps.map(({ number, title, description }, i) => (
              <div
                key={number}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  i % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={i % 2 !== 0 ? 'md:order-2' : ''}>
                  <p className="font-heading text-6xl text-brand-blue/20 mb-4">{number}</p>
                  <h2 className="font-heading text-3xl text-brand-navy mb-4">{title}</h2>
                  <p className="font-body text-brand-silver leading-relaxed">{description}</p>
                </div>
                <div
                  className={`relative aspect-video rounded-2xl overflow-hidden ${
                    i % 2 !== 0 ? 'md:order-1' : ''
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${stepImages[i]}')` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-brand-light">
        <div className="container-allura max-w-3xl">
          <SectionHeading
            eyebrow={t('faqLabel')}
            title={t('faqTitle')}
            centered
          />
          <div className="mt-12 space-y-6">
            {hasSanityFaqs
              ? faqs.map((faq) => {
                  const question = faq.question?.[loc] || faq.question?.es || ''
                  const answerBlocks = (faq.answer?.[loc] ??
                    faq.answer?.es ??
                    []) as PortableTextBlock[]
                  return (
                    <div
                      key={faq._id}
                      className="bg-white rounded-2xl p-7 shadow-sm border border-brand-light"
                    >
                      <h3 className="font-heading text-lg text-brand-navy mb-3">{question}</h3>
                      {answerBlocks.length > 0 && (
                        <PortableText
                          value={answerBlocks}
                          components={faqPortableTextComponents}
                        />
                      )}
                    </div>
                  )
                })
              : hardcodedFaqs.map(({ q, a }) => (
                  <div
                    key={q}
                    className="bg-white rounded-2xl p-7 shadow-sm border border-brand-light"
                  >
                    <h3 className="font-heading text-lg text-brand-navy mb-3">{q}</h3>
                    <p className="font-body text-sm text-brand-silver leading-relaxed">{a}</p>
                  </div>
                ))}
          </div>
        </div>
      </section>

      {/* Testimonios — only rendered when Sanity has data */}
      {hasTestimonials && (
        <section className="section-padding bg-white">
          <div className="container-allura">
            <SectionHeading
              eyebrow={loc === 'en' ? 'Patient Stories' : 'Lo que dicen nuestros pacientes'}
              title={
                loc === 'en'
                  ? 'Real experiences, real results'
                  : 'Experiencias reales, resultados reales'
              }
              centered
            />
            <div className="mt-12">
              <TestimonialsCarousel testimonials={testimonials} locale={locale} />
            </div>
          </div>
        </section>
      )}

      {/* CTA inline */}
      <section className="section-padding bg-white">
        <div className="container-allura text-center max-w-xl mx-auto">
          <SectionHeading
            eyebrow={t('ctaEyebrow')}
            title={t('ctaTitle')}
            subtitle={t('ctaSubtitle')}
            centered
          />
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#25D366] text-white rounded-full font-body font-bold text-sm hover:bg-[#22c55e] transition-colors"
            >
              {t('ctaWhatsapp')}
            </a>
            <Button href="/contacto" variant="primary">
              {t('ctaContact')}
            </Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```powershell
cd "c:\Users\publi\Desktop\ALLURA"; npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```powershell
cd "c:\Users\publi\Desktop\ALLURA"
git add src/components/templates/ComoFuncionaTemplate.tsx
git commit -m "feat(trust): add ComoFuncionaTemplate with FAQ and Testimonials sections"
```

---

## Task 4: Replace como-funciona page

**Files:**
- Replace: `src/app/[locale]/como-funciona/page.tsx`

### Context
The current page is a self-contained async server component with all UI inline. Replace it entirely with a thin page that fetches Sanity data and delegates to `ComoFuncionaTemplate`. The `revalidate` pattern, `generateMetadata`, and i18n namespace (`comoFunciona`) stay identical to today.

- [ ] **Step 1: Replace the entire content of `src/app/[locale]/como-funciona/page.tsx` with**

```typescript
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { client } from '@/sanity/lib/client'
import {
  testimonialsQuery,
  faqsQuery,
  type TestimonialItem,
  type FaqItem,
} from '@/sanity/lib/queries'
import { ComoFuncionaTemplate } from '@/components/templates/ComoFuncionaTemplate'

export const revalidate = process.env.NODE_ENV === 'development' ? 0 : 3600

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'comoFunciona' })
  return {
    title: t('metaTitle'),
    description: t('metaDesc'),
  }
}

export default async function ComoFuncionaPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const [testimonials, faqs] = await Promise.all([
    client.fetch<TestimonialItem[]>(testimonialsQuery, {}, { next: { revalidate } }),
    client.fetch<FaqItem[]>(faqsQuery, {}, { next: { revalidate } }),
  ])

  return (
    <ComoFuncionaTemplate
      testimonials={testimonials ?? []}
      faqs={faqs ?? []}
      locale={locale}
    />
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```powershell
cd "c:\Users\publi\Desktop\ALLURA"; npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```powershell
cd "c:\Users\publi\Desktop\ALLURA"
git add "src/app/[locale]/como-funciona/page.tsx"
git commit -m "feat(trust): connect como-funciona page to Sanity (testimonials + FAQ)"
```

---

## Task 5: Verify caseStudy schema registration

**Files:**
- Verify only: `src/sanity/schemaTypes/index.ts` (no changes needed)

### Context
The `caseStudy` schema already exists at `src/sanity/schemaTypes/documents/caseStudy.ts` and is already imported and registered in `index.ts` (line 24: `import { caseStudy } from './documents/caseStudy'` and line 52 in the array). No UI is built in this phase.

- [ ] **Step 1: Confirm caseStudy is registered**

```powershell
Select-String -Path "c:\Users\publi\Desktop\ALLURA\src\sanity\schemaTypes\index.ts" -Pattern "caseStudy"
```

Expected output — must include both lines:
```
src\sanity\schemaTypes\index.ts:24:import { caseStudy } from './documents/caseStudy'
src\sanity\schemaTypes\index.ts:52:  caseStudy,
```

If both lines appear: task complete, no commit needed.
If missing: add the import and array entry following the same pattern as other schemas.

---

## Task 6: Run build and local verification

**Files:** None — build + verification only

- [ ] **Step 1: Run full Next.js build**

```powershell
cd "c:\Users\publi\Desktop\ALLURA"; npm run build
```

Expected: build completes with 0 TypeScript errors. Routes visible in output:
```
/[locale]/como-funciona
```

- [ ] **Step 2: If build fails with .next cache error**

```powershell
Remove-Item -Recurse -Force "c:\Users\publi\Desktop\ALLURA\.next"
cd "c:\Users\publi\Desktop\ALLURA"; npm run build
```

- [ ] **Step 3: Start dev server and verify URLs**

```powershell
cd "c:\Users\publi\Desktop\ALLURA"; npm run dev
```

| URL | Expected |
|-----|----------|
| `http://localhost:3000/es/como-funciona` | Steps + FAQ (4 hardcoded si Sanity vacío) + CTA |
| `http://localhost:3000/en/como-funciona` | Same in English |
| `http://localhost:3000/es/blog` | Sin regresiones |
| `http://localhost:3000/es/servicios` | Sin regresiones |
| `http://localhost:3000/es/equipo` | Sin regresiones |

- [ ] **Step 4: Verify testimonios section behavior**

With Sanity empty: section must be **completely hidden** (not an empty div).
With Sanity data: carrusel renders with prev/next buttons and dots.

- [ ] **Step 5: Verify FAQ fallback**

With Sanity empty: must show the 4 hardcoded FAQs from i18n in Spanish and their English equivalents at `/en/como-funciona`.

---

## Self-Review Checklist

**Spec coverage:**
- [x] `TestimonialItem` type + `testimonialsQuery` (Task 1)
- [x] `FaqItem` type + `faqsQuery` (Task 1)
- [x] `TestimonialsCarousel` client component: dots, prev/next, avatar fallback, stars, quote, origin, service (Task 2)
- [x] `ComoFuncionaTemplate`: Hero, Steps, FAQ (Sanity + fallback), Testimonios (conditional), CTA, CTABanner (Task 3)
- [x] FAQ PortableText rendering with `faqPortableTextComponents` (Task 3)
- [x] FAQ fallback to i18n hardcoded when Sanity empty (Task 3)
- [x] Testimonios section hidden when empty (Task 3)
- [x] `como-funciona/page.tsx` replaced with thin Sanity page (Task 4)
- [x] `Promise.all` parallel fetch (Task 4)
- [x] `revalidate = 0` dev / `3600` prod (Task 4)
- [x] `caseStudy` schema registration verified (Task 5)
- [x] Build passes + local verification (Task 6)
- [x] `isApproved == true` filter in testimonials query (Task 1 — security requirement from schema)
- [x] `isActive == true` filter in FAQ query (Task 1)
- [x] Alt text on testimonial photo: `t.photo.alt || "Foto de {patientName}"` (Task 2)
- [x] Accessibility: `aria-label` on prev/next, `aria-current` on active dot (Task 2)
- [x] Order manual: `order asc` in FAQs query, `publishedAt desc` in testimonials (Task 1)
- [x] ES/EN: `loc = locale as 'es' | 'en'` pattern used throughout (Tasks 2, 3)

**Type consistency check:**
- `TestimonialItem` defined in Task 1, used in Task 2 (`TestimonialsCarousel`) and Task 3 (`ComoFuncionaTemplate`) and Task 4 (page import) ✅
- `FaqItem` defined in Task 1, used in Task 3 and Task 4 ✅
- `testimonialsQuery` defined in Task 1, imported in Task 4 ✅
- `faqsQuery` defined in Task 1, imported in Task 4 ✅
- `ComoFuncionaTemplate` created in Task 3, imported in Task 4 ✅
- `TestimonialsCarousel` created in Task 2, imported in Task 3 ✅
