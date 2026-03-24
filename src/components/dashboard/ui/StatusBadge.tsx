import { cn } from "@/lib/utils";

const STATUS_STYLES: Record<string, string> = {
  COMPLIANT: "bg-compliant/15 text-compliant border-compliant/25",
  AT_RISK: "bg-due-soon/15 text-due-soon border-due-soon/25",
  NONCOMPLIANT: "bg-overdue/15 text-overdue border-overdue/25",
  "Audit-ready": "bg-compliant/15 text-compliant border-compliant/25",
  Compliant: "bg-compliant/15 text-compliant border-compliant/25",
  "Due Soon": "bg-due-soon/15 text-due-soon border-due-soon/25",
  "In Progress": "bg-due-soon/15 text-due-soon border-due-soon/25",
  Review: "bg-due-soon/15 text-due-soon border-due-soon/25",
  Monitoring: "bg-steel/12 text-steel border-steel/20",
  Closed: "bg-compliant/15 text-compliant border-compliant/25",
  Current: "bg-compliant/15 text-compliant border-compliant/25",
  "Review needed": "bg-due-soon/15 text-due-soon border-due-soon/25",
  "Training due": "bg-due-soon/15 text-due-soon border-due-soon/25",
  Pass: "bg-compliant/15 text-compliant border-compliant/25",
  Fail: "bg-overdue/15 text-overdue border-overdue/25",
  Attention: "bg-due-soon/15 text-due-soon border-due-soon/25",
  "Pending Review": "bg-due-soon/15 text-due-soon border-due-soon/25",
  Verified: "bg-compliant/15 text-compliant border-compliant/25",
};

interface StatusBadgeProps {
  status: string;
  size?: "sm" | "md";
  className?: string;
}

export function StatusBadge({ status, size = "sm", className }: StatusBadgeProps) {
  const style = STATUS_STYLES[status] ?? "bg-surface text-slate border-border/60";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border font-medium",
        size === "sm" ? "px-2 py-0.5 text-[11px]" : "px-2.5 py-1 text-xs",
        style,
        className
      )}
    >
      {status}
    </span>
  );
}
