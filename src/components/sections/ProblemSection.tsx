import { motion } from "framer-motion";
import { AlertTriangle, FileX, CalendarX, ClipboardList } from "lucide-react";

const PROBLEMS = [
  {
    icon: CalendarX,
    text: "Inspections are missed silently",
  },
  {
    icon: FileX,
    text: "Records are scattered across Excel, emails, and paper",
  },
  {
    icon: ClipboardList,
    text: "Corrective actions are not tracked to closure",
  },
  {
    icon: AlertTriangle,
    text: "Audits turn into multi-day scrambles",
  },
];

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-mist/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal tracking-tight">
              SPCC programs fail operationally.
            </h2>
            <p className="mt-6 text-lg text-slate leading-relaxed max-w-xl">
              Most facilities do not struggle with understanding the rules — they struggle with execution.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border-l-2 border-steel/30 pl-8 space-y-6"
          >
            {PROBLEMS.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-sm flex items-center justify-center bg-surface/80 border border-border/60">
                  <item.icon size={20} className="text-steel" />
                </div>
                <p className="text-charcoal font-medium pt-1.5">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
