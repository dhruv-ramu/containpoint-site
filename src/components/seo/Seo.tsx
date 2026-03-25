import { Helmet } from "react-helmet-async";
import { SITE_NAME, absoluteUrl } from "@/seo/constants";

export type SeoProps = {
  title: string;
  description: string;
  /** Path only, e.g. `/pricing` — canonical is built from SITE_ORIGIN. */
  canonicalPath: string;
  ogType?: "website" | "article";
  /** Optional absolute URL to a 1200×630 (or similar) social image under public/. */
  ogImageUrl?: string;
  noindex?: boolean;
};

export function Seo({
  title,
  description,
  canonicalPath,
  ogType = "website",
  ogImageUrl,
  noindex = false,
}: SeoProps) {
  const canonical = absoluteUrl(canonicalPath);
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const hasImage = Boolean(ogImageUrl);

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="en_US" />
      {hasImage && <meta property="og:image" content={ogImageUrl!} />}

      <meta
        name="twitter:card"
        content={hasImage ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {hasImage && <meta name="twitter:image" content={ogImageUrl!} />}
    </Helmet>
  );
}

/** JSON-LD script — pass validated objects only. */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const json = Array.isArray(data) ? data : [data];
  return (
    <Helmet>
      {json.map((item, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}
