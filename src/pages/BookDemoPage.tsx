import { Link } from "react-router-dom";
import { Seo, JsonLd } from "@/components/seo/Seo";
import { MarketingPageLayout } from "@/layouts/MarketingPageLayout";
import { BookDemoSection } from "@/components/sections/BookDemoSection";
import { organizationJsonLd, websiteJsonLd } from "@/seo/structuredData";

export function BookDemoPage() {
  return (
    <>
      <Seo
        title="Book a Demo"
        description="Schedule a short ContainPoint demo to see SPCC inspection workflows, corrective actions, training records, and audit pack export for your facilities or clients."
        canonicalPath="/book-demo"
      />
      <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
      <MarketingPageLayout>
        <div className="bg-mist/30 border-b border-border/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
            <p className="text-sm text-slate">
              <Link to="/" className="text-steel hover:text-charcoal underline underline-offset-2">
                Home
              </Link>
              <span className="mx-2 text-border" aria-hidden>
                /
              </span>
              <span className="text-charcoal">Book a demo</span>
            </p>
          </div>
        </div>
        <BookDemoSection leadHeadingLevel="h1" />
      </MarketingPageLayout>
    </>
  );
}
