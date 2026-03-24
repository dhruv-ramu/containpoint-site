import { motion } from "framer-motion";
import { FileText, CheckCircle } from "lucide-react";
import { spccPlan } from "@/data/sampleDashboardData";

export function DashboardPlan() {
  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-lg border-2 border-compliant/30 bg-compliant/5 p-5 flex items-center gap-4"
      >
        <div className="w-12 h-12 rounded-lg bg-compliant/20 flex items-center justify-center flex-shrink-0">
          <CheckCircle size={24} className="text-compliant" />
        </div>
        <div>
          <p className="font-semibold text-charcoal">Plan Current</p>
          <p className="text-sm text-slate mt-0.5">SPCC plan is up to date. Next 5-year review due {spccPlan.nextReviewDue}.</p>
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { label: "Plan Version", value: spccPlan.version },
          { label: "Facility Classification", value: spccPlan.classification },
          { label: "Self-Certified By", value: spccPlan.certifiedBy },
          { label: "Last Amendment", value: spccPlan.lastAmendment },
          { label: "Last 5-Year Review", value: spccPlan.last5YearReview },
          { label: "Next Review Due", value: spccPlan.nextReviewDue },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
            className="rounded-lg border border-border/50 bg-bone p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          >
            <span className="text-[11px] font-medium text-slate uppercase tracking-wider">{item.label}</span>
            <p className="mt-1.5 text-lg font-semibold text-charcoal">{item.value}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="rounded-lg border border-border/50 bg-bone p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
      >
        <h4 className="text-xs font-semibold text-charcoal uppercase tracking-wider mb-4">Amendment Timeline</h4>
        <div className="space-y-4">
          {spccPlan.amendments.map((a, i) => (
            <div key={i} className="flex gap-4 items-start py-3 border-b border-border/40 last:border-0">
              <span className="text-steel font-semibold w-12 flex-shrink-0">{a.version}</span>
              <div>
                <p className="text-charcoal font-medium">{a.description}</p>
                <p className="text-xs text-slate mt-0.5">{a.date}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="rounded-lg border border-border/50 bg-mist/30 p-10 flex flex-col items-center justify-center gap-3"
      >
        <FileText size={48} className="text-slate opacity-60" />
        <p className="text-sm font-medium text-charcoal">Plan document preview</p>
        <p className="text-xs text-slate">Linked facility diagrams · Site map · Certification signature</p>
      </motion.div>
    </div>
  );
}
