import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, AlertCircle } from "lucide-react";
import { StatusBadge } from "../ui/StatusBadge";
import { correctiveActions, ca014Timeline } from "@/data/sampleDashboardData";

export function DashboardActions() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = selectedId ? correctiveActions.find((a) => a.id === selectedId) : null;
  const openActions = correctiveActions.filter((a) => a.status !== "Closed");
  const closedActions = correctiveActions.filter((a) => a.status === "Closed");

  return (
    <div className="p-6 space-y-6">
      {openActions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg border-2 border-due-soon/30 bg-due-soon/5 p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
        >
          <h4 className="text-xs font-semibold text-charcoal uppercase tracking-wider mb-4 flex items-center gap-2">
            <AlertCircle size={14} className="text-due-soon" />
            Open Action — Requires Attention
          </h4>
          {openActions.map((a) => (
            <div
              key={a.id}
              onClick={() => setSelectedId(a.id)}
              className="p-4 rounded-lg border border-border/50 bg-bone hover:border-steel/30 cursor-pointer transition-colors"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-charcoal">{a.id}</span>
                    <StatusBadge status={a.status} size="sm" />
                    {"daysRemaining" in a && a.daysRemaining !== undefined && (
                      <span className="text-xs text-due-soon font-medium flex items-center gap-1">
                        <Clock size={12} /> {a.daysRemaining} days remaining
                      </span>
                    )}
                    {"verificationPending" in a && a.verificationPending && (
                      <span className="text-[10px] font-medium text-slate bg-surface px-1.5 py-0.5 rounded">Awaiting verification</span>
                    )}
                  </div>
                  <p className="text-sm text-slate mt-2 line-clamp-2">{a.title}</p>
                  <p className="text-xs text-slate mt-1">Due {a.dueDate} · {a.owner}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="rounded-lg border border-border/50 bg-bone p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
          <h4 className="text-[11px] font-semibold text-slate uppercase tracking-wider mb-3">Open</h4>
          <div className="space-y-2">
            {openActions.map((a) => (
              <div
                key={a.id}
                onClick={() => setSelectedId(a.id)}
                className="p-3 rounded-lg border border-border/40 hover:border-steel/30 hover:bg-steel/5 cursor-pointer transition-colors"
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
        <div className="rounded-lg border border-border/50 bg-bone p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
          <h4 className="text-[11px] font-semibold text-slate uppercase tracking-wider mb-3">Closed</h4>
          <div className="space-y-2">
            {closedActions.map((a) => (
              <div
                key={a.id}
                onClick={() => setSelectedId(a.id)}
                className="p-3 rounded-lg border border-border/40 hover:border-steel/30 hover:bg-steel/5 cursor-pointer transition-colors"
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

      <div className="rounded-lg border border-border/50 overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-mist/30">
                <th className="text-left py-3 px-4 text-[11px] font-medium text-slate uppercase tracking-wider">Action ID</th>
                <th className="text-left py-3 px-4 text-[11px] font-medium text-slate uppercase tracking-wider">Title</th>
                <th className="text-left py-3 px-4 text-[11px] font-medium text-slate uppercase tracking-wider">Severity</th>
                <th className="text-left py-3 px-4 text-[11px] font-medium text-slate uppercase tracking-wider">Linked Asset</th>
                <th className="text-left py-3 px-4 text-[11px] font-medium text-slate uppercase tracking-wider">Owner</th>
                <th className="text-left py-3 px-4 text-[11px] font-medium text-slate uppercase tracking-wider">Due Date</th>
                <th className="text-left py-3 px-4 text-[11px] font-medium text-slate uppercase tracking-wider">Status</th>
                <th className="text-left py-3 px-4 text-[11px] font-medium text-slate uppercase tracking-wider">Evidence</th>
              </tr>
            </thead>
            <tbody>
              {correctiveActions.map((a) => (
                <tr
                  key={a.id}
                  onClick={() => setSelectedId(a.id)}
                  className="border-b border-border/40 hover:bg-steel/5 cursor-pointer transition-colors"
                >
                  <td className="py-3 px-4 font-medium text-charcoal">{a.id}</td>
                  <td className="py-3 px-4 text-charcoal">{a.title}</td>
                  <td className="py-3 px-4 text-slate">{a.severity}</td>
                  <td className="py-3 px-4 text-slate">{a.linkedAsset}</td>
                  <td className="py-3 px-4 text-slate">{a.owner}</td>
                  <td className="py-3 px-4 text-slate">{a.dueDate}</td>
                  <td className="py-3 px-4">
                    <StatusBadge status={a.status} size="sm" />
                  </td>
                  <td className="py-3 px-4 text-slate text-xs">{a.evidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/25 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-bone rounded-xl border border-border/50 shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between p-5 border-b border-border/50">
                <div>
                  <h3 className="font-semibold text-charcoal text-lg">{selected.id}</h3>
                  <p className="text-sm text-slate mt-0.5">
                    {"sourceInspection" in selected && selected.sourceInspection} · Due {selected.dueDate}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedId(null)}
                  className="p-2 text-slate hover:text-charcoal hover:bg-surface/60 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-5 space-y-5">
                <div>
                  <h4 className="text-[11px] font-semibold text-slate uppercase tracking-wider mb-1">Issue Description</h4>
                  <p className="text-sm text-charcoal leading-relaxed">{selected.title}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div><span className="text-slate">Severity</span><p className="font-medium text-charcoal mt-0.5">{selected.severity}</p></div>
                  <div><span className="text-slate">Source Inspection</span><p className="font-medium text-charcoal mt-0.5">{"sourceInspection" in selected ? selected.sourceInspection : "—"}</p></div>
                  <div><span className="text-slate">Assigned To</span><p className="font-medium text-charcoal mt-0.5">{selected.owner}</p></div>
                  <div><span className="text-slate">Due Date</span><p className="font-medium text-charcoal mt-0.5">{selected.dueDate}</p></div>
                  <div><span className="text-slate">Linked Asset</span><p className="font-medium text-charcoal mt-0.5">{selected.linkedAsset}</p></div>
                  <div><span className="text-slate">Status</span><StatusBadge status={selected.status} size="sm" /></div>
                  {"daysRemaining" in selected && selected.daysRemaining !== undefined && (
                    <div><span className="text-slate">Days Remaining</span><p className="font-medium text-due-soon mt-0.5">{selected.daysRemaining}</p></div>
                  )}
                </div>
                {"verificationPending" in selected && selected.verificationPending && (
                  <div className="rounded-lg border border-due-soon/30 bg-due-soon/10 p-3">
                    <p className="text-sm font-medium text-due-soon">Awaiting supervisor verification</p>
                    <p className="text-xs text-slate mt-0.5">Photo evidence uploaded — sign-off pending</p>
                  </div>
                )}
                {selected.id === "CA-014" && (
                  <div>
                    <h4 className="text-[11px] font-semibold text-slate uppercase tracking-wider mb-2">Progress Timeline</h4>
                    <div className="space-y-2">
                      {ca014Timeline.map((t, i) => (
                        <div key={i} className="flex gap-3 text-sm py-2 border-b border-border/40 last:border-0">
                          <span className="text-slate w-14 flex-shrink-0 font-medium">{t.date}</span>
                          <span className="text-charcoal">{t.event}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div>
                  <h4 className="text-[11px] font-semibold text-slate uppercase tracking-wider mb-1">Uploaded Evidence</h4>
                  <div className="rounded-lg border border-border/50 bg-surface/40 p-6 flex flex-col items-center justify-center gap-1">
                    <span className="text-sm text-slate font-medium">
                      {selected.evidence === "1 photo uploaded"
                        ? "1 photo — berm_crack_mar24.jpg"
                        : "Verified"}
                    </span>
                  </div>
                </div>
                {selected.status === "Closed" && (
                  <div className="rounded-lg border border-compliant/30 bg-compliant/10 p-4">
                    <p className="text-sm font-medium text-compliant">Closure verified</p>
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
