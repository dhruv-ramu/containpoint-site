import { motion } from "framer-motion";
import { FAQ_ITEMS } from "@/data/faq";

export function FAQSection() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2
            id="faq-heading"
            className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal tracking-tight"
          >
            Frequently asked questions
          </h2>
          <div className="mt-10 space-y-2">
            {FAQ_ITEMS.map((item, i) => (
              <details
                key={i}
                className="group border border-border/60 rounded-lg bg-bone overflow-hidden shadow-[0_1px_2px_rgba(23,23,23,0.03)]"
              >
                <summary className="w-full flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 text-left font-medium text-charcoal hover:bg-surface/20 transition-colors [&::-webkit-details-marker]:hidden">
                  <span className="text-base">{item.q}</span>
                  <span
                    className="flex-shrink-0 text-slate transition-transform duration-200 group-open:rotate-180"
                    aria-hidden
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 pt-4 space-y-3 border-t border-border/40">
                  {item.a.map((para, j) => (
                    <p key={j} className="text-slate text-sm leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
