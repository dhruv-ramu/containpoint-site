import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { spccPlan } from "@/data/sampleDashboardData";

export function DashboardPlan() {
  return (
    <div className="p-4 space-y-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="rounded-sm border border-border/60 bg-bone p-4">
          <span className="text-xs font-medium text-slate uppercase tracking-wider">Plan Version</span>
          <p className="mt-1 text-xl font-semibold text-charcoal">{spccPlan.version}</p>
        </div>
        <div className="rounded-sm border border-border/60 bg-bone p-4">
          <span className="text-xs font-medium text-slate uppercase tracking-wider">Facility Classification</span>
          <p className="mt-1 text-lg font-medium text-charcoal">{spccPlan.classification}</p>
        </div>
        <div className="rounded-sm border border-border/60 bg-bone p-4">
          <span className="text-xs font-medium text-slate uppercase tracking-wider">Self-Certified By</span>
          <p className="mt-1 text-lg font-medium text-charcoal">{spccPlan.certifiedBy}</p>
        </div>
        <div className="rounded-sm border border-border/60 bg-bone p-4">
          <span className="text-xs font-medium text-slate uppercase tracking-wider">Last Amendment</span>
          <p className="mt-1 text-lg font-medium text-charcoal">{spccPlan.lastAmendment}</p>
        </div>
        <div className="rounded-sm border border-border/60 bg-bone p-4">
          <span className="text-xs font-medium text-slate uppercase tracking-wider">Last 5-Year Review</span>
          <p className="mt-1 text-lg font-medium text-charcoal">{spccPlan.last5YearReview}</p>
        </div>
        <div className="rounded-sm border border-border/60 bg-bone p-4">
          <span className="text-xs font-medium text-slate uppercase tracking-wider">Next Review Due</span>
          <p className="mt-1 text-lg font-medium text-charcoal">{spccPlan.nextReviewDue}</p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="rounded-sm border border-border/60 bg-bone p-4"
      >
        <h4 className="text-sm font-medium text-charcoal mb-4">Amendment Timeline</h4>
        <div className="space-y-3">
          {spccPlan.amendments.map((a, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className="text-steel font-medium w-12 flex-shrink-0">{a.version}</span>
              <div>
                <p className="text-charcoal">{a.description}</p>
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
        className="rounded-sm border border-border/60 bg-surface/40 p-8 flex flex-col items-center justify-center"
      >
        <FileText size={40} className="text-slate mb-3" />
        <p className="text-sm text-slate">Plan document preview</p>
        <p className="text-xs text-slate mt-1">Linked diagrams · Facility map</p>
      </motion.div>
    </div>
  );
}
