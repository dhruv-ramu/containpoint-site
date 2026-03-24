import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "How is this different from a general EHS platform?",
    a: [
      "Most EHS platforms are built to cover everything, which often makes them complex and hard to use for a single compliance area.",
      "ContainPoint is focused specifically on SPCC. It models your tanks, inspections, and records in a way that reflects how SPCC actually works in practice. That makes it faster to set up, easier to maintain, and more reliable when you need to produce documentation.",
    ],
  },
  {
    q: "What does \"audit-ready\" actually mean?",
    a: [
      "It means your records are complete, organized, and immediately available when requested.",
      "Instead of searching through spreadsheets, emails, and paper files, you can generate a full set of inspection logs, corrective actions, training records, and plan history in seconds. Everything is time-stamped and tied back to your facility.",
    ],
  },
  {
    q: "How long does it take to get set up?",
    a: [
      "Most facilities can be set up in a few hours.",
      "You enter your tanks and storage areas, define inspection schedules, and start logging activity. For larger or multi-site operations, onboarding may take longer, but the structure remains the same.",
    ],
  },
  {
    q: "What happens if something is missed or overdue?",
    a: [
      "The system flags it clearly and keeps it visible until it is resolved.",
      "Missed inspections, open corrective actions, and upcoming deadlines are all tracked in one place. This helps prevent issues from being forgotten and reduces the risk of problems surfacing during an audit.",
    ],
  },
  {
    q: "We already track this in Excel. Why switch?",
    a: [
      "Excel works until it doesn't.",
      "Most teams start with spreadsheets, but over time things get harder to track. Inspections get missed, versions get out of sync, and records end up scattered across emails and folders. The real issue shows up during an audit, when everything has to be pulled together quickly.",
      "ContainPoint replaces that patchwork with a single system where inspections, actions, and records are structured and always up to date.",
    ],
  },
  {
    q: "Can this handle multiple sites or facilities?",
    a: [
      "Yes. ContainPoint is designed to support both single-site operators and organizations managing multiple locations.",
      "Each site has its own records and workflows, but everything can be viewed at a higher level. This is especially useful for consultants or companies that need to track compliance across a portfolio.",
    ],
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal tracking-tight">
            Frequently asked questions
          </h2>
          <div className="mt-10 space-y-2">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className="border border-border/60 rounded-lg bg-bone overflow-hidden shadow-[0_1px_2px_rgba(23,23,23,0.03)]"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-medium text-charcoal hover:bg-surface/20 transition-colors"
                >
                  <span className="text-base">{item.q}</span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-slate transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-4 space-y-3 border-t border-border/40">
                        {item.a.map((para, j) => (
                          <p key={j} className="text-slate text-sm leading-relaxed">
                            {para}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
