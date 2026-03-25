import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { MAIN_NAV } from "@/config/nav";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-charcoal/30 backdrop-blur-[2px] lg:hidden cursor-pointer touch-manipulation"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-bone/95 backdrop-blur-sm border-b border-border/60" : "bg-transparent"
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Primary">
          <div className="flex h-16 items-center justify-between gap-3">
            <Link
              to="/"
              className="font-heading text-xl sm:text-2xl font-semibold tracking-tight text-charcoal hover:text-steel transition-colors min-h-11 flex items-center pr-2 -ml-1 pl-1"
              onClick={() => setMobileOpen(false)}
            >
              ContainPoint
            </Link>

            <div className="hidden lg:flex items-center gap-10">
              {MAIN_NAV.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm font-medium text-slate hover:text-charcoal transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/#book-demo">
                <Button variant="primary" size="sm">
                  Book Demo
                </Button>
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "lg:hidden min-h-11 min-w-11 inline-flex items-center justify-center rounded-md",
                "text-charcoal hover:bg-surface/50 active:bg-surface/70 touch-manipulation"
              )}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-border/60 bg-bone shadow-[0_12px_40px_rgba(23,23,23,0.08)]"
            >
              <div className="px-4 sm:px-6 py-4 space-y-1 max-h-[min(70vh,520px)] overflow-y-auto overscroll-contain">
                {MAIN_NAV.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="flex min-h-12 items-center rounded-md px-2 text-base font-medium text-charcoal hover:bg-mist/80 active:bg-mist touch-manipulation"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-3 pb-1">
                  <Link to="/#book-demo" onClick={() => setMobileOpen(false)} className="block touch-manipulation">
                    <Button variant="primary" className="w-full min-h-12 text-base">
                      Book Demo
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
