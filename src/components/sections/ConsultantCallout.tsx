import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Building2, FileCheck, Zap } from "lucide-react";

const FEATURES = [
  "Manage all client facilities in one system",
  "Standardize inspections and reporting",
  "Deliver audit-ready documentation instantly",
];

export function ConsultantCallout() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal tracking-tight">
            Built for consultants managing multiple sites
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center sm:items-stretch">
            {FEATURES.map((f, i) => (
              <div key={i} className="flex items-start gap-3 sm:flex-col sm:items-center sm:text-center">
                <div className="flex-shrink-0 w-10 h-10 rounded-sm flex items-center justify-center bg-steel/10 border border-steel/20">
                  {i === 0 && <Building2 size={20} className="text-steel" />}
                  {i === 1 && <FileCheck size={20} className="text-steel" />}
                  {i === 2 && <Zap size={20} className="text-steel" />}
                </div>
                <p className="text-charcoal font-medium">{f}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/for-consultants">View Consultant Features</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
