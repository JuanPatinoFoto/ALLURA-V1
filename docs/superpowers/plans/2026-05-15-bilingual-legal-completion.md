# Bilingual Legal Completion — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Complete the EN/ES bilingual implementation by adding the two missing legal pages (Terms & Conditions, Medical Disclaimer) and wiring their Footer links.

**Architecture:** All pages already use next-intl with `[locale]` routing and locale-aware `Link` from `@/navigation`. New legal pages follow the existing `isEn` inline pattern used by `politicas-de-privacidad` and `accesibilidad`. Footer reads from `messages/*.json` via `getTranslations("footer")`.

**Tech Stack:** Next.js 14 App Router, next-intl, TypeScript, Tailwind CSS

**Diagnosis — what is already done (do NOT re-implement):**
- `/en/equipo`, `/en/nosotros`, `/en/contacto` — fully translated via `messages/en.json` ✓
- `/en/politicas-de-privacidad`, `/en/accesibilidad` — bilingual with `isEn` ✓
- `Footer.tsx` — locale-aware, reads from `footer` namespace ✓
- `LanguageSwitcher.tsx` — ES|EN toggle in desktop + mobile header ✓

---

### Task 1: Add legal keys to messages

**Files:**
- Modify: `messages/en.json` — add `footer.legal.terms` and `footer.legal.medicalDisclaimer`
- Modify: `messages/es.json` — add the same keys in Spanish

- [ ] **Step 1:** Add to `messages/en.json` inside `"footer" > "legal"`:
```json
"terms": "Terms & Conditions",
"medicalDisclaimer": "Medical Disclaimer"
```

- [ ] **Step 2:** Add to `messages/es.json` inside `"footer" > "legal"`:
```json
"terms": "Términos y Condiciones",
"medicalDisclaimer": "Aviso Médico"
```

---

### Task 2: Create Terms & Conditions page

**Files:**
- Create: `src/app/[locale]/terminos-y-condiciones/page.tsx`

- [ ] **Step 1:** Create the bilingual page following the `isEn` pattern from `politicas-de-privacidad/page.tsx`.

- [ ] **Step 2:** Verify route exists at `/es/terminos-y-condiciones` and `/en/terminos-y-condiciones`.

---

### Task 3: Create Medical Disclaimer page

**Files:**
- Create: `src/app/[locale]/medical-disclaimer/page.tsx`

- [ ] **Step 1:** Create the bilingual page following the `isEn` pattern.

- [ ] **Step 2:** Verify route exists at `/es/medical-disclaimer` and `/en/medical-disclaimer`.

---

### Task 4: Update Footer with new legal links

**Files:**
- Modify: `src/components/layout/Footer.tsx` (lines 147–160, bottom bar legal links)

- [ ] **Step 1:** Add two new `<Link>` entries in the bottom bar alongside existing privacy + accessibility links.
- [ ] **Step 2:** Run `npx tsc --noEmit` — expect zero errors.
- [ ] **Step 3:** Run `npm run build` — expect all 4 new routes to appear (2 locales × 2 pages).

---

### Task 5: Git commit

- [ ] `git add -A && git commit -m "feat(i18n): add T&C + Medical Disclaimer pages and footer legal links"`
