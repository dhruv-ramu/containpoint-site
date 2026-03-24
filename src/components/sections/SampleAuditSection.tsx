import { motion } from "framer-motion";
import { FileText, CheckCircle } from "lucide-react";

export function SampleAuditSection() {
  const auditItems = [
    "Facility SPCC Plan Summary",
    "Inspection logs (last 12 months)",
    "Corrective action records",
    "Training acknowledgments",
  ];

  return (
    <section id="sample-audit" className="py-20 lg:py-28 bg-mist/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal tracking-tight">
            Sample Audit Pack
          </h2>
          <p className="mt-4 text-slate">
            See what audit-ready documentation looks like. Each pack includes inspection records, corrective actions, and compliance evidence — generated in one click.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 p-8 rounded-sm border border-border/60 bg-bone shadow-[0_2px_12px_rgba(23,23,23,0.04)]"
          >
            <div className="flex items-center gap-2 mb-6">
              <FileText size={20} className="text-steel" />
              <span className="font-medium text-charcoal">Example Audit Pack</span>
            </div>
            <ul className="space-y-3">
              {auditItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-steel flex-shrink-0" />
                  <span className="text-charcoal">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate">
              Request a demo to see a full example and how it’s generated from your facility data.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
