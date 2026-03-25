import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { ARTICLES } from "../src/data/articles.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE = "https://containpoint.com";

/** Fresh lastmod for marketing/legal URLs on each build. */
const BUILD_DATE = new Date().toISOString().slice(0, 10);

type StaticEntry = {
  path: string;
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: string;
};

const STATIC_ENTRIES: StaticEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/product", changefreq: "monthly", priority: "0.9" },
  { path: "/pricing", changefreq: "monthly", priority: "0.9" },
  { path: "/for-consultants", changefreq: "monthly", priority: "0.85" },
  { path: "/book-demo", changefreq: "monthly", priority: "0.9" },
  { path: "/resources", changefreq: "weekly", priority: "0.9" },
  { path: "/pledge", changefreq: "monthly", priority: "0.6" },
  { path: "/terms", changefreq: "yearly", priority: "0.4" },
  { path: "/privacy", changefreq: "yearly", priority: "0.4" },
];

function escapeLoc(loc: string): string {
  return loc.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

function urlEntry(
  loc: string,
  lastmod: string,
  changefreq: string,
  priority: string
): string {
  return [
    "  <url>",
    `    <loc>${escapeLoc(loc)}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    "  </url>",
  ].join("\n");
}

function main() {
  const lines: string[] = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ];

  for (const e of STATIC_ENTRIES) {
    lines.push(urlEntry(`${SITE}${e.path}`, BUILD_DATE, e.changefreq, e.priority));
  }

  for (const a of ARTICLES) {
    lines.push(
      urlEntry(`${SITE}/resources/${a.slug}`, a.publishedAt, "monthly", "0.75")
    );
  }

  lines.push("</urlset>");
  const out = join(__dirname, "../public/sitemap.xml");
  writeFileSync(out, `${lines.join("\n")}\n`, "utf8");
  console.log(`Wrote ${out} (${STATIC_ENTRIES.length} static + ${ARTICLES.length} articles, lastmod ${BUILD_DATE})`);
}

main();
