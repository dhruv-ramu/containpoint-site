import { motion } from "framer-motion";

const INDUSTRIES = [
  "Trucking depots",
  "Manufacturing plants",
  "Equipment yards",
  "Farms",
  "Data center sites",
  "Environmental consultants",
];

export function IndustriesSection() {
  return (
    <section className="py-12 lg:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal tracking-tight">
            Built for regulated facilities and the consultants who support them.
          </h2>
        </motion.div>

        {/* Compact bubble pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {INDUSTRIES.map((ind, i) => (
            <motion.span
              key={ind}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 24,
                delay: i * 0.03,
              }}
              className="inline-flex cursor-default select-none"
            >
              <motion.span
                className="inline-flex items-center rounded-xl border border-steel/20 bg-gradient-to-br from-bone to-surface/70 px-4 py-2 sm:px-5 sm:py-2.5 text-sm font-medium text-charcoal shadow-[0_2px_12px_rgba(23,23,23,0.04)]"
                animate={{
                  y: [0, -6, 0],
                  boxShadow: [
                    "0 2px 12px rgba(23,23,23,0.04)",
                    "0 6px 20px rgba(23,23,23,0.07)",
                    "0 2px 12px rgba(23,23,23,0.04)",
                  ],
                }}
                transition={{
                  duration: 2.5 + (i % 3) * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 8px 24px rgba(95,124,153,0.2)",
                  borderColor: "rgba(95,124,153,0.45)",
                  transition: { duration: 0.2 },
                }}
              >
                {ind}
              </motion.span>
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
