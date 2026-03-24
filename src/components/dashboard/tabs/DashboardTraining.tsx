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

export function DashboardTraining() {
  return (
    <div className="p-4 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-sm border border-border/60 bg-bone p-4"
      >
        <h4 className="text-sm font-medium text-charcoal mb-4">Training Completion Trend</h4>
        <div className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={completionData}>
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#5E6873" }} />
              <YAxis tick={{ fontSize: 11, fill: "#5E6873" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#FAF9F6",
                  border: "1px solid #CED6DD",
                  borderRadius: "2px",
                  fontSize: "12px",
                }}
              />
              <Bar dataKey="completed" name="Completed" fill={CHART_COLOR} radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/60">
              <th className="text-left py-2 px-3 font-medium text-slate">Employee</th>
              <th className="text-left py-2 px-3 font-medium text-slate">Role</th>
              <th className="text-left py-2 px-3 font-medium text-slate">Training Type</th>
              <th className="text-left py-2 px-3 font-medium text-slate">Last Completed</th>
              <th className="text-left py-2 px-3 font-medium text-slate">Next Due</th>
              <th className="text-left py-2 px-3 font-medium text-slate">Status</th>
            </tr>
          </thead>
          <tbody>
            {trainingRecords.map((r) => (
              <tr
                key={r.employee}
                className="border-b border-border/40 hover:bg-surface/30 transition-colors"
              >
                <td className="py-3 px-3 font-medium text-charcoal">{r.employee}</td>
                <td className="py-3 px-3 text-slate">{r.role}</td>
                <td className="py-3 px-3 text-charcoal">{r.trainingType}</td>
                <td className="py-3 px-3 text-slate">{r.lastCompleted}</td>
                <td className="py-3 px-3 text-slate">{r.nextDue}</td>
                <td className="py-3 px-3">
                  <StatusBadge status={r.status} size="sm" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
