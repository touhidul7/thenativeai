import { createFileRoute } from "@tanstack/react-router";
import { websiteCopy as copy } from "@/lib/website-copy";
import { pageHead } from "@/lib/site-presentation";
import { companies } from "@/lib/site-content";
import { CtaButton, PageHero, Section } from "@/components/site/Prose";

export const Route = createFileRoute("/leadership")({
  head: () => pageHead("Leadership", copy.leadership.title),
  component: LeadershipPage,
});

const leaders = [
  { name: "Chris Chetty", title: "Founder", linkedin: "https://www.linkedin.com/in/chrischetty/" },
  {
    name: "Claudia Harvey",
    title: "COO",
    linkedin: "https://www.linkedin.com/in/claudiaharvey/",
    url: "http://claudiaharvey.com",
  },
];

function LeadershipPage() {
  return (
    <>
      <PageHero eyebrow="Leadership" title={copy.leadership.title} />

      <Section title="Leadership">
        <div className="grid gap-6 md:grid-cols-2">
          {leaders.map((l) => (
            <div key={l.name} className="rounded-2xl border border-hairline bg-surface p-8">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-accent-warm/40 bg-background font-display text-3xl text-accent-warm">
                {l.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <p className="mt-6 font-display text-2xl text-foreground">
                {l.url ? <a href={l.url}>{l.name}</a> : l.name}
              </p>
              <p className="mt-1 text-sm uppercase tracking-widest text-accent-warm">{l.title}</p>
              {l.linkedin ? (
                <a
                  href={l.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${l.name} on LinkedIn`}
                  className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-background text-accent-warm transition hover:border-accent-warm/40 hover:text-accent-warm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.68H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.57V9H3.56v11.45z" />
                  </svg>
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </Section>
      <Section title="Advisory / partners">
        {companies
          .filter((company) => company.slug === "on-the-verge")
          .map((company) => (
            <article key={company.slug} className="glass-panel max-w-2xl rounded-2xl p-8">
              <h3 className="font-display text-3xl">{company.name}</h3>
              <p className="mt-3 text-sm uppercase tracking-widest text-accent-warm">
                Independent strategic partner
              </p>
              <p className="mt-6 leading-relaxed text-ink-muted">{company.blurb}</p>
              {company.href && (
                <div className="mt-6">
                  <CtaButton to={company.href} variant="ghost">
                    {company.cta}
                  </CtaButton>
                </div>
              )}
            </article>
          ))}
      </Section>
    </>
  );
}
