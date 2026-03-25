import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { ChevronLeft, ChevronRight, FileText } from "lucide-react";
import { ARTICLES } from "@/data/articles";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 6500;
/** Tailwind gap-4 — must match `className="gap-4"` on the track */
const GAP_PX = 16;

export function ResourcesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [paused, setPaused] = useState(false);

  const count = ARTICLES.length;
  /** When there are fewer articles than columns, only use as many columns as items. */
  const effectivePerView = Math.min(slidesPerView, Math.max(1, count));
  const maxIndex = Math.max(0, count - effectivePerView);
  const positionCount = maxIndex + 1;

  useEffect(() => {
    const mqLg = window.matchMedia("(min-width: 1024px)");
    const mqSm = window.matchMedia("(min-width: 640px)");
    const update = () => {
      if (mqLg.matches) setSlidesPerView(3);
      else if (mqSm.matches) setSlidesPerView(2);
      else setSlidesPerView(1);
    };
    update();
    mqLg.addEventListener("change", update);
    mqSm.addEventListener("change", update);
    return () => {
      mqLg.removeEventListener("change", update);
      mqSm.removeEventListener("change", update);
    };
  }, []);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => setContainerWidth(el.offsetWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const slideWidth =
    containerWidth > 0 && effectivePerView > 0
      ? (containerWidth - (effectivePerView - 1) * GAP_PX) / effectivePerView
      : 0;

  const stepPx = slideWidth > 0 ? slideWidth + GAP_PX : 0;
  const trackWidth =
    slideWidth > 0 ? count * slideWidth + Math.max(0, count - 1) * GAP_PX : 0;

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + positionCount) % positionCount);
  }, [positionCount]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % positionCount);
  }, [positionCount]);

  useEffect(() => {
    if (reducedMotion || positionCount <= 1 || paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % positionCount);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [positionCount, reducedMotion, paused]);

  const showControls = positionCount > 1;

  return (
    <section id="resources" className="py-16 sm:py-20 lg:py-28 bg-mist/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 lg:mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal tracking-tight">
            Resources
          </h2>
          <p className="mt-4 text-lg text-slate max-w-2xl">
            Learn more about SPCC compliance and requirements. Browse the full library on the{" "}
            <Link
              to="/resources"
              className="text-steel font-medium hover:text-charcoal transition-colors underline underline-offset-2"
            >
              resources index
            </Link>
            .
          </p>
          <p className="mt-3 text-base text-slate max-w-2xl leading-relaxed">
            When you are ready to operationalize this with software, see the{" "}
            <Link to="/#product" className="text-steel font-medium hover:text-charcoal underline underline-offset-2">
              SPCC compliance platform
            </Link>
            ,{" "}
            <Link to="/#pricing" className="text-steel font-medium hover:text-charcoal underline underline-offset-2">
              pricing
            </Link>
            , or{" "}
            <Link to="/#book-demo" className="text-steel font-medium hover:text-charcoal underline underline-offset-2">
              book a demo
            </Link>
            .
          </p>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            ref={containerRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="SPCC resource articles"
            className="relative overflow-hidden rounded-lg"
          >
            <motion.div
              className="flex gap-4"
              animate={{
                x: stepPx > 0 ? -index * stepPx : 0,
              }}
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 380, damping: 36 }
              }
              style={{
                width: trackWidth > 0 ? trackWidth : "100%",
              }}
            >
              {ARTICLES.map((article) => (
                <div
                  key={article.slug}
                  className="shrink-0"
                  style={{
                    width: slideWidth > 0 ? slideWidth : undefined,
                    minWidth: slideWidth > 0 ? slideWidth : "100%",
                  }}
                >
                  <Link
                    to={`/resources/${article.slug}`}
                    className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-steel/40 focus-visible:ring-offset-2 rounded-lg"
                  >
                    <Card className="h-full min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] cursor-pointer group hover:border-steel/30 transition-colors border-border/60">
                      <CardHeader className="pb-2">
                        <div className="w-10 h-10 rounded-sm flex items-center justify-center bg-surface/80 border border-border/60 mb-2 group-hover:bg-steel/10 group-hover:border-steel/20 transition-colors">
                          <FileText size={20} className="text-steel" />
                        </div>
                        <CardTitle className="text-base lg:text-lg group-hover:text-steel transition-colors leading-snug line-clamp-2">
                          {article.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-slate leading-relaxed line-clamp-3 mb-3 lg:mb-4">
                          {article.description}
                        </p>
                        <span className="text-sm text-steel font-medium">Read article →</span>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </motion.div>
          </div>

          {showControls && (
            <>
              {/* Mobile / tablet: large tap targets below track (avoids overlapping cards) */}
              <div className="mt-5 flex justify-center gap-10 lg:hidden">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous resources"
                  className={cn(
                    "min-h-12 min-w-12 rounded-full border border-border/70 bg-bone shadow-sm",
                    "inline-flex items-center justify-center text-charcoal hover:bg-mist hover:border-steel/30 transition-colors touch-manipulation"
                  )}
                >
                  <ChevronLeft className="h-6 w-6" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next resources"
                  className={cn(
                    "min-h-12 min-w-12 rounded-full border border-border/70 bg-bone shadow-sm",
                    "inline-flex items-center justify-center text-charcoal hover:bg-mist hover:border-steel/30 transition-colors touch-manipulation"
                  )}
                >
                  <ChevronRight className="h-6 w-6" aria-hidden />
                </button>
              </div>
              {/* Desktop: side controls */}
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous resources"
                className={cn(
                  "hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10",
                  "h-11 w-11 rounded-full border border-border/70 bg-bone/95 shadow-sm",
                  "items-center justify-center text-charcoal hover:bg-mist hover:border-steel/30 transition-colors touch-manipulation"
                )}
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next resources"
                className={cn(
                  "hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10",
                  "h-11 w-11 rounded-full border border-border/70 bg-bone/95 shadow-sm",
                  "items-center justify-center text-charcoal hover:bg-mist hover:border-steel/30 transition-colors touch-manipulation"
                )}
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
            </>
          )}

          {showControls && (
            <div
              className="flex justify-center gap-2.5 mt-6 lg:mt-8 flex-wrap px-2"
              role="group"
              aria-label="Resource slides"
            >
              {Array.from({ length: positionCount }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1} of ${positionCount}`}
                  aria-current={i === index ? "true" : undefined}
                  onClick={() => setIndex(i)}
                  className="min-h-11 min-w-11 inline-flex items-center justify-center touch-manipulation"
                >
                  <span
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      i === index ? "w-8 bg-steel" : "w-2 bg-border hover:bg-steel/40"
                    )}
                    aria-hidden
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
