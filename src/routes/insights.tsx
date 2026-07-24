import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section } from "@/components/site/Prose";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — The Native AI Group" },
      {
        name: "description",
        content:
          "Research, operating lessons and perspectives on AI-native companies, acquisitions and building better service businesses.",
      },
      { property: "og:title", content: "Insights — The Native AI Group" },
      { property: "og:description", content: "Ideas for building AI-native companies." },
    ],
  }),
  component: InsightsPage,
});

const categories = [
  { t: "AI-Native Companies", b: "How AI is changing business models, workflows and delivery." },
  { t: "Acquisitions", b: "Practical insights on buying, selling, financing and integrating businesses." },
  { t: "Operations", b: "Systems, processes and management practices for building better companies." },
  { t: "Founder Succession", b: "Guidance for entrepreneurs considering a sale, partnership or transition." },
  { t: "Portfolio Building", b: "How shared capabilities, cross-selling and capital allocation create value." },
  { t: "Case Studies", b: "Real examples of operating improvements and AI implementation." },
];

const featured = [
  {
    t: "What Is an AI-Native Company?",
    b: "An AI-native company is designed around the assumption that intelligence, automation and data will be embedded throughout the organization. It does not merely add AI to an old operating model.",
    category: "AI-Native Companies",
  },
  {
    t: "Why Founder-Led Service Businesses Are Attractive Acquisition Targets",
    b: "Many founder-led service businesses have strong customer relationships, recurring revenue and valuable expertise. Their constraint is often not demand — it is capacity, fragmented systems or the absence of a succession plan.",
    category: "Acquisitions",
  },
  {
    t: "The Difference Between a Collection of Companies and a Platform",
    b: "A collection of businesses may share ownership but little else. A platform creates value by sharing knowledge, capabilities, customers, systems and infrastructure.",
    category: "Portfolio Building",
  },
  {
    t: "Why We Want Founders to Stay Involved",
    b: "Founders hold the relationships, context and judgment that made the company successful. Removing them too quickly can destroy value.",
    category: "Founder Succession",
  },
  {
    t: "How AI Changes the Economics of Service Businesses",
    b: "Service businesses traditionally grow by adding people. AI and automation create the potential to increase output and serve more customers without matching increases in overhead.",
    category: "AI-Native Companies",
  },
];

const library = [
  "What Is an AI-Native Company?",
  "Why We Acquire and Build",
  "The Future of Founder-Led Service Businesses",
  "How AI Changes Service Company Margins",
  "Why Retained Founder Ownership Matters",
  "Building a Shared Operating System Across a Portfolio",
  "What Makes a Good Acquisition Target?",
  "Selling a Business Without Walking Away",
  "How Seller Financing Creates Better Alignment",
  "Why Permanent Ownership Changes Decision-Making",
  "How to Reduce Key-Person Dependence",
  "Turning Company Knowledge Into a Strategic Asset",
  "The Role of Human Oversight in AI-Enabled Workflows",
  "Building AI Agents for Real Business Operations",
  "Why Cross-Selling Often Fails — and How to Do It Properly",
  "How to Integrate a Business Without Destroying Its Culture",
  "The Importance of Financial Visibility After an Acquisition",
  "Why Small Service Companies Are Often Under-Automated",
  "How Operators Can Partner With a Holding Company",
  "The Next Generation of Professional Services",
];

function InsightsPage() {
  const [subscribed, setSubscribed] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Ideas for building AI-native companies."
        lead="Research, operating lessons and perspectives from across The Native AI Group."
      />

      <Section eyebrow="Categories" title="What we write about">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <div key={c.t} className="rounded-xl border border-hairline p-6">
              <p className="font-display text-xl text-foreground">{c.t}</p>
              <p className="mt-2 text-sm text-ink-muted">{c.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Featured" title="Recent thinking">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2">
          {featured.map((a) => (
            <article key={a.t} className="flex flex-col bg-background p-8">
              <p className="text-xs uppercase tracking-widest text-accent-warm">{a.category}</p>
              <h3 className="mt-3 font-display text-2xl text-foreground">{a.t}</h3>
              <p className="mt-3 flex-1 text-ink-muted">{a.b}</p>
              <span className="mt-6 text-sm text-ink-muted">Full article coming soon</span>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Library" title="Upcoming articles">
        <ol className="grid gap-3 md:grid-cols-2">
          {library.map((title, i) => (
            <li key={title} className="flex gap-3 rounded-md border border-hairline px-4 py-3 text-sm text-foreground">
              <span className="font-display text-accent-warm">{String(i + 1).padStart(2, "0")}</span>
              <span>{title}</span>
            </li>
          ))}
        </ol>
      </Section>

      <section className="border-b border-hairline">
        <div className="container-page grid gap-10 py-20 md:grid-cols-[1fr_1.2fr] md:py-28">
          <div>
            <p className="text-xs uppercase tracking-widest text-accent-warm">Newsletter</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl">The Native AI Brief</h2>
            <p className="mt-6 text-ink-muted">
              A practical monthly briefing on AI-native companies, acquisitions and building better service
              businesses.
            </p>
          </div>
          <form
            className="rounded-2xl border border-hairline bg-surface p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSubscribed(true);
            }}
          >
            {subscribed ? (
              <div className="py-10 text-center">
                <p className="font-display text-2xl text-accent-warm">Subscribed.</p>
                <p className="mt-2 text-ink-muted">Look for the next Brief in your inbox.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <input
                  required
                  placeholder="First name"
                  className="w-full rounded-md border border-hairline bg-background px-3 py-2 text-foreground outline-none focus:border-accent-warm"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md border border-hairline bg-background px-3 py-2 text-foreground outline-none focus:border-accent-warm"
                />
                <input
                  placeholder="Company"
                  className="w-full rounded-md border border-hairline bg-background px-3 py-2 text-foreground outline-none focus:border-accent-warm"
                />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-accent-warm px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-warm/90"
                >
                  Subscribe
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}