import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

const CORE_FEATURES = [
  "Asset registry",
  "Inspection tracking",
  "Audit export",
  "Basic support",
];

const PRO_FEATURES = [
  "Everything in Core",
  "Corrective actions",
  "Multi-site management",
  "Consultant features",
  "Priority support",
];

const ENTERPRISE_FEATURES = [
  "Portfolio rollups",
  "Advanced onboarding",
  "Custom workflows",
  "Dedicated support",
];

type PricingSectionProps = {
  showHeading?: boolean;
};

export function PricingSection({ showHeading = true }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-28 bg-mist/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal tracking-tight">
              Pricing
            </h2>
            <p className="mt-4 text-lg text-slate max-w-2xl">
              Transparent, site-based pricing. No surprises.
            </p>
          </motion.div>
        )}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Core */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-sm border border-border/60 bg-bone shadow-[0_1px_3px_rgba(23,23,23,0.04)]"
          >
            <h3 className="font-heading text-xl font-semibold text-charcoal">Core</h3>
            <div className="mt-2">
              <span className="font-heading text-3xl font-semibold text-charcoal">$149</span>
              <span className="text-slate">/site/month</span>
            </div>
            <p className="mt-4 text-sm text-slate">
              For smaller facilities that need a structured SPCC system of record.
            </p>
            <ul className="mt-6 space-y-3">
              {CORE_FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-steel flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button variant="secondary" className="w-full mt-8" asChild>
              <Link to="/book-demo">Get Started</Link>
            </Button>
          </motion.div>

          {/* Pro - featured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="p-8 rounded-sm border-2 border-steel/40 bg-bone shadow-[0_4px_16px_rgba(23,23,23,0.08)] relative"
          >
            <div className="absolute -top-3 left-6 px-2 py-0.5 bg-steel text-bone text-xs font-medium rounded-sm">
              Popular
            </div>
            <h3 className="font-heading text-xl font-semibold text-charcoal">Pro</h3>
            <div className="mt-2">
              <span className="font-heading text-3xl font-semibold text-charcoal">$249</span>
              <span className="text-slate">/site/month</span>
            </div>
            <p className="mt-4 text-sm text-slate">
              For multi-site operators and consultant-supported workflows.
            </p>
            <ul className="mt-6 space-y-3">
              {PRO_FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-steel flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button variant="primary" className="w-full mt-8" asChild>
              <Link to="/book-demo">Get Started</Link>
            </Button>
          </motion.div>

          {/* Enterprise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-sm border border-border/60 bg-bone shadow-[0_1px_3px_rgba(23,23,23,0.04)]"
          >
            <h3 className="font-heading text-xl font-semibold text-charcoal">Enterprise</h3>
            <div className="mt-2">
              <span className="font-heading text-2xl font-semibold text-charcoal">Custom</span>
            </div>
            <p className="mt-4 text-sm text-slate">
              For larger portfolios, advanced onboarding, or custom implementation.
            </p>
            <ul className="mt-6 space-y-3">
              {ENTERPRISE_FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-steel flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full mt-8" asChild>
              <Link to="/book-demo">Contact Sales</Link>
            </Button>
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-sm text-slate max-w-xl mx-auto"
        >
          Onboarding/setup fees may apply. Annual billing preferred. Consultant/portfolio pricing available.{" "}
          <Link to="/product" className="text-steel font-medium hover:text-charcoal underline underline-offset-2">
            Explore the SPCC compliance platform
          </Link>{" "}
          or{" "}
          <Link to="/book-demo" className="text-steel font-medium hover:text-charcoal underline underline-offset-2">
            book a demo
          </Link>
          .
        </motion.p>
      </div>
    </section>
  );
}
