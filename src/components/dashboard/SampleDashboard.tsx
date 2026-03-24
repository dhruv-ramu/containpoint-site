import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { DashboardShell } from "./DashboardShell";
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
import { FullscreenDashboardDialog } from "./FullscreenDashboardDialog";

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

export function SampleDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);

  const handleOpenFullscreen = useCallback(() => {
    setFullscreenOpen(true);
  }, []);

  const handleExportSuccess = useCallback(() => {
    setExportSuccess(true);
    setTimeout(() => setExportSuccess(false), 3000);
  }, []);

  const TabContent = TAB_COMPONENTS[activeTab];

  return (
    <>
      <DashboardShell variant="embedded">
        <DashboardHeader variant="embedded" />
        <div className="flex flex-col lg:flex-row">
          <div className="hidden lg:block w-48 border-r border-border/60 flex-shrink-0">
            <DashboardSidebar
              activeTab={activeTab}
              onTabChange={setActiveTab}
              showConsultant={false}
            />
          </div>
          <div className="lg:hidden flex overflow-x-auto border-b border-border/60 gap-0">
            {[
              "overview",
              "assets",
              "inspections",
              "actions",
              "training",
              "plan",
              "audit",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-2 text-xs font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab
                    ? "border-steel text-steel"
                    : "border-transparent text-slate hover:text-charcoal"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1).replace(/([A-Z])/g, " $1")}
              </button>
            ))}
          </div>
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
              >
                {TabContent && (
                  <TabContent
                    {...(activeTab === "overview" && { compact: true })}
                    {...(activeTab === "audit" && { onExportSuccess: handleExportSuccess })}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="px-4 py-3 border-t border-border/60 flex justify-center">
          <button
            onClick={handleOpenFullscreen}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-steel border border-steel/40 rounded-sm hover:bg-steel/5 transition-colors"
          >
            <Maximize2 size={16} />
            Explore Full Dashboard
          </button>
        </div>
      </DashboardShell>

      <FullscreenDashboardDialog
        open={fullscreenOpen}
        onClose={() => setFullscreenOpen(false)}
        initialTab={activeTab}
        onTabChange={setActiveTab}
        onExportSuccess={handleExportSuccess}
      />

      <AnimatePresence>
        {exportSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-[60] px-4 py-3 rounded-sm bg-compliant/90 text-bone text-sm font-medium shadow-lg"
          >
            Audit pack exported successfully
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
