import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { StatusBadge } from "../ui/StatusBadge";
import { inspections, upcomingInspections } from "@/data/sampleDashboardData";

export function DashboardInspections() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = selectedId ? inspections.find((i) => i.id === selectedId) : null;

  return (
    <div className="p-4 space-y-6">
      <div className="rounded-sm border border-border/60 bg-bone p-4">
        <h4 className="text-sm font-medium text-charcoal mb-4">Upcoming Inspections</h4>
        <div className="space-y-2">
          {upcomingInspections.map((u, i) => (
            <div key={i} className="flex justify-between items-center py-2 border-b border-border/40 last:border-0">
              <span className="text-slate">{u.date}</span>
              <span className="text-charcoal font-medium">{u.asset}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/60">
              <th className="text-left py-2 px-3 font-medium text-slate">Inspection ID</th>
              <th className="text-left py-2 px-3 font-medium text-slate">Asset / Area</th>
              <th className="text-left py-2 px-3 font-medium text-slate">Procedure</th>
              <th className="text-left py-2 px-3 font-medium text-slate">Completed By</th>
              <th className="text-left py-2 px-3 font-medium text-slate">Date</th>
              <th className="text-left py-2 px-3 font-medium text-slate">Result</th>
              <th className="text-left py-2 px-3 font-medium text-slate">Verified</th>
            </tr>
          </thead>
          <tbody>
            {inspections.map((i) => (
              <tr
                key={i.id}
                onClick={() => setSelectedId(i.id)}
                className="border-b border-border/40 hover:bg-surface/30 cursor-pointer transition-colors"
              >
                <td className="py-3 px-3 font-medium text-charcoal">{i.id}</td>
                <td className="py-3 px-3 text-charcoal">{i.asset}</td>
                <td className="py-3 px-3 text-slate">{i.procedure}</td>
                <td className="py-3 px-3 text-slate">{i.completedBy}</td>
                <td className="py-3 px-3 text-slate">{i.date}</td>
                <td className="py-3 px-3">
                  <StatusBadge status={i.result} size="sm" />
                </td>
                <td className="py-3 px-3 text-slate">{i.verified}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/20"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-bone rounded-sm border border-border/60 shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between p-4 border-b border-border/60">
                <h3 className="font-semibold text-charcoal">{selected.id}</h3>
                <button
                  onClick={() => setSelectedId(null)}
                  className="p-1 text-slate hover:text-charcoal"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-4 space-y-4">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="text-slate">Asset</span>
                  <span className="text-charcoal">{selected.asset}</span>
                  <span className="text-slate">Procedure</span>
                  <span className="text-charcoal">{selected.procedure}</span>
                  <span className="text-slate">Frequency</span>
                  <span className="text-charcoal">{selected.frequency}</span>
                  <span className="text-slate">Completed By</span>
                  <span className="text-charcoal">{selected.completedBy}</span>
                  <span className="text-slate">Date</span>
                  <span className="text-charcoal">{selected.date}</span>
                  <span className="text-slate">Result</span>
                  <StatusBadge status={selected.result} size="sm" />
                  {selected.linkedAction && (
                    <>
                      <span className="text-slate">Linked Action</span>
                      <span className="text-steel font-medium">{selected.linkedAction}</span>
                    </>
                  )}
                </div>
                <div>
                  <h4 className="text-xs font-medium text-slate uppercase tracking-wider mb-1">
                    Checklist Summary
                  </h4>
                  <p className="text-sm text-charcoal">
                    {selected.result === "Fail"
                      ? "Secondary containment crack identified at Berm B. Corrective action CA-014 created."
                      : "All checklist items passed."}
                  </p>
                </div>
                <div className="rounded-sm border border-border/60 bg-surface/40 p-4 h-20 flex items-center justify-center">
                  <span className="text-xs text-slate">Photo evidence placeholder</span>
                </div>
                <div className="rounded-sm border border-border/60 bg-surface/40 p-4 h-12 flex items-center justify-center">
                  <span className="text-xs text-slate">Signature placeholder</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
