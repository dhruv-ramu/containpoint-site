interface DashboardPlaceholderProps {
  title: string;
  description?: string;
}

export function DashboardPlaceholder({ title, description }: DashboardPlaceholderProps) {
  return (
    <div className="p-8 flex flex-col items-center justify-center min-h-[240px] text-center">
      <p className="text-sm font-medium text-charcoal">{title}</p>
      <p className="text-xs text-slate mt-2 max-w-xs">
        {description ?? "This section is available in the full ContainPoint dashboard at dashboard.containpoint.com"}
      </p>
    </div>
  );
}
