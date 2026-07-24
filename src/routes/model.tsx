import { createFileRoute } from "@tanstack/react-router";
import { CtaButton, PageHero, Section } from "@/components/site/Prose";
import { modelSteps } from "@/lib/site-content";

export const Route = createFileRoute("/model")({
  head: () => ({
    meta: [
      { title: "Our Model — The Native AI Group" },
      {
        name: "description",
        content:
          "A holding company designed to compound intelligence: acquire, build, transform and compound across a portfolio of AI-native service companies.",
      },
      { property: "og:title", content: "Our Model — The Native AI Group" },
      {
        property: "og:description",
        content:
          "Long-term ownership, entrepreneurial operators and a shared operating platform for better service businesses.",
      },
    ],
  }),
  component: ModelPage,
});

function ModelPage() {
  return (
    <>
      <PageHero
        eyebrow="Our model"
        title={<>We acquire and build AI-native companies.</>}
        lead="We combine long-term ownership, entrepreneurial operators and a shared operating platform to build better service businesses."
      />

      <Section
        eyebrow="Overview"
        title="A holding company designed to compound intelligence"
        lead="Our model begins with strong companies and strong people. We acquire profitable businesses, build new companies around experienced operators and provide both with shared infrastructure that would otherwise be expensive or difficult to create independently."
      >
        <blockquote className="max-w-3xl border-l-2 border-accent-warm pl-6 font-display text-2xl italic text-foreground">
          Build companies that deliver better outcomes, operate more efficiently and grow more consistently.
        </blockquote>
      </Section>

      <Section eyebrow="The four-part model" title="Acquire · Build · Transform · Compound">
        <div className="space-y-px overflow-hidden rounded-2xl border border-hairline bg-hairline">
          {modelSteps.map((step) => (
            <div key={step.n} className="grid gap-6 bg-background p-8 md:grid-cols-[8rem_1fr] md:p-12">
              <p className="font-display text-5xl text-accent-warm">{step.n}</p>
              <div>
                <h3 className="font-display text-3xl text-foreground">{step.title}</h3>
                <p className="mt-4 max-w-2xl text-lg text-ink-muted">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-display text-2xl text-foreground">01. Acquire — what we look for</h3>
            <ul className="mt-4 space-y-2 text-ink-muted">
              {[
                "Strong customer relationships",
                "Positive cash flow",
                "Recurring or repeat revenue",
                "Established capabilities",
                "Experienced operators",
                "Opportunities for succession or growth",
                "Meaningful potential for AI and automation",
              ].map((s) => (
                <li key={s}>· {s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-2xl text-foreground">02. Build — what we look for</h3>
            <ul className="mt-4 space-y-2 text-ink-muted">
              {[
                "A strong operator",
                "A clear customer need",
                "A large or fragmented market",
                "A repeatable service model",
                "Opportunities for recurring revenue",
                "A natural fit with the broader portfolio",
              ].map((s) => (
                <li key={s}>· {s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-2xl text-foreground">03. Transform — what changes</h3>
            <ul className="mt-4 space-y-2 text-ink-muted">
              {[
                "Documenting core processes",
                "Centralizing customer data",
                "Improving reporting",
                "Automating repetitive work",
                "Building company knowledge bases",
                "Strengthening sales systems",
                "Improving lead response",
                "Introducing performance dashboards",
                "AI-assisted service delivery",
              ].map((s) => (
                <li key={s}>· {s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-2xl text-foreground">04. Compound — what it creates</h3>
            <ul className="mt-4 space-y-2 text-ink-muted">
              {[
                "Faster improvement",
                "Lower implementation costs",
                "Better knowledge retention",
                "More consistent decision-making",
                "Faster integration of future companies",
                "Greater value from each acquisition",
              ].map((s) => (
                <li key={s}>· {s}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section eyebrow="Permanent ownership" title="We are building for the long term">
        <div className="grid gap-8 md:grid-cols-2">
          <p className="text-lg text-ink-muted">
            Our preferred approach is to own and grow strong businesses over long periods. We do not believe
            every company needs to be prepared for a quick resale.
          </p>
          <ul className="space-y-2 text-ink-muted">
            {[
              "Invest with a longer time horizon",
              "Protect company culture",
              "Maintain customer relationships",
              "Retain high-performing operators",
              "Reinvest cash flow",
              "Make decisions based on long-term value",
            ].map((s) => (
              <li key={s}>· {s}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        eyebrow="Structure"
        title="Operators lead. The platform supports."
        lead="Each company remains responsible for its customers, service quality, team and market positioning. The group provides support across capital, technology, sales, marketing, finance, recruitment and reporting."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-hairline p-6">
            <p className="text-xs uppercase tracking-widest text-accent-warm">Company owns</p>
            <ul className="mt-4 space-y-2 text-foreground">
              {["Customers", "Service quality", "Team", "Market positioning", "Operating performance"].map(
                (s) => (
                  <li key={s}>· {s}</li>
                ),
              )}
            </ul>
          </div>
          <div className="rounded-xl border border-hairline p-6">
            <p className="text-xs uppercase tracking-widest text-accent-warm">Platform provides</p>
            <ul className="mt-4 space-y-2 text-foreground">
              {[
                "Capital allocation",
                "Acquisitions",
                "Technology & automation",
                "Sales infrastructure",
                "Marketing",
                "Finance",
                "Recruitment",
                "Reporting",
                "Strategic planning",
              ].map((s) => (
                <li key={s}>· {s}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section eyebrow="Revenue model" title="Multiple sources of durable revenue">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              t: "Recurring",
              b: ["Monthly retainers", "Bookkeeping & accounting", "Managed services", "Memberships", "Support agreements"],
            },
            {
              t: "Project",
              b: ["Automation builds", "Websites", "Creative projects", "AI implementation", "Advisory assignments"],
            },
            {
              t: "Transaction",
              b: ["M&A success fees", "Acquisition advisory", "Capital advisory", "Due diligence"],
            },
            {
              t: "Portfolio growth",
              b: ["New acquisitions", "Cross-selling", "Margin improvement", "Operating leverage", "New service launches"],
            },
          ].map((x) => (
            <div key={x.t} className="rounded-xl border border-hairline bg-surface p-6">
              <p className="font-display text-xl text-accent-warm">{x.t}</p>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                {x.b.map((y) => (
                  <li key={y}>· {y}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <section className="container-page py-24 md:py-32">
        <h2 className="max-w-3xl font-display text-4xl md:text-6xl">
          Strong companies. Shared intelligence. Long-term value.
        </h2>
        <div className="mt-10">
          <CtaButton to="/companies">Explore Our Companies</CtaButton>
        </div>
      </section>
    </>
  );
}