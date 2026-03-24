import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { FileText } from "lucide-react";

const ARTICLES = [
  { title: "What is SPCC?", slug: "what-is-spcc" },
  { title: "Who needs an SPCC plan?", slug: "who-needs-spcc" },
  { title: "Common compliance failures", slug: "common-failures" },
  { title: "Inspection requirements explained", slug: "inspection-requirements" },
];

export function ResourcesSection() {
  return (
    <section id="resources" className="py-20 lg:py-28 bg-mist/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal tracking-tight">
            Resources
          </h2>
          <p className="mt-4 text-lg text-slate max-w-2xl">
            Learn more about SPCC compliance and requirements.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTICLES.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Card className="h-full cursor-pointer group hover:border-steel/30 transition-colors">
                <CardHeader>
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center bg-surface/80 border border-border/60 mb-2 group-hover:bg-steel/10 group-hover:border-steel/20 transition-colors">
                    <FileText size={20} className="text-steel" />
                  </div>
                  <CardTitle className="text-base group-hover:text-steel transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <span className="text-sm text-steel font-medium">Read article →</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
