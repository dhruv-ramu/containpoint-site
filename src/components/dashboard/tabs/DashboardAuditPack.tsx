import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, FileDown, Loader2, FileText } from "lucide-react";
import { auditPackSections, evidenceReadiness } from "@/data/sampleDashboardData";
import { downloadAuditPackPdf } from "../pdf/AuditPackDocument";

export function DashboardAuditPack({
  onExportSuccess,
}: {
  onExportSuccess?: () => void;
}) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      await downloadAuditPackPdf();
      setIsGenerated(true);
      onExportSuccess?.();
    } catch {
      setIsGenerating(false);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="p-6 space-y-6">
      {!isGenerated ? (
        <>
          <div className="grid lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-lg border border-border/50 bg-bone p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            >
              <h4 className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-4">
                Package Contents
              </h4>
              <ul className="space-y-3">
                {auditPackSections.map((s, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-6 h-6 rounded-full bg-compliant/15 flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={14} className="text-compliant" />
                    </div>
                    <span className="text-charcoal">{s}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-border/40">
                <div className="flex flex-wrap gap-4 text-xs">
                  <span className="text-slate">Completeness: 100%</span>
                  <span className="text-slate">Missing: 0</span>
                  <span className="text-compliant font-medium">Ready for export</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="rounded-lg border border-border/50 bg-mist/30 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
            >
              <h4 className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-4">
                Evidence Readiness
              </h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate">Inspection records complete</span>
                    <span className="font-medium text-charcoal">{evidenceReadiness.inspectionRecordsComplete}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-surface overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${evidenceReadiness.inspectionRecordsComplete}%` }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="h-full bg-compliant rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate">Signature coverage</span>
                    <span className="font-medium text-charcoal">{evidenceReadiness.signatureCoverage}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-surface overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${evidenceReadiness.signatureCoverage}%` }}
                      transition={{ duration: 0.6, delay: 0.25 }}
                      className="h-full bg-compliant rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate">Photo evidence coverage</span>
                    <span className="font-medium text-charcoal">{evidenceReadiness.photoEvidenceCoverage}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-surface overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${evidenceReadiness.photoEvidenceCoverage}%` }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="h-full bg-due-soon/60 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate">Training acknowledgments current</span>
                    <span className="font-medium text-charcoal">{evidenceReadiness.trainingAcknowledgmentsCurrent}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-surface overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${evidenceReadiness.trainingAcknowledgmentsCurrent}%` }}
                      transition={{ duration: 0.6, delay: 0.35 }}
                      className="h-full bg-due-soon/60 rounded-full"
                    />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-xs text-slate">
                Package compiles facility SPCC Plan, asset inventory, inspection logs, corrective actions, training records, and amendment history.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-lg border border-border/50 bg-bone p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-steel/10 flex items-center justify-center">
                  <FileText size={24} className="text-steel" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal">Generate Audit Pack</h4>
                  <p className="text-sm text-slate mt-0.5">
                    Download a client-ready PDF for inspector review
                  </p>
                </div>
              </div>
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-bone font-medium rounded-lg hover:bg-charcoal/90 disabled:opacity-70 transition-all shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
              >
                {isGenerating ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Generating PDF…
                  </>
                ) : (
                  <>
                    <FileDown size={18} />
                    Download PDF
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-lg border-2 border-compliant/30 bg-compliant/5 p-10 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
        >
          <div className="w-16 h-16 rounded-full bg-compliant/20 flex items-center justify-center mx-auto mb-5">
            <CheckCircle size={32} className="text-compliant" />
          </div>
          <h4 className="text-xl font-semibold text-charcoal">Audit Pack Exported</h4>
          <p className="mt-2 text-slate">
            Exported on {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          </p>
          <p className="mt-1 text-slate text-sm">
            Package status: Complete · Missing items: 0
          </p>
          <p className="mt-5 text-sm text-charcoal font-medium">
            Ready for inspector review
          </p>
          <button
            onClick={handleGenerate}
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-steel border border-steel/40 rounded-lg hover:bg-steel/5 transition-colors"
          >
            <FileDown size={16} />
            Download Again
          </button>
        </motion.div>
      )}
    </div>
  );
}
