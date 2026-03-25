import { useState, useCallback, useEffect, type ComponentType } from "react";
import { useLocation } from "react-router-dom";
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

const ExportsPlaceholder = () => (
  <DashboardPlaceholder title="Exports" description="Export facility data and audit-ready packages." />
);

const TAB_COMPONENTS: Record<string, ComponentType<any>> = {
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

const SAMPLE_TABS = [
  "overview",
  "assets",
  "plan",
  "inspections",
  "actions",
  "training",
  "exports",
  "audit",
  "consultant",
] as const;

function tabLabel(tab: string) {
  if (tab === "consultant") return "Consultant";
  if (tab === "overview") return "Dashboard";
  if (tab === "exports") return "Exports";
  return tab.charAt(0).toUpperCase() + tab.slice(1);
}

export function SampleDashboard() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("overview");
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);

  useEffect(() => {
    setFullscreenOpen(false);
  }, [location.pathname, location.hash]);

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
      <div className="relative rounded-lg overflow-hidden border border-border/50 shadow-sm">
        <div className="absolute top-2 left-2 sm:left-3 z-10 max-w-[calc(100%-1rem)]">
          <span className="text-[10px] font-medium text-slate uppercase tracking-wider px-2 py-1 rounded-md bg-bone/95 border border-border/50 shadow-sm">
            Live sample · Interactive
          </span>
        </div>
        <DashboardShell variant="embedded">
          <DashboardHeader variant="embedded" />
          <div className="flex flex-col lg:flex-row pt-9 sm:pt-8">
            <div className="hidden lg:block w-48 border-r border-border/50 flex-shrink-0 bg-mist/30">
              <DashboardSidebar
                activeTab={activeTab}
                onTabChange={setActiveTab}
                showConsultant={false}
              />
            </div>
            <div className="lg:hidden flex overflow-x-auto border-b border-border/50 gap-0 bg-bone scrollbar-hide snap-x snap-mandatory scroll-px-2 px-1">
              {SAMPLE_TABS.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`snap-start shrink-0 px-3 py-2.5 text-[11px] sm:text-xs font-semibold whitespace-nowrap border-b-2 transition-colors min-h-11 touch-manipulation ${
                    activeTab === tab
                      ? "border-steel text-steel bg-mist/40"
                      : "border-transparent text-slate hover:text-charcoal active:bg-mist/30"
                  }`}
                >
                  {tabLabel(tab)}
                </button>
              ))}
            </div>
            <div className="flex-1 min-w-0 flex flex-col min-h-0 bg-mist/20">
              <div className="min-h-[min(52dvh,340px)] sm:min-h-[260px] h-[min(52dvh,340px)] sm:h-[260px] lg:h-[260px] overflow-y-auto overscroll-contain">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="h-full p-2 sm:p-3"
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
          <div className="px-3 sm:px-4 py-3 border-t border-border/50 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 bg-bone/80">
            <p className="text-xs text-slate text-center lg:text-left leading-relaxed">
              Explore facility status, inspections, corrective actions, and audit readiness.
            </p>
            <button
              type="button"
              onClick={handleOpenFullscreen}
              className="hidden lg:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-bone bg-charcoal rounded-lg hover:bg-charcoal/90 transition-all shadow-sm touch-manipulation"
            >
              <Maximize2 size={16} aria-hidden />
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
            className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-[120] px-4 py-3 rounded-lg bg-compliant/95 text-bone text-sm font-medium shadow-lg text-center sm:text-left"
          >
            Audit pack downloaded successfully
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
