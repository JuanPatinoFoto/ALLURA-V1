const { chromium } = require('playwright');
const path = require('path');

const images = [
  'allura-healthcare-seguimiento-remoto-internacional.jpg',
  'allura-healthcare-medico-paciente.jpg',
  'allura-healthcare-doctor-paciente.jpg',
  'allura-healthcare-planificacion-digital-3d.jpg',
  'allura-healthcare-escaneo-digital-3d.jpg',
  'medellin-turismo-medico-paciente-bienestar-allura-healthcare_edited.jpg',
  'allura-healthcare-como-funciona-proceso-acompanamiento_edited.jpg',
  'allura-healthcare-como-funciona-proceso-acompanamiento_edited_edited.jpg',
  'equipo-de-especialistas-allura1.jpg',
  'allura-healthcare-rejuvenecimiento-facial.jpg',
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1200, height: 800 });

  const html = `
  <html>
  <head><style>
    body { background: #eaeeef; margin: 0; padding: 20px; font-family: sans-serif; }
    .grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }
    .card { background: white; border-radius: 12px; overflow: hidden; }
    .card img { width: 100%; height: 180px; object-fit: cover; }
    .card p { padding: 8px; font-size: 11px; color: #051c33; word-break: break-all; margin: 0; }
  </style></head>
  <body>
  <div class="grid">
    ${images.map(img => `
      <div class="card">
        <img src="file:///C:/Users/publi/Desktop/ALLURA/public/images/imagenes_web/${img}" />
        <p>${img.replace('allura-healthcare-', '').replace('.jpg','')}</p>
      </div>
    `).join('')}
  </div>
  </body>
  </html>`;

  await page.setContent(html);
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'preview_images.png', fullPage: true });
  await browser.close();
  console.log('Done. preview_images.png saved.');
})();
