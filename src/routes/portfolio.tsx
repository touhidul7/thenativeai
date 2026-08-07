import { createFileRoute } from "@tanstack/react-router";
import { CtaButton, PageHero, Section } from "@/components/site/Prose";
import { companies } from "@/lib/site-content";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Companies — The Native AI Group" },
      {
        name: "description",
        content:
          "Specialized service companies across marketing, creative, finance, advisory and AI implementation — connected by a shared operating platform.",
      },
      {
        property: "og:title",
        content: "Companies — The Native AI Group",
      },
      {
        property: "og:description",
        content: "Specialized companies. One shared platform.",
      },
    ],
  }),
  component: CompaniesPage,
});

function CompaniesPage() {
  const ownedCompanies = companies.filter(
    (company) => company.relationship === "owned",
  );

  const partnerCompanies = companies.filter(
    (company) => company.relationship === "partner",
  );

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Specialized companies. One shared platform."
        description="Each Native AI Group company is focused on a distinct customer need while benefiting from shared capabilities across the portfolio."
      />

      <Section bordered={false}>
        <p className="max-w-3xl text-lg text-ink-muted">
          Our companies maintain their own brands, leadership, expertise and
          customer relationships. They are connected by a common operating
          philosophy and a shared platform designed to support growth, improve
          delivery and transfer knowledge.
        </p>

        {/* Companies We Own */}
        <div className="mt-16">
          <h2 className="font-display text-3xl text-foreground md:text-4xl">
            Companies We Own
          </h2>

          <div className="mt-8 space-y-px overflow-hidden rounded-2xl border border-hairline bg-hairline">
            {ownedCompanies.map((c) => (
              <article
                key={c.slug}
                className="grid gap-8 bg-background p-8 md:grid-cols-[1fr_2fr] md:p-12"
              >
                <div>
                  <p className="text-xs uppercase tracking-widest text-accent-warm">
                    {c.category}
                  </p>

                  <h2 className="mt-3 font-display text-4xl text-foreground">
                    {c.name}
                  </h2>

                  <p className="mt-3 text-lg italic text-ink-muted">
                    {c.tagline}
                  </p>

                  {c.comingSoon ? (
                    <span className="mt-6 inline-flex rounded-full border border-hairline px-3 py-1 text-xs uppercase tracking-widest text-ink-muted">
                      Coming Soon
                    </span>
                  ) : (
                    <div className="mt-6">
                      <CtaButton to={c.href} variant="ghost">
                        {c.cta}
                      </CtaButton>
                    </div>
                  )}
                </div>

                <div>
                  <p className="text-ink-muted">{c.blurb}</p>

                  <p className="mt-6 text-xs uppercase tracking-widest text-ink-muted">
                    Core capabilities
                  </p>

                  <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-foreground">
                    {c.capabilities.map((s) => (
                      <li key={s}>· {s}</li>
                    ))}
                  </ul>

                  <p className="mt-6 text-xs uppercase tracking-widest text-ink-muted">
                    Strategic role within TNAG
                  </p>

                  <p className="mt-2 text-foreground">{c.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Companies We Partner With */}
        <div className="mt-20">
          <h2 className="font-display text-3xl text-foreground md:text-4xl">
            Companies We Partner With
          </h2>

          <div className="mt-8 space-y-px overflow-hidden rounded-2xl border border-hairline bg-hairline">
            {partnerCompanies.map((c) => (
              <article
                key={c.slug}
                className="grid gap-8 bg-background p-8 md:grid-cols-[1fr_2fr] md:p-12"
              >
                <div>
                  <p className="text-xs uppercase tracking-widest text-accent-warm">
                    {c.category}
                  </p>

                  <h2 className="mt-3 font-display text-4xl text-foreground">
                    {c.name}
                  </h2>

                  <p className="mt-3 text-lg italic text-ink-muted">
                    {c.tagline}
                  </p>

                  {c.comingSoon ? (
                    <span className="mt-6 inline-flex rounded-full border border-hairline px-3 py-1 text-xs uppercase tracking-widest text-ink-muted">
                      Coming Soon
                    </span>
                  ) : (
                    <div className="mt-6">
                      <CtaButton to={c.href} variant="ghost">
                        {c.cta}
                      </CtaButton>
                    </div>
                  )}
                </div>

                <div>
                  <p className="text-ink-muted">{c.blurb}</p>

                  <p className="mt-6 text-xs uppercase tracking-widest text-ink-muted">
                    Core capabilities
                  </p>

                  <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-foreground">
                    {c.capabilities.map((s) => (
                      <li key={s}>· {s}</li>
                    ))}
                  </ul>

                  <p className="mt-6 text-xs uppercase tracking-widest text-ink-muted">
                    Strategic role within TNAG
                  </p>

                  <p className="mt-2 text-foreground">{c.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <section className="container-page py-24 md:py-32">
        <h2 className="max-w-3xl font-display text-4xl md:text-6xl">
          Interested in joining the portfolio?
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-ink-muted">
          We partner with founders who want to preserve what they have built
          while creating a stronger path forward.
        </p>

        <div className="mt-10">
          <CtaButton to="/acquisitions">
            Sell or Partner With Us
          </CtaButton>
        </div>
      </section>
    </>
  );
}