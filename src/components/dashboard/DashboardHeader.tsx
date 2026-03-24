import { StatusBadge } from "./ui/StatusBadge";
import { facility } from "@/data/sampleDashboardData";
import { FileDown, X } from "lucide-react";

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
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-5 py-4 border-b border-border/50 bg-bone/95 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="font-semibold text-charcoal text-base tracking-tight truncate">
            {facility.name}
          </h3>
          <span className="text-[10px] font-medium text-slate uppercase tracking-wider px-2 py-0.5 rounded border border-border/60 bg-surface/60">
            Tier II
          </span>
          <StatusBadge status={facility.auditReadiness} size="sm" />
        </div>
        {variant === "fullscreen" && breadcrumb && (
          <p className="text-xs text-slate mt-1.5 truncate">{breadcrumb}</p>
        )}
        <div className="flex items-center gap-4 mt-1.5">
          <span className="text-[11px] text-slate">Updated {facility.lastUpdated}</span>
          {variant === "fullscreen" && (
            <span className="text-[11px] text-slate">
              {facility.inspectionsCompletedThisMonth}/{facility.inspectionsRequiredThisMonth} inspections this month
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        {variant === "fullscreen" && (
          <>
            {onExport && (
              <button
                onClick={onExport}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-bone bg-charcoal rounded-lg hover:bg-charcoal/90 transition-all shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
              >
                <FileDown size={16} />
                Export Audit Pack
              </button>
            )}
            {onClose && (
              <button
                onClick={onClose}
                className="p-2 text-slate hover:text-charcoal hover:bg-surface/60 rounded-lg transition-colors"
                aria-label="Close dashboard"
              >
                <X size={20} />
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
