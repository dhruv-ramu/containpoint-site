import { StatusBadge } from "./ui/StatusBadge";
import { facility } from "@/data/sampleDashboardData";

interface DashboardHeaderProps {
  variant?: "embedded" | "fullscreen";
  onExport?: () => void;
  onClose?: () => void;
  breadcrumb?: string;
}

export function DashboardHeader({
  variant = "embedded",
  onExport,
  onClose,
  breadcrumb,
}: DashboardHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3 border-b border-border/60 bg-surface/30">
      <div className="min-w-0">
        <h3 className="font-semibold text-charcoal truncate">{facility.name}</h3>
        {variant === "fullscreen" && breadcrumb && (
          <p className="text-xs text-slate mt-0.5 truncate">{breadcrumb}</p>
        )}
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <span className="text-xs text-slate border border-border/60 rounded-sm px-2 py-0.5">
          Tier II
        </span>
        <StatusBadge status={facility.auditReadiness} size="sm" />
        {variant === "embedded" && (
          <span className="text-xs text-slate">Updated {facility.lastUpdated}</span>
        )}
        {variant === "fullscreen" && (
          <>
            {onExport && (
              <button
                onClick={onExport}
                className="text-xs font-medium text-steel hover:text-charcoal px-2 py-1 rounded-sm hover:bg-steel/5 transition-colors"
              >
                Export Audit Pack
              </button>
            )}
            {onClose && (
              <button
                onClick={onClose}
                className="text-xs font-medium text-slate hover:text-charcoal px-2 py-1 rounded-sm hover:bg-surface transition-colors"
              >
                Close Dashboard
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
