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
        "overflow-hidden rounded-xl border border-border/50 bg-bone shadow-[0_4px_24px_rgba(23,23,23,0.06)]",
        variant === "embedded" && "max-w-4xl ring-1 ring-black/5",
        className
      )}
    >
      {children}
    </div>
  );
}
