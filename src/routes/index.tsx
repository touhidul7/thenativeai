/* eslint-disable prettier/prettier */
import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaButton, PageHero, Section } from "@/components/site/Prose";
import { companies, modelSteps, site } from "@/lib/site-content";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Native AI Group — We acquire and build AI-native companies" },
      {
        name: "description",
        content:
          "An AI-native holding company acquiring and building a portfolio of service businesses that operate more intelligently together.",
      },
      {
        property: "og:title",
        content: "The Native AI Group — We acquire and build AI-native companies",
      },
      {
        property: "og:description",
        content:
          "An AI-native holding company acquiring and building a portfolio of service businesses that operate more intelligently together.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <PageHero
        eyebrow="An AI-native holding company"
        title={
          <>
            We build or acquire
            <br />
            <span className="italic text-accent-warm">AI-native companies.</span>
          </>
        }
        lead={
          <>
            The Native AI Group acquires established service businesses, builds new companies and
            equips each one with shared AI, automation, data and operating capabilities. Together,
            our companies become more productive, more scalable and more valuable.
          </>
        }
      >
        <div className="flex flex-wrap items-center gap-3">
          <CtaButton to="/portfolio">Explore Our Portfolio</CtaButton>
          <CtaButton to="/contact" variant="ghost">
            Partner With Us
          </CtaButton>
        </div>
        <p className="mt-10 text-sm uppercase tracking-[0.24em] text-ink-muted">
          {site.supportingLine}
        </p>
      </PageHero>

      <Section
        eyebrow="Introduction"
        title="Building the next generation of service companies"
        lead="Traditional service businesses often depend on adding more people, more software and more complexity as they grow. We are building a different model."
      >
        <div className="grid gap-8 md:grid-cols-2">
          <p className="text-lg text-ink-muted">
            The Native AI Group brings together specialized service companies and gives them access
            to a shared operating system, centralized capabilities and a growing body of knowledge.
          </p>
          <p className="text-lg text-ink-muted">
            Each company retains its identity, expertise and customer relationships. At the same
            time, it becomes part of a larger platform built to learn, improve and grow together.
          </p>
        </div>
      </Section>

      <Section eyebrow="How we build" title="One platform. Two paths.">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="group relative rounded-2xl border border-hairline bg-surface p-8 transition-colors hover:border-accent-warm/60">
            <p className="font-display text-2xl text-accent-warm">We acquire</p>
            <p className="mt-4 text-ink-muted">
              We acquire profitable, founder-led service businesses with strong customer
              relationships, recurring revenue and meaningful growth potential. We preserve what
              made the company successful while helping it become more efficient, scalable and
              resilient.
            </p>
            <Link
              to="/acquisitions"
              className="mt-6 inline-flex items-center gap-2 text-sm text-foreground transition-colors group-hover:text-accent-warm"
            >
              Learn about selling your business <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="group relative rounded-2xl border border-hairline bg-surface p-8 transition-colors hover:border-accent-warm/60">
            <p className="font-display text-2xl text-accent-warm">We build</p>
            <p className="mt-4 text-ink-muted">
              We launch new AI-native service companies around strong operators, attractive markets
              and opportunities where our platform can create an immediate advantage. New companies
              begin with access to shared infrastructure, portfolio relationships and proven
              operating capabilities.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm text-foreground transition-colors group-hover:text-accent-warm"
            >
              Build a company with us <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="The model"
        title="Acquire. Build. Transform. Compound."
        lead="Every company becomes smarter together."
      >
        <ol className="grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
          {modelSteps.map((step) => (
            <li key={step.n} className="bg-background p-8">
              <p className="font-display text-4xl text-accent-warm">{step.n}</p>
              <h3 className="mt-4 font-display text-2xl text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="AI-native companies" title="What makes a company AI-native?">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-lg text-ink-muted">
              An AI-native company is not simply a traditional business that uses a few AI tools. It
              is designed around a fundamentally different way of working — structured data,
              connected workflows, automation and human oversight combined to improve how work is
              sold, delivered, measured and refined.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-hairline p-6">
              <p className="font-display text-xl text-foreground">Traditional</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-ink-muted">Scales people</p>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                <li>More employees</li>
                <li>More management</li>
                <li>Fragmented systems</li>
                <li>Administrative overhead</li>
                <li>Operational complexity</li>
              </ul>
            </div>
            <div className="rounded-xl border border-accent-warm/40 bg-accent-warm/5 p-6">
              <p className="font-display text-xl text-accent-warm">AI-native</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-ink-muted">
                Scales intelligence
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                <li>Connected data</li>
                <li>Automated workflows</li>
                <li>Shared knowledge</li>
                <li>AI-assisted delivery</li>
                <li>Strong human oversight</li>
              </ul>
            </div>
          </div>
        </div>
        <blockquote className="mt-14 max-w-3xl border-l-2 border-accent-warm pl-6 font-display text-2xl italic leading-snug text-foreground">
          We are not removing people from service businesses. We are giving great people better
          systems.
        </blockquote>
      </Section>

      <Section
        eyebrow="Portfolio preview"
        title="A growing group of specialized companies"
        lead="Our portfolio combines complementary businesses across marketing, creative services, finance, advisory and AI implementation."
      >
        <div className="grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
          {companies.map((c) => (
            <div key={c.slug} className="flex flex-col bg-background p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-2xl text-foreground">{c.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-accent-warm">
                    {c.category}
                  </p>
                </div>
                {c.comingSoon && (
                  <span className="rounded-full border border-hairline px-2 py-1 text-[10px] uppercase tracking-widest text-ink-muted">
                    Soon
                  </span>
                )}
              </div>
              <p className="mt-4 text-sm text-ink-muted">{c.blurb}</p>
            </div>
          ))}
          {/* Grid Placeholders */}
          <div className="flex flex-col bg-background"></div>
          <div className="flex flex-col bg-background"></div>
        </div>
        <div className="mt-10">
          <CtaButton to="/portfolio" variant="ghost">
            View all companies
          </CtaButton>
        </div>
      </Section>

      <Section eyebrow="Shared intelligence" title="More than a collection of companies">
        <div className="grid gap-8 md:grid-cols-2">
          <p className="text-lg text-ink-muted">
            Traditional holding companies share capital. The Native AI Group shares capital,
            capabilities, data, relationships and intelligence.
          </p>
          <ul className="grid grid-cols-2 gap-3 text-sm text-foreground">
            {[
              "Sales",
              "Marketing",
              "Finance",
              "Operations",
              "Customer service",
              "Reporting",
              "Automation",
              "Knowledge management",
              "Recruitment",
              "Business development",
            ].map((s) => (
              <li key={s} className="rounded-md border border-hairline px-3 py-2">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section eyebrow="Founder partnership" title="A long-term home for exceptional businesses">
        <div className="grid gap-8 md:grid-cols-2">
          <p className="text-lg text-ink-muted">
            We believe the strongest companies are built around trust, expertise and long-standing
            customer relationships. We do not acquire companies simply to strip away what made them
            valuable — we aim to preserve their identity, retain key operators and provide the
            infrastructure needed for the next stage of growth.
          </p>
          <div>
            <p className="text-xs uppercase tracking-widest text-ink-muted">
              Founders may remain involved through
            </p>
            <ul className="mt-4 space-y-2 text-foreground">
              {[
                "Ongoing leadership",
                "Retained ownership",
                "Board participation",
                "Business development",
                "Customer relationships",
                "Strategic advisory roles",
                "Performance incentives",
              ].map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="h-px w-6 bg-accent-warm" /> {s}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CtaButton to="/acquisitions" variant="ghost">
                Explore our acquisition approach
              </CtaButton>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Who we partner with" title="Owners, operators, investors and advisors">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              t: "Business owners",
              b: "Founders considering succession, partial liquidity or a partner for the next stage of growth.",
            },
            {
              t: "Operators",
              b: "Experienced leaders who want to build or run an AI-native company with the support of a larger platform.",
            },
            {
              t: "Investors",
              b: "Long-term capital partners who understand the opportunity to build enduring value through AI-native service businesses.",
            },
            {
              t: "Advisors & deal partners",
              b: "Accountants, lawyers, bankers, brokers and advisors who work with business owners considering a transition.",
            },
          ].map((x) => (
            <div key={x.t} className="rounded-xl border border-hairline bg-surface p-6">
              <p className="font-display text-xl text-foreground">{x.t}</p>
              <p className="mt-3 text-sm text-ink-muted">{x.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Future verticals" title="Where we are going next">
        <div className="flex flex-wrap gap-2">
          {[
            "Insurance",
            "Legal services",
            "Wealth management",
            "IT services",
            "Recruitment",
            "Mortgage services",
            "Interior design",
            "Business administration",
            "Compliance",
            "Other specialized professional services",
          ].map((v) => (
            <span
              key={v}
              className="rounded-full border border-hairline px-4 py-2 text-sm text-foreground"
            >
              {v}
            </span>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-ink-muted">
          We enter a sector when we find the right operator, the right business and a clear
          opportunity for our shared platform to create value.
        </p>
      </Section>

      <section className="relative overflow-hidden">
        <div className="container-page py-24 md:py-32">
          <h2 className="max-w-3xl font-display text-4xl md:text-6xl">
            Build the next generation with us.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-ink-muted">
            Whether you are looking to sell a company, operate one, build a new business or invest
            in the platform, we would like to hear from you.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <CtaButton to="/contact">Partner With Us</CtaButton>
            <CtaButton to="/contact" variant="ghost">
              Contact Our Team
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
