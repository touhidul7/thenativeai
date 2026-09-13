import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Prose";
import { ClosingCta, GrowthCards } from "@/components/site/Content";
import { pageHead } from "@/lib/site-presentation";
import { websiteCopy as copy } from "@/lib/website-copy";

export const Route = createFileRoute("/model")({
  head: () => pageHead("Our Model", copy.model.lead),
  component: Model,
});
function Model() {
  return (
    <>
      <PageHero eyebrow="Our Model" title={copy.model.title} lead={copy.model.lead} />
      <Section title="Launch / Acquire / Partner">
        <GrowthCards detailed />
      </Section>
      <Section eyebrow="The cycle" title="Acquire or build. Transform. Compound.">
        <ol className="grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
          {copy.cycle.map((step) => (
            <li key={step.n} className="bg-background p-8">
              <p className="font-display text-4xl text-accent-warm">{step.n}</p>
              <h3 className="mt-4 font-display text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section title="What makes a company AI-native?">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Traditional",
              subtitle: "Scales people",
              items: [
                "More employees",
                "More management",
                "Fragmented systems",
                "Administrative overhead",
                "Operational complexity",
              ],
            },
            {
              title: "AI-native",
              subtitle: "Scales intelligence",
              items: [
                "Connected data",
                "Automated workflows",
                "Shared knowledge",
                "AI-assisted delivery",
                "Strong human oversight",
              ],
            },
          ].map((column, index) => (
            <div
              key={column.title}
              className={`rounded-xl border p-8 ${index ? "border-accent-warm/40 bg-accent-warm/5 backdrop-blur-sm" : "border-hairline"}`}
            >
              <h3 className="font-display text-2xl">{column.title}</h3>
              <p className="mt-2 text-xs uppercase tracking-widest text-accent-warm">
                {column.subtitle}
              </p>
              <ul className="mt-6 space-y-3 text-ink-muted">
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <blockquote className="mt-14 max-w-3xl border-l-2 border-accent-warm pl-6 font-display text-2xl italic leading-snug">
          {copy.quote}
        </blockquote>
      </Section>
      <ClosingCta
        primary={{ label: "See Deal Structures", to: "/deal-structures" }}
        secondary={{ label: "Explore the AI OS", to: "/ai-os" }}
      />
    </>
  );
}
