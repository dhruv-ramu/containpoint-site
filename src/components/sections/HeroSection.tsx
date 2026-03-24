import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { DashboardMock } from "@/components/mocks/DashboardMock";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
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
                <a href="#book-demo">Book Demo</a>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href="#sample-audit">See Sample Audit Pack</a>
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <DashboardMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
