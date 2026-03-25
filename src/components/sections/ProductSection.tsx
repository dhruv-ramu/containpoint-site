import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Database, ClipboardList, CheckSquare, GraduationCap, FileStack, Users } from "lucide-react";

const MODULES = [
  {
    icon: Database,
    title: "Asset Registry",
    description: "Track tanks, containers, oil types, and containment details in one structured system.",
  },
  {
    icon: ClipboardList,
    title: "Inspection Engine",
    description: "Run recurring inspections with mobile-friendly execution, timestamps, photos, and signatures.",
  },
  {
    icon: CheckSquare,
    title: "Corrective Actions",
    description: "Convert failed checks into owned, trackable tasks with deadlines and closure evidence.",
  },
  {
    icon: GraduationCap,
    title: "Training Records",
    description: "Maintain clear records of oil-handling personnel training and acknowledgments.",
  },
  {
    icon: FileStack,
    title: "Audit Pack",
    description: "Export inspection records, corrective actions, training history, and compliance documentation instantly.",
  },
  {
    icon: Users,
    title: "Consultant Console",
    description: "Manage multiple client sites, standardize templates, and deliver professional audit-ready outputs.",
  },
];

type ProductSectionProps = {
  /** When false, omit the section title block (e.g. standalone product page supplies its own H1). */
  showHeading?: boolean;
  /** Extra internal links below the grid (on the long home page). */
  showInternalLinks?: boolean;
};

export function ProductSection({ showHeading = true, showInternalLinks = true }: ProductSectionProps) {
  return (
    <section id="product" className="py-20 lg:py-28 bg-mist/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {showHeading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal tracking-tight">
              Product
            </h2>
            <p className="mt-4 text-lg text-slate max-w-2xl">
              A complete system of record for SPCC compliance, built for facilities and consultants.
            </p>
          </motion.div>
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MODULES.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-6 rounded-sm border border-border/60 bg-bone shadow-[0_1px_3px_rgba(23,23,23,0.03)] hover:shadow-[0_2px_8px_rgba(23,23,23,0.06)] transition-shadow"
            >
              <div className="w-12 h-12 rounded-sm flex items-center justify-center bg-steel/10 border border-steel/20 mb-4">
                <mod.icon size={24} className="text-steel" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal tracking-tight">
                {mod.title}
              </h3>
              <p className="mt-3 text-slate leading-relaxed">{mod.description}</p>
            </motion.div>
          ))}
        </div>
        {showInternalLinks && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-14 text-center text-slate max-w-2xl mx-auto leading-relaxed"
          >
            See{" "}
            <Link to="/pricing" className="text-steel font-medium hover:text-charcoal underline underline-offset-2">
              pricing
            </Link>
            , read{" "}
            <Link to="/resources" className="text-steel font-medium hover:text-charcoal underline underline-offset-2">
              SPCC resources
            </Link>
            , or{" "}
            <Link to="/book-demo" className="text-steel font-medium hover:text-charcoal underline underline-offset-2">
              book a demo
            </Link>
            .
          </motion.p>
        )}
      </div>
    </section>
  );
}
