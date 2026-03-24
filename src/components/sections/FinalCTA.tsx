import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal tracking-tight">
            Stop managing compliance manually.
          </h2>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button variant="primary" size="lg" asChild>
              <a href="#book-demo">Book Demo</a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="#book-demo">Start Pilot</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
