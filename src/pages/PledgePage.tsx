import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  Shield,
  Handshake,
  Sparkles,
  Users,
  MessageCircle,
  Compass,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { Seo, JsonLd } from "@/components/seo/Seo";
import { MarketingPageLayout } from "@/layouts/MarketingPageLayout";
import { organizationJsonLd, websiteJsonLd } from "@/seo/structuredData";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

export function PledgePage() {
  return (
    <>
      <Seo
        title="Our Pledge"
        description="ContainPoint’s pledge to help facilities prevent environmental harm through disciplined, auditable SPCC compliance."
        canonicalPath="/pledge"
      />
      <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
      <MarketingPageLayout>
        {/* Hero */}
        <header className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-mist/80 via-bone to-bone">
          <div className="pointer-events-none absolute inset-0 opacity-[0.35] pledge-hero-dots" aria-hidden />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-12 pb-14 sm:pt-14 sm:pb-16 lg:pt-20 lg:pb-24 text-center">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
              <p className="text-sm font-medium tracking-[0.25em] uppercase text-steel font-heading mb-4">
                ContainPoint
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold text-charcoal tracking-tight leading-[1.12]">
                Our pledge
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-slate max-w-2xl mx-auto leading-relaxed font-body">
                We believe environmental protection is only real when it shows up in daily operations. Our commitment
                is to help facilities prevent avoidable harm by making compliance disciplined, clear, and impossible to
                ignore.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mt-10 flex justify-center gap-3"
              aria-hidden
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-steel/15 text-steel ring-4 ring-bone">
                <Heart className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-compliant/15 text-compliant ring-4 ring-bone -mt-2">
                <Handshake className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-steel/15 text-steel ring-4 ring-bone">
                <Shield className="h-5 w-5" strokeWidth={1.75} />
              </span>
            </motion.div>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-24 space-y-16 sm:space-y-20 lg:space-y-28">
          {/* Letter-style intro */}
          <motion.section {...fadeUp} transition={{ duration: 0.5 }} className="relative">
            <div className="absolute -left-2 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-steel/50 via-steel/25 to-transparent hidden sm:block" />
            <div className="sm:pl-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-steel/90 mb-3 font-heading">
                A note from us
              </p>
              <div className="rounded-2xl border border-border/60 bg-bone/80 p-8 sm:p-10 shadow-[0_2px_24px_rgba(23,23,23,0.04)]">
                <p className="font-heading text-xl sm:text-2xl text-charcoal leading-snug italic">
                  "A spill prevented does not make headlines. A missed inspection rarely feels urgent until it is too
                  late. We are building for that quiet space where discipline protects people, property, and the
                  environment before damage begins."
                </p>
                <p className="mt-6 text-slate leading-relaxed">
                  ContainPoint exists because environmental compliance is too often treated like paperwork when in
                  reality it is part of how harm is prevented. SPCC programs are not abstract regulatory exercises.
                  They govern how facilities store oil, inspect equipment, respond to risk, and maintain the records
                  that prove those responsibilities are being carried out. When those systems are weak, the
                  consequences can become environmental very quickly. Our pledge is simple. We will build software that
                  supports real accountability, respects the seriousness of environmental risk, and helps the people
                  running these programs do their jobs well.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Three pillars — staggered cards */}
          <section aria-labelledby="pledge-pillars">
            <motion.div {...fadeUp} transition={{ duration: 0.45 }} className="text-center max-w-2xl mx-auto mb-12">
              <h2 id="pledge-pillars" className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal">
                What we hold ourselves to
              </h2>
              <p className="mt-3 text-slate">
                Our environmental commitment rests on three standards: prevention, integrity, and stewardship.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  icon: Users,
                  title: "Prevention before reaction",
                  body: "We care about what happens before an incident. That means helping teams catch missed inspections, unresolved deficiencies, weak controls, and fragmented records before they become environmental failures.",
                  className: "md:mt-0",
                  iconBg: "bg-steel/12 text-steel border-steel/20",
                },
                {
                  icon: Shield,
                  title: "Integrity in the record",
                  body: "Environmental oversight depends on records people can trust. We commit to building systems that make inspections, corrective actions, training, and evidence clear, structured, and defensible.",
                  className: "md:mt-8",
                  iconBg: "bg-compliant/10 text-compliant border-compliant/25",
                },
                {
                  icon: Sparkles,
                  title: "Stewardship in practice",
                  body: "We do not treat sustainability as branding. We focus on the operational habits that reduce preventable releases, improve accountability, and help facilities uphold their environmental responsibilities every day.",
                  className: "md:mt-4",
                  iconBg: "bg-due-soon/10 text-due-soon border-due-soon/25",
                },
              ].map((item, i) => (
                <motion.article
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className={cn(
                    "rounded-2xl border border-border/50 bg-mist/40 p-8 flex flex-col",
                    "hover:border-steel/25 hover:shadow-[0_8px_30px_rgba(95,124,153,0.08)] transition-all duration-300",
                    item.className
                  )}
                >
                  <div
                    className={cn(
                      "mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border",
                      item.iconBg
                    )}
                  >
                    <item.icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-charcoal">{item.title}</h3>
                  <p className="mt-3 text-slate text-[0.95rem] leading-relaxed flex-1">{item.body}</p>
                </motion.article>
              ))}
            </div>
          </section>

          {/* Zigzag narrative */}
          <section className="space-y-14 lg:space-y-20" aria-labelledby="pledge-how">
            <motion.h2
              {...fadeUp}
              id="pledge-how"
              className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal text-center"
            >
              How that shows up day to day
            </motion.h2>
            {[
              {
                icon: MessageCircle,
                kicker: "Respect for the people doing the work",
                title: "We build for operators, not for abstractions",
                text: "The people responsible for compliance are often balancing operations, maintenance, safety, contractors, and audits at the same time. We take that reality seriously. Our goal is not to add noise. It is to reduce preventable confusion and make the path to responsible action clearer.",
                align: "left",
              },
              {
                icon: Compass,
                kicker: "Honesty about what software can do",
                title: "We will not pretend software is the whole answer",
                text: "ContainPoint can improve discipline, visibility, and follow-through. It cannot replace engineering judgment, site responsibility, or regulatory oversight. We think that honesty matters. Environmental commitment starts with telling the truth about the role a product actually plays.",
                align: "right",
              },
              {
                icon: CheckCircle2,
                kicker: "Follow-through",
                title: "We care about execution, not slogans",
                text: "A credible environmental stance is not a paragraph on a website. It is whether inspections happen on time, whether deficiencies are closed, whether records hold up under scrutiny, and whether known risks are allowed to drift. That is the standard we want our product to reinforce.",
                align: "left",
              },
            ].map((row) => (
              <motion.div
                key={row.kicker}
                {...fadeUp}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                <div className={row.align === "right" ? "lg:order-2" : undefined}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-charcoal text-bone">
                      <row.icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate">{row.kicker}</span>
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-charcoal">{row.title}</h3>
                  <p className="mt-4 text-slate leading-relaxed">{row.text}</p>
                </div>
                <div
                  className={cn(
                    "rounded-3xl border-2 border-dashed border-border/70 bg-surface/30 min-h-[200px] flex items-center justify-center p-8",
                    row.align === "right" ? "lg:order-1" : undefined
                  )}
                >
                  <p className="text-center text-sm text-slate/80 font-heading italic max-w-xs">
                    Environmental commitment becomes real when daily workflows reduce the chance of preventable harm.
                  </p>
                </div>
              </motion.div>
            ))}
          </section>

          {/* Pull quote */}
          <motion.section
            {...fadeUp}
            transition={{ duration: 0.55 }}
            className="relative rounded-3xl bg-charcoal text-bone px-8 py-14 sm:px-14 sm:py-16 overflow-hidden"
          >
            <Quote
              className="absolute top-6 left-6 h-16 w-16 text-bone/10"
              strokeWidth={1}
              aria-hidden
            />
            <blockquote className="relative font-heading text-2xl sm:text-3xl font-medium leading-snug text-center max-w-3xl mx-auto">
              Environmental protection is strongest when accountability is built into the routine, not reconstructed
              after the fact.
            </blockquote>
            <p className="relative mt-8 text-center text-sm text-bone/60 uppercase tracking-widest">
              Our north star
            </p>
          </motion.section>

          {/* Promise grid */}
          <section aria-labelledby="pledge-promises">
            <motion.div {...fadeUp} className="text-center mb-10">
              <h2 id="pledge-promises" className="font-heading text-3xl font-semibold text-charcoal">
                Concrete promises
              </h2>
              <p className="mt-2 text-slate max-w-lg mx-auto">
                These are specific commitments we want customers, partners, and future teammates to be able to hold us
                to.
              </p>
            </motion.div>
            <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto list-none p-0 m-0">
              {[
                "We will build toward prevention, not performative reporting.",
                "We will treat environmental compliance as operationally serious work, not as marketing copy.",
                "We will not overstate what our product can guarantee or what a software platform can certify.",
                "We will keep improving the clarity, structure, and accountability that help facilities reduce avoidable environmental risk.",
              ].map((text, i) => (
                <li key={i}>
                  <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className="flex gap-4 rounded-xl border border-border/50 bg-bone p-5 shadow-sm h-full"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-compliant/12 text-compliant">
                      <CheckCircle2 className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <span className="text-[0.95rem] text-charcoal leading-relaxed pt-1">{text}</span>
                  </motion.div>
                </li>
              ))}
            </ul>
          </section>

          {/* Closing — interpersonal signature */}
          <motion.footer
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="text-center pt-8 border-t border-border/50"
          >
            <div className="inline-flex flex-col items-center gap-6 max-w-xl mx-auto">
              <div className="flex -space-x-2" aria-hidden>
                {["CP", "CP", "CP"].map((initials, idx) => (
                  <span
                    key={idx}
                    className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-bone bg-gradient-to-br from-steel/30 to-steel/10 text-xs font-bold text-steel"
                  >
                    {initials}
                  </span>
                ))}
              </div>
              <p className="text-slate leading-relaxed">
                If we ever fall short of this pledge, we want to hear it. Environmental responsibility deserves more
                than polished language. It deserves systems, habits, and products that make real-world care more
                likely.
              </p>
              <p className="font-heading text-lg text-charcoal italic">
                The ContainPoint team
              </p>
              <Link
                to="/#book-demo"
                className="inline-flex items-center gap-2 text-sm font-semibold text-steel hover:text-charcoal transition-colors underline underline-offset-4 decoration-steel/40"
              >
                Want to talk with us directly? Book a demo
              </Link>
            </div>
          </motion.footer>
        </div>
      </MarketingPageLayout>
    </>
  );
}