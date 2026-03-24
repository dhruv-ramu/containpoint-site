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
import { DashboardPlaceholder } from "./tabs/DashboardPlaceholder";
import { FullscreenDashboardDialog } from "./FullscreenDashboardDialog";

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
      <div className="relative">
        <div className="absolute -top-2 left-4 z-10">
          <span className="text-[10px] font-medium text-slate uppercase tracking-wider px-2 py-1 rounded-md bg-mist/90 border border-border/40">
            Live sample data · Interactive demo
          </span>
        </div>
        <DashboardShell variant="embedded">
          <DashboardHeader variant="embedded" />
          <div className="flex flex-col lg:flex-row">
            <div className="hidden lg:block w-48 border-r border-border/50 flex-shrink-0 bg-mist/30">
              <DashboardSidebar
                activeTab={activeTab}
                onTabChange={setActiveTab}
                showConsultant={false}
              />
            </div>
            <div className="lg:hidden flex overflow-x-auto border-b border-border/50 gap-0 bg-mist/20">
              {[
                "overview",
                "assets",
                "plan",
                "inspections",
                "actions",
                "training",
                "audit",
                "consultant",
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 text-xs font-medium whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab
                      ? "border-steel text-steel bg-bone"
                      : "border-transparent text-slate hover:text-charcoal"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1).replace(/([A-Z])/g, " $1")}
                </button>
              ))}
            </div>
            <div className="flex-1 min-w-0 flex flex-col min-h-0">
              <div className="h-[260px] overflow-y-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="h-full"
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
          </div>
          <div className="px-4 py-3 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-2 bg-mist/20">
            <p className="text-xs text-slate">
              Explore facility status, inspections, corrective actions, and audit readiness.
            </p>
            <button
              onClick={handleOpenFullscreen}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-bone bg-charcoal rounded-lg hover:bg-charcoal/90 transition-all shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
            >
              <Maximize2 size={16} />
              Open Full Dashboard
            </button>
          </div>
        </DashboardShell>
      </div>

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
            className="fixed bottom-6 right-6 z-[60] px-4 py-3 rounded-lg bg-compliant/95 text-bone text-sm font-medium shadow-lg"
          >
            Audit pack downloaded successfully
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
