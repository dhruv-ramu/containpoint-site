import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { StatusBadge } from "../ui/StatusBadge";
import { correctiveActions, ca014Timeline } from "@/data/sampleDashboardData";

export function DashboardActions() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = selectedId ? correctiveActions.find((a) => a.id === selectedId) : null;
  const isCA014 = selected?.id === "CA-014";

  return (
    <div className="p-4 space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-sm border border-border/60 bg-bone p-4">
          <h4 className="text-sm font-medium text-slate uppercase tracking-wider mb-2">Open</h4>
          <div className="space-y-2">
            {correctiveActions
              .filter((a) => a.status !== "Closed")
              .map((a) => (
                <div
                  key={a.id}
                  onClick={() => setSelectedId(a.id)}
                  className="p-3 rounded-sm border border-border/40 hover:border-steel/30 cursor-pointer transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <span className="font-medium text-charcoal">{a.id}</span>
                    <StatusBadge status={a.status} size="sm" />
                  </div>
                  <p className="text-sm text-slate mt-1 line-clamp-2">{a.title}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="rounded-sm border border-border/60 bg-bone p-4">
          <h4 className="text-sm font-medium text-slate uppercase tracking-wider mb-2">Closed</h4>
          <div className="space-y-2">
            {correctiveActions
              .filter((a) => a.status === "Closed")
              .map((a) => (
                <div
                  key={a.id}
                  onClick={() => setSelectedId(a.id)}
                  className="p-3 rounded-sm border border-border/40 hover:border-steel/30 cursor-pointer transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <span className="font-medium text-charcoal">{a.id}</span>
                    <StatusBadge status={a.status} size="sm" />
                  </div>
                  <p className="text-sm text-slate mt-1 line-clamp-2">{a.title}</p>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/60">
              <th className="text-left py-2 px-3 font-medium text-slate">Action ID</th>
              <th className="text-left py-2 px-3 font-medium text-slate">Title</th>
              <th className="text-left py-2 px-3 font-medium text-slate">Severity</th>
              <th className="text-left py-2 px-3 font-medium text-slate">Linked Asset</th>
              <th className="text-left py-2 px-3 font-medium text-slate">Owner</th>
              <th className="text-left py-2 px-3 font-medium text-slate">Due Date</th>
              <th className="text-left py-2 px-3 font-medium text-slate">Status</th>
              <th className="text-left py-2 px-3 font-medium text-slate">Evidence</th>
            </tr>
          </thead>
          <tbody>
            {correctiveActions.map((a) => (
              <tr
                key={a.id}
                onClick={() => setSelectedId(a.id)}
                className="border-b border-border/40 hover:bg-surface/30 cursor-pointer transition-colors"
              >
                <td className="py-3 px-3 font-medium text-charcoal">{a.id}</td>
                <td className="py-3 px-3 text-charcoal">{a.title}</td>
                <td className="py-3 px-3 text-slate">{a.severity}</td>
                <td className="py-3 px-3 text-slate">{a.linkedAsset}</td>
                <td className="py-3 px-3 text-slate">{a.owner}</td>
                <td className="py-3 px-3 text-slate">{a.dueDate}</td>
                <td className="py-3 px-3">
                  <StatusBadge status={a.status} size="sm" />
                </td>
                <td className="py-3 px-3 text-slate text-xs">{a.evidence}</td>
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
              className="bg-bone rounded-sm border border-border/60 shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
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
                <div>
                  <h4 className="text-xs font-medium text-slate uppercase tracking-wider mb-1">
                    Issue Description
                  </h4>
                  <p className="text-sm text-charcoal">{selected.title}</p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="text-slate">Severity</span>
                  <span className="text-charcoal">{selected.severity}</span>
                  <span className="text-slate">Source Inspection</span>
                  <span className="text-charcoal">INSP-2389</span>
                  <span className="text-slate">Assigned To</span>
                  <span className="text-charcoal">{selected.owner}</span>
                  <span className="text-slate">Due Date</span>
                  <span className="text-charcoal">{selected.dueDate}</span>
                  <span className="text-slate">Status</span>
                  <StatusBadge status={selected.status} size="sm" />
                </div>
                {isCA014 && (
                  <div>
                    <h4 className="text-xs font-medium text-slate uppercase tracking-wider mb-2">
                      Progress Timeline
                    </h4>
                    <div className="space-y-2">
                      {ca014Timeline.map((t, i) => (
                        <div key={i} className="flex gap-3 text-sm">
                          <span className="text-slate w-14 flex-shrink-0">{t.date}</span>
                          <span className="text-charcoal">{t.event}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div>
                  <h4 className="text-xs font-medium text-slate uppercase tracking-wider mb-1">
                    Uploaded Evidence
                  </h4>
                  <div className="rounded-sm border border-border/60 bg-surface/40 p-4 h-24 flex items-center justify-center">
                    <span className="text-xs text-slate">
                      {selected.evidence === "1 photo uploaded"
                        ? "1 photo — berm_crack_mar24.jpg"
                        : "Verified"}
                    </span>
                  </div>
                </div>
                {selected.status === "Closed" && (
                  <div className="rounded-sm border border-compliant/30 bg-compliant/10 p-3">
                    <p className="text-sm text-compliant font-medium">Closure verified</p>
                    <p className="text-xs text-slate mt-0.5">Supervisor sign-off on {selected.dueDate}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
