import { motion } from "framer-motion";
import { Database, ClipboardCheck, FileCheck, Layers } from "lucide-react";

const CAPABILITIES = [
  "Track every tank, inspection, and requirement",
  "Capture evidence with photos, timestamps, and signatures",
  "Automatically manage corrective actions",
  "Generate audit-ready documentation instantly",
];

const ICONS = [Database, ClipboardCheck, FileCheck, Layers];

export function SolutionSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal tracking-tight">
            ContainPoint makes compliance operational.
          </h2>
          <p className="mt-6 text-lg text-slate leading-relaxed">
            ContainPoint is your system of record for SPCC compliance:
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CAPABILITIES.map((cap, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={i}
                className="p-6 rounded-sm border border-border/60 bg-bone shadow-[0_1px_3px_rgba(23,23,23,0.03)]"
              >
                <div className="w-10 h-10 rounded-sm flex items-center justify-center bg-steel/10 border border-steel/20 mb-4">
                  <Icon size={20} className="text-steel" />
                </div>
                <p className="text-charcoal font-medium leading-snug">{cap}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
