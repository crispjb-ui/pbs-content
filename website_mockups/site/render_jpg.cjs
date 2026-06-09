const { chromium } = require('playwright');
const path = require('path');
const exe = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const here = __dirname;
const pages = ['index', 'library', 'toolkit', 'solutions', 'about'];
const out = path.join(here, 'renders');
(async () => {
  const b = await chromium.launch({ executablePath: exe, args: ['--no-sandbox'] });
  for (const name of pages) {
    const url = 'file://' + path.join(here, name + '.html');
    let pg = await b.newPage({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 1 });
    await pg.goto(url, { waitUntil: 'networkidle' });
    await pg.screenshot({ path: path.join(out, `${name}_desktop.jpg`), fullPage: true, type: 'jpeg', quality: 72 });
    await pg.close();
    pg = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1.5, isMobile: true, hasTouch: true });
    await pg.goto(url, { waitUntil: 'networkidle' });
    await pg.screenshot({ path: path.join(out, `${name}_mobile.jpg`), fullPage: true, type: 'jpeg', quality: 72 });
    await pg.close();
    console.log('jpg', name);
  }
  await b.close();
})().catch(e => { console.error('FAIL', e.message); process.exit(1); });
