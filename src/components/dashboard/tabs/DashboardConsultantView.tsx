import { motion } from "framer-motion";
import { StatusBadge } from "../ui/StatusBadge";
import { consultantSummary, consultantSites } from "@/data/sampleDashboardData";

export function DashboardConsultantView() {
  return (
    <div className="p-4 space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="rounded-sm border border-border/60 bg-bone p-4">
          <span className="text-xs font-medium text-slate uppercase tracking-wider">Consultant Org</span>
          <p className="mt-1 font-semibold text-charcoal">{consultantSummary.org}</p>
        </div>
        <div className="rounded-sm border border-border/60 bg-bone p-4">
          <span className="text-xs font-medium text-slate uppercase tracking-wider">Managed Sites</span>
          <p className="mt-1 text-xl font-semibold text-charcoal">{consultantSummary.sitesManaged}</p>
        </div>
        <div className="rounded-sm border border-border/60 bg-bone p-4">
          <span className="text-xs font-medium text-slate uppercase tracking-wider">Sites w/ Open Actions</span>
          <p className="mt-1 text-xl font-semibold text-charcoal">{consultantSummary.sitesWithOpenActions}</p>
        </div>
        <div className="rounded-sm border border-border/60 bg-bone p-4">
          <span className="text-xs font-medium text-slate uppercase tracking-wider">Inspections Due This Week</span>
          <p className="mt-1 text-xl font-semibold text-charcoal">{consultantSummary.sitesWithInspectionsDueThisWeek}</p>
        </div>
        <div className="rounded-sm border border-border/60 bg-bone p-4">
          <span className="text-xs font-medium text-slate uppercase tracking-wider">Sites Audit-Ready</span>
          <p className="mt-1 text-xl font-semibold text-charcoal">{consultantSummary.sitesAuditReady}</p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-sm border border-border/60 bg-bone overflow-hidden"
      >
        <h4 className="text-sm font-medium text-charcoal p-4 border-b border-border/60">
          Multi-Site Overview
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/60 bg-surface/30">
                <th className="text-left py-2 px-4 font-medium text-slate">Site</th>
                <th className="text-left py-2 px-4 font-medium text-slate">Status</th>
                <th className="text-left py-2 px-4 font-medium text-slate">Open Actions</th>
                <th className="text-left py-2 px-4 font-medium text-slate">Next Due</th>
              </tr>
            </thead>
            <tbody>
              {consultantSites.map((site) => (
                <tr
                  key={site.name}
                  className="border-b border-border/40 hover:bg-surface/30 cursor-pointer transition-colors"
                >
                  <td className="py-3 px-4 font-medium text-charcoal">{site.name}</td>
                  <td className="py-3 px-4">
                    <StatusBadge status={site.status} size="sm" />
                  </td>
                  <td className="py-3 px-4 text-slate">{site.openActions}</td>
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
