import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string | number;
  className?: string;
  subtext?: string;
}

export function StatCard({ label, value, className, subtext }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "rounded-sm border border-border/60 bg-bone p-4 shadow-[0_1px_3px_rgba(23,23,23,0.03)] transition-shadow hover:shadow-[0_2px_6px_rgba(23,23,23,0.05)]",
        className
      )}
    >
      <div className="text-xs font-medium text-slate uppercase tracking-wider">{label}</div>
      <div className="mt-1 flex items-baseline gap-2">
        <span className="text-xl font-semibold text-charcoal">{value}</span>
        {subtext && <span className="text-sm text-slate">{subtext}</span>}
      </div>
    </motion.div>
  );
}
