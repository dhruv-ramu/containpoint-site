import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  Box,
  ClipboardCheck,
  AlertTriangle,
  GraduationCap,
  Package,
  Building2,
  Download,
} from "lucide-react";

const NAV_ITEMS = [
  { id: "overview", label: "Dashboard", icon: LayoutDashboard },
  { id: "assets", label: "Assets", icon: Box },
  { id: "plan", label: "Plan", icon: FileText },
  { id: "inspections", label: "Inspections", icon: ClipboardCheck },
  { id: "actions", label: "Corrective Actions", icon: AlertTriangle },
  { id: "training", label: "Training", icon: GraduationCap },
  { id: "exports", label: "Exports", icon: Download },
  { id: "audit", label: "Audit Pack", icon: Package },
  { id: "consultant", label: "Consultant View", icon: Building2 },
];

interface DashboardSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  showConsultant?: boolean;
}

export function DashboardSidebar({
  activeTab,
  onTabChange,
  showConsultant = true,
}: DashboardSidebarProps) {
  const items = showConsultant ? NAV_ITEMS : NAV_ITEMS.filter((i) => i.id !== "consultant");
  return (
    <nav className="flex flex-col gap-0.5 p-3">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={cn(
              "flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-left text-sm font-medium transition-all",
              isActive
                ? "bg-steel/12 text-steel shadow-sm"
                : "text-slate hover:bg-surface/70 hover:text-charcoal"
            )}
          >
            <Icon size={17} className="flex-shrink-0 opacity-80" />
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}
