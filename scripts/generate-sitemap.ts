import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { ARTICLES } from "../src/data/articles.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE = "https://containpoint.com";

const STATIC_PATHS = [
  "/",
  "/product",
  "/pricing",
  "/for-consultants",
  "/book-demo",
  "/resources",
  "/pledge",
  "/terms",
  "/privacy",
] as const;

/** ISO date (YYYY-MM-DD) for marketing/legal pages when you ship SEO changes. */
const STATIC_LASTMOD = "2026-03-24";

function urlEntry(loc: string, lastmod: string) {
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
}

function main() {
  const lines: string[] = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ];

  for (const p of STATIC_PATHS) {
    lines.push(urlEntry(`${SITE}${p}`, STATIC_LASTMOD));
  }

  for (const a of ARTICLES) {
    lines.push(urlEntry(`${SITE}/resources/${a.slug}`, a.publishedAt));
  }

  lines.push("</urlset>");
  const out = join(__dirname, "../public/sitemap.xml");
  writeFileSync(out, `${lines.join("\n")}\n`, "utf8");
  console.log(`Wrote ${out}`);
}

main();
