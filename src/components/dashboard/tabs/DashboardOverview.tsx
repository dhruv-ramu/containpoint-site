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
import {
  ClipboardCheck,
  AlertTriangle,
  GraduationCap,
  FileText,
  ClipboardList,
  Box,
  Container,
  ChevronRight,
} from "lucide-react";
import { StatCard } from "../ui/StatCard";
import { StatusBadge } from "../ui/StatusBadge";
import {
  facility,
  complianceStatus,
  recentActivity,
  upcomingDeadlines,
  overdueInspectionsSample,
  overdueActionsSample,
  upcomingInspections,
  trainingSummarySample,
  inspectionTrendData,
  findingsByAreaData,
  assetStatusData,
  evidenceReadiness,
  assets,
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

const complianceCardStyle = (status: string) =>
  status === "NONCOMPLIANT"
    ? "border-red-200 bg-red-50/50"
    : status === "AT_RISK"
      ? "border-amber-200 bg-amber-50/50"
      : "border-green-200 bg-green-50/50";

const complianceTextStyle = (status: string) =>
  status === "NONCOMPLIANT"
    ? "text-red-700"
    : status === "AT_RISK"
      ? "text-amber-700"
      : "text-green-700";

export function DashboardOverview({ compact = false }: { compact?: boolean }) {
  const id = useId().replace(/:/g, "");
  const kpis = !compact
    ? [
        { label: "Compliance Score", value: `${facility.complianceScore}%`, highlight: true },
        { label: "Required Inspections This Month", value: facility.inspectionsRequiredThisMonth },
        { label: "Completed This Month", value: facility.inspectionsCompletedThisMonth },
        { label: "Open Corrective Actions", value: facility.openCorrectiveActions },
        { label: "Training Renewals Due", value: facility.trainingRenewalsDue30Days },
        { label: "Plan Review Status", value: "Current" },
      ]
    : null;

  return (
    <div className={compact ? "p-3 space-y-3" : "p-5 lg:p-6 space-y-6"}>
      {/* Compact view - succinct for home page */}
      {compact ? (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            <StatCard label="Compliance Score" value={`${facility.complianceScore}%`} highlight compact />
            <StatCard label="Assets in Good Standing" value={`${facility.assetsInGoodStanding} / ${facility.totalAssets}`} compact />
            <StatCard label="Inspections Due" value={facility.inspectionsDueNext14Days} compact />
            <StatCard label="Open Actions" value={facility.openCorrectiveActions} compact />
          </div>
          <div className="grid lg:grid-cols-2 gap-3">
            <div className="rounded-lg border border-border/50 bg-bone p-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <h4 className="text-[10px] font-semibold text-slate uppercase tracking-wider mb-2">
                90-day Inspection Trend
              </h4>
              <div className="h-24">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={inspectionTrendData.slice(-4)} margin={{ top: 2, right: 2 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.slate} opacity={0.15} vertical={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 9, fill: CHART_COLORS.slate }} axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Tooltip contentStyle={TOOLTIP_STYLE} />
                    <Line type="monotone" dataKey="completed" stroke={CHART_COLORS.compliant} strokeWidth={2} dot={{ fill: CHART_COLORS.compliant, r: 2 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="rounded-lg border border-border/50 bg-bone p-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <h4 className="text-[10px] font-semibold text-slate uppercase tracking-wider mb-2">
                Asset Snapshot
              </h4>
              <div className="space-y-1">
                {assets.slice(0, 4).map((a) => (
                  <div key={a.id} className="flex items-center justify-between py-1.5 px-2 rounded bg-surface/40">
                    <span className="text-xs text-charcoal truncate">{a.name}</span>
                    <StatusBadge status={a.status} size="sm" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-border/50 bg-bone p-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <h4 className="text-[10px] font-semibold text-slate uppercase tracking-wider mb-2">
              Recent Activity
            </h4>
            <div className="space-y-1">
              {recentActivity.slice(0, 3).map((a, i) => {
                const Icon = ACTIVITY_ICONS[a.type] ?? ClipboardCheck;
                return (
                  <div key={i} className="flex gap-2 text-xs py-0.5">
                    <Icon size={12} className="text-slate flex-shrink-0 mt-0.5" />
                    <span className="text-slate flex-shrink-0 w-10">{a.date}</span>
                    <span className="text-charcoal truncate">{a.event}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <>
      {/* Full view - compliance status row */}
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-lg border p-4 ${complianceCardStyle(complianceStatus.overallStatus)}`}
        >
          <p className="text-[11px] font-medium text-slate uppercase tracking-wider">
            Compliance status
          </p>
          <p className={`mt-1 font-semibold ${complianceTextStyle(complianceStatus.overallStatus)}`}>
            {complianceStatus.overallStatus.replace(/_/g, " ")}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.03 }}
          className="rounded-lg border border-border/50 bg-bone p-4"
        >
          <p className="text-[11px] font-medium text-slate uppercase tracking-wider">
            Hard failures
          </p>
          <p className="mt-1 font-semibold text-red-700">
            {complianceStatus.hardFailures}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.06 }}
          className="rounded-lg border border-border/50 bg-bone p-4"
        >
          <p className="text-[11px] font-medium text-slate uppercase tracking-wider">
            Risk flags
          </p>
          <p className="mt-1 font-semibold text-amber-700">
            {complianceStatus.riskFlags}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.09 }}
          className="rounded-lg border border-border/50 bg-bone p-4"
        >
          <p className="text-[11px] font-medium text-slate uppercase tracking-wider">
            Accountable person
          </p>
          <p className="mt-1 font-medium text-charcoal truncate">
            {complianceStatus.accountablePerson}
          </p>
        </motion.div>
      </div>

      {/* Overdue & Upcoming */}
      {(overdueInspectionsSample.length > 0 ||
        overdueActionsSample.length > 0 ||
        upcomingInspections.length > 0) && (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          {overdueInspectionsSample.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-lg border border-amber-200 bg-amber-50/30 p-4"
            >
              <h4 className="text-xs font-semibold text-charcoal flex items-center gap-2 mb-3">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                Overdue inspections
              </h4>
              <ul className="space-y-2 text-sm">
                {overdueInspectionsSample.slice(0, 3).map((s) => (
                  <li key={s.id} className="text-amber-800">
                    {s.template} · {s.asset}
                    <span className="text-slate ml-1">Due {s.dueDate}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
          {overdueActionsSample.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="rounded-lg border border-amber-200 bg-amber-50/30 p-4"
            >
              <h4 className="text-xs font-semibold text-charcoal flex items-center gap-2 mb-3">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                Overdue corrective actions
              </h4>
              <ul className="space-y-2 text-sm">
                {overdueActionsSample.slice(0, 3).map((a) => (
                  <li key={a.id} className="text-amber-800">
                    {a.title}
                    <span className="text-slate ml-1">{a.dueDate}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
          {upcomingInspections.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14 }}
              className="rounded-lg border border-border/50 bg-bone p-4"
            >
              <h4 className="text-xs font-semibold text-charcoal flex items-center gap-2 mb-3">
                <ClipboardCheck className="h-4 w-4" />
                Upcoming inspections
              </h4>
              <ul className="space-y-2 text-sm">
                {upcomingInspections.slice(0, 3).map((s, i) => (
                  <li key={i} className="text-charcoal">
                    {s.template} · {s.asset}
                    <span className="text-slate ml-1">{s.date}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      )}

      {/* Training status */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.16 }}
        className="rounded-lg border border-border/50 bg-bone p-4"
      >
        <h4 className="text-xs font-semibold text-charcoal flex items-center gap-2 mb-2">
          <GraduationCap className="h-4 w-4" />
          Training status
        </h4>
        <p
          className={`text-sm font-medium ${
            trainingSummarySample.hasRecentBriefing ? "text-green-600" : "text-amber-600"
          }`}
        >
          {trainingSummarySample.hasRecentBriefing
            ? "Annual briefing within 365 days"
            : "No annual briefing in last 365 days"}
        </p>
        {trainingSummarySample.latestDate && (
          <p className="text-xs text-slate mt-1">
            Last briefing: {trainingSummarySample.latestDate}
          </p>
        )}
      </motion.div>

      {/* Summary row */}
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        <StatCard label="Qualification tier" value={String(facility.qualificationTier ?? "Tier II").replace(/_/g, " ")} />
        <StatCard label="SPCC applicable" value={facility.spccApplicable ? "Yes" : "No"} />
        <StatCard label="Assets" value={facility.totalAssets} />
        <StatCard label="Containment units" value={facility.containmentUnits ?? 0} />
        <StatCard label="Next 5-yr review" value={facility.nextFiveYearReviewDate ?? "—"} />
      </div>

      {/* Main cards */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-lg border border-border/50 bg-bone p-4"
        >
          <h4 className="font-semibold text-charcoal text-sm">Facility profile</h4>
          <p className="text-xs text-slate mt-0.5">Legal name, address, operating details</p>
          <div className="flex items-center justify-between mt-4">
            <span
              className={`text-sm font-medium ${
                facility.profileComplete ? "text-green-600" : "text-amber-600"
              }`}
            >
              {facility.profileComplete ? "Complete" : "Incomplete"}
            </span>
            <span className="text-xs text-slate flex items-center gap-0.5">
              Edit <ChevronRight className="h-3 w-3" />
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.21 }}
          className="rounded-lg border border-border/50 bg-bone p-4"
        >
          <h4 className="font-semibold text-charcoal text-sm flex items-center gap-2">
            <ClipboardList className="h-4 w-4" />
            Setup status
          </h4>
          <p className="text-xs text-slate mt-0.5">Applicability and qualification wizard</p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm text-slate">
              {facility.setupAssessed ? "Assessed" : "Not assessed"}
            </span>
            <span className="text-xs text-slate flex items-center gap-0.5">
              {facility.setupAssessed ? "Review" : "Start"} <ChevronRight className="h-3 w-3" />
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
          className="rounded-lg border border-border/50 bg-bone p-4"
        >
          <h4 className="font-semibold text-charcoal text-sm flex items-center gap-2">
            <Box className="h-4 w-4" />
            Asset registry
          </h4>
          <p className="text-xs text-slate mt-0.5">Oil storage containers and equipment</p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm font-medium">{facility.totalAssets} assets</span>
            <span className="text-xs text-slate flex items-center gap-0.5">
              Manage <ChevronRight className="h-3 w-3" />
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.23 }}
          className="rounded-lg border border-border/50 bg-bone p-4"
        >
          <h4 className="font-semibold text-charcoal text-sm flex items-center gap-2">
            <Container className="h-4 w-4" />
            Containment registry
          </h4>
          <p className="text-xs text-slate mt-0.5">Secondary containment structures</p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm font-medium">
              {facility.containmentUnits ?? 0} units
            </span>
            <span className="text-xs text-slate flex items-center gap-0.5">
              Manage <ChevronRight className="h-3 w-3" />
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24 }}
          className="rounded-lg border border-border/50 bg-bone p-4 md:col-span-2"
        >
          <h4 className="font-semibold text-charcoal text-sm">File attachments</h4>
          <p className="text-xs text-slate mt-0.5">Plans, calculations, inspection evidence</p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm font-medium">{facility.fileCount ?? 0} files</span>
            <span className="text-xs text-slate flex items-center gap-0.5">
              View in profile <ChevronRight className="h-3 w-3" />
            </span>
          </div>
        </motion.div>
      </div>

      {/* Legacy KPIs */}
      {kpis && (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {kpis.map((kpi) => (
            <StatCard
              key={kpi.label}
              label={kpi.label}
              value={kpi.value}
              highlight={kpi.highlight}
            />
          ))}
        </div>
      )}

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
      </>
    )}

    </div>
  );
}
