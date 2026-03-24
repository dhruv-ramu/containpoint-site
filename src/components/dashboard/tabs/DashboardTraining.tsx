import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { StatusBadge } from "../ui/StatusBadge";
import { trainingRecords } from "@/data/sampleDashboardData";

const completionData = [
  { month: "Jan", completed: 2 },
  { month: "Feb", completed: 1 },
  { month: "Mar", completed: 0 },
  { month: "Apr", completed: 1 },
];

const CHART_COLOR = "#5F7C99";
const currentCount = trainingRecords.filter((r) => r.status === "Current").length;
const dueSoonCount = trainingRecords.filter((r) => r.status === "Due Soon").length;

export function DashboardTraining() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Current Personnel", value: trainingRecords.length },
          { label: "Current", value: currentCount },
          { label: "Due Soon", value: dueSoonCount },
          { label: "Overdue", value: 0 },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
            className="rounded-lg border border-border/50 bg-bone p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          >
            <span className="text-[11px] font-medium text-slate uppercase tracking-wider">{item.label}</span>
            <p className="mt-1.5 text-xl font-semibold text-charcoal">{item.value}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="rounded-lg border border-border/50 bg-bone p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
      >
        <h4 className="text-xs font-semibold text-charcoal uppercase tracking-wider mb-4">Training Completion by Month</h4>
        <div className="h-44">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={completionData}>
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#5E6873" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#5E6873" }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#FAF9F6",
                  border: "1px solid #CED6DD",
                  borderRadius: "6px",
                  fontSize: "12px",
                  padding: "8px 12px",
                }}
              />
              <Bar dataKey="completed" name="Completed" fill={CHART_COLOR} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <div className="rounded-lg border border-border/50 overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-mist/30">
                <th className="text-left py-3 px-4 text-[11px] font-medium text-slate uppercase tracking-wider">Employee</th>
                <th className="text-left py-3 px-4 text-[11px] font-medium text-slate uppercase tracking-wider">Role</th>
                <th className="text-left py-3 px-4 text-[11px] font-medium text-slate uppercase tracking-wider">Training Type</th>
                <th className="text-left py-3 px-4 text-[11px] font-medium text-slate uppercase tracking-wider">Last Completed</th>
                <th className="text-left py-3 px-4 text-[11px] font-medium text-slate uppercase tracking-wider">Next Due</th>
                <th className="text-left py-3 px-4 text-[11px] font-medium text-slate uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {trainingRecords.map((r) => (
                <tr
                  key={r.employee}
                  className="border-b border-border/40 hover:bg-steel/5 transition-colors"
                >
                  <td className="py-3 px-4 font-medium text-charcoal">{r.employee}</td>
                  <td className="py-3 px-4 text-slate">{r.role}</td>
                  <td className="py-3 px-4 text-charcoal">{r.trainingType}</td>
                  <td className="py-3 px-4 text-slate">{r.lastCompleted}</td>
                  <td className="py-3 px-4 text-slate">{r.nextDue}</td>
                  <td className="py-3 px-4">
                    <StatusBadge status={r.status} size="sm" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
