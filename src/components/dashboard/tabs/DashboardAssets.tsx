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
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/60">
              <th className="text-left py-2 px-3 font-medium text-slate">Asset ID</th>
              <th className="text-left py-2 px-3 font-medium text-slate">Name</th>
              <th className="text-left py-2 px-3 font-medium text-slate">Type</th>
              <th className="text-left py-2 px-3 font-medium text-slate">Capacity</th>
              <th className="text-left py-2 px-3 font-medium text-slate">Oil Type</th>
              <th className="text-left py-2 px-3 font-medium text-slate">Containment</th>
              <th className="text-left py-2 px-3 font-medium text-slate">Last Inspection</th>
              <th className="text-left py-2 px-3 font-medium text-slate">Status</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((a) => (
              <tr
                key={a.id}
                onClick={() => setSelectedAsset(a.id)}
                className="border-b border-border/40 hover:bg-surface/30 cursor-pointer transition-colors"
              >
                <td className="py-3 px-3 font-medium text-charcoal">{a.id}</td>
                <td className="py-3 px-3 text-charcoal">{a.name}</td>
                <td className="py-3 px-3 text-slate">{a.type}</td>
                <td className="py-3 px-3 text-slate">{a.capacity}</td>
                <td className="py-3 px-3 text-slate">{a.oilType}</td>
                <td className="py-3 px-3 text-slate">{a.containment}</td>
                <td className="py-3 px-3 text-slate">{a.lastInspection}</td>
                <td className="py-3 px-3">
                  <StatusBadge status={a.status} size="sm" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AnimatePresence>
        {selectedAsset && asset && detail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/20"
            onClick={() => setSelectedAsset(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-bone rounded-sm border border-border/60 shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between p-4 border-b border-border/60">
                <h3 className="font-semibold text-charcoal">{asset.name}</h3>
                <button
                  onClick={() => setSelectedAsset(null)}
                  className="p-1 text-slate hover:text-charcoal"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-4 space-y-4">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="text-slate">Asset ID</span>
                  <span className="text-charcoal">{asset.id}</span>
                  <span className="text-slate">Type</span>
                  <span className="text-charcoal">{asset.type}</span>
                  <span className="text-slate">Capacity</span>
                  <span className="text-charcoal">{asset.capacity}</span>
                  <span className="text-slate">Oil Type</span>
                  <span className="text-charcoal">{asset.oilType}</span>
                  <span className="text-slate">Last Inspection</span>
                  <span className="text-charcoal">{asset.lastInspection}</span>
                  <span className="text-slate">Next Inspection</span>
                  <span className="text-charcoal">{detail.nextInspection}</span>
                  <span className="text-slate">Inspector</span>
                  <span className="text-charcoal">{detail.inspector}</span>
                </div>
                <div>
                  <h4 className="text-xs font-medium text-slate uppercase tracking-wider mb-1">
                    Containment Notes
                  </h4>
                  <p className="text-sm text-charcoal">{detail.containmentNotes}</p>
                </div>
                {detail.linkedActions && detail.linkedActions.length > 0 && (
                  <div>
                    <h4 className="text-xs font-medium text-slate uppercase tracking-wider mb-1">
                      Linked Corrective Actions
                    </h4>
                    <div className="flex gap-2">
                      {detail.linkedActions.map((id) => (
                        <span
                          key={id}
                          className="text-sm text-steel font-medium"
                        >
                          {id}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="rounded-sm border border-border/60 bg-surface/40 p-4 h-24 flex items-center justify-center">
                  <span className="text-xs text-slate">Photo evidence placeholder</span>
                </div>
                <div>
                  <h4 className="text-xs font-medium text-slate uppercase tracking-wider mb-2">
                    Last 3 Inspections
                  </h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate">Mar 15 — Monthly Visual</span>
                      <StatusBadge status="Pass" size="sm" />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate">Feb 15 — Monthly Visual</span>
                      <StatusBadge status="Pass" size="sm" />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate">Jan 15 — Monthly Visual</span>
                      <StatusBadge status="Pass" size="sm" />
                    </div>
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
