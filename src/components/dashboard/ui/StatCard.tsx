import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string | number;
  className?: string;
  subtext?: string;
  highlight?: boolean;
  compact?: boolean;
}

export function StatCard({ label, value, className, subtext, highlight, compact }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "rounded-lg border border-border/50 bg-bone shadow-[0_1px_3px_rgba(23,23,23,0.03)] transition-all hover:shadow-[0_2px_8px_rgba(23,23,23,0.05)]",
        compact ? "p-2" : "p-4",
        highlight && "border-steel/30 bg-steel/5",
        className
      )}
    >
      <div className={cn("font-medium text-slate uppercase tracking-wider", compact ? "text-[10px]" : "text-[11px]")}>{label}</div>
      <div className={cn("flex items-baseline gap-2", compact ? "mt-1" : "mt-2")}>
        <span className={cn("font-semibold text-charcoal tracking-tight", compact ? "text-base" : "text-xl")}>{value}</span>
        {subtext && <span className="text-sm text-slate">{subtext}</span>}
      </div>
    </motion.div>
  );
}
