import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Calendar, CheckSquare, FileText, BookOpen } from "lucide-react";

const CAPABILITIES = [
  {
    icon: Calendar,
    title: "Inspection Tracking",
    description:
      "Never miss required inspections with automated schedules tied to your facility.",
  },
  {
    icon: CheckSquare,
    title: "Corrective Actions",
    description:
      "Every failure becomes a tracked task with ownership, deadlines, and proof of closure.",
  },
  {
    icon: FileText,
    title: "Audit-Ready Evidence",
    description:
      "Generate inspection logs, training records, and compliance documentation instantly.",
  },
  {
    icon: BookOpen,
    title: "SPCC Plan Continuity",
    description:
      "Keep your plan current with version tracking and review reminders.",
  },
];

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20 lg:py-28 bg-mist/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal tracking-tight">
            Core capabilities
          </h2>
          <p className="mt-4 text-slate max-w-2xl">
            Everything you need to run SPCC compliance with structure and confidence.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-11 h-11 rounded-sm flex items-center justify-center bg-steel/10 border border-steel/20 mb-2">
                    <cap.icon size={22} className="text-steel" />
                  </div>
                  <CardTitle className="text-lg">{cap.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate text-sm leading-relaxed">{cap.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
