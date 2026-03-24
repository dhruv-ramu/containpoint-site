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
} from "recharts";
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
} from "@/data/sampleDashboardData";

const CHART_COLORS = {
  steel: "#5F7C99",
  compliant: "#4A7C59",
  dueSoon: "#B8860B",
  overdue: "#9B4D4D",
  slate: "#5E6873",
};

export function DashboardOverview({ compact = false }: { compact?: boolean }) {
  const id = useId().replace(/:/g, "");
  const kpis = compact
    ? [
        { label: "Compliance Score", value: `${facility.complianceScore}%` },
        { label: "Assets in Good Standing", value: `${facility.assetsInGoodStanding} / ${facility.totalAssets}` },
        { label: "Inspections Due", value: facility.inspectionsDueNext14Days },
        { label: "Open Actions", value: facility.openCorrectiveActions },
      ]
    : [
        { label: "Compliance Score", value: `${facility.complianceScore}%` },
        { label: "Required Inspections This Month", value: 14 },
        { label: "Completed This Month", value: 12 },
        { label: "Open Corrective Actions", value: facility.openCorrectiveActions },
        { label: "Training Renewals Due", value: facility.trainingRenewalsDue30Days },
        { label: "Plan Review Status", value: "Current" },
      ];

  return (
    <div className="p-4 space-y-6">
      <div
        className={
          compact
            ? "grid grid-cols-2 lg:grid-cols-4 gap-3"
            : "grid grid-cols-2 lg:grid-cols-3 gap-4"
        }
      >
        {kpis.map((kpi) => (
          <StatCard key={kpi.label} label={kpi.label} value={kpi.value} />
        ))}
      </div>

      {!compact && (
        <>
          <div className="grid lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-sm border border-border/60 bg-bone p-4"
            >
              <h4 className="text-sm font-medium text-charcoal mb-4">
                Inspection Completion Trend
              </h4>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={inspectionTrendData}>
                    <defs>
                      <linearGradient id={`fillScheduled-${id}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={CHART_COLORS.slate} stopOpacity={0.2} />
                        <stop offset="100%" stopColor={CHART_COLORS.slate} stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id={`fillCompleted-${id}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={CHART_COLORS.compliant} stopOpacity={0.3} />
                        <stop offset="100%" stopColor={CHART_COLORS.compliant} stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.slate} opacity={0.2} />
                    <XAxis dataKey="month" tick={{ fontSize: 11, fill: CHART_COLORS.slate }} />
                    <YAxis tick={{ fontSize: 11, fill: CHART_COLORS.slate }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#FAF9F6",
                        border: "1px solid #CED6DD",
                        borderRadius: "2px",
                        fontSize: "12px",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="scheduled"
                      name="Scheduled"
                      stroke={CHART_COLORS.slate}
                      fill={`url(#fillScheduled-${id})`}
                      strokeWidth={1.5}
                    />
                    <Area
                      type="monotone"
                      dataKey="completed"
                      name="Completed"
                      stroke={CHART_COLORS.compliant}
                      fill={`url(#fillCompleted-${id})`}
                      strokeWidth={1.5}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="rounded-sm border border-border/60 bg-bone p-4"
            >
              <h4 className="text-sm font-medium text-charcoal mb-4">
                Open Findings by Area
              </h4>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={findingsByAreaData} layout="vertical" margin={{ left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.slate} opacity={0.2} />
                    <XAxis type="number" tick={{ fontSize: 11, fill: CHART_COLORS.slate }} />
                    <YAxis
                      type="category"
                      dataKey="area"
                      width={110}
                      tick={{ fontSize: 10, fill: CHART_COLORS.slate }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#FAF9F6",
                        border: "1px solid #CED6DD",
                        borderRadius: "2px",
                        fontSize: "12px",
                      }}
                    />
                    <Bar dataKey="count" name="Open" fill={CHART_COLORS.steel} radius={[0, 2, 2, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-sm border border-border/60 bg-bone p-4"
            >
              <h4 className="text-sm font-medium text-charcoal mb-4">Asset Status Mix</h4>
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={assetStatusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      paddingAngle={2}
                      dataKey="value"
                      nameKey="name"
                      label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {assetStatusData.map((_, i) => (
                        <Cell
                          key={i}
                          fill={
                            [CHART_COLORS.compliant, CHART_COLORS.dueSoon, CHART_COLORS.steel, CHART_COLORS.overdue][
                              i
                            ]
                          }
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#FAF9F6",
                        border: "1px solid #CED6DD",
                        borderRadius: "2px",
                        fontSize: "12px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="rounded-sm border border-border/60 bg-bone p-4 lg:col-span-2"
            >
              <h4 className="text-sm font-medium text-charcoal mb-4">Recent Activity</h4>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {recentActivity.slice(0, 6).map((a, i) => (
                  <div key={i} className="flex gap-2 text-sm">
                    <span className="text-slate flex-shrink-0">{a.date}</span>
                    <span className="text-charcoal">{a.event}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-sm border border-border/60 bg-bone p-4"
          >
            <h4 className="text-sm font-medium text-charcoal mb-4">Upcoming Deadlines</h4>
            <div className="space-y-2">
              {upcomingDeadlines.map((d, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <span className="text-slate w-16 flex-shrink-0">{d.date}</span>
                  <span className="text-charcoal">{d.item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}

      {compact && (
        <>
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="rounded-sm border border-border/60 bg-bone p-4">
              <h4 className="text-xs font-medium text-slate uppercase tracking-wider mb-3">
                90-day Inspection Trend
              </h4>
              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={inspectionTrendData.slice(-3)}>
                    <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.slate} opacity={0.2} />
                    <XAxis dataKey="month" tick={{ fontSize: 10, fill: CHART_COLORS.slate }} />
                    <YAxis tick={{ fontSize: 10, fill: CHART_COLORS.slate }} hide />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#FAF9F6",
                        border: "1px solid #CED6DD",
                        borderRadius: "2px",
                        fontSize: "11px",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="completed"
                      stroke={CHART_COLORS.compliant}
                      strokeWidth={2}
                      dot={{ fill: CHART_COLORS.compliant, r: 3 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="rounded-sm border border-border/60 bg-bone p-4">
              <h4 className="text-xs font-medium text-slate uppercase tracking-wider mb-3">
                Asset Snapshot
              </h4>
              <div className="space-y-1.5">
                {assets.slice(0, 5).map((a) => (
                  <div
                    key={a.id}
                    className="flex items-center justify-between py-1.5 px-2 rounded bg-surface/40"
                  >
                    <span className="text-sm text-charcoal truncate">{a.name}</span>
                    <StatusBadge status={a.status} size="sm" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-sm border border-border/60 bg-bone p-4">
            <h4 className="text-xs font-medium text-slate uppercase tracking-wider mb-3">
              Recent Activity
            </h4>
            <div className="space-y-1.5">
              {recentActivity.slice(0, 4).map((a, i) => (
                <div key={i} className="flex gap-2 text-sm">
                  <span className="text-slate flex-shrink-0">{a.date}</span>
                  <span className="text-charcoal truncate">{a.event}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
