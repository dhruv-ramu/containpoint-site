/** Production site origin — used for canonical URLs, Open Graph, and sitemap. */
export const SITE_ORIGIN = "https://containpoint.com";

export const SITE_NAME = "ContainPoint";

export function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${p}`;
}
