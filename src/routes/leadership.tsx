import { createFileRoute } from "@tanstack/react-router";
import { CtaButton, PageHero, Section } from "@/components/site/Prose";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — The Native AI Group" },
      {
        name: "description",
        content:
          "Founding and operating leaders across The Native AI Group and its portfolio, an advisory network and the culture that guides how we work.",
      },
      { property: "og:title", content: "Leadership — The Native AI Group" },
      { property: "og:description", content: "Operators, builders and long-term partners." },
    ],
  }),
  component: LeadershipPage,
});

const leaders = [
  { name: "Chris Chetty", title: "Founder", bio: "Verified biography to follow." },
  { name: "Claudia Harvey", title: "COO", bio: "Verified biography to follow." },
];

const culture = [
  { t: "Entrepreneurial", b: "We move quickly, take ownership and stay close to customers." },
  { t: "Practical", b: "We prioritize systems that create measurable operating value." },
  { t: "Accountable", b: "Each company and leader is responsible for clear outcomes." },
  { t: "Collaborative", b: "Knowledge should move across the group rather than remain isolated." },
  { t: "Long-term", b: "We make decisions with the intention of building enduring companies." },
  { t: "Human-centered", b: "AI should help talented people perform at a higher level." },
];

function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Operators, builders and long-term partners."
        lead="The Native AI Group is led by operators, builders and long-term investors who believe great companies are built around people, expertise and enduring customer relationships."
      />

      <Section eyebrow="Founding leadership" title="The people building the group">
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
              <p className="mt-6 font-display text-2xl text-foreground">{l.name}</p>
              <p className="mt-1 text-sm uppercase tracking-widest text-accent-warm">{l.title}</p>
              <p className="mt-4 text-ink-muted">{l.bio}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm text-ink-muted">
          Additional leadership profiles will be added as bios are verified. We do not publish credentials or
          titles until confirmed with the individual.
        </p>
      </Section>

      <Section eyebrow="Operating leaders" title="Portfolio company leadership">
        <p className="max-w-3xl text-ink-muted">
          Each portfolio company is led by an experienced operator with deep expertise in their category.
          Individual profiles are published on each company's site as they are confirmed.
        </p>
      </Section>

      <Section
        eyebrow="Advisory network"
        title="Practitioners across the disciplines that build companies"
      >
        <div className="flex flex-wrap gap-2">
          {[
            "AI and technology",
            "Mergers and acquisitions",
            "Finance and accounting",
            "Marketing and creative",
            "Legal and compliance",
            "Cybersecurity",
            "Human resources",
            "Industry operations",
            "Governance",
            "Capital markets",
          ].map((s) => (
            <span key={s} className="rounded-full border border-hairline px-4 py-2 text-sm text-foreground">
              {s}
            </span>
          ))}
        </div>
      </Section>

      <Section eyebrow="Culture" title="The way we work">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {culture.map((c) => (
            <div key={c.t} className="rounded-xl border border-hairline p-6">
              <p className="font-display text-xl text-accent-warm">{c.t}</p>
              <p className="mt-3 text-sm text-ink-muted">{c.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="container-page py-24 md:py-32">
        <h2 className="max-w-3xl font-display text-4xl md:text-6xl">Interested in building with us?</h2>
        <p className="mt-6 max-w-2xl text-lg text-ink-muted">
          We are always interested in meeting experienced operators, founders and functional leaders.
        </p>
        <div className="mt-10">
          <CtaButton to="/contact">Explore Opportunities</CtaButton>
        </div>
      </section>
    </>
  );
}