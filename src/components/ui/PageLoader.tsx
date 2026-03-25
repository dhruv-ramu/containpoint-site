/** Lightweight route transition indicator for lazy-loaded pages. */
export function PageLoader() {
  return (
    <div className="min-h-[40vh] flex flex-col items-center justify-center gap-3 bg-bone px-6">
      <div
        className="h-9 w-9 rounded-full border-2 border-steel/25 border-t-steel animate-spin"
        aria-hidden
      />
      <p className="text-sm text-slate">Loading…</p>
      <span className="sr-only">Loading page</span>
    </div>
  );
}
