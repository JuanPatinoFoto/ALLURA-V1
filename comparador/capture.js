const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const PROD = 'https://www.allurahealthcare.com';
const LOCAL = 'http://localhost:3000';
const OUT = path.join(__dirname, 'screenshots');

const pages = [
  { slug: 'home', path: '/' },
  { slug: 'servicios', path: '/servicios' },
  { slug: 'contacto', path: '/contacto' },
  { slug: 'nosotros', path: '/nosotros' },
  { slug: 'como-funciona', path: '/como-funciona' },
];

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 375, height: 812 },
];

async function captureScreenshot(page, url, filename) {
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: filename, fullPage: true });
    console.log('OK:', filename);
    return true;
  } catch (e) {
    console.log('ERROR:', url, e.message);
    return false;
  }
}

async function getMetadata(page, url) {
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    return await page.evaluate(() => {
      const getMeta = (name) => {
        const el = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
        return el ? el.getAttribute('content') : null;
      };
      const getAll = (sel) => [...document.querySelectorAll(sel)].map(e => e.innerText?.trim()).filter(Boolean);
      const getAllSrc = (sel) => [...document.querySelectorAll(sel)].map(e => e.src || e.href).filter(Boolean);

      return {
        title: document.title,
        metaDescription: getMeta('description'),
        h1: getAll('h1'),
        h2: getAll('h2'),
        ctaButtons: getAll('a[href*="whatsapp"], a[href*="wa.me"], button').slice(0, 20),
        ctaLinks: [...document.querySelectorAll('a')].map(a => ({ text: a.innerText?.trim(), href: a.href })).filter(a => a.text && a.text.length > 1).slice(0, 40),
        hasContactForm: !!document.querySelector('form'),
        formFields: getAll('input, textarea, select').slice(0, 20),
        whatsappLinks: getAllSrc('a[href*="wa.me"], a[href*="whatsapp"]'),
        phoneLinks: [...document.querySelectorAll('a[href^="tel:"]')].map(a => a.href),
        emailLinks: [...document.querySelectorAll('a[href^="mailto:"]')].map(a => a.href),
        heroText: document.querySelector('h1')?.innerText?.trim() || '',
        sections: getAll('section h2, section h3').slice(0, 20),
        trustSignals: getAll('.trust, [class*="trust"], [class*="review"], [class*="testimon"], [class*="certif"]').slice(0, 10),
        socialLinks: [...document.querySelectorAll('a[href*="instagram"], a[href*="facebook"], a[href*="linkedin"], a[href*="tiktok"]')].map(a => ({ text: a.innerText?.trim(), href: a.href })),
        prices: getAll('[class*="price"], [class*="precio"]').slice(0, 10),
        consoleErrors: [],
        ogTitle: getMeta('og:title'),
        ogDescription: getMeta('og:description'),
        ogImage: getMeta('og:image'),
        canonicalUrl: document.querySelector('link[rel="canonical"]')?.href,
      };
    });
  } catch (e) {
    console.log('Metadata error:', url, e.message);
    return null;
  }
}

async function getConversionAudit(page, url) {
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(1500);
    return await page.evaluate(() => {
      // Count CTAs above the fold (approx 900px)
      const allLinks = [...document.querySelectorAll('a, button')];
      const aboveFold = allLinks.filter(el => {
        const r = el.getBoundingClientRect();
        return r.top >= 0 && r.top < 900 && el.innerText?.trim().length > 0;
      });
      const ctaKeywords = ['whatsapp', 'contacto', 'reserva', 'cita', 'consulta', 'hablar', 'llamar', 'agendar', 'appointment', 'book', 'contact', 'chat', 'solicitar'];
      const ctasAboveFold = aboveFold.filter(el => {
        const txt = el.innerText?.toLowerCase() || '';
        const href = el.href?.toLowerCase() || '';
        return ctaKeywords.some(k => txt.includes(k) || href.includes(k));
      });

      // Check sticky header
      const header = document.querySelector('header, nav, [class*="header"], [class*="nav"]');
      const isSticky = header ? (window.getComputedStyle(header).position === 'sticky' || window.getComputedStyle(header).position === 'fixed') : false;

      // Count total sections
      const sections = document.querySelectorAll('section, [class*="section"]');

      // Testimonials
      const testimonials = document.querySelectorAll('[class*="testimon"], [class*="review"], [class*="opinion"]');

      // Gallery / before-after
      const gallery = document.querySelectorAll('[class*="gallery"], [class*="galeria"], [class*="before"], [class*="after"], [class*="antes"], [class*="despues"]');

      // Pricing
      const pricing = document.querySelectorAll('[class*="price"], [class*="precio"], [class*="tarif"]');

      // Trust badges
      const trust = document.querySelectorAll('[class*="trust"], [class*="certif"], [class*="award"], [class*="partner"]');

      // FAQ
      const faq = document.querySelectorAll('[class*="faq"], [class*="pregunta"], details, [class*="accordion"]');

      // Video
      const videos = document.querySelectorAll('video, iframe[src*="youtube"], iframe[src*="vimeo"]');

      // Chat/floating
      const floatingCta = document.querySelectorAll('[class*="float"], [class*="sticky-cta"], [class*="whatsapp-float"]');

      return {
        ctasAboveFold: ctasAboveFold.map(el => el.innerText?.trim()).slice(0, 10),
        ctasAboveFoldCount: ctasAboveFold.length,
        hasStickyHeader: isSticky,
        totalSections: sections.length,
        hasTestimonials: testimonials.length > 0,
        testimonialCount: testimonials.length,
        hasGallery: gallery.length > 0,
        hasPricing: pricing.length > 0,
        hasTrustBadges: trust.length > 0,
        hasFaq: faq.length > 0,
        hasVideo: videos.length > 0,
        hasFloatingCta: floatingCta.length > 0,
        whatsappFloatCount: document.querySelectorAll('a[href*="wa.me"]').length,
      };
    });
  } catch (e) {
    return null;
  }
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const data = { prod: {}, local: {} };

  // Desktop viewport for metadata + conversion audit
  const desktopCtx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const desktopPage = await desktopCtx.newPage();

  console.log('\n=== Capturando metadata y auditoría de conversión ===');
  for (const p of pages) {
    console.log(`\n--- ${p.slug} ---`);
    data.prod[p.slug] = {
      meta: await getMetadata(desktopPage, PROD + p.path),
      conversion: await getConversionAudit(desktopPage, PROD + p.path),
    };
    data.local[p.slug] = {
      meta: await getMetadata(desktopPage, LOCAL + p.path),
      conversion: await getConversionAudit(desktopPage, LOCAL + p.path),
    };
  }
  await desktopCtx.close();

  // Screenshots
  console.log('\n=== Tomando screenshots ===');
  for (const vp of viewports) {
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const pg = await ctx.newPage();
    for (const p of pages) {
      await captureScreenshot(pg, PROD + p.path, path.join(OUT, `prod_${p.slug}_${vp.name}.png`));
      await captureScreenshot(pg, LOCAL + p.path, path.join(OUT, `local_${p.slug}_${vp.name}.png`));
    }
    await ctx.close();
  }

  await browser.close();

  fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(data, null, 2));
  console.log('\n✅ data.json guardado');
})();
