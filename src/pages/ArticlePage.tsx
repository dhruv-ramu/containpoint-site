import { Link, useParams } from "react-router-dom";
import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { getArticleBySlug } from "@/data/articles";

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
      <LegalPageShell backTo={{ to: "/blog", label: "All articles" }}>
        <div className="mx-auto max-w-3xl px-6 lg:px-8 pb-24 pt-12 lg:pt-16 font-heading text-charcoal">
          <h1 className="text-3xl font-semibold tracking-tight">Article not found</h1>
          <p className="mt-4 text-slate font-body not-italic">
            That article does not exist or the link is incorrect.
          </p>
          <Link
            to="/blog"
            className="inline-block mt-8 text-steel font-medium hover:text-charcoal transition-colors underline underline-offset-2"
          >
            View all articles
          </Link>
        </div>
      </LegalPageShell>
    );
  }

  return (
    <LegalPageShell backTo={{ to: "/blog", label: "All articles" }}>
      <article className="mx-auto max-w-3xl px-6 lg:px-8 pb-24 pt-12 lg:pt-16 font-heading text-charcoal">
        <header className="mb-14 pb-10 border-b border-border/70">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-steel mb-3">Article</p>
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
              <h2 className="font-heading text-lg font-semibold text-charcoal mb-4">
                Key takeaways
              </h2>
              <p className="text-sm text-slate/90 mb-4">
                Wireframe: replace bullets below with your final summary points.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate">
                {article.keyTakeaways.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </article>
    </LegalPageShell>
  );
}
