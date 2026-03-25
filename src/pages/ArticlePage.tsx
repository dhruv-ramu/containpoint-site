import { Link, useParams } from "react-router-dom";
import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { Seo, JsonLd } from "@/components/seo/Seo";
import { getArticleBySlug } from "@/data/articles";
import { articleJsonLd } from "@/seo/structuredData";

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(iso + "T12:00:00"));
  } catch {
    return iso;
  }
}

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <>
        <Seo
          title="Article not found"
          description="The requested resource could not be found on ContainPoint."
          canonicalPath="/resources"
          noindex
        />
        <LegalPageShell backTo={{ to: "/resources", label: "All resources" }}>
          <div className="mx-auto max-w-3xl px-6 lg:px-8 pb-24 pt-12 lg:pt-16 font-heading text-charcoal">
            <h1 className="text-3xl font-semibold tracking-tight">Article not found</h1>
            <p className="mt-4 text-slate font-body not-italic">
              That article does not exist or the link is incorrect.
            </p>
            <Link
              to="/resources"
              className="inline-block mt-8 text-steel font-medium hover:text-charcoal transition-colors underline underline-offset-2"
            >
              View all resources
            </Link>
          </div>
        </LegalPageShell>
      </>
    );
  }

  const path = `/resources/${article.slug}`;
  const metaTitle = article.metaTitle ?? article.title;
  const metaDescription = article.metaDescription ?? article.description;

  return (
    <>
      <Seo
        title={metaTitle}
        description={metaDescription}
        canonicalPath={path}
        ogType="article"
      />
      <JsonLd
        data={articleJsonLd({
          title: article.title,
          description: metaDescription,
          path,
          datePublished: article.publishedAt,
        })}
      />
      <LegalPageShell backTo={{ to: "/resources", label: "All resources" }}>
        <article className="mx-auto max-w-3xl px-6 lg:px-8 pb-24 pt-12 lg:pt-16 font-heading text-charcoal">
          <header className="mb-14 pb-10 border-b border-border/70">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-steel mb-3">Resource</p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-charcoal mb-6">
              {article.title}
            </h1>
            <p className="text-lg text-slate max-w-2xl font-body not-italic leading-relaxed">
              {article.description}
            </p>
            <p className="mt-6 text-sm text-slate font-body not-italic">
              <time dateTime={article.publishedAt}>Published {formatDate(article.publishedAt)}</time>
            </p>
          </header>

          <div className="space-y-14 text-[1.0625rem] leading-[1.8] font-body not-italic text-charcoal">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-charcoal mb-4">
                  {section.heading}
                </h2>
                <div className="space-y-4 text-slate">
                  {section.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </section>
            ))}

            {article.keyTakeaways && article.keyTakeaways.length > 0 && (
              <aside className="rounded-lg border border-dashed border-steel/35 bg-mist/40 px-6 py-6">
                <h2 className="font-heading text-lg font-semibold text-charcoal mb-4">Key takeaways</h2>
                <ul className="list-disc pl-5 space-y-2 text-slate">
                  {article.keyTakeaways.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </aside>
            )}

            <section className="pt-4 border-t border-border/50">
              <h2 className="font-heading text-lg font-semibold text-charcoal mb-3">Next steps</h2>
              <p className="text-slate leading-relaxed">
                ContainPoint helps teams run{" "}
                <Link to="/product#how-it-works" className="text-steel font-medium hover:text-charcoal underline underline-offset-2">
                  inspection tracking
                </Link>
                , maintain{" "}
                <Link to="/product" className="text-steel font-medium hover:text-charcoal underline underline-offset-2">
                  audit-ready documentation
                </Link>
                , and scale across sites—see{" "}
                <Link to="/pricing" className="text-steel font-medium hover:text-charcoal underline underline-offset-2">
                  pricing
                </Link>{" "}
                or{" "}
                <Link to="/book-demo" className="text-steel font-medium hover:text-charcoal underline underline-offset-2">
                  book a demo
                </Link>
                .
              </p>
            </section>
          </div>
        </article>
      </LegalPageShell>
    </>
  );
}
