import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Seo, JsonLd } from "@/components/seo/Seo";
import { ARTICLES } from "@/data/articles";
import { ArrowRight } from "lucide-react";
import { organizationJsonLd, websiteJsonLd } from "@/seo/structuredData";

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(iso + "T12:00:00"));
  } catch {
    return iso;
  }
}

export function ResourcesIndexPage() {
  return (
    <>
      <Seo
        title="SPCC Compliance Resources"
        description="Guides from ContainPoint on SPCC plans, inspection requirements, audit documentation, and organizing compliance records for oil storage facilities."
        canonicalPath="/resources"
      />
      <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
      <Navigation />
      <main className="pt-16">
        <div className="border-b border-border/50 bg-mist/20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 py-12 lg:py-16">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-steel mb-3 font-heading">
              ContainPoint
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl font-semibold tracking-tight text-charcoal">
              SPCC compliance resources
            </h1>
            <p className="mt-4 text-lg text-slate max-w-2xl font-body not-italic leading-relaxed">
              Practical explainers on spill prevention compliance—plans, inspections, records, and what strong documentation looks like before your next review.
            </p>
            <p className="mt-4 text-base text-slate max-w-2xl font-body not-italic leading-relaxed">
              Prefer a walkthrough of the product? Explore the{" "}
              <Link to="/product" className="text-steel font-medium hover:text-charcoal underline underline-offset-2">
                SPCC compliance platform
              </Link>
              , see{" "}
              <Link to="/pricing" className="text-steel font-medium hover:text-charcoal underline underline-offset-2">
                pricing
              </Link>
              , or{" "}
              <Link to="/book-demo" className="text-steel font-medium hover:text-charcoal underline underline-offset-2">
                book a demo
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-16 lg:py-20">
          <ul className="space-y-0 divide-y divide-border/60 border-y border-border/60">
            {ARTICLES.map((article, i) => (
              <li key={article.slug}>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                >
                  <Link
                    to={`/resources/${article.slug}`}
                    className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 py-8 first:pt-6 last:pb-6 hover:bg-mist/20 -mx-4 px-4 rounded-lg transition-colors"
                  >
                    <div className="min-w-0 flex-1">
                      <h2 className="font-heading text-xl font-semibold text-charcoal group-hover:text-steel transition-colors">
                        {article.title}
                      </h2>
                      <p className="mt-2 text-slate text-[0.95rem] leading-relaxed font-body not-italic">
                        {article.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0 text-sm text-steel font-medium font-heading">
                      <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
                      <ArrowRight
                        className="h-4 w-4 opacity-70 group-hover:translate-x-0.5 transition-transform"
                        aria-hidden
                      />
                    </div>
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}

/** @deprecated Use ResourcesIndexPage — kept for imports that still reference the old name. */
export const BlogIndexPage = ResourcesIndexPage;
