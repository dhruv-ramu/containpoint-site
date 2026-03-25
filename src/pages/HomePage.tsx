import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { SampleAuditSection } from "@/components/sections/SampleAuditSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ProductSection } from "@/components/sections/ProductSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ForConsultantsSection } from "@/components/sections/ForConsultantsSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { BookDemoSection } from "@/components/sections/BookDemoSection";
import { Footer } from "@/components/sections/Footer";
import { Navigation } from "@/components/Navigation";
import { Seo, JsonLd } from "@/components/seo/Seo";
import {
  organizationJsonLd,
  websiteJsonLd,
  softwareApplicationJsonLd,
  faqPageJsonLd,
} from "@/seo/structuredData";

export function HomePage() {
  return (
    <>
      <Seo
        title="ContainPoint — SPCC Compliance Software for Facilities"
        description="ContainPoint is SPCC compliance software for oil storage facilities and consultants: inspection tracking, corrective actions, training records, and audit-ready documentation in one platform."
        canonicalPath="/"
      />
      <JsonLd
        data={[
          organizationJsonLd(),
          websiteJsonLd(),
          softwareApplicationJsonLd(),
          faqPageJsonLd(),
        ]}
      />
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <IndustriesSection />
        <SampleAuditSection />
        <FinalCTA />
        <ProductSection />
        <HowItWorksSection />
        <PricingSection />
        <ForConsultantsSection />
        <ResourcesSection />
        <FAQSection />
        <BookDemoSection />
        <Footer />
      </main>
    </>
  );
}
