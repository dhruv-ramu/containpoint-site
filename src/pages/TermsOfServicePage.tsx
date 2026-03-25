// See original structure here: :contentReference[oaicite:0]{index=0}

import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { Seo, JsonLd } from "@/components/seo/Seo";
import { LEGAL_EFFECTIVE_DATE, LEGAL_LAST_UPDATED } from "@/legal/constants";
import { organizationJsonLd } from "@/seo/structuredData";

export function TermsOfServicePage() {
  return (
    <>
      <Seo
        title="Terms of Service"
        description="Terms of Service for ContainPoint’s SPCC compliance software—acceptable use, accounts, data, and limitations."
        canonicalPath="/terms"
      />
      <JsonLd data={organizationJsonLd()} />
      <LegalPageShell>
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-24 pt-12 lg:pt-16 font-heading text-charcoal">

        <header className="mb-14 pb-10 border-b border-border/70">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-steel mb-3">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-charcoal mb-6">
            Terms of Service
          </h1>

          <dl className="grid sm:grid-cols-2 gap-4 text-sm text-slate not-italic font-body">
            <div className="rounded-lg bg-mist/50 px-4 py-3 border border-border/40">
              <dt className="text-xs uppercase tracking-wide text-slate/80 mb-1">Last updated</dt>
              <dd className="font-medium text-charcoal">{LEGAL_LAST_UPDATED}</dd>
            </div>
            <div className="rounded-lg bg-mist/50 px-4 py-3 border border-border/40">
              <dt className="text-xs uppercase tracking-wide text-slate/80 mb-1">Effective date</dt>
              <dd className="font-medium text-charcoal">{LEGAL_EFFECTIVE_DATE}</dd>
            </div>
          </dl>

          <p className="mt-8 text-lg leading-relaxed text-slate font-body not-italic">
            These Terms of Service govern your use of ContainPoint, a compliance management platform
            for tracking SPCC-related operational, inspection, and regulatory records.
          </p>
        </header>

        <div className="space-y-12 text-[1.0625rem] leading-[1.8]">

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using ContainPoint, you agree to be bound by these Terms. If you do not
              agree, you may not access or use the service.
            </p>
            <p>
              These Terms constitute a binding agreement between you (or your organization) and
              ContainPoint.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Definitions</h2>
            <ul>
              <li><strong>“Service”</strong> means the ContainPoint platform and related software.</li>
              <li><strong>“User”</strong> means any authorized individual accessing the Service.</li>
              <li><strong>“Organization”</strong> means the entity using ContainPoint.</li>
              <li><strong>“Customer Data”</strong> means all data entered into the Service.</li>
              <li><strong>“Compliance Records”</strong> include inspections, corrective actions, training, and related logs.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Eligibility & Accounts</h2>
            <p>
              You must be authorized by your organization to access ContainPoint. You are responsible
              for maintaining the confidentiality of your credentials and all activity under your account.
            </p>
            <p>
              You agree to provide accurate and complete information and to keep your account secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Use of the Service</h2>
            <p>You may use ContainPoint solely for lawful business purposes.</p>
            <p>You agree not to:</p>
            <ul>
              <li>Use the platform in violation of any laws or regulations</li>
              <li>Attempt unauthorized access to systems or data</li>
              <li>Reverse engineer or copy the platform</li>
              <li>Interfere with platform performance or integrity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Customer Data</h2>
            <p>
              Your organization retains ownership of all Customer Data.
            </p>
            <p>
              You are solely responsible for:
            </p>
            <ul>
              <li>The accuracy and completeness of all records</li>
              <li>Ensuring compliance with applicable regulations</li>
              <li>Maintaining any required backups or exports</li>
            </ul>
            <p>
              ContainPoint processes Customer Data solely to provide the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Compliance Disclaimer</h2>
            <p>
              ContainPoint is a compliance management tool and does not provide legal, regulatory,
              or engineering certification.
            </p>
            <p>
              Use of the Service does not guarantee compliance with EPA regulations or any other
              legal requirements. Responsibility for compliance remains with the facility owner/operator.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
            <p>
              The Service, including all software, design, and technology, is owned by ContainPoint
              and protected by intellectual property laws.
            </p>
            <p>
              You are granted a limited, non-exclusive license to use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Third-Party Services</h2>
            <p>
              The Service may rely on third-party infrastructure providers. ContainPoint is not
              responsible for the performance or availability of third-party systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Disclaimers</h2>
            <p>
              The Service is provided “as is” and “as available,” without warranties of any kind.
            </p>
            <p>
              ContainPoint does not guarantee:
            </p>
            <ul>
              <li>Accuracy of compliance outcomes</li>
              <li>Continuous availability</li>
              <li>Error-free operation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, ContainPoint shall not be liable for:
            </p>
            <ul>
              <li>Regulatory penalties or enforcement actions</li>
              <li>Loss of data or business interruption</li>
              <li>Indirect or consequential damages</li>
            </ul>
            <p>
              Total liability shall not exceed the amount paid for the Service in the preceding 12 months.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless ContainPoint from any claims arising from:
            </p>
            <ul>
              <li>Your use of the Service</li>
              <li>Your Customer Data</li>
              <li>Your violation of applicable laws</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Term & Termination</h2>
            <p>
              These Terms remain in effect while you use the Service.
            </p>
            <p>
              Access may be suspended or terminated for violations, misuse, or non-payment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Governing Law</h2>
            <p>
              These Terms are governed by applicable laws in the jurisdiction where ContainPoint operates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">14. Changes to Terms</h2>
            <p>
              We may update these Terms periodically. Continued use of the Service constitutes acceptance
              of updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">15. Contact</h2>
            <p>
              Questions regarding these Terms:
            </p>
            <p>
              <a
                href="mailto:hello@containpoint.com"
                className="text-steel underline underline-offset-2 hover:text-charcoal"
              >
                hello@containpoint.com
              </a>
            </p>
          </section>

        </div>
      </article>
    </LegalPageShell>
    </>
  );
}