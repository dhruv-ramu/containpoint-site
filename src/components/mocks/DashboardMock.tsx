import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, Clock } from "lucide-react";

export function DashboardMock() {
  const assets = [
    { id: "T-001", name: "Diesel Tank A", status: "compliant", lastInspection: "Mar 15" },
    { id: "T-002", name: "Aboveground Storage", status: "action-required", lastInspection: "Mar 10" },
    { id: "T-003", name: "Generator Tank", status: "compliant", lastInspection: "Mar 18" },
    { id: "T-004", name: "Hydraulic Reservoir", status: "scheduled", lastInspection: "Mar 22" },
  ];

  return (
    <motion.div
      className="relative rounded-sm border border-border/70 bg-mist/80 shadow-[0_4px_24px_rgba(23,23,23,0.06)] overflow-hidden"
      whileHover={{ boxShadow: "0 8px 32px rgba(23,23,23,0.08)" }}
      transition={{ duration: 0.2 }}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border/60 bg-surface/40">
        <span className="font-heading text-sm font-medium text-charcoal tracking-tight">
          Facility Overview
        </span>
        <span className="text-xs text-slate">Audit-ready</span>
      </div>

      <div className="p-4 space-y-4">
        {/* Asset registry strip */}
        <div>
          <div className="text-xs font-medium text-slate uppercase tracking-wider mb-2">
            Asset Registry
          </div>
          <div className="space-y-1.5">
            {assets.map((asset) => (
              <div
                key={asset.id}
                className="flex items-center justify-between py-2 px-3 rounded bg-bone border border-border/40"
              >
                <div className="flex items-center gap-2">
                  {asset.status === "compliant" && (
                    <CheckCircle size={14} className="text-steel flex-shrink-0" />
                  )}
                  {asset.status === "action-required" && (
                    <AlertCircle size={14} className="text-amber-600 flex-shrink-0" />
                  )}
                  {asset.status === "scheduled" && (
                    <Clock size={14} className="text-slate flex-shrink-0" />
                  )}
                  <span className="text-sm text-charcoal">{asset.name}</span>
                </div>
                <span className="text-xs text-slate">{asset.lastInspection}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Inspection status summary */}
        <div className="grid grid-cols-2 gap-2">
          <div className="p-3 rounded bg-bone border border-border/40">
            <div className="text-xs text-slate">Inspections due</div>
            <div className="font-heading text-lg font-semibold text-charcoal">2</div>
          </div>
          <div className="p-3 rounded bg-bone border border-border/40">
            <div className="text-xs text-slate">Corrective actions</div>
            <div className="font-heading text-lg font-semibold text-charcoal">1 open</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
