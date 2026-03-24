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
    <section className="py-20 lg:py-28">
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
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {INDUSTRIES.map((ind, i) => (
              <motion.span
                key={ind}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="px-4 py-2 rounded-sm border border-border/60 bg-surface/40 text-charcoal text-sm font-medium"
              >
                {ind}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
