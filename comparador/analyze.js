// Uses npx playwright to analyze both sites for conversion metrics
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const PROD = 'https://www.allurahealthcare.com';
const LOCAL = 'http://localhost:3000';

async function analyze(browser, baseUrl, slug, pagePath) {
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });

  const consoleErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });

  try {
    await page.goto(baseUrl + pagePath, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);

    const data = await page.evaluate(() => {
      const getText = sel => [...document.querySelectorAll(sel)].map(e => e.innerText?.trim()).filter(Boolean);
      const getHref = sel => [...document.querySelectorAll(sel)].map(e => ({ text: e.innerText?.trim(), href: e.getAttribute('href') })).filter(e => e.text);
      const getMeta = name => document.querySelector(`meta[name="${name}"], meta[property="${name}"]`)?.getAttribute('content') || '';

      // --- Conversion signals ---
      const allElements = [...document.querySelectorAll('a, button')];
      const ctaKeywords = ['whatsapp','wa.me','contacto','reserva','cita','consulta','hablar','llamar','agendar','appointment','book','solicitar','conocer','ver más','ver servicios','descubrir'];

      const allCtas = allElements.filter(el => {
        const txt = (el.innerText || '').toLowerCase();
        const href = (el.getAttribute('href') || '').toLowerCase();
        return ctaKeywords.some(k => txt.includes(k) || href.includes(k));
      });

      const ctaAboveFold = allElements.filter(el => {
        const r = el.getBoundingClientRect();
        return r.top >= 0 && r.top < 950 && (el.innerText?.trim().length > 0);
      }).filter(el => {
        const txt = (el.innerText || '').toLowerCase();
        const href = (el.getAttribute('href') || '').toLowerCase();
        return ctaKeywords.some(k => txt.includes(k) || href.includes(k));
      });

      // Sticky/fixed header
      const headerEl = document.querySelector('header');
      const headerPos = headerEl ? window.getComputedStyle(headerEl).position : 'none';

      // Social proof
      const testimonials = [...document.querySelectorAll('[class*="testimon"],[class*="review"],[class*="opinion"],[class*="pacien"]')];
      const teamSection = [...document.querySelectorAll('[class*="team"],[class*="equipo"],[class*="doctor"],[class*="médico"],[class*="medico"]')];
      const beforeAfter = [...document.querySelectorAll('[class*="before"],[class*="after"],[class*="antes"],[class*="despues"],[class*="resultado"]')];

      // Gallery
      const images = [...document.querySelectorAll('img')].filter(img => img.naturalWidth > 100 || img.width > 100);

      // Forms
      const forms = [...document.querySelectorAll('form')];
      const formFields = [...document.querySelectorAll('input:not([type="hidden"]),textarea,select')];

      // WhatsApp
      const waLinks = [...document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"]')];

      // Phone
      const telLinks = [...document.querySelectorAll('a[href^="tel:"]')];

      // Videos
      const videos = [...document.querySelectorAll('video,iframe[src*="youtube"],iframe[src*="vimeo"],iframe[src*="youtu.be"]')];

      // FAQ
      const faq = [...document.querySelectorAll('[class*="faq"],[class*="pregunta"],details,[class*="accordion"],[class*="collapse"]')];

      // Pricing
      const pricing = [...document.querySelectorAll('[class*="price"],[class*="precio"],[class*="tarif"],[class*="costo"],[class*="valor"]')];

      // Trust
      const trust = [...document.querySelectorAll('[class*="trust"],[class*="certif"],[class*="award"],[class*="partner"],[class*="logo-"],[class*="brand"]')];

      // Float/sticky CTA
      const floatingEl = [...document.querySelectorAll('[class*="float"],[class*="sticky"],[class*="fixed"]')].filter(el => {
        const pos = window.getComputedStyle(el).position;
        return pos === 'fixed' || pos === 'sticky';
      });

      return {
        // SEO
        title: document.title,
        metaDesc: getMeta('description'),
        ogTitle: getMeta('og:title'),
        ogImage: getMeta('og:image'),
        canonical: document.querySelector('link[rel="canonical"]')?.href || '',
        h1: getText('h1'),
        h2: getText('h2'),
        h3: getText('h3').slice(0,10),

        // Content
        heroHeadline: getText('h1')[0] || '',
        heroSubtext: (() => {
          const h1 = document.querySelector('h1');
          if (!h1) return '';
          let next = h1.nextElementSibling;
          return next?.innerText?.trim() || '';
        })(),

        // Conversion
        ctaAboveFoldTexts: ctaAboveFold.map(e => e.innerText?.trim()).filter(Boolean).slice(0, 8),
        ctaAboveFoldCount: ctaAboveFold.length,
        allCtaTexts: allCtas.map(e => e.innerText?.trim()).filter(Boolean).slice(0, 15),
        allCtaCount: allCtas.length,

        // Header
        headerPosition: headerPos,
        hasStickyHeader: headerPos === 'sticky' || headerPos === 'fixed',

        // Social proof
        hasTestimonials: testimonials.length > 0,
        testimonialCount: testimonials.length,
        hasTeamSection: teamSection.length > 0,
        hasBeforeAfter: beforeAfter.length > 0,

        // Media
        imageCount: images.length,
        hasVideo: videos.length > 0,
        videoCount: videos.length,

        // Contact
        hasForm: forms.length > 0,
        formFieldCount: formFields.length,
        waLinkCount: waLinks.length,
        waLinkTexts: waLinks.map(a => a.innerText?.trim()).filter(Boolean).slice(0,5),
        hasPhone: telLinks.length > 0,
        phoneNumbers: telLinks.map(a => a.href.replace('tel:','')).slice(0,3),

        // Funnel extras
        hasFaq: faq.length > 0,
        hasPricing: pricing.length > 0,
        hasTrustBadges: trust.length > 0,
        hasFloatingCta: floatingEl.length > 0,
        floatingElCount: floatingEl.length,

        // Sections
        sectionCount: document.querySelectorAll('section').length,
        navLinks: getHref('nav a').slice(0, 15),

        // All links for broken link check
        internalLinks: getHref('a[href^="/"]').map(l => l.href).slice(0, 30),
      };
    });

    return { ...data, consoleErrors: consoleErrors.slice(0, 10) };
  } catch(e) {
    return { error: e.message };
  } finally {
    await page.close();
  }
}

(async () => {
  const browser = await chromium.launch({ headless: true });

  const routes = [
    { slug: 'home', path: '/' },
    { slug: 'servicios', path: '/servicios' },
    { slug: 'contacto', path: '/contacto' },
    { slug: 'nosotros', path: '/nosotros' },
    { slug: 'como-funciona', path: '/como-funciona' },
  ];

  const result = { prod: {}, local: {} };

  for (const r of routes) {
    console.log(`Analyzing ${r.slug}...`);
    result.prod[r.slug] = await analyze(browser, PROD, r.slug, r.path);
    result.local[r.slug] = await analyze(browser, LOCAL, r.slug, r.path);
  }

  await browser.close();

  fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(result, null, 2));
  console.log('✅ data.json saved');
})();
