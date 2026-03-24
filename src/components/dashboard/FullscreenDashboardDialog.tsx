import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { facility } from "@/data/sampleDashboardData";

const TAB_COMPONENTS: Record<string, React.ComponentType<any>> = {
  overview: DashboardOverview,
  assets: DashboardAssets,
  inspections: DashboardInspections,
  actions: DashboardActions,
  training: DashboardTraining,
  plan: DashboardPlan,
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
          className="fixed inset-0 z-50 flex flex-col bg-mist/95 backdrop-blur-sm"
        >
          <DashboardHeader
            variant="fullscreen"
            breadcrumb={breadcrumb}
            onExport={() => handleTabChange("audit")}
            onClose={onClose}
          />
          <div className="flex flex-1 min-h-0">
            <aside className="hidden lg:flex w-56 border-r border-border/60 flex-shrink-0 bg-bone/80">
              <DashboardSidebar
                activeTab={activeTab}
                onTabChange={handleTabChange}
                showConsultant={true}
              />
            </aside>
            <div className="lg:hidden overflow-x-auto border-b border-border/60 flex gap-0 flex-shrink-0 bg-bone/80">
              {[
                "overview",
                "assets",
                "inspections",
                "actions",
                "training",
                "plan",
                "audit",
                "consultant",
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`px-3 py-2 text-xs font-medium whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab
                      ? "border-steel text-steel"
                      : "border-transparent text-slate hover:text-charcoal"
                  }`}
                >
                  {tab === "consultant"
                    ? "Consultant"
                    : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <main className="flex-1 overflow-y-auto min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 lg:p-6"
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
