import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, Clock, ChevronRight, BookOpen } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts";
import { fmtShort, daysAgo, daysFromNow } from "@/lib/dateHelpers";

const TABS = ["assets", "inspections", "actions", "training", "plan"] as const;
type Tab = (typeof TABS)[number];

const assets = [
  { id: "T-001", name: "Diesel Tank A", status: "compliant", lastInspection: fmtShort(daysAgo(8)) },
  { id: "T-002", name: "Aboveground Storage", status: "action-required", lastInspection: fmtShort(daysAgo(13)) },
  { id: "T-003", name: "Generator Tank", status: "compliant", lastInspection: fmtShort(daysAgo(5)) },
  { id: "T-004", name: "Hydraulic Reservoir", status: "scheduled", lastInspection: fmtShort(daysAgo(1)) },
];

const assetPieData = [
  { name: "Compliant", value: 8, color: "#4A7C59" },
  { name: "Due Soon", value: 1, color: "#B8860B" },
  { name: "Review", value: 2, color: "#5F7C99" },
  { name: "Open", value: 1, color: "#9B4D4D" },
];

const inspections = [
  { asset: "Diesel Tank A", result: "Pass", date: fmtShort(daysAgo(8)) },
  { asset: "AST-02 Fuel Storage", result: "Fail", date: fmtShort(daysAgo(2)) },
  { asset: "Generator Tank", result: "Pass", date: fmtShort(daysAgo(5)) },
  { asset: "Transfer Area", result: "Attention", date: fmtShort(daysAgo(0)) },
];

const inspectionBarData = [
  { month: "Jan", completed: 14 },
  { month: "Feb", completed: 13 },
  { month: "Mar", completed: 12 },
];

const correctiveActions = [
  { id: "CA-014", title: "Berm B containment repair", severity: "Medium", due: fmtShort(daysFromNow(3)), progress: 75 },
];

const trainingData = [
  { name: "T. Brooks", status: "Due Soon", pct: 0 },
  { name: "C. Mendoza", status: "Current", pct: 100 },
  { name: "E. Park", status: "Current", pct: 100 },
  { name: "S. Gallagher", status: "Current", pct: 100 },
];

const planChecklist = [
  { label: "Plan current", done: true },
  { label: "5-year review", done: true },
  { label: "Amendment log", done: true },
  { label: "Next review", done: false },
];

function StatusIcon({ status }: { status: string }) {
  if (status === "compliant") return <CheckCircle size={14} className="text-compliant flex-shrink-0" />;
  if (status === "action-required") return <AlertCircle size={14} className="text-due-soon flex-shrink-0" />;
  return <Clock size={14} className="text-slate flex-shrink-0" />;
}

const TAB_INTERVAL_MS = 4000;

export function DashboardMock() {
  const [tab, setTab] = useState<Tab>("assets");
  const autoAdvanceRef = useRef(true);

  useEffect(() => {
    const id = setInterval(() => {
      if (!autoAdvanceRef.current) return;
      setTab((prev) => {
        const i = TABS.indexOf(prev);
        return TABS[(i + 1) % TABS.length];
      });
    }, TAB_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleTabClick = (t: Tab) => {
    autoAdvanceRef.current = false;
    setTab(t);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      autoAdvanceRef.current = true;
      pauseTimeoutRef.current = null;
    }, TAB_INTERVAL_MS * 2);
  };

  useEffect(() => () => { if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current); }, []);

  return (
    <motion.div
      className="relative rounded-sm border border-border/70 bg-mist/80 shadow-[0_4px_24px_rgba(23,23,23,0.06)] overflow-hidden group w-full min-w-[320px] max-w-[420px]"
      whileHover={{ boxShadow: "0 12px 40px rgba(23,23,23,0.1)" }}
      transition={{ duration: 0.2 }}
    >
      {/* Header with tabs */}
      <div className="flex items-center border-b border-border/60 bg-surface/40 px-3 py-2">
        <div className="flex gap-1 overflow-x-auto scrollbar-hide flex-1 min-w-0">
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => handleTabClick(t)}
              className={`px-2.5 py-1.5 rounded-md text-[11px] font-medium whitespace-nowrap transition-all ${
                tab === t ? "bg-bone text-charcoal shadow-sm" : "text-slate hover:text-charcoal hover:bg-bone/50"
              }`}
            >
              {t === "assets" && "Assets"}
              {t === "inspections" && "Inspections"}
              {t === "actions" && "Actions"}
              {t === "training" && "Training"}
              {t === "plan" && "SPCC Plan"}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 min-h-[220px]">
        <AnimatePresence mode="wait">
          {tab === "assets" && (
            <motion.div
              key="assets"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div className="flex gap-3">
                <div className="w-16 h-16 flex-shrink-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={assetPieData} cx="50%" cy="50%" innerRadius={18} outerRadius={28} paddingAngle={2} dataKey="value">
                        {assetPieData.map((e, i) => (
                          <Cell key={i} fill={e.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-medium text-slate uppercase tracking-wider mb-1">Status</div>
                  <div className="space-y-0.5">
                    {assetPieData.map((d) => (
                      <div key={d.name} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: d.color }} />
                        <span className="text-[11px] text-charcoal">{d.name}</span>
                        <span className="text-[11px] text-slate ml-auto">{d.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="text-[10px] font-medium text-slate uppercase tracking-wider mb-1.5">Assets</div>
                <div className="space-y-1">
                  {assets.map((a) => (
                    <motion.div
                      key={a.id}
                      className="flex items-center justify-between py-1.5 px-2 rounded bg-bone/80 border border-border/30 cursor-default"
                      whileHover={{ x: 2, backgroundColor: "rgba(231,236,239,0.8)" }}
                      transition={{ duration: 0.15 }}
                    >
                      <div className="flex items-center gap-1.5 min-w-0">
                        <StatusIcon status={a.status} />
                        <span className="text-xs text-charcoal truncate">{a.name}</span>
                      </div>
                      <span className="text-[10px] text-slate flex-shrink-0">{a.lastInspection}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {tab === "inspections" && (
            <motion.div
              key="inspections"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div className="h-12">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={inspectionBarData} margin={{ top: 2, right: 4, left: 4, bottom: 0 }}>
                    <XAxis dataKey="month" tick={{ fontSize: 9, fill: "#5E6873" }} axisLine={false} tickLine={false} />
                    <YAxis hide domain={[0, 16]} />
                    <Bar dataKey="completed" fill="#5F7C99" radius={[3, 3, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="text-[10px] text-slate font-medium">12/14 completed this month</div>
              <div>
                <div className="text-[10px] font-medium text-slate uppercase tracking-wider mb-1.5">Recent</div>
                <div className="space-y-1">
                  {inspections.map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center justify-between gap-2 py-1.5 px-2 rounded bg-bone/80 border border-border/30 cursor-default"
                      whileHover={{ x: 2, backgroundColor: "rgba(231,236,239,0.8)" }}
                      transition={{ duration: 0.15 }}
                    >
                      <span className="text-xs text-charcoal truncate min-w-0">{item.asset}</span>
                      <span
                        className={`text-[10px] flex-shrink-0 font-medium ${
                          item.result === "Pass" ? "text-compliant" : item.result === "Fail" ? "text-overdue" : "text-due-soon"
                        }`}
                      >
                        {item.result}
                      </span>
                      <span className="text-[10px] text-slate flex-shrink-0">{item.date}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {tab === "actions" && (
            <motion.div
              key="actions"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              {correctiveActions.map((ca) => (
                <motion.div
                  key={ca.id}
                  className="rounded-lg border-2 border-due-soon/30 bg-due-soon/5 p-3 cursor-default"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.15 }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-charcoal">{ca.id}</span>
                    <span className="text-[10px] font-medium text-due-soon bg-due-soon/20 px-1.5 py-0.5 rounded">Medium</span>
                  </div>
                  <p className="text-xs text-charcoal mb-2">{ca.title}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] text-slate">Due {ca.due}</span>
                    <span className="text-[10px] text-compliant">75% complete</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-surface overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-due-soon to-compliant"
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-[10px] text-slate">
                    <span>Logged</span>
                    <ChevronRight size={10} />
                    <span>Assigned</span>
                    <ChevronRight size={10} />
                    <span>In progress</span>
                    <ChevronRight size={10} />
                    <span className="text-due-soon font-medium">Verify</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {tab === "training" && (
            <motion.div
              key="training"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 flex-shrink-0">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path d="M18 2.5 a 15.5 15.5 0 0 1 0 31 a 15.5 15.5 0 0 1 0 -31" fill="none" stroke="#E7ECEF" strokeWidth="3" />
                    <motion.path
                      d="M18 2.5 a 15.5 15.5 0 0 1 0 31 a 15.5 15.5 0 0 1 0 -31"
                      fill="none"
                      stroke="#4A7C59"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="97"
                      initial={{ strokeDashoffset: 97 }}
                      animate={{ strokeDashoffset: 97 - 97 * 0.75 }}
                      transition={{ duration: 0.8 }}
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-charcoal">75%</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-charcoal">3 of 4 current</div>
                  <div className="text-[10px] text-slate">1 renewal due soon</div>
                </div>
              </div>
              <div>
                <div className="text-[10px] font-medium text-slate uppercase tracking-wider mb-1.5">Personnel</div>
                <div className="space-y-1">
                  {trainingData.map((t) => (
                    <motion.div
                      key={t.name}
                      className="flex items-center justify-between py-1.5 px-2 rounded bg-bone/80 border border-border/30 cursor-default"
                      whileHover={{ x: 2, backgroundColor: "rgba(231,236,239,0.8)" }}
                      transition={{ duration: 0.15 }}
                    >
                      <span className="text-xs text-charcoal">{t.name}</span>
                      <span
                        className={`text-[10px] font-medium ${
                          t.status === "Current" ? "text-compliant" : "text-due-soon"
                        }`}
                      >
                        {t.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {tab === "plan" && (
            <motion.div
              key="plan"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-2 p-3 rounded-lg bg-compliant/10 border border-compliant/20">
                <BookOpen size={18} className="text-compliant flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-charcoal">v3.2 · Current</div>
                  <div className="text-[10px] text-slate">Next review in 54 months</div>
                </div>
              </div>
              <div>
                <div className="text-[10px] font-medium text-slate uppercase tracking-wider mb-1.5">Checklist</div>
                <div className="space-y-1">
                  {planChecklist.map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-2 py-1.5 px-2 rounded bg-bone/80 border border-border/30 cursor-default"
                      whileHover={{ x: 2, backgroundColor: "rgba(231,236,239,0.8)" }}
                      transition={{ duration: 0.15 }}
                    >
                      <span
                        className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[8px] ${
                          item.done ? "bg-compliant/20 text-compliant" : "bg-surface text-slate"
                        }`}
                      >
                        {item.done ? "✓" : ""}
                      </span>
                      <span className="text-xs text-charcoal">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 pointer-events-none rounded-sm border-2 border-transparent group-hover:border-steel/20 transition-colors duration-200" />
    </motion.div>
  );
}
