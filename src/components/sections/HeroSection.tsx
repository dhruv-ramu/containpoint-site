import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

const DashboardMock = lazy(() =>
  import("@/components/mocks/DashboardMock").then((m) => ({ default: m.DashboardMock }))
);

function DashboardFallback() {
  return (
    <div
      className="w-full min-h-[320px] lg:min-h-[420px] rounded-sm border border-border/60 bg-mist/40 animate-pulse"
      aria-hidden
    />
  );
}

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-sm font-semibold text-steel tracking-tight font-heading mb-3"
            >
              ContainPoint
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-charcoal tracking-tight leading-[1.1] max-w-xl"
            >
              Never miss an SPCC requirement.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg sm:text-xl text-slate max-w-xl leading-relaxed"
            >
              SPCC compliance that stays current, complete, and audit-ready — without spreadsheets, binders, or manual tracking.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button variant="primary" size="lg" asChild>
                <Link to="/book-demo">Book Demo</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href="#sample-audit">Explore Sample Dashboard</a>
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <Suspense fallback={<DashboardFallback />}>
              <DashboardMock />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
