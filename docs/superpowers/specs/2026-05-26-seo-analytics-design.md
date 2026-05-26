# SEO Dinámico y Configuración de Medición — Design Spec

**Fecha:** 2026-05-26  
**Proyecto:** Allura Healthcare  
**Rama:** feature/sanity-cms-v1

---

## Goal

Conectar SEO dinámico (título, descripción, OG image) desde Sanity a todas las páginas que hoy tienen metadata hardcodeada o solo desde i18n. Inyectar scripts de medición (GA4, GTM, Meta Pixel, etc.) desde un documento Sanity con IDs validados por formato — sin permitir inyección de scripts arbitrarios.

---

## Architecture

Dos sistemas independientes:

1. **SEO / Metadata** — `generateMetadata` de Next.js App Router. El layout raíz provee el fallback global (con OG image). Las páginas de detalle (blog, servicios) ya funcionan correctamente. Las páginas de listado y las legales se actualizan para usar `getSiteSettings()` como fuente de fallback.

2. **Scripts de medición** — Un único Server Component `<AnalyticsScripts>` inyectado en el layout raíz, después del `</body>`. Lee IDs desde Sanity, los valida con regex, renderiza `next/script` solo si el ID es válido. GTM tiene precedencia sobre GA4 directo.

**Stack:** Next.js 14 App Router · Sanity v3 · next/script · ISR (revalidate 3600)

---

## Estado actual

### Ya funciona correctamente — NO se modifica

| Página | generateMetadata | Fuente |
|--------|-----------------|--------|
| Homepage | ✅ | Sanity `homePageQuery` + siteSettings |
| Blog post detail | ✅ | Sanity `blogPostBySlugQuery` con `seo.*` |
| Service detail pages | ✅ | Sanity `serviceBySlugQuery` con `seo.*` |

### Metadata hardcodeada — se conecta a Sanity

| Página | Estado actual | Cambio |
|--------|--------------|--------|
| `layout.tsx` | Hardcodeado, sin OG image | Agregar `getSiteSettings()`, usar `seo.ogImage` como OG fallback |
| `como-funciona/page.tsx` | Solo i18n | Mantener i18n, agregar OG image del fallback global |
| `equipo/page.tsx` | Solo i18n | Ídem |
| `galeria/page.tsx` | Solo i18n | Ídem |
| `blog/page.tsx` | Solo i18n | Ídem |
| `contacto/page.tsx` | Solo i18n | Ídem |
| `politicas-de-privacidad/page.tsx` | Hardcodeado | Usar `getSiteSettings()` para título, descripción y OG |
| `terminos-y-condiciones/page.tsx` | Hardcodeado | Ídem |
| `medical-disclaimer/page.tsx` | Hardcodeado | Ídem |
| `accesibilidad/page.tsx` | Hardcodeado | Ídem |

### Scripts de medición — no implementados

El schema `trackingScripts` existe en Sanity pero no tiene query ni componente frontend. Se implementa completo.

---

## Módulo 1: Ampliar siteSettingsQuery con ogImage

### `src/sanity/lib/queries.ts`

Agregar `ogImage` al bloque `seo` del query:

```groq
seo {
  metaTitle,
  metaDescription,
  ogImage { asset->{ url }, alt }
}
```

Agregar al tipo `SiteSettings`:

```typescript
seo?: {
  metaTitle: { es: string; en: string }
  metaDescription: { es: string; en: string }
  ogImage?: { asset: { url: string }; alt?: string }
}
```

---

## Módulo 2: Layout raíz — generateMetadata con OG image

### `src/app/[locale]/layout.tsx`

La función `generateMetadata` actual es completamente hardcodeada. Se reemplaza por una que lee desde Sanity con fallback:

```typescript
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const settings = await getSiteSettings()
  const isEs = locale === 'es'
  const loc = locale as 'es' | 'en'

  const title = settings?.seo?.metaTitle?.[loc]
    || (isEs ? 'Allura Healthcare — Turismo Médico en Medellín' : 'Allura Healthcare — Medical Tourism in Medellín')

  const description = settings?.seo?.metaDescription?.[loc]
    || (isEs
      ? 'Allura es una marca colombiana de turismo médico en Medellín...'
      : 'Allura is a Colombian medical tourism brand in Medellín...')

  const ogImageUrl = settings?.seo?.ogImage?.asset?.url

  return {
    title,
    description,
    keywords: isEs
      ? ['turismo médico', 'Medellín', 'Colombia', 'salud', 'estética', 'odontología']
      : ['medical tourism', 'Medellín', 'Colombia', 'health', 'aesthetics', 'dentistry'],
    openGraph: {
      title,
      description,
      locale: isEs ? 'es_CO' : 'en_US',
      type: 'website',
      ...(ogImageUrl && {
        images: [{ url: ogImageUrl, width: 1200, height: 630, alt: settings?.seo?.ogImage?.alt || 'Allura Healthcare' }],
      }),
    },
    alternates: {
      canonical: `https://allura.co/${locale}`,
      languages: { 'es-CO': 'https://allura.co/es', en: 'https://allura.co/en' },
    },
  }
}
```

---

## Módulo 3: Páginas de listado — agregar OG image al metadata existente

Las páginas `como-funciona`, `equipo`, `galeria`, `blog`, `contacto` ya tienen `generateMetadata` con título y descripción desde i18n. Se extienden para incluir OG image del fallback global:

**Patrón:**
```typescript
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const [t, settings] = await Promise.all([
    getTranslations({ locale, namespace: 'NAMESPACE' }),
    getSiteSettings(),
  ])
  const ogImageUrl = settings?.seo?.ogImage?.asset?.url
  return {
    title: t('metaTitle'),
    description: t('metaDesc'),
    openGraph: {
      title: t('metaTitle'),
      description: t('metaDesc'),
      ...(ogImageUrl && {
        images: [{ url: ogImageUrl, width: 1200, height: 630 }],
      }),
    },
  }
}
```

Las 5 páginas siguen este mismo patrón — solo cambia el namespace de i18n.

---

## Módulo 4: Páginas legales — metadata desde getSiteSettings

Las 4 páginas legales tienen `generateMetadata` hardcodeado. Se reemplazan con metadata de Sanity con fallback:

**Patrón:**
```typescript
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const settings = await getSiteSettings()
  const isEs = locale === 'es'
  const loc = locale as 'es' | 'en'
  const siteName = settings?.siteName || 'Allura Healthcare'
  const ogImageUrl = settings?.seo?.ogImage?.asset?.url
  return {
    title: `${PAGE_TITLE[loc]} | ${siteName}`,
    description: settings?.seo?.metaDescription?.[loc] || FALLBACK_DESCRIPTION[loc],
    robots: { index: false, follow: false },
    openGraph: {
      title: `${PAGE_TITLE[loc]} | ${siteName}`,
      ...(ogImageUrl && { images: [{ url: ogImageUrl, width: 1200, height: 630 }] }),
    },
  }
}
```

Cada página legal tiene su `PAGE_TITLE` definido inline (no en Sanity — es texto legal fijo).

`robots: { index: false, follow: false }` en páginas legales — no deben indexarse.

---

## Módulo 5: trackingScripts schema — eliminar campos libres

### `src/sanity/schemaTypes/singletons/trackingScripts.ts`

Eliminar los 3 campos de scripts libres:
- `customHeadScripts`
- `customBodyStartScripts`  
- `customBodyEndScripts`

Eliminar el grupo `custom` de la lista de grupos.

Conservar todos los demás campos y grupos (`analytics`, `ads`, `heatmaps`, `cookies`).

---

## Módulo 6: trackingScriptsQuery y tipo

### `src/sanity/lib/queries.ts`

```typescript
export const trackingScriptsQuery = groq`
  *[_type == "trackingScripts"][0] {
    googleAnalyticsId,
    gtmContainerId,
    googleSearchConsoleVerification,
    metaPixelId,
    googleAdsId,
    tiktokPixelId,
    hotjarId,
    clarityId,
    environment
  }
`

export interface TrackingScripts {
  googleAnalyticsId?: string
  gtmContainerId?: string
  googleSearchConsoleVerification?: string
  metaPixelId?: string
  googleAdsId?: string
  tiktokPixelId?: string
  hotjarId?: string
  clarityId?: string
  environment?: 'production' | 'staging' | 'development'
}
```

---

## Módulo 7: getTrackingScripts helper

### `src/lib/getTrackingScripts.ts`

```typescript
import { client } from '@/sanity/lib/client'
import { trackingScriptsQuery } from '@/sanity/lib/queries'
import type { TrackingScripts } from '@/sanity/lib/queries'

const revalidate = process.env.NODE_ENV === 'development' ? 0 : 3600

export async function getTrackingScripts(): Promise<TrackingScripts | null> {
  return client.fetch<TrackingScripts>(
    trackingScriptsQuery,
    {},
    { next: { revalidate } }
  )
}
```

---

## Módulo 8: AnalyticsScripts Server Component

### `src/components/analytics/AnalyticsScripts.tsx`

Server Component — no `"use client"`. Valida cada ID con regex antes de renderizar.

**Validaciones:**

| Campo | Regex |
|-------|-------|
| `googleAnalyticsId` | `/^G-[A-Z0-9]{4,12}$/` |
| `gtmContainerId` | `/^GTM-[A-Z0-9]{4,8}$/` |
| `metaPixelId` | `/^\d{10,20}$/` |
| `googleAdsId` | `/^AW-[0-9]{7,12}$/` |
| `tiktokPixelId` | `/^\d{15,25}$/` |
| `hotjarId` | `/^\d{4,10}$/` |
| `clarityId` | `/^[a-z0-9]{8,15}$/` |
| `googleSearchConsoleVerification` | Solo se usa en `generateMetadata`, no como script |

**Estrategia de carga:**

| Script | `next/script` strategy |
|--------|----------------------|
| GTM | `afterInteractive` |
| GA4 (solo si no hay GTM) | `afterInteractive` |
| Meta Pixel | `afterInteractive` |
| Google Ads | `afterInteractive` |
| TikTok Pixel | `afterInteractive` |
| Hotjar | `lazyOnload` |
| Clarity | `lazyOnload` |

**Regla anti-duplicado:** Si `gtmContainerId` es válido, GA4 directo NO se renderiza aunque `googleAnalyticsId` también exista — GTM lo carga internamente.

**Regla de entorno:** Si `environment === 'development'`, no se renderiza ningún script.

**Interfaz del componente:**
```typescript
// No props — fetcha sus propios datos internamente
export async function AnalyticsScripts() { ... }
```

---

## Módulo 9: Inyección en layout raíz

### `src/app/[locale]/layout.tsx`

```typescript
import { AnalyticsScripts } from '@/components/analytics/AnalyticsScripts'

// Dentro del JSX, antes del cierre de </body>:
<AnalyticsScripts />
```

`AnalyticsScripts` es un Server Component — no afecta el bundle del cliente.

---

## Google Search Console

`googleSearchConsoleVerification` no es un script — es un meta tag. Se incluye en `generateMetadata` del layout raíz:

```typescript
verification: {
  google: settings?.googleSearchConsoleVerification || undefined,
}
```

Para esto, `getSiteSettings()` no es suficiente — se necesita `getTrackingScripts()` también en `generateMetadata` del layout. Ambos se llaman en paralelo con `Promise.all`.

---

## Seguridad

- Los 3 campos de scripts libres eliminados del schema → no existe el vector de inyección
- Cada ID validado por regex en el frontend antes de renderizarse
- IDs inválidos → script no se renderiza, sin errores visibles
- `nodemailer` corre solo en servidor — no relacionado con este módulo
- `AnalyticsScripts` es Server Component → credenciales de Sanity nunca en el bundle del cliente

---

## File Structure

### Archivos a crear
```
src/lib/getTrackingScripts.ts
src/components/analytics/AnalyticsScripts.tsx
```

### Archivos a modificar
```
src/sanity/schemaTypes/singletons/trackingScripts.ts    — eliminar grupo custom + 3 campos de scripts libres
src/sanity/lib/queries.ts                               — agregar trackingScriptsQuery + TrackingScripts type; ampliar siteSettingsQuery con ogImage; ampliar SiteSettings type
src/lib/getSiteSettings.ts                              — no cambia (tipo actualizado en queries.ts)
src/app/[locale]/layout.tsx                             — generateMetadata desde Sanity + AnalyticsScripts + GSC verification
src/app/[locale]/como-funciona/page.tsx                 — agregar OG image al metadata existente
src/app/[locale]/equipo/page.tsx                        — ídem
src/app/[locale]/galeria/page.tsx                       — ídem
src/app/[locale]/blog/page.tsx                          — ídem
src/app/[locale]/contacto/page.tsx                      — ídem
src/app/[locale]/politicas-de-privacidad/page.tsx       — generateMetadata desde getSiteSettings
src/app/[locale]/terminos-y-condiciones/page.tsx        — ídem
src/app/[locale]/medical-disclaimer/page.tsx            — ídem
src/app/[locale]/accesibilidad/page.tsx                 — ídem
```

---

## Dónde se configura cada cosa

| Qué | Dónde en Sanity | Dónde en código (fallback) |
|-----|----------------|---------------------------|
| Título global | `siteSettings → seo → metaTitle` | Hardcoded en `layout.tsx` |
| Descripción global | `siteSettings → seo → metaDescription` | Hardcoded en `layout.tsx` |
| OG Image global | `siteSettings → seo → ogImage` | Sin imagen si no está configurada |
| Título/descripción por blog post | `blogPost → seo → metaTitle/metaDescription` | Título del post, excerpt |
| Título/descripción por servicio | `service → seo → metaTitle/metaDescription` | Título del servicio |
| GA4 ID | `trackingScripts → googleAnalyticsId` | No se carga si no está |
| GTM ID | `trackingScripts → gtmContainerId` | No se carga si no está |
| Meta Pixel ID | `trackingScripts → metaPixelId` | No se carga si no está |
| Google Ads ID | `trackingScripts → googleAdsId` | No se carga si no está |
| TikTok Pixel ID | `trackingScripts → tiktokPixelId` | No se carga si no está |
| Hotjar ID | `trackingScripts → hotjarId` | No se carga si no está |
| Clarity ID | `trackingScripts → clarityId` | No se carga si no está |
| GSC verification | `trackingScripts → googleSearchConsoleVerification` | No se incluye si no está |

---

## Out of Scope

- Cookie consent / GDPR banner (campo existe en schema pero no se implementa)
- CSP headers
- Rate limiting
- Structured data / JSON-LD
- Sitemap dinámico
