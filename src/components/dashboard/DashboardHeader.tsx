import { useState, useEffect, useRef } from "react";
import { StatusBadge } from "./ui/StatusBadge";
import { facility, sampleOrg } from "@/data/sampleDashboardData";
import { FileDown, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

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
  const [facilityDropdownOpen, setFacilityDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentFacility = sampleOrg.facilities[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setFacilityDropdownOpen(false);
      }
    };
    if (facilityDropdownOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [facilityDropdownOpen]);

  return (
    <div className="flex flex-col gap-0">
      {/* Top bar - only in fullscreen */}
      {variant === "fullscreen" && (
      <div className="flex items-center justify-between px-5 py-2.5 border-b border-border/30 bg-bone/50">
        <div className="flex items-center gap-4">
          <span className="text-xs text-slate">{sampleOrg.name}</span>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setFacilityDropdownOpen(!facilityDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-charcoal hover:bg-surface/60 rounded-md border border-border/50 transition-colors"
              aria-haspopup="listbox"
              aria-expanded={facilityDropdownOpen}
            >
              {currentFacility.name}
              <ChevronDown size={14} className={cn("transition-transform", facilityDropdownOpen && "rotate-180")} />
            </button>
            {facilityDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 py-1 min-w-[200px] rounded-lg border border-border/50 bg-bone shadow-lg z-10">
                {sampleOrg.facilities.map((f) => (
                  <div
                    key={f.id}
                    className={cn(
                      "px-3 py-2 text-xs cursor-default",
                      f.id === currentFacility.id ? "bg-steel/10 text-steel font-medium" : "text-charcoal hover:bg-surface/60"
                    )}
                  >
                    {f.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <span className="text-xs text-slate">{sampleOrg.userName}</span>
      </div>
      )}
      {/* Facility header */}
      <div className={cn(
        "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border/50 bg-bone/95 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.04)]",
        variant === "embedded" ? "px-4 py-3" : "px-5 py-4"
      )}>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className={cn("font-semibold text-charcoal tracking-tight truncate", variant === "embedded" ? "text-sm" : "text-base")}>
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
    </div>
  );
}
