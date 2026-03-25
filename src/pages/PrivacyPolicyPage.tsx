// See original structure here: :contentReference[oaicite:0]{index=0}

import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { Seo, JsonLd } from "@/components/seo/Seo";
import { LEGAL_EFFECTIVE_DATE, LEGAL_LAST_UPDATED } from "@/legal/constants";
import { Link } from "react-router-dom";
import { organizationJsonLd } from "@/seo/structuredData";

export function PrivacyPolicyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="How ContainPoint collects, uses, and protects information in connection with its SPCC compliance platform."
        canonicalPath="/privacy"
      />
      <JsonLd data={organizationJsonLd()} />
      <LegalPageShell>
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-24 pt-12 lg:pt-16 font-heading text-charcoal">

        <header className="mb-14 pb-10 border-b border-border/70">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-steel mb-3">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-charcoal mb-6">
            Privacy Policy
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
            This Privacy Policy describes how ContainPoint collects, uses, and processes information
            in connection with its compliance management platform. It should be read together with our{" "}
            <Link to="/terms" className="text-steel underline underline-offset-2 hover:text-charcoal">
              Terms of Service
            </Link>.
          </p>
        </header>

        <div className="space-y-12 text-[1.0625rem] leading-[1.8]">

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              ContainPoint provides software tools for managing SPCC compliance, including inspections,
              corrective actions, training records, and operational data.
            </p>
            <p>
              In most cases, ContainPoint acts as a <strong>data processor</strong> on behalf of your organization,
              which is the <strong>data controller</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>

            <h3 className="text-lg font-semibold mt-6 mb-3">2.1 Information You Provide</h3>
            <ul>
              <li>Account details (name, email, role)</li>
              <li>Facility and operational data</li>
              <li>Inspection records and uploaded evidence</li>
              <li>Corrective actions and workflow data</li>
              <li>Training and personnel records</li>
              <li>Incident and discharge logs</li>
              <li>Communications with support</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-3">2.2 Automatically Collected Information</h3>
            <ul>
              <li>Log data (timestamps, actions, events)</li>
              <li>Device and browser information</li>
              <li>IP address and session data</li>
              <li>Authentication and access logs</li>
            </ul>

          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Information</h2>
            <ul>
              <li>Provide and operate the Service</li>
              <li>Store and organize compliance records</li>
              <li>Enable inspections, workflows, and audit logs</li>
              <li>Generate reports and compliance artifacts</li>
              <li>Maintain system security and integrity</li>
              <li>Improve performance and reliability</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. How We Share Information</h2>
            <p>We do not sell Customer Data.</p>
            <p>We may share data only:</p>
            <ul>
              <li>With authorized users within your organization</li>
              <li>With service providers (hosting, storage, infrastructure)</li>
              <li>When required by law or legal process</li>
              <li>In connection with a business transaction (e.g., acquisition)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
            <p>
              Customer Data is retained for as long as your organization maintains an account with ContainPoint.
            </p>
            <p>
              We may retain certain records for:
            </p>
            <ul>
              <li>System integrity and audit logging</li>
              <li>Legal or regulatory requirements</li>
              <li>Security and fraud prevention</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Security</h2>
            <p>
              We implement reasonable technical and organizational measures to protect data, including:
            </p>
            <ul>
              <li>Encryption in transit</li>
              <li>Role-based access controls</li>
              <li>Authentication and session controls</li>
              <li>Audit logging of key actions</li>
            </ul>
            <p>
              No system is completely secure. You are responsible for safeguarding your credentials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Your Rights and Choices</h2>
            <p>
              Depending on your jurisdiction, you may have rights to:
            </p>
            <ul>
              <li>Access your data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion</li>
              <li>Restrict or object to processing</li>
              <li>Data portability</li>
            </ul>
            <p>
              Requests should be directed through your organization or system administrator.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. International Data Transfers</h2>
            <p>
              Data may be processed in jurisdictions outside your location. We take reasonable steps
              to ensure appropriate safeguards are in place.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Children</h2>
            <p>
              The Service is not intended for individuals under the age of 16. We do not knowingly
              collect personal data from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Cookies and Tracking</h2>
            <p>
              We may use cookies or similar technologies to maintain sessions and improve functionality.
            </p>
            <p>
              You can control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Continued use of the Service after updates
              constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Contact</h2>
            <p>
              Privacy inquiries:
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