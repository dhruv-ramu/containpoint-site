import { motion } from "framer-motion";
import { StatusBadge } from "../ui/StatusBadge";
import { consultantSummary, consultantSites } from "@/data/sampleDashboardData";

export function DashboardConsultantView() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {[
          { label: "Consultant Org", value: consultantSummary.org, col: true },
          { label: "Managed Sites", value: consultantSummary.sitesManaged },
          { label: "Sites w/ Open Actions", value: consultantSummary.sitesWithOpenActions },
          { label: "Inspections Due This Week", value: consultantSummary.sitesWithInspectionsDueThisWeek },
          { label: "Sites Audit-Ready", value: consultantSummary.sitesAuditReady },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
            className={`rounded-lg border border-border/50 bg-bone p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)] ${item.col ? "lg:col-span-1" : ""}`}
          >
            <span className="text-[11px] font-medium text-slate uppercase tracking-wider">{item.label}</span>
            <p className={`mt-1.5 font-semibold text-charcoal ${item.col ? "text-sm" : "text-xl"}`}>{item.value}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="rounded-lg border border-border/50 bg-bone overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
      >
        <h4 className="text-xs font-semibold text-charcoal uppercase tracking-wider p-4 border-b border-border/50 bg-surface/30">
          Multi-Site Overview
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-mist/30">
                <th className="text-left py-3 px-4 text-[11px] font-medium text-slate uppercase tracking-wider">Site</th>
                <th className="text-left py-3 px-4 text-[11px] font-medium text-slate uppercase tracking-wider">Status</th>
                <th className="text-left py-3 px-4 text-[11px] font-medium text-slate uppercase tracking-wider">Open Actions</th>
                <th className="text-left py-3 px-4 text-[11px] font-medium text-slate uppercase tracking-wider">Inspections Due</th>
                <th className="text-left py-3 px-4 text-[11px] font-medium text-slate uppercase tracking-wider">Training Due</th>
                <th className="text-left py-3 px-4 text-[11px] font-medium text-slate uppercase tracking-wider">Evidence</th>
                <th className="text-left py-3 px-4 text-[11px] font-medium text-slate uppercase tracking-wider">Next Deadline</th>
              </tr>
            </thead>
            <tbody>
              {consultantSites.map((site) => (
                <tr
                  key={site.name}
                  className="border-b border-border/40 hover:bg-steel/5 cursor-pointer transition-colors"
                >
                  <td className="py-3 px-4 font-medium text-charcoal">{site.name}</td>
                  <td className="py-3 px-4">
                    <StatusBadge status={site.status} size="sm" />
                  </td>
                  <td className="py-3 px-4 text-slate">{site.openActions}</td>
                  <td className="py-3 px-4 text-slate">{site.inspectionsDue}</td>
                  <td className="py-3 px-4 text-slate">{site.trainingDue}</td>
                  <td className="py-3 px-4">
                    <span className={`font-medium ${site.evidenceComplete >= 90 ? "text-compliant" : "text-due-soon"}`}>
                      {site.evidenceComplete}%
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate">{site.nextDue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
