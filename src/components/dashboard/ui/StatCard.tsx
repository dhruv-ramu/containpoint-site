import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string | number;
  className?: string;
  subtext?: string;
  highlight?: boolean;
}

export function StatCard({ label, value, className, subtext, highlight }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "rounded-lg border border-border/50 bg-bone p-4 shadow-[0_1px_3px_rgba(23,23,23,0.03)] transition-all hover:shadow-[0_2px_8px_rgba(23,23,23,0.05)]",
        highlight && "border-steel/30 bg-steel/5",
        className
      )}
    >
      <div className="text-[11px] font-medium text-slate uppercase tracking-wider">{label}</div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-xl font-semibold text-charcoal tracking-tight">{value}</span>
        {subtext && <span className="text-sm text-slate">{subtext}</span>}
      </div>
    </motion.div>
  );
}
