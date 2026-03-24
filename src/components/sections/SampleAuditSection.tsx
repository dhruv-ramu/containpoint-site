import { motion } from "framer-motion";
import { SampleDashboard } from "@/components/dashboard/SampleDashboard";

export function SampleAuditSection() {
  return (
    <section id="sample-audit" className="py-20 lg:py-28 bg-mist/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal tracking-tight">
            Sample Dashboard
          </h2>
          <p className="mt-4 text-slate max-w-2xl">
            Explore a live preview of ContainPoint. See facility status, inspections, corrective actions, and audit readiness — all powered by sample data. Click any row to drill down, or open the full dashboard for deeper exploration.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10"
          >
            <SampleDashboard />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
