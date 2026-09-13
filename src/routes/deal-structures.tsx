import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Prose";
import { ClosingCta } from "@/components/site/Content";
import { pageHead } from "@/lib/site-presentation";
import { websiteCopy as copy } from "@/lib/website-copy";

export const Route = createFileRoute("/deal-structures")({
  head: () => pageHead("Deal Structures", copy.deals.lead),
  component: DealStructures,
});
function DealStructures() {
  return (
    <>
      <PageHero eyebrow="Deal Structures" title={copy.deals.title} lead={copy.deals.lead} />
      <Section bordered={false}>
        <div className="grid gap-6 md:grid-cols-2">
          {copy.dealStructures.map((deal) => (
            <article key={deal.title} className="glass-panel rounded-2xl p-8">
              <h2 className="font-display text-3xl">{deal.title}</h2>
              <p className="mt-5 rounded-lg bg-brand-soft px-4 py-3 text-sm text-accent-warm">
                <span className="font-semibold">Best for: </span>
                {deal.bestFor}
              </p>
              <p className="mt-5 leading-relaxed text-ink-muted">{deal.body}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="How we protect owners"
        title={copy.deals.protectionTitle}
        lead={copy.deals.protectionLead}
      >
        <ul className="grid gap-4 md:grid-cols-2">
          {copy.deals.commitments.map((item) => (
            <li key={item} className="glass-panel rounded-xl p-6 text-ink-muted">
              {item}
            </li>
          ))}
        </ul>
      </Section>
      <ClosingCta
        body={copy.deals.closing}
        primary={{ label: "Start the Conversation", to: "/contact#form" }}
      />
    </>
  );
}
