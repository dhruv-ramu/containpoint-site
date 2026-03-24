import { useState, useId } from "react";
import { motion } from "framer-motion";
import {
  Database,
  ClipboardCheck,
  AlertTriangle,
  CheckSquare,
  FileStack,
  Package,
  FileDown,
  ChevronRight,
} from "lucide-react";
import { generatedDateLong } from "@/lib/dateHelpers";
import {
  facility,
  evidenceReadiness,
  correctiveActions,
  assets,
  inspections,
  inspectionTrendData,
  findingsByAreaData,
  ca014Timeline,
  auditPackSections,
} from "@/data/sampleDashboardData";
import { downloadAuditPackPdf } from "@/components/dashboard/pdf/AuditPackDocument";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const NODES = [
  { id: "assets", label: "Asset Registry", icon: Database },
  { id: "inspections", label: "Inspection Engine", icon: ClipboardCheck },
  { id: "findings", label: "Findings Detection", icon: AlertTriangle },
  { id: "actions", label: "Corrective Actions", icon: CheckSquare },
  { id: "evidence", label: "Evidence & Records", icon: FileStack },
  { id: "audit", label: "Audit Pack", icon: Package },
];

const CHART_COLORS = { steel: "#5F7C99", compliant: "#4A7C59", slate: "#5E6873" };

function assetCategories() {
  const counts: Record<string, number> = {};
  assets.forEach((a) => {
    const type = a.type === "Aboveground Tank" ? "Aboveground tanks" : a.type === "Generator Day Tank" ? "Generator-related" : a.type === "Drum Storage" ? "Drum storage zones" : a.type === "Transfer Area" ? "Transfer areas" : a.type === "Reservoir" ? "Reservoirs" : a.type;
    counts[type] = (counts[type] ?? 0) + 1;
  });
  return Object.entries(counts);
}

const zones = [...new Set(assets.map((a) => a.zone))];

export function HowItWorksSection() {
  const [selectedNode, setSelectedNode] = useState<string>("assets");
  const [pdfLoading, setPdfLoading] = useState(false);
  const gradientId = useId().replace(/:/g, "");

  const handleDownloadPdf = async () => {
    setPdfLoading(true);
    try {
      await downloadAuditPackPdf();
    } finally {
      setPdfLoading(false);
    }
  };

  const categories = assetCategories();

  return (
    <section id="how-it-works" className="py-16 lg:py-20 bg-mist/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-charcoal tracking-tight">
            How It Works
          </h2>
          <p className="mt-2 text-base font-medium text-charcoal">
            Compliance is not a checklist. It's a connected operating system.
          </p>
          <p className="mt-1 text-sm text-slate max-w-2xl">
            Track assets, inspections, findings, corrective actions, and audit evidence in one continuous workflow.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[2fr_3fr] gap-8 lg:gap-10 items-start">
          {/* Left: Compact workflow flow */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col"
          >
            <div className="rounded-xl border border-border/50 bg-bone p-3 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
              {NODES.map((node, i) => {
                const Icon = node.icon;
                const isSelected = selectedNode === node.id;
                return (
                  <div key={node.id} className="relative">
                    <motion.button
                      onClick={() => setSelectedNode(node.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                        isSelected
                          ? "bg-steel/12 border border-steel/30"
                          : "hover:bg-surface/60 border border-transparent"
                      }`}
                      whileHover={{ x: 2 }}
                    >
                      <div
                        className={`w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 ${
                          isSelected ? "bg-steel/20" : "bg-surface/80"
                        }`}
                      >
                        <Icon size={16} className={isSelected ? "text-steel" : "text-slate"} />
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          isSelected ? "text-charcoal" : "text-slate"
                        }`}
                      >
                        {node.label}
                      </span>
                      {isSelected && (
                        <ChevronRight size={14} className="text-steel ml-auto flex-shrink-0" />
                      )}
                    </motion.button>
                    {i < NODES.length - 1 && (
                      <div className="flex justify-center py-0.5">
                        <div
                          className="w-px h-3 bg-border/60"
                          style={{
                            background: `linear-gradient(to bottom, transparent, rgba(95,124,153,0.3), transparent)`,
                          }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Rich product panel */}
          <motion.div
            key={selectedNode}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="rounded-xl border border-border/50 bg-bone overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] min-h-[320px]"
          >
            <div className="p-5 lg:p-6">
              {selectedNode === "assets" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="rounded-lg border border-border/50 bg-mist/30 p-3">
                      <p className="text-[11px] font-medium text-slate uppercase tracking-wider">Total assets</p>
                      <p className="text-xl font-semibold text-charcoal mt-0.5">{facility.totalAssets}</p>
                    </div>
                    <div className="rounded-lg border border-border/50 bg-mist/30 p-3">
                      <p className="text-[11px] font-medium text-slate uppercase tracking-wider">In good standing</p>
                      <p className="text-xl font-semibold text-charcoal mt-0.5">{facility.assetsInGoodStanding}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-slate uppercase tracking-wider mb-2">Asset categories</p>
                    <div className="flex flex-wrap gap-2">
                      {categories.map(([name, count]) => (
                        <span
                          key={name}
                          className="px-2.5 py-1 rounded-md border border-border/50 bg-surface/40 text-xs text-charcoal"
                        >
                          {count} {name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-slate uppercase tracking-wider mb-2">Zones</p>
                    <div className="flex flex-wrap gap-2">
                      {zones.map((z) => (
                        <span key={z} className="px-2 py-0.5 rounded border border-steel/20 bg-steel/5 text-xs text-steel">
                          {z}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-slate uppercase tracking-wider mb-2">Asset snapshot</p>
                    <div className="space-y-1">
                      {assets.slice(0, 4).map((a) => (
                        <div
                          key={a.id}
                          className="flex justify-between items-center py-2 px-3 rounded-lg bg-surface/40 text-sm"
                        >
                          <span className="font-medium text-charcoal">{a.id} {a.name}</span>
                          <span
                            className={`text-[11px] px-2 py-0.5 rounded ${
                              a.status === "Compliant" ? "bg-compliant/15 text-compliant" : a.status === "Due Soon" ? "bg-due-soon/15 text-due-soon" : "bg-slate/15 text-slate"
                            }`}
                          >
                            {a.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {selectedNode === "inspections" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="rounded-lg border border-border/50 bg-mist/30 p-3">
                      <p className="text-[11px] font-medium text-slate uppercase tracking-wider">Scheduled</p>
                      <p className="text-lg font-semibold text-charcoal mt-0.5">{facility.inspectionsRequiredThisMonth}</p>
                    </div>
                    <div className="rounded-lg border border-border/50 bg-mist/30 p-3">
                      <p className="text-[11px] font-medium text-slate uppercase tracking-wider">Completed</p>
                      <p className="text-lg font-semibold text-compliant mt-0.5">{facility.inspectionsCompletedThisMonth}</p>
                    </div>
                    <div className="rounded-lg border border-border/50 bg-mist/30 p-3">
                      <p className="text-[11px] font-medium text-slate uppercase tracking-wider">Due soon</p>
                      <p className="text-lg font-semibold text-due-soon mt-0.5">{facility.inspectionsDueNext14Days}</p>
                    </div>
                    <div className="rounded-lg border border-border/50 bg-mist/30 p-3">
                      <p className="text-[11px] font-medium text-slate uppercase tracking-wider">Pending signoff</p>
                      <p className="text-lg font-semibold text-charcoal mt-0.5">1</p>
                    </div>
                  </div>
                  <div className="h-32">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={inspectionTrendData.slice(-4)}>
                        <defs>
                          <linearGradient id={`inspFill-${gradientId}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={CHART_COLORS.compliant} stopOpacity={0.3} />
                            <stop offset="100%" stopColor={CHART_COLORS.compliant} stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.slate} opacity={0.2} vertical={false} />
                        <XAxis dataKey="month" tick={{ fontSize: 10, fill: CHART_COLORS.slate }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fontSize: 10, fill: CHART_COLORS.slate }} axisLine={false} tickLine={false} width={24} />
                        <Tooltip contentStyle={{ backgroundColor: "#FAF9F6", border: "1px solid #CED6DD", borderRadius: "4px", fontSize: "11px" }} />
                        <Area type="monotone" dataKey="completed" stroke={CHART_COLORS.compliant} fill={`url(#inspFill-${gradientId})`} strokeWidth={1.5} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-slate uppercase tracking-wider mb-2">Recent inspections</p>
                    <div className="space-y-1">
                      {inspections.slice(0, 4).map((i) => (
                        <div key={i.id} className="flex justify-between items-center py-2 px-3 rounded-lg bg-surface/40 text-sm">
                          <span className="text-charcoal">{i.asset}</span>
                          <span className={`text-[11px] ${i.result === "Pass" ? "text-compliant" : i.result === "Fail" ? "text-overdue" : "text-due-soon"}`}>
                            {i.result}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {selectedNode === "findings" && (
                <div className="space-y-4">
                  <div className="rounded-lg border border-due-soon/30 bg-due-soon/5 p-4">
                    <p className="text-[11px] font-medium text-slate uppercase tracking-wider mb-1">Open finding</p>
                    <p className="font-medium text-charcoal">Secondary containment crack at Berm B</p>
                    <p className="text-sm text-slate mt-1">Medium severity · Logged {correctiveActions.find((c) => c.id === "CA-014")?.createdDate ?? ""}</p>
                    <p className="text-xs text-steel mt-0.5">Linked to INSP-2389 · CA-014 created</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-slate uppercase tracking-wider mb-2">Findings by area</p>
                    <div className="space-y-2">
                      {findingsByAreaData.map((f) => (
                        <div key={f.area} className="flex justify-between items-center text-sm">
                          <span className="text-charcoal">{f.area}</span>
                          <span className="font-medium text-charcoal">{f.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-slate uppercase tracking-wider mb-2">Source inspection</p>
                    <div className="rounded-lg border border-border/50 bg-surface/40 p-3 text-sm">
                      <p className="font-medium text-charcoal">INSP-2389 — AST-02 Fuel Storage Tank</p>
                      <p className="text-slate text-xs mt-0.5">Monthly visual · Failed {inspections.find((i) => i.id === "INSP-2389")?.date ?? ""}</p>
                    </div>
                  </div>
                </div>
              )}

              {selectedNode === "actions" && (
                <div className="space-y-4">
                  {correctiveActions
                    .filter((a) => a.status !== "Closed")
                    .map((a) => (
                      <div key={a.id} className="rounded-lg border-2 border-due-soon/30 bg-due-soon/5 p-4">
                        <div className="flex justify-between items-start">
                          <p className="font-semibold text-charcoal">{a.id}</p>
                          <span className="text-[11px] font-medium text-due-soon px-2 py-0.5 rounded bg-due-soon/20">
                            {a.daysRemaining} days remaining
                          </span>
                        </div>
                        <p className="text-sm text-charcoal mt-1">{a.title}</p>
                        <div className="flex flex-wrap gap-2 mt-3 text-xs text-slate">
                          <span>Owner: {a.owner}</span>
                          <span>Due: {a.dueDate}</span>
                          <span>{a.evidence}</span>
                        </div>
                        <div className="mt-4 pt-3 border-t border-border/40">
                          <p className="text-[11px] font-medium text-slate uppercase tracking-wider mb-2">Progress</p>
                          <div className="space-y-1.5">
                            {ca014Timeline.map((t, i) => (
                              <div key={i} className="flex gap-2 text-sm">
                                <span className="text-slate w-12 flex-shrink-0">{t.date}</span>
                                <span className="text-charcoal">{t.event}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}

              {selectedNode === "evidence" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Inspection records", value: evidenceReadiness.inspectionRecordsComplete },
                      { label: "Signature coverage", value: evidenceReadiness.signatureCoverage },
                      { label: "Photo evidence", value: evidenceReadiness.photoEvidenceCoverage },
                      { label: "Training acknowledgments", value: evidenceReadiness.trainingAcknowledgmentsCurrent },
                    ].map((item) => (
                      <div key={item.label} className="rounded-lg border border-border/50 p-3">
                        <p className="text-[11px] font-medium text-slate uppercase tracking-wider mb-1">{item.label}</p>
                        <p className="text-xl font-semibold text-charcoal">{item.value}%</p>
                        <div className="mt-2 h-1.5 rounded-full bg-surface overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-compliant"
                            initial={{ width: 0 }}
                            animate={{ width: `${item.value}%` }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-slate uppercase tracking-wider mb-2">Document checklist</p>
                    <div className="space-y-1.5">
                      {["Inspection logs complete", "Signatures verified", "Photos attached", "Training records current"].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <span className="w-4 h-4 rounded-sm border border-compliant/50 bg-compliant/20 flex items-center justify-center text-compliant text-[10px]">✓</span>
                          <span className="text-charcoal">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {selectedNode === "audit" && (
                <div className="space-y-4">
                  <div className="rounded-lg border-2 border-compliant/30 bg-compliant/5 p-4 text-center">
                    <p className="text-sm font-semibold text-compliant">Ready for inspector review</p>
                    <p className="text-xs text-slate mt-1">Generated {generatedDateLong()}</p>
                    <p className="text-xs text-slate">0 missing items</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-slate uppercase tracking-wider mb-2">Included sections</p>
                    <ul className="space-y-1.5">
                      {auditPackSections.map((s, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-charcoal">
                          <ChevronRight size={12} className="text-steel flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={handleDownloadPdf}
                    disabled={pdfLoading}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-charcoal text-bone font-medium rounded-lg hover:bg-charcoal/90 transition-colors disabled:opacity-70"
                  >
                    <FileDown size={18} />
                    {pdfLoading ? "Generating PDF…" : "Download Sample PDF"}
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
