import { Link } from "react-router-dom";
import { Seo, JsonLd } from "@/components/seo/Seo";
import { MarketingPageLayout } from "@/layouts/MarketingPageLayout";
import { ForConsultantsSection } from "@/components/sections/ForConsultantsSection";
import { organizationJsonLd, websiteJsonLd, softwareApplicationJsonLd } from "@/seo/structuredData";

export function ConsultantsPage() {
  return (
    <>
      <Seo
        title="SPCC Software for Environmental Consultants"
        description="ContainPoint helps environmental consultants standardize SPCC inspections across client sites, manage deficiencies, and deliver professional audit documentation from one console."
        canonicalPath="/for-consultants"
      />
      <JsonLd
        data={[
          organizationJsonLd(),
          websiteJsonLd(),
          softwareApplicationJsonLd(),
        ]}
      />
      <MarketingPageLayout>
        <div className="bg-mist/30 border-b border-border/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-8 pb-0">
            <p className="text-sm text-slate">
              <Link to="/" className="text-steel hover:text-charcoal underline underline-offset-2">
                Home
              </Link>
              <span className="mx-2 text-border" aria-hidden>
                /
              </span>
              <span className="text-charcoal">For consultants</span>
            </p>
          </div>
        </div>
        <ForConsultantsSection heroAsH1 />
        <section className="py-12 lg:py-16 border-t border-border/40 bg-bone">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <p className="text-slate leading-relaxed">
              Supporting clients in-house? See the full{" "}
              <Link to="/product" className="text-steel font-medium hover:text-charcoal underline underline-offset-2">
                SPCC compliance platform
              </Link>{" "}
              and{" "}
              <Link to="/resources" className="text-steel font-medium hover:text-charcoal underline underline-offset-2">
                educational resources
              </Link>
              .
            </p>
          </div>
        </section>
      </MarketingPageLayout>
    </>
  );
}
