import { useId } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { ClipboardCheck, AlertTriangle, GraduationCap, FileText } from "lucide-react";
import { StatCard } from "../ui/StatCard";
import { StatusBadge } from "../ui/StatusBadge";
import {
  facility,
  recentActivity,
  upcomingDeadlines,
  inspectionTrendData,
  findingsByAreaData,
  assetStatusData,
  assets,
  evidenceReadiness,
} from "@/data/sampleDashboardData";

const CHART_COLORS = {
  steel: "#5F7C99",
  compliant: "#4A7C59",
  dueSoon: "#B8860B",
  overdue: "#9B4D4D",
  slate: "#5E6873",
};

const TOOLTIP_STYLE = {
  backgroundColor: "#FAF9F6",
  border: "1px solid #CED6DD",
  borderRadius: "6px",
  fontSize: "12px",
  padding: "8px 12px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
};

const ACTIVITY_ICONS: Record<string, typeof ClipboardCheck> = {
  inspection: ClipboardCheck,
  action: AlertTriangle,
  training: GraduationCap,
  plan: FileText,
};

export function DashboardOverview({ compact = false }: { compact?: boolean }) {
  const id = useId().replace(/:/g, "");
  const kpis = compact
    ? [
        { label: "Compliance Score", value: `${facility.complianceScore}%`, highlight: true },
        { label: "Assets in Good Standing", value: `${facility.assetsInGoodStanding} / ${facility.totalAssets}` },
        { label: "Inspections Due", value: facility.inspectionsDueNext14Days },
        { label: "Open Actions", value: facility.openCorrectiveActions },
      ]
    : [
        { label: "Compliance Score", value: `${facility.complianceScore}%`, highlight: true },
        { label: "Required Inspections This Month", value: facility.inspectionsRequiredThisMonth },
        { label: "Completed This Month", value: facility.inspectionsCompletedThisMonth },
        { label: "Open Corrective Actions", value: facility.openCorrectiveActions },
        { label: "Training Renewals Due", value: facility.trainingRenewalsDue30Days },
        { label: "Plan Review Status", value: "Current" },
      ];

  return (
    <div className="p-5 lg:p-6 space-y-6">
      <div
        className={
          compact
            ? "grid grid-cols-2 lg:grid-cols-4 gap-4"
            : "grid grid-cols-2 lg:grid-cols-3 gap-4"
        }
      >
        {kpis.map((kpi) => (
          <StatCard
            key={kpi.label}
            label={kpi.label}
            value={kpi.value}
            highlight={kpi.highlight}
          />
        ))}
      </div>

      {!compact && (
        <>
          <div className="grid lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 rounded-lg border border-border/50 bg-bone p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            >
              <h4 className="text-xs font-semibold text-charcoal uppercase tracking-wider mb-4">
                Inspection Completion Trend
              </h4>
              <div className="h-52">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={inspectionTrendData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id={`fillScheduled-${id}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={CHART_COLORS.slate} stopOpacity={0.15} />
                        <stop offset="100%" stopColor={CHART_COLORS.slate} stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id={`fillCompleted-${id}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={CHART_COLORS.compliant} stopOpacity={0.35} />
                        <stop offset="100%" stopColor={CHART_COLORS.compliant} stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.slate} opacity={0.15} vertical={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 11, fill: CHART_COLORS.slate }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: CHART_COLORS.slate }} axisLine={false} tickLine={false} width={28} />
                    <Tooltip contentStyle={TOOLTIP_STYLE} />
                    <Legend wrapperStyle={{ fontSize: "11px" }} />
                    <Area type="monotone" dataKey="scheduled" name="Scheduled" stroke={CHART_COLORS.slate} fill={`url(#fillScheduled-${id})`} strokeWidth={1.5} />
                    <Area type="monotone" dataKey="completed" name="Completed" stroke={CHART_COLORS.compliant} fill={`url(#fillCompleted-${id})`} strokeWidth={1.5} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="rounded-lg border border-due-soon/30 bg-due-soon/5 p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            >
              <h4 className="text-xs font-semibold text-charcoal uppercase tracking-wider mb-4">
                Next Critical Deadline
              </h4>
              <p className="text-2xl font-semibold text-charcoal">{facility.nextCriticalDeadline}</p>
              <p className="mt-2 text-sm text-slate leading-snug">{facility.nextCriticalItem}</p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="rounded-lg border border-border/50 bg-bone p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            >
              <h4 className="text-xs font-semibold text-charcoal uppercase tracking-wider mb-4">
                Open Findings by Area
              </h4>
              <div className="h-44">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={findingsByAreaData} layout="vertical" margin={{ left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.slate} opacity={0.15} horizontal={false} />
                    <XAxis type="number" tick={{ fontSize: 11, fill: CHART_COLORS.slate }} axisLine={false} tickLine={false} />
                    <YAxis type="category" dataKey="area" width={120} tick={{ fontSize: 11, fill: CHART_COLORS.slate }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={TOOLTIP_STYLE} />
                    <Bar dataKey="count" name="Open" fill={CHART_COLORS.steel} radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="rounded-lg border border-border/50 bg-bone p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            >
              <h4 className="text-xs font-semibold text-charcoal uppercase tracking-wider mb-4">
                Evidence Readiness
              </h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate">Inspection records</span>
                    <span className="font-medium text-charcoal">{evidenceReadiness.inspectionRecordsComplete}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-surface overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${evidenceReadiness.inspectionRecordsComplete}%` }} transition={{ duration: 0.6 }} className="h-full bg-compliant rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate">Signature coverage</span>
                    <span className="font-medium text-charcoal">{evidenceReadiness.signatureCoverage}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-surface overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${evidenceReadiness.signatureCoverage}%` }} transition={{ duration: 0.6, delay: 0.05 }} className="h-full bg-compliant rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate">Photo evidence</span>
                    <span className="font-medium text-charcoal">{evidenceReadiness.photoEvidenceCoverage}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-surface overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${evidenceReadiness.photoEvidenceCoverage}%` }} transition={{ duration: 0.6, delay: 0.1 }} className="h-full bg-due-soon/60 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate">Training acknowledgments</span>
                    <span className="font-medium text-charcoal">{evidenceReadiness.trainingAcknowledgmentsCurrent}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-surface overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${evidenceReadiness.trainingAcknowledgmentsCurrent}%` }} transition={{ duration: 0.6, delay: 0.15 }} className="h-full bg-due-soon/60 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-lg border border-border/50 bg-bone p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            >
              <h4 className="text-xs font-semibold text-charcoal uppercase tracking-wider mb-4">
                Asset Status Mix
              </h4>
              <div className="h-44">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={assetStatusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={36}
                      outerRadius={56}
                      paddingAngle={2}
                      dataKey="value"
                      nameKey="name"
                    >
                      {assetStatusData.map((_, i) => (
                        <Cell key={i} fill={[CHART_COLORS.compliant, CHART_COLORS.dueSoon, CHART_COLORS.steel, CHART_COLORS.overdue][i]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={TOOLTIP_STYLE} formatter={(value) => [`${value ?? 0} assets`, ""]} />
                    <Legend layout="vertical" align="right" verticalAlign="middle" wrapperStyle={{ fontSize: "11px" }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
              className="lg:col-span-2 rounded-lg border border-border/50 bg-bone p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            >
              <h4 className="text-xs font-semibold text-charcoal uppercase tracking-wider mb-4">
                Recent Activity
              </h4>
              <div className="space-y-2.5 max-h-44 overflow-y-auto">
                {recentActivity.slice(0, 6).map((a, i) => {
                  const Icon = ACTIVITY_ICONS[a.type] ?? ClipboardCheck;
                  return (
                    <div key={i} className="flex gap-3 items-start py-1.5 group">
                      <div className="w-7 h-7 rounded-md bg-surface/80 flex items-center justify-center flex-shrink-0 group-hover:bg-steel/10 transition-colors">
                        <Icon size={14} className="text-slate group-hover:text-steel" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-slate text-xs flex-shrink-0">{a.date} {a.time}</span>
                        <p className="text-sm text-charcoal mt-0.5 leading-snug">{a.event}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="rounded-lg border border-border/50 bg-bone p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          >
            <h4 className="text-xs font-semibold text-charcoal uppercase tracking-wider mb-4">
              Upcoming Deadlines
            </h4>
            <div className="space-y-3">
              {upcomingDeadlines.map((d, i) => (
                <div key={i} className="flex gap-4 text-sm py-2 border-b border-border/40 last:border-0">
                  <span className="text-slate w-14 flex-shrink-0 font-medium">{d.date}</span>
                  <span className="text-charcoal">{d.item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}

      {compact && (
        <>
          <div className="grid lg:grid-cols-2 gap-5">
            <div className="rounded-lg border border-border/50 bg-bone p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <h4 className="text-[11px] font-semibold text-slate uppercase tracking-wider mb-3">
                90-day Inspection Trend
              </h4>
              <div className="h-36">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={inspectionTrendData.slice(-4)} margin={{ top: 4, right: 4 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.slate} opacity={0.15} vertical={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 10, fill: CHART_COLORS.slate }} axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Tooltip contentStyle={TOOLTIP_STYLE} />
                    <Line type="monotone" dataKey="completed" stroke={CHART_COLORS.compliant} strokeWidth={2} dot={{ fill: CHART_COLORS.compliant, r: 3 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="rounded-lg border border-border/50 bg-bone p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <h4 className="text-[11px] font-semibold text-slate uppercase tracking-wider mb-3">
                Asset Snapshot
              </h4>
              <div className="space-y-2">
                {assets.slice(0, 5).map((a) => (
                  <div key={a.id} className="flex items-center justify-between py-2 px-3 rounded-lg bg-surface/40 hover:bg-surface/60 transition-colors">
                    <span className="text-sm text-charcoal truncate">{a.name}</span>
                    <StatusBadge status={a.status} size="sm" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-border/50 bg-bone p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <h4 className="text-[11px] font-semibold text-slate uppercase tracking-wider mb-3">
              Recent Activity
            </h4>
            <div className="space-y-2">
              {recentActivity.slice(0, 4).map((a, i) => {
                const Icon = ACTIVITY_ICONS[a.type] ?? ClipboardCheck;
                return (
                  <div key={i} className="flex gap-2.5 text-sm py-1">
                    <Icon size={14} className="text-slate flex-shrink-0 mt-0.5" />
                    <span className="text-slate flex-shrink-0 w-12">{a.date}</span>
                    <span className="text-charcoal truncate">{a.event}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
