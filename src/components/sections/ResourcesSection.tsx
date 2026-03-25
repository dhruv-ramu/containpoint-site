import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { ChevronLeft, ChevronRight, FileText } from "lucide-react";
import { ARTICLES } from "@/data/articles";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 6500;

export function ResourcesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [paused, setPaused] = useState(false);

  const count = ARTICLES.length;

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
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % count);
  }, [count]);

  useEffect(() => {
    if (reducedMotion || count <= 1 || paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [count, reducedMotion, paused]);

  return (
    <section id="resources" className="py-20 lg:py-28 bg-mist/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
            <Link to="/product" className="text-steel font-medium hover:text-charcoal underline underline-offset-2">
              SPCC compliance platform
            </Link>
            ,{" "}
            <Link to="/pricing" className="text-steel font-medium hover:text-charcoal underline underline-offset-2">
              pricing
            </Link>
            , or{" "}
            <Link to="/book-demo" className="text-steel font-medium hover:text-charcoal underline underline-offset-2">
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
              className="flex"
              animate={{
                x: containerWidth > 0 ? -index * containerWidth : 0,
              }}
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 380, damping: 36 }
              }
              style={{
                width: containerWidth > 0 ? containerWidth * count : "100%",
              }}
            >
              {ARTICLES.map((article) => (
                <div
                  key={article.slug}
                  className="shrink-0 px-1 sm:px-2"
                  style={{
                    width: containerWidth > 0 ? containerWidth : "100%",
                  }}
                >
                  <Link
                    to={`/resources/${article.slug}`}
                    className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-steel/40 focus-visible:ring-offset-2 rounded-lg"
                  >
                    <Card className="h-full min-h-[200px] sm:min-h-[220px] cursor-pointer group hover:border-steel/30 transition-colors border-border/60">
                      <CardHeader className="pb-2">
                        <div className="w-10 h-10 rounded-sm flex items-center justify-center bg-surface/80 border border-border/60 mb-2 group-hover:bg-steel/10 group-hover:border-steel/20 transition-colors">
                          <FileText size={20} className="text-steel" />
                        </div>
                        <CardTitle className="text-lg sm:text-xl group-hover:text-steel transition-colors leading-snug">
                          {article.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-slate leading-relaxed line-clamp-3 mb-4">{article.description}</p>
                        <span className="text-sm text-steel font-medium">Read article →</span>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </motion.div>
          </div>

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous resource"
                className={cn(
                  "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:-translate-x-3 z-10",
                  "h-10 w-10 rounded-full border border-border/70 bg-bone/95 shadow-sm",
                  "flex items-center justify-center text-charcoal hover:bg-mist hover:border-steel/30 transition-colors"
                )}
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next resource"
                className={cn(
                  "absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-3 z-10",
                  "h-10 w-10 rounded-full border border-border/70 bg-bone/95 shadow-sm",
                  "flex items-center justify-center text-charcoal hover:bg-mist hover:border-steel/30 transition-colors"
                )}
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
            </>
          )}

          {count > 1 && (
            <div className="flex justify-center gap-2 mt-8" role="group" aria-label="Resource slides">
              {ARTICLES.map((article, i) => (
                <button
                  key={article.slug}
                  type="button"
                  aria-label={`Show resource: ${article.title}`}
                  aria-current={i === index ? "true" : undefined}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === index ? "w-8 bg-steel" : "w-2 bg-border hover:bg-steel/40"
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
