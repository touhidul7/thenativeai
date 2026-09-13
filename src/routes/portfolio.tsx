import { createFileRoute } from "@tanstack/react-router";
import { CtaButton, PageHero, Section } from "@/components/site/Prose";
import { pageHead } from "@/lib/site-presentation";
import { websiteCopy as copy } from "@/lib/website-copy";
import { companies } from "@/lib/site-content";

export const Route = createFileRoute("/portfolio")({
  head: () => pageHead("Portfolio", copy.portfolio.lead),
  component: Portfolio,
});
function Portfolio() {
  return (
    <>
      <PageHero eyebrow="Portfolio" title={copy.portfolio.title} lead={copy.portfolio.lead} />
      <Section bordered={false}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {companies.map((company) => (
            <article key={company.slug} className="glass-panel flex flex-col rounded-2xl p-8">
              <h2 className="font-display text-3xl">{company.name}</h2>
              <p className="mt-3 text-xs uppercase tracking-widest text-accent-warm">
                {company.category}
              </p>
              {company.slug === "on-the-verge" && (
                <p className="mt-3 text-sm text-ink-muted">Independent strategic partner</p>
              )}
              <p className="mt-6 flex-1 leading-relaxed text-ink-muted">{company.blurb}</p>
              {company.href && company.href !== "#" && (
                <div className="mt-8">
                  <CtaButton to={company.href} variant="ghost">
                    {company.cta}
                  </CtaButton>
                </div>
              )}
            </article>
          ))}
        </div>
      </Section>
      <Section title="Where we're going next">
        <div className="flex flex-wrap gap-2">
          {copy.portfolio.sectors.map((sector) => (
            <span key={sector} className="rounded-full border border-hairline px-4 py-2 text-sm">
              {sector}
            </span>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-ink-muted">{copy.portfolio.closing}</p>
      </Section>
    </>
  );
}
