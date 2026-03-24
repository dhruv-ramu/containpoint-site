import { motion } from "framer-motion";
import { Plus, Calendar, ClipboardCheck, CheckCircle, FileText } from "lucide-react";

const STEPS = [
  { icon: Plus, title: "Add your facility and tanks" },
  { icon: Calendar, title: "Set inspection schedules" },
  { icon: ClipboardCheck, title: "Run inspections in the field" },
  { icon: CheckCircle, title: "Track corrective actions to closure" },
  { icon: FileText, title: "Generate audit-ready documentation" },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-slate max-w-2xl">
            Five steps from setup to audit-ready.
          </p>
        </motion.div>
        <div className="relative">
          {/* Connecting line - hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border/60 -translate-y-1/2" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 w-14 h-14 rounded-sm flex items-center justify-center bg-bone border-2 border-steel/30 shadow-[0_1px_3px_rgba(23,23,23,0.04)]">
                  <step.icon size={24} className="text-steel" />
                </div>
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-steel text-bone text-xs font-medium flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="mt-4 font-medium text-charcoal">{step.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
