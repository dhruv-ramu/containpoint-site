import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MAIN_NAV } from "@/config/nav";

export function Footer() {
  return (
    <footer className="py-16 lg:py-20 border-t border-border/60 bg-mist/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="font-heading text-2xl font-semibold tracking-tight text-charcoal hover:text-steel transition-colors">
              ContainPoint
            </Link>
            <p className="mt-4 text-slate max-w-md">
              SPCC compliance that stays current, complete, and audit-ready.
            </p>
            <p className="mt-6 text-sm text-slate">
              Built for facilities and consultants managing SPCC compliance.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-charcoal uppercase tracking-wider mb-4">Navigation</p>
            <ul className="space-y-2">
              {MAIN_NAV.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate hover:text-charcoal transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/book-demo" className="text-slate hover:text-charcoal transition-colors">
                  Book Demo
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-charcoal uppercase tracking-wider mb-4">Contact</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@containpoint.com"
                  className="text-slate hover:text-charcoal transition-colors"
                >
                  hello@containpoint.com
                </a>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-slate hover:text-charcoal transition-colors font-heading text-[0.95rem]"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-slate hover:text-charcoal transition-colors font-heading text-[0.95rem]"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-slate">© {new Date().getFullYear()} ContainPoint. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
