import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "What is SPCC?",
    a: "SPCC (Spill Prevention, Control, and Countermeasure) is a US EPA regulation that requires facilities storing oil above certain thresholds to have plans and procedures to prevent oil spills and minimize their environmental impact.",
  },
  {
    q: "Who needs ContainPoint?",
    a: "Facilities with aboveground oil storage—trucking depots, manufacturing plants, farms, data centers—and environmental consultants who manage compliance for multiple client sites.",
  },
  {
    q: "How does audit export work?",
    a: "ContainPoint generates inspection logs, corrective action records, training documentation, and compliance summaries in a single exportable package, ready for regulator or auditor review.",
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
                className="border border-border/60 rounded-sm bg-bone overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-medium text-charcoal hover:bg-surface/30 transition-colors"
                >
                  {item.q}
                  <ChevronDown
                    size={20}
                    className={`text-slate transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-4 text-slate text-sm leading-relaxed">
                        {item.a}
                      </p>
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
