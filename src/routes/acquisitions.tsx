import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Prose";
import { ClosingCta } from "@/components/site/Content";
import { pageHead } from "@/lib/site-presentation";
import { websiteCopy as copy } from "@/lib/website-copy";

export const Route = createFileRoute("/acquisitions")({
  head: () => pageHead("Sell Your Business", copy.acquisitions.lead),
  component: Acquisitions,
});
function Acquisitions() {
  return (
    <>
      <PageHero
        eyebrow="Sell Your Business"
        title={copy.acquisitions.title}
        lead={copy.acquisitions.lead}
      />
      <Section title="Who we look for">
        <ul className="grid gap-6 lg:grid-cols-3">
          {copy.acquisitions.criteria.map((item) => (
            <li key={item} className="glass-panel rounded-xl p-8 text-lg">
              {item}
            </li>
          ))}
        </ul>
      </Section>
      <Section title="What happens to your business" lead={copy.acquisitions.preserve}>
        <p className="text-xs uppercase tracking-widest text-ink-muted">
          Owners often stay involved through:
        </p>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {copy.acquisitions.involvement.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="h-px w-6 shrink-0 bg-accent-warm" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </Section>
      <Section title="What comes next">
        <ol className="grid gap-6 md:grid-cols-2">
          {copy.acquisitions.steps.map((step, index) => (
            <li key={step} className="glass-panel rounded-xl p-8">
              <p className="font-display text-3xl text-accent-warm">0{index + 1}</p>
              <p className="mt-4 leading-relaxed text-ink-muted">
                {index === 1 ? (
                  <>
                    {step.split("deal structures")[0]}
                    <Link
                      to="/deal-structures"
                      className="text-accent-warm underline underline-offset-4"
                    >
                      deal structures
                    </Link>
                    {step.split("deal structures")[1]}
                  </>
                ) : (
                  step
                )}
              </p>
            </li>
          ))}
        </ol>
      </Section>
      <div id="form">
        <ClosingCta primary={{ label: "Talk to Our Team", to: "/contact#form" }} />
      </div>
    </>
  );
}
