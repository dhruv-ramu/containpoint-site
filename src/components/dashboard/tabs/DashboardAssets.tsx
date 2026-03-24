import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { StatusBadge } from "../ui/StatusBadge";
import { assets, assetDetails } from "@/data/sampleDashboardData";

export function DashboardAssets() {
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null);

  const detail = selectedAsset ? assetDetails[selectedAsset] : null;
  const asset = selectedAsset ? assets.find((a) => a.id === selectedAsset) : null;

  return (
    <div className="p-6">
      <div className="rounded-lg border border-border/50 overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-mist/30">
                <th className="text-left py-3 px-4 text-[11px] font-medium text-slate uppercase tracking-wider">Asset ID</th>
                <th className="text-left py-3 px-4 text-[11px] font-medium text-slate uppercase tracking-wider">Name</th>
                <th className="text-left py-3 px-4 text-[11px] font-medium text-slate uppercase tracking-wider">Type</th>
                <th className="text-left py-3 px-4 text-[11px] font-medium text-slate uppercase tracking-wider">Zone</th>
                <th className="text-left py-3 px-4 text-[11px] font-medium text-slate uppercase tracking-wider">Capacity</th>
                <th className="text-left py-3 px-4 text-[11px] font-medium text-slate uppercase tracking-wider">Containment</th>
                <th className="text-left py-3 px-4 text-[11px] font-medium text-slate uppercase tracking-wider">Last Insp.</th>
                <th className="text-left py-3 px-4 text-[11px] font-medium text-slate uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((a) => (
                <tr
                  key={a.id}
                  onClick={() => setSelectedAsset(a.id)}
                  className="border-b border-border/40 hover:bg-steel/5 cursor-pointer transition-colors"
                >
                  <td className="py-3 px-4 font-medium text-charcoal">{a.id}</td>
                  <td className="py-3 px-4 text-charcoal">{a.name}</td>
                  <td className="py-3 px-4 text-slate">{a.type}</td>
                  <td className="py-3 px-4 text-slate">{a.zone}</td>
                  <td className="py-3 px-4 text-slate">{a.capacity}</td>
                  <td className="py-3 px-4 text-slate">{a.containment}</td>
                  <td className="py-3 px-4 text-slate">{a.lastInspection}</td>
                  <td className="py-3 px-4">
                    <StatusBadge status={a.status} size="sm" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AnimatePresence>
        {selectedAsset && asset && detail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/25 backdrop-blur-sm"
            onClick={() => setSelectedAsset(null)}
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
                  <h3 className="font-semibold text-charcoal text-lg">{asset.name}</h3>
                  <p className="text-sm text-slate mt-0.5">{asset.id} · {asset.zone}</p>
                </div>
                <button
                  onClick={() => setSelectedAsset(null)}
                  className="p-2 text-slate hover:text-charcoal hover:bg-surface/60 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-5 space-y-5">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div><span className="text-slate">Asset ID</span><p className="font-medium text-charcoal mt-0.5">{asset.id}</p></div>
                  <div><span className="text-slate">Type</span><p className="font-medium text-charcoal mt-0.5">{asset.type}</p></div>
                  <div><span className="text-slate">Capacity</span><p className="font-medium text-charcoal mt-0.5">{asset.capacity}</p></div>
                  <div><span className="text-slate">Oil Type</span><p className="font-medium text-charcoal mt-0.5">{asset.oilType}</p></div>
                  <div><span className="text-slate">Zone</span><p className="font-medium text-charcoal mt-0.5">{asset.zone}</p></div>
                  <div><span className="text-slate">Material</span><p className="font-medium text-charcoal mt-0.5">{asset.material}</p></div>
                  <div><span className="text-slate">Last Inspection</span><p className="font-medium text-charcoal mt-0.5">{asset.lastInspection}</p></div>
                  <div><span className="text-slate">Next Inspection</span><p className="font-medium text-charcoal mt-0.5">{detail.nextInspection}</p></div>
                  <div><span className="text-slate">Inspector</span><p className="font-medium text-charcoal mt-0.5">{detail.inspector}</p></div>
                  <div><span className="text-slate">Evidence Complete</span><p className="font-medium text-charcoal mt-0.5">{asset.evidenceComplete}%</p></div>
                </div>
                {detail.overfillProtection && (
                  <div>
                    <h4 className="text-[11px] font-semibold text-slate uppercase tracking-wider mb-1">Overfill Protection</h4>
                    <p className="text-sm text-charcoal">{detail.overfillProtection}</p>
                  </div>
                )}
                {detail.nextTestRequirement && (
                  <div>
                    <h4 className="text-[11px] font-semibold text-slate uppercase tracking-wider mb-1">Next Test Requirement</h4>
                    <p className="text-sm text-charcoal">{detail.nextTestRequirement}</p>
                  </div>
                )}
                <div>
                  <h4 className="text-[11px] font-semibold text-slate uppercase tracking-wider mb-1">Containment Notes</h4>
                  <p className="text-sm text-charcoal leading-relaxed">{detail.containmentNotes}</p>
                </div>
                {detail.linkedActions && detail.linkedActions.length > 0 && (
                  <div>
                    <h4 className="text-[11px] font-semibold text-slate uppercase tracking-wider mb-1">Linked Corrective Actions</h4>
                    <div className="flex gap-2">
                      {detail.linkedActions.map((id) => (
                        <span key={id} className="text-sm font-medium text-steel px-2 py-1 rounded bg-steel/10">{id}</span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="rounded-lg border border-border/50 bg-surface/40 p-6 flex flex-col items-center justify-center gap-1">
                  <span className="text-xs text-slate font-medium">Photo evidence</span>
                  <span className="text-[11px] text-slate">Inspection documentation attached</span>
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold text-slate uppercase tracking-wider mb-2">Last 3 Inspections</h4>
                  <div className="space-y-2">
                    {["Mar 15 — Monthly Visual", "Feb 15 — Monthly Visual", "Jan 15 — Monthly Visual"].map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-2 px-3 rounded-lg bg-surface/40">
                        <span className="text-sm text-charcoal">{item}</span>
                        <StatusBadge status="Pass" size="sm" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
