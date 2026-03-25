import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

const INDUSTRIES = ["Trucking", "Manufacturing", "Agriculture", "Data center", "Equipment/Construction", "Consulting", "Other"];
const COMPLIANCE_METHODS = ["Spreadsheets", "Paper binders", "Existing software", "No formal system", "Other"];

// Set this in .env as VITE_FORMSPREE_FORM_ID=your_form_id
// Get your ID at https://formspree.io — create a form, use the endpoint (e.g. xyzabc from formspree.io/f/xyzabc)
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_FORM_ID
  ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_FORM_ID}`
  : null;

type BookDemoSectionProps = {
  /** Set to "h1" on the dedicated /book-demo page for a single page-level heading. */
  leadHeadingLevel?: "h1" | "h2";
};

export function BookDemoSection({ leadHeadingLevel = "h2" }: BookDemoSectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!FORMSPREE_ENDPOINT) {
      // Dev fallback: show success without actually submitting
      setSubmitted(true);
      return;
    }

    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Request failed (${res.status})`);
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="book-demo" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto text-center p-12 rounded-sm border border-border/60 bg-mist/30"
          >
            <h2 className="font-heading text-2xl font-semibold text-charcoal">
              Thank you
            </h2>
            <p className="mt-4 text-slate">
              We’ll be in touch shortly to schedule your demo.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="book-demo" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          {leadHeadingLevel === "h1" ? (
            <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal tracking-tight">
              See how ContainPoint works for your facilities.
            </h1>
          ) : (
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal tracking-tight">
              See how ContainPoint works for your facilities.
            </h2>
          )}
          <p className="mt-4 text-slate">
            Book a short demo to see inspection workflows, corrective action tracking, and an example audit pack.
          </p>
          <p className="mt-4 text-slate text-sm leading-relaxed">
            Prefer to read first? Browse the{" "}
            <Link to="/product" className="text-steel font-medium hover:text-charcoal underline underline-offset-2">
              SPCC compliance platform
            </Link>
            ,{" "}
            <Link to="/pricing" className="text-steel font-medium hover:text-charcoal underline underline-offset-2">
              pricing
            </Link>
            , or{" "}
            <Link to="/resources" className="text-steel font-medium hover:text-charcoal underline underline-offset-2">
              SPCC resources
            </Link>
            .
          </p>
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <input type="hidden" name="_subject" value="ContainPoint — Demo Request" />
            {error && (
              <div className="rounded-lg border border-overdue/30 bg-overdue/5 px-4 py-3 text-sm text-overdue">
                {error}
              </div>
            )}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-sm border border-border bg-bone text-charcoal placeholder:text-slate/60 focus:outline-none focus:ring-2 focus:ring-steel/30 focus:border-steel/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-1.5">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-sm border border-border bg-bone text-charcoal placeholder:text-slate/60 focus:outline-none focus:ring-2 focus:ring-steel/30 focus:border-steel/50 transition-colors"
                  placeholder="Company name"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
                Work email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-sm border border-border bg-bone text-charcoal placeholder:text-slate/60 focus:outline-none focus:ring-2 focus:ring-steel/30 focus:border-steel/50 transition-colors"
                placeholder="you@company.com"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-charcoal mb-1.5">
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  className="w-full px-4 py-3 rounded-sm border border-border bg-bone text-charcoal focus:outline-none focus:ring-2 focus:ring-steel/30 focus:border-steel/50 transition-colors"
                >
                  {INDUSTRIES.map((ind) => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="sites" className="block text-sm font-medium text-charcoal mb-1.5">
                  Number of sites
                </label>
                <input
                  id="sites"
                  name="sites"
                  type="text"
                  className="w-full px-4 py-3 rounded-sm border border-border bg-bone text-charcoal placeholder:text-slate/60 focus:outline-none focus:ring-2 focus:ring-steel/30 focus:border-steel/50 transition-colors"
                  placeholder="e.g. 1–5, 6–20"
                />
              </div>
            </div>
            <div>
              <label htmlFor="method" className="block text-sm font-medium text-charcoal mb-1.5">
                Current compliance method
              </label>
              <select
                id="method"
                name="method"
                className="w-full px-4 py-3 rounded-sm border border-border bg-bone text-charcoal focus:outline-none focus:ring-2 focus:ring-steel/30 focus:border-steel/50 transition-colors"
              >
                {COMPLIANCE_METHODS.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              disabled={loading}
            >
              {loading ? "Sending…" : "Request Demo"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
