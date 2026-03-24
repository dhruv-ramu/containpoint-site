import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DashboardShellProps {
  children: ReactNode;
  className?: string;
  variant?: "embedded" | "fullscreen";
}

export function DashboardShell({ children, className, variant = "embedded" }: DashboardShellProps) {
  return (
    <div
      className={cn(
        "rounded-sm border border-border/60 bg-bone shadow-[0_2px_12px_rgba(23,23,23,0.06)] overflow-hidden",
        variant === "embedded" && "max-w-4xl",
        className
      )}
    >
      {children}
    </div>
  );
}
