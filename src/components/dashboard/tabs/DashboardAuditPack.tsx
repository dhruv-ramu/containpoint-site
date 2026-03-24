import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, FileDown, Loader2 } from "lucide-react";
import { auditPackSections } from "@/data/sampleDashboardData";

export function DashboardAuditPack({
  onExportSuccess,
}: {
  onExportSuccess?: () => void;
}) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setIsGenerated(true);
      onExportSuccess?.();
    }, 2000);
  };

  return (
    <div className="p-4 space-y-6">
      {!isGenerated ? (
        <>
          <div className="rounded-sm border border-border/60 bg-bone p-4">
            <h4 className="text-sm font-medium text-charcoal mb-4">Audit Pack Contents</h4>
            <ul className="space-y-2">
              {auditPackSections.map((s, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <CheckCircle size={16} className="text-compliant flex-shrink-0" />
                  <span className="text-charcoal">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-sm border border-border/60 bg-surface/40 p-6 text-center"
          >
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-bone font-medium rounded-sm hover:bg-charcoal/90 disabled:opacity-70 transition-all"
            >
              {isGenerating ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Generating audit pack…
                </>
              ) : (
                <>
                  <FileDown size={18} />
                  Generate Audit Pack
                </>
              )}
            </button>
          </motion.div>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-sm border border-compliant/30 bg-compliant/10 p-8 text-center"
        >
          <CheckCircle size={48} className="text-compliant mx-auto mb-4" />
          <h4 className="text-xl font-semibold text-charcoal">Audit Pack Generated</h4>
          <p className="mt-2 text-slate text-sm">
            Exported on: Mar 23, 2026
          </p>
          <p className="mt-1 text-slate text-sm">
            Package status: Complete · Missing items: 0
          </p>
          <p className="mt-4 text-sm text-charcoal font-medium">
            Ready for inspector review
          </p>
        </motion.div>
      )}

      {!isGenerated && (
        <div className="rounded-sm border border-border/60 bg-bone p-4 text-sm text-slate">
          <p>Generate a complete audit-ready package with inspection logs, corrective actions, training records, and compliance documentation.</p>
        </div>
      )}
    </div>
  );
}
