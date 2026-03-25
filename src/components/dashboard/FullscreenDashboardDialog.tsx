import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardOverview } from "./tabs/DashboardOverview";
import { DashboardAssets } from "./tabs/DashboardAssets";
import { DashboardInspections } from "./tabs/DashboardInspections";
import { DashboardActions } from "./tabs/DashboardActions";
import { DashboardTraining } from "./tabs/DashboardTraining";
import { DashboardPlan } from "./tabs/DashboardPlan";
import { DashboardAuditPack } from "./tabs/DashboardAuditPack";
import { DashboardConsultantView } from "./tabs/DashboardConsultantView";
import { DashboardPlaceholder } from "./tabs/DashboardPlaceholder";
import { facility } from "@/data/sampleDashboardData";

const ExportsPlaceholder = () => <DashboardPlaceholder title="Exports" description="Export facility data and audit-ready packages." />;

const TAB_COMPONENTS: Record<string, React.ComponentType<any>> = {
  overview: DashboardOverview,
  assets: DashboardAssets,
  plan: DashboardPlan,
  inspections: DashboardInspections,
  actions: DashboardActions,
  training: DashboardTraining,
  exports: ExportsPlaceholder,
  audit: DashboardAuditPack,
  consultant: DashboardConsultantView,
};

interface FullscreenDashboardDialogProps {
  open: boolean;
  onClose: () => void;
  initialTab?: string;
  onTabChange?: (tab: string) => void;
  onExportSuccess?: () => void;
}

export function FullscreenDashboardDialog({
  open,
  onClose,
  initialTab = "overview",
  onTabChange,
  onExportSuccess,
}: FullscreenDashboardDialogProps) {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (open) {
      setActiveTab(initialTab);
    }
  }, [open, initialTab]);

  const handleTabChange = useCallback(
    (tab: string) => {
      setActiveTab(tab);
      onTabChange?.(tab);
    },
    [onTabChange]
  );

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const breadcrumb = `${facility.consultantOrg} / ${facility.company} / ${facility.name}`;
  const TabContent = TAB_COMPONENTS[activeTab];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex flex-col bg-mist"
        >
          <Navigation elevatedZIndex />
          <div className="flex flex-1 min-h-0 flex-col pt-16">
            <div className="flex-shrink-0">
              <DashboardHeader
                variant="fullscreen"
                breadcrumb={breadcrumb}
                onExport={() => handleTabChange("audit")}
                onClose={onClose}
              />
            </div>
            <div className="flex flex-1 min-h-0">
            <aside className="hidden lg:flex w-60 border-r border-border/50 flex-shrink-0 bg-bone flex-col">
              <DashboardSidebar
                activeTab={activeTab}
                onTabChange={handleTabChange}
                showConsultant={true}
              />
            </aside>
            <div className="lg:hidden overflow-x-auto border-b border-border/50 flex gap-0 flex-shrink-0 bg-bone px-1 scrollbar-hide snap-x snap-mandatory scroll-px-2">
              {[
                "overview",
                "assets",
                "plan",
                "inspections",
                "actions",
                "training",
                "exports",
                "audit",
                "consultant",
              ].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => handleTabChange(tab)}
                  className={`snap-start shrink-0 px-3 py-2.5 text-[11px] sm:text-xs font-semibold whitespace-nowrap border-b-2 transition-colors min-h-11 touch-manipulation ${
                    activeTab === tab
                      ? "border-steel text-steel bg-mist/40"
                      : "border-transparent text-slate hover:text-charcoal active:bg-mist/30"
                  }`}
                >
                  {tab === "consultant"
                    ? "Consultant"
                    : tab === "overview"
                      ? "Dashboard"
                      : tab === "exports"
                        ? "Exports"
                        : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <main className="flex-1 overflow-y-auto min-w-0 bg-mist/30">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 lg:p-8"
                >
                  {TabContent && (
                    <TabContent
                      {...(activeTab === "audit" && { onExportSuccess })}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </main>
          </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
