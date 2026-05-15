const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });

  console.log('Navigating to live site...');
  await page.goto('https://www.allurahealthcare.com/', { waitUntil: 'load', timeout: 60000 });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'screenshot_home_full.png', fullPage: true });
  console.log('Full page screenshot saved.');

  // Also screenshot the "como-funciona" page if it exists
  try {
    await page.goto('https://www.allurahealthcare.com/como-funciona', { waitUntil: 'load', timeout: 30000 });
    await page.screenshot({ path: 'screenshot_como_funciona.png', fullPage: true });
    console.log('Como funciona page screenshot saved.');
  } catch(e) {
    console.log('No como-funciona page:', e.message);
  }

  await browser.close();
  console.log('Done.');
})();
