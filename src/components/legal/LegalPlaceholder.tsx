type Props = {
  children: React.ReactNode;
};

/** Replace the inner content with your final legal copy. */
export function LegalPlaceholder({ children }: Props) {
  return (
    <div className="my-6 rounded-lg border border-dashed border-steel/35 bg-mist/40 px-5 py-5 text-[0.98rem] leading-relaxed text-slate">
      <p className="text-xs font-semibold uppercase tracking-wider text-steel mb-2">Draft placeholder</p>
      <div className="font-heading italic text-charcoal/85">{children}</div>
    </div>
  );
}
