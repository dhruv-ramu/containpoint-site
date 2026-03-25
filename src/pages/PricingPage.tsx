import { Link } from "react-router-dom";
import { Seo, JsonLd } from "@/components/seo/Seo";
import { MarketingPageLayout } from "@/layouts/MarketingPageLayout";
import { PricingSection } from "@/components/sections/PricingSection";
import { organizationJsonLd, websiteJsonLd } from "@/seo/structuredData";

export function PricingPage() {
  return (
    <>
      <Seo
        title="SPCC Software Pricing"
        description="Transparent site-based pricing for ContainPoint: Core, Pro, and Enterprise plans for SPCC inspection software, audit documentation, and multi-site compliance."
        canonicalPath="/pricing"
      />
      <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
      <MarketingPageLayout>
        <div className="bg-mist/50 border-b border-border/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <p className="text-sm font-medium text-steel uppercase tracking-[0.15em] font-heading mb-3">
              ContainPoint
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-charcoal tracking-tight max-w-3xl">
              SPCC software pricing
            </h1>
            <p className="mt-5 text-lg text-slate max-w-2xl leading-relaxed">
              Simple per-site pricing for spill prevention compliance—whether you run one tank farm or a portfolio of facilities.
            </p>
          </div>
        </div>
        <PricingSection showHeading={false} />
        <section className="py-12 lg:py-16 border-t border-border/40 bg-bone">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-slate leading-relaxed">
              Questions about inspection tracking or audit-ready documentation?{" "}
              <Link to="/product" className="text-steel font-medium hover:text-charcoal underline underline-offset-2">
                View the platform
              </Link>{" "}
              or{" "}
              <Link to="/book-demo" className="text-steel font-medium hover:text-charcoal underline underline-offset-2">
                book a demo
              </Link>
              .
            </p>
          </div>
        </section>
      </MarketingPageLayout>
    </>
  );
}
