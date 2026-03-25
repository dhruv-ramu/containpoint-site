import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { LayoutDashboard, FileType, Eye, Download, Zap } from "lucide-react";

const FEATURES = [
  { icon: LayoutDashboard, text: "Multi-site dashboard" },
  { icon: FileType, text: "Reusable inspection templates" },
  { icon: Eye, text: "Review and QA workflows" },
  { icon: Download, text: "Client-ready exports" },
  { icon: Zap, text: "Faster, more professional delivery" },
];

type ForConsultantsSectionProps = {
  /** Use on the dedicated consultants page so the page has a single H1. */
  heroAsH1?: boolean;
};

export function ForConsultantsSection({ heroAsH1 = false }: ForConsultantsSectionProps) {
  const titleClass =
    "font-heading text-3xl sm:text-4xl font-semibold text-charcoal tracking-tight";

  return (
    <section id="for-consultants" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            {heroAsH1 ? (
              <h1 className={titleClass}>Manage every client site in one system.</h1>
            ) : (
              <h2 className={titleClass}>Manage every client site in one system.</h2>
            )}
            <p className="mt-6 text-lg text-slate leading-relaxed">
              ContainPoint gives environmental consultants a structured way to standardize inspections, track deficiencies, and deliver clean audit-ready documentation across multiple facilities.
            </p>
            <p className="mt-4 text-base text-slate leading-relaxed">
              Need{" "}
              <Link to="/#pricing" className="text-steel font-medium hover:text-charcoal underline underline-offset-2">
                SPCC software pricing
              </Link>{" "}
              for multiple sites, or want to see{" "}
              <Link
                to="/#product"
                className="text-steel font-medium hover:text-charcoal underline underline-offset-2"
              >
                inspection tracking and audit exports
              </Link>
              ?{" "}
              <Link to="/#book-demo" className="text-steel font-medium hover:text-charcoal underline underline-offset-2">
                Book a demo
              </Link>{" "}
              with our team.
            </p>
            <ul className="mt-10 space-y-4">
              {FEATURES.map((f, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center bg-steel/10 border border-steel/20 flex-shrink-0">
                    <f.icon size={20} className="text-steel" />
                  </div>
                  <span className="font-medium text-charcoal">{f.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button variant="primary" size="lg" asChild>
                <Link to="/#book-demo">Request Pilot Access</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-sm border border-border/60 bg-mist/50"
          >
            <div className="space-y-3">
              {["Site A — Manufacturing", "Site B — Trucking Depot", "Site C — Equipment Yard"].map((site, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded bg-bone border border-border/40"
                >
                  <span className="font-medium text-charcoal">{site}</span>
                  <span className="text-xs text-slate">3 inspections due</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate text-center">
              Multi-site overview mock
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
