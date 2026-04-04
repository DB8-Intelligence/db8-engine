import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const CF_COOKIE = '__cf_bm=j297a3pUxMCohyjr3sgAHbc.g7eR5Wug34FVSTIUryU-1775266584.692949-1.0.1.1-nFyNkPpcDbFjnwF2UiNvKE1zTwtAGiBX3MbOxP403_yDE2niGu.8iY_QonyTIBiPN9gcDILSqyc7QfJCWXvYPptYZJPRtzqxdu5DYYs6B7vS8vMVAs2LpP6uTHa_GR5c';
const FBP_COOKIE = 'fb.1.1775264331708.382277383245884182';

const BASE_URL = 'https://criadordecriativos.app';

const ROUTES = [
  '/app',
  '/app/generate-creatives',
  '/app/generate-creative-images',
  '/app/generate-thumbnail-image',
  '/app/generate-carousel-images',
  '/app/generate-video',
  '/app/generate-audio-effect',
  '/historico',
  '/aprenda',
  '/profile',
  '/admin',
  '/try',
  '/landing'
];

async function main() {
  const screenshotDir = './screenshots';
  fs.mkdirSync(screenshotDir, { recursive: true });

  const executablePath = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

  const browser = await chromium.launch({
    headless: false,
    executablePath,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-blink-features=AutomationControlled',
      '--headless=new'
    ]
  });

  const context = await browser.newContext({
    viewport: { width: 1366, height: 768 },
    ignoreHTTPSErrors: true,
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
  });

  // Inject Cloudflare cookies
  await context.addCookies([
    {
      name: '__cf_bm',
      value: CF_COOKIE.split('=').slice(1).join('='),
      domain: '.criadordecriativos.app',
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'None'
    },
    {
      name: '_fbp',
      value: FBP_COOKIE,
      domain: '.criadordecriativos.app',
      path: '/',
      secure: true,
      sameSite: 'None'
    }
  ]);

  // Anti-bot script
  await context.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', { get: () => false });
    window.chrome = { runtime: {} };
  });

  const page = await context.newPage();

  for (const route of ROUTES) {
    const url = BASE_URL + route;
    const filename = route.replace(/\//g, '_').replace(/^_/, '') || 'home';
    const ssPath = path.join(screenshotDir, `${filename}.png`);

    console.log(`[Screenshot] Capturing: ${url}`);
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.waitForTimeout(3000);
      await page.screenshot({ path: ssPath, fullPage: false });
      console.log(`[Screenshot]   -> Saved: ${ssPath}`);
    } catch (err) {
      console.warn(`[Screenshot]   -> Failed: ${err.message.slice(0, 100)}`);
    }
  }

  await browser.close();
  console.log('\n[Screenshot] Done.');
}

main().catch(err => {
  console.error(`[FATAL] ${err.message}`);
  process.exit(1);
});
