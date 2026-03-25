import { Link } from "react-router-dom";
import { Seo, JsonLd } from "@/components/seo/Seo";
import { MarketingPageLayout } from "@/layouts/MarketingPageLayout";
import { ProductSection } from "@/components/sections/ProductSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import {
  organizationJsonLd,
  websiteJsonLd,
  softwareApplicationJsonLd,
} from "@/seo/structuredData";

export function ProductPage() {
  return (
    <>
      <Seo
        title="SPCC Compliance Platform"
        description="ContainPoint is an SPCC compliance platform for oil storage facilities: asset registry, inspection tracking, corrective actions, training records, and audit-ready exports. Built for operators and environmental consultants."
        canonicalPath="/product"
      />
      <JsonLd
        data={[
          organizationJsonLd(),
          websiteJsonLd(),
          softwareApplicationJsonLd(),
        ]}
      />
      <MarketingPageLayout>
        <div className="bg-mist/50 border-b border-border/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16">
            <p className="text-sm font-medium text-steel uppercase tracking-[0.15em] font-heading mb-3">
              ContainPoint
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-charcoal tracking-tight max-w-3xl">
              SPCC compliance platform for facilities and consultants
            </h1>
            <p className="mt-5 text-lg text-slate max-w-2xl leading-relaxed">
              One system of record for inspections, spill prevention documentation, and the records regulators expect—without living in spreadsheets.
            </p>
          </div>
        </div>
        <ProductSection showHeading={false} showInternalLinks={false} />
        <HowItWorksSection />
        <section className="py-12 lg:py-16 border-t border-border/40 bg-bone">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <p className="text-slate leading-relaxed">
              Ready to see it on your sites?{" "}
              <Link to="/book-demo" className="text-steel font-medium hover:text-charcoal underline underline-offset-2">
                Book a demo
              </Link>
              , review{" "}
              <Link to="/pricing" className="text-steel font-medium hover:text-charcoal underline underline-offset-2">
                pricing
              </Link>
              , or explore{" "}
              <Link to="/resources" className="text-steel font-medium hover:text-charcoal underline underline-offset-2">
                SPCC compliance resources
              </Link>
              .
            </p>
          </div>
        </section>
      </MarketingPageLayout>
    </>
  );
}
