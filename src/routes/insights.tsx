import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Prose";
import { pageHead } from "@/lib/site-presentation";
import { websiteCopy as copy } from "@/lib/website-copy";

export const Route = createFileRoute("/insights")({
  head: () => pageHead("Insights", copy.insights.lead),
  component: Insights,
});
function Insights() {
  return (
    <>
      <PageHero eyebrow="Insights" title={copy.insights.title} lead={copy.insights.lead} />
      <Section title="Topics">
        <div className="grid gap-6 md:grid-cols-2">
          {copy.insights.categories.map((category) => (
            <div key={category} className="glass-panel rounded-2xl p-8">
              <h2 className="font-display text-2xl">{category}</h2>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
