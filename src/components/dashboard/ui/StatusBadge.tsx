import { cn } from "@/lib/utils";

const STATUS_STYLES: Record<string, string> = {
  "Audit-ready": "bg-compliant/15 text-compliant border-compliant/30",
  Compliant: "bg-compliant/15 text-compliant border-compliant/30",
  "Due Soon": "bg-due-soon/15 text-due-soon border-due-soon/30",
  "In Progress": "bg-due-soon/15 text-due-soon border-due-soon/30",
  Review: "bg-due-soon/15 text-due-soon border-due-soon/30",
  Monitoring: "bg-steel/10 text-steel border-steel/20",
  Closed: "bg-compliant/15 text-compliant border-compliant/30",
  Current: "bg-compliant/15 text-compliant border-compliant/30",
  "Review needed": "bg-due-soon/15 text-due-soon border-due-soon/30",
  "Training due": "bg-due-soon/15 text-due-soon border-due-soon/30",
  Pass: "bg-compliant/15 text-compliant border-compliant/30",
  Fail: "bg-overdue/15 text-overdue border-overdue/30",
  Attention: "bg-due-soon/15 text-due-soon border-due-soon/30",
  "Pending Review": "bg-due-soon/15 text-due-soon border-due-soon/30",
  Verified: "bg-compliant/15 text-compliant border-compliant/30",
};

interface StatusBadgeProps {
  status: string;
  size?: "sm" | "md";
  className?: string;
}

export function StatusBadge({ status, size = "sm", className }: StatusBadgeProps) {
  const style = STATUS_STYLES[status] ?? "bg-surface text-slate border-border";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border font-medium",
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-sm",
        style,
        className
      )}
    >
      {status}
    </span>
  );
}
