import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ConsultantCallout } from "@/components/sections/ConsultantCallout";
import { SampleAuditSection } from "@/components/sections/SampleAuditSection";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ProductSection } from "@/components/sections/ProductSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ForConsultantsSection } from "@/components/sections/ForConsultantsSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { BookDemoSection } from "@/components/sections/BookDemoSection";
import { Footer } from "@/components/sections/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <CapabilitiesSection />
        <IndustriesSection />
        <ConsultantCallout />
        <SampleAuditSection />
        {/* <PricingPreview /> */}
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
    </div>
  );
}

export default App;
