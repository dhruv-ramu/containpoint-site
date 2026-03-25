#!/usr/bin/env node
/**
 * Captures screenshots of key site sections for the README.
 * Run: npm run screenshots (builds site, serves preview, captures)
 */

import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SCREENSHOTS_DIR = join(__dirname, "..", "docs", "screenshots");
const BASE_URL = process.env.BASE_URL || "http://localhost:4173";

const VIEWPORT = { width: 1280, height: 800 };

async function capture() {
  await mkdir(SCREENSHOTS_DIR, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 2, // retina
  });
  const page = await context.newPage();

  try {
    await page.goto(BASE_URL, { waitUntil: "networkidle" });
    await page.waitForTimeout(500); // allow any animations

    // 1. Hero section (top of page)
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    await page.screenshot({
      path: join(SCREENSHOTS_DIR, "hero.png"),
      fullPage: false,
    });
    console.log("  ✓ hero.png");

    // 2. Sample Dashboard section
    const sampleSection = page.locator("#sample-audit");
    await sampleSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await sampleSection.screenshot({
      path: join(SCREENSHOTS_DIR, "sample-dashboard.png"),
    });
    console.log("  ✓ sample-dashboard.png");

    // Product page (How it works + modules live here, not on home)
    await page.goto(`${BASE_URL}/product`, { waitUntil: "networkidle" });
    await page.waitForTimeout(600);

    // 3. How It Works section
    const howSection = page.locator("#how-it-works");
    await howSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await howSection.screenshot({
      path: join(SCREENSHOTS_DIR, "how-it-works.png"),
    });
    console.log("  ✓ how-it-works.png");

    // 4. Product section
    const productSection = page.locator("#product");
    await productSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await productSection.screenshot({
      path: join(SCREENSHOTS_DIR, "product.png"),
    });
    console.log("  ✓ product.png");
  } finally {
    await browser.close();
  }

  console.log("\nScreenshots saved to docs/screenshots/");
}

capture().catch((err) => {
  console.error("Screenshot capture failed:", err.message);
  process.exit(1);
});
