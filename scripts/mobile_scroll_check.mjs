import fs from "node:fs";
import path from "node:path";

const [,, baseUrl, outputPath, pagesFile] = process.argv;

if (!baseUrl || !outputPath || !pagesFile) {
  console.error("Usage: node scripts/mobile_scroll_check.mjs <baseUrl> <outputPath> <pagesFile>");
  process.exit(1);
}

let chromium;
let devices;
try {
  const playwright = await import("playwright");
  chromium = playwright.chromium;
  devices = playwright.devices;
} catch (error) {
  console.error(`PLAYWRIGHT_IMPORT_ERROR: ${error instanceof Error ? error.message : String(error)}`);
  process.exit(2);
}

const pages = fs
  .readFileSync(pagesFile, "utf8")
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean);

const outDir = path.dirname(outputPath);
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  ...(devices["iPhone 13"] ?? {}),
  viewport: { width: 390, height: 844 },
});

const results = [];

for (const route of pages) {
  const url = new URL(route, baseUrl).toString();
  const slug = route === "/" ? "home" : route.replace(/^\//, "").replace(/[\/?:&=#]+/g, "_");
  const screenshotPath = path.join(outDir, `mobile_${slug}.png`);

  const page = await context.newPage();
  let navigationError = null;

  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 35000 });
  } catch (error) {
    navigationError = error instanceof Error ? error.message : String(error);
  }

  await page.waitForTimeout(350);

  const metrics = navigationError
    ? null
    : await page.evaluate(() => {
        const doc = document.documentElement;
        const body = document.body;
        const viewportWidth = document.documentElement?.clientWidth || window.innerWidth;
        const rootScrollWidth = doc?.scrollWidth ?? 0;
        const bodyScrollWidth = body?.scrollWidth ?? 0;
        const scrollWidth = Math.max(rootScrollWidth, bodyScrollWidth);

        const offenders = [];
        for (const el of Array.from(document.querySelectorAll("body *"))) {
          const rect = el.getBoundingClientRect();
          if (!Number.isFinite(rect.width) || rect.width <= 0 || rect.height <= 0) continue;

          const overflowRight = rect.right - viewportWidth;
          const overflowLeft = -rect.left;
          if (rect.width > viewportWidth + 1 || overflowRight > 1 || overflowLeft > 1) {
            offenders.push({
              tag: el.tagName.toLowerCase(),
              className: (el.className || "").toString().slice(0, 180),
              width: Number(rect.width.toFixed(2)),
              left: Number(rect.left.toFixed(2)),
              right: Number(rect.right.toFixed(2)),
              overflowRight: Number(overflowRight.toFixed(2)),
            });
          }
          if (offenders.length >= 20) break;
        }

        return {
          viewportWidth,
          scrollWidth,
          htmlOverflowX: getComputedStyle(doc).overflowX,
          bodyOverflowX: body ? getComputedStyle(body).overflowX : "",
          offenders,
        };
      });

  if (!navigationError) {
    await page.screenshot({ path: screenshotPath, fullPage: true });
  }

  results.push({
    route,
    url,
    status: navigationError
      ? "ERROR"
      : metrics.scrollWidth <= metrics.viewportWidth + 1
        ? "PASS"
        : "FAIL",
    error: navigationError,
    screenshot: navigationError ? null : path.basename(screenshotPath),
    ...(metrics ?? {
      viewportWidth: null,
      scrollWidth: null,
      htmlOverflowX: null,
      bodyOverflowX: null,
      offenders: [],
    }),
  });

  await page.close();
}

await context.close();
await browser.close();

fs.writeFileSync(outputPath, JSON.stringify({ baseUrl, generatedAt: new Date().toISOString(), results }, null, 2));
