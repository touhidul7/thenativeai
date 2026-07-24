import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CtaButton, PageHero, Section } from "@/components/site/Prose";

export const Route = createFileRoute("/acquisitions")({
  head: () => ({
    meta: [
      { title: "Acquisitions — The Native AI Group" },
      {
        name: "description",
        content:
          "A long-term home for founder-led service businesses. Confidential conversations about sale, succession, partial liquidity and growth partnership.",
      },
      { property: "og:title", content: "Acquisitions — The Native AI Group" },
      { property: "og:description", content: "A long-term home for founder-led businesses." },
    ],
  }),
  component: AcqPage,
});

const process = [
  { t: "Introductory conversation", b: "A confidential discussion about the company, your objectives and whether there may be a fit." },
  { t: "Initial review", b: "We review high-level financial, operational and customer information." },
  { t: "Indication of interest", b: "If there is alignment, we outline a proposed valuation range and transaction structure." },
  { t: "Due diligence", b: "We work through financial, legal, operational and commercial diligence." },
  { t: "Definitive agreement", b: "The parties agree on final terms, responsibilities and transition plans." },
  { t: "Closing and transition", b: "We complete the transaction and begin the integration plan with the founder and team." },
];

function AcqPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Acquisitions"
        title="A long-term home for founder-led businesses."
        lead="We acquire strong service companies and work alongside their founders and operators to build the next stage of growth."
      >
        <CtaButton to="#form">Start a Confidential Conversation</CtaButton>
      </PageHero>

      <Section eyebrow="Founder message" title="You have built more than a business">
        <div className="grid gap-8 md:grid-cols-2">
          <p className="text-lg text-ink-muted">
            You have built customer relationships, a team, a reputation and a way of working that cannot be
            recreated overnight.
          </p>
          <p className="text-lg text-ink-muted">
            Our objective is to preserve what makes the company valuable while helping it become stronger,
            more scalable and less dependent on any one person. We are not looking to erase the company's
            identity — we are looking to build on it.
          </p>
        </div>
      </Section>

      <Section eyebrow="What we look for" title="Our preferred acquisition profile">
        <ul className="grid gap-3 md:grid-cols-2">
          {[
            "Founder ownership",
            "Approximately $300,000 to $2 million in annual revenue",
            "Positive cash flow",
            "Recurring or repeat customer revenue",
            "Strong customer relationships",
            "A capable team",
            "A clear market position",
            "Opportunities to improve systems",
            "Limited AI or automation adoption",
            "A founder considering succession, liquidity or a growth partner",
          ].map((s) => (
            <li key={s} className="rounded-md border border-hairline px-4 py-3 text-foreground">
              {s}
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Industries" title="Intelligence-heavy, relationship-driven service businesses">
        <div className="flex flex-wrap gap-2">
          {[
            "Marketing",
            "Creative services",
            "Accounting",
            "Financial services",
            "M&A advisory",
            "AI implementation",
            "IT services",
            "Recruitment",
            "Insurance",
            "Legal support services",
            "Wealth management",
            "Mortgage services",
          ].map((s) => (
            <span key={s} className="rounded-full border border-hairline px-4 py-2 text-sm text-foreground">
              {s}
            </span>
          ))}
        </div>
      </Section>

      <Section eyebrow="Structure" title="Flexible structures for different founder objectives">
        <div className="grid gap-6 md:grid-cols-2">
          <ul className="space-y-2 text-ink-muted">
            {[
              "Cash at closing",
              "Seller financing",
              "Retained founder ownership",
              "Performance-based payments",
              "Ongoing compensation",
              "Board or advisory involvement",
              "A phased transition",
              "Continued operating leadership",
            ].map((s) => (
              <li key={s}>· {s}</li>
            ))}
          </ul>
          <p className="text-lg text-ink-muted">
            We prefer structures that maintain alignment between the founder, the operator and the group.
            In many acquisitions, the founder retains a meaningful ownership position — receiving liquidity
            today while continuing to participate in the upside.
          </p>
        </div>
      </Section>

      <Section eyebrow="Process" title="How a partnership unfolds">
        <ol className="grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
          {process.map((p, i) => (
            <li key={p.t} className="bg-background p-6">
              <p className="font-display text-3xl text-accent-warm">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-3 font-display text-xl text-foreground">{p.t}</p>
              <p className="mt-2 text-sm text-ink-muted">{p.b}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Why TNAG" title="What partnership with the group offers">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Long-term orientation", b: "Enduring companies over quick exits." },
            { t: "Founder partnership", b: "We value the expertise that created the company." },
            { t: "Flexible transactions", b: "Structured around your personal and financial objectives." },
            { t: "Shared capabilities", b: "Resources portfolio companies could not build alone." },
            { t: "AI-native transformation", b: "Redesign workflows, preserve knowledge, improve output." },
            { t: "Cross-portfolio opportunities", b: "New customers, capabilities and relationships." },
          ].map((x) => (
            <div key={x.t} className="rounded-xl border border-hairline bg-surface p-6">
              <p className="font-display text-xl text-foreground">{x.t}</p>
              <p className="mt-2 text-sm text-ink-muted">{x.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <section id="form" className="border-b border-hairline">
        <div className="container-page grid gap-12 py-20 md:grid-cols-[1fr_1.4fr] md:py-28">
          <div>
            <p className="text-xs uppercase tracking-widest text-accent-warm">Confidential inquiry</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl">Tell us about your business</h2>
            <p className="mt-6 text-ink-muted">
              Complete the form and a member of our team will contact you directly. Initial conversations
              are confidential and do not require a formal commitment.
            </p>
          </div>
          <form
            className="space-y-5 rounded-2xl border border-hairline bg-surface p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            {submitted ? (
              <div className="py-10 text-center">
                <p className="font-display text-2xl text-accent-warm">Thank you.</p>
                <p className="mt-3 text-ink-muted">
                  Your inquiry has been received. A member of our team will be in touch confidentially.
                </p>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="First name" name="firstName" required />
                  <Field label="Last name" name="lastName" required />
                  <Field label="Company" name="company" required />
                  <Field label="Email" type="email" name="email" required />
                  <Field label="Phone" name="phone" />
                  <Field label="Website" name="website" />
                  <Field label="Industry" name="industry" />
                  <Select
                    label="Annual revenue range"
                    name="revenue"
                    options={[
                      "Under $300k",
                      "$300k – $1M",
                      "$1M – $2M",
                      "$2M – $5M",
                      "Over $5M",
                    ]}
                  />
                  <Field label="Approx. EBITDA / owner earnings" name="ebitda" />
                  <Field label="Number of employees" name="employees" />
                </div>
                <Select
                  label="Preferred role after transaction"
                  name="role"
                  options={["Full exit", "Continued leadership", "Advisory role", "Board seat", "Undecided"]}
                />
                <TextArea label="What are you hoping to achieve?" name="goals" rows={3} />
                <TextArea label="Additional information" name="notes" rows={3} />
                <input type="text" name="website_url" tabIndex={-1} autoComplete="off" className="hidden" />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-accent-warm px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-warm/90"
                >
                  Start a Confidential Conversation
                </button>
                <p className="text-xs text-ink-muted">
                  Information submitted is treated confidentially and used only to evaluate a potential
                  partnership.
                </p>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm">
      <span className="text-ink-muted">{label}{required && " *"}</span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-1 w-full rounded-md border border-hairline bg-background px-3 py-2 text-foreground outline-none transition-colors focus:border-accent-warm"
      />
    </label>
  );
}

function TextArea({ label, name, rows = 4 }: { label: string; name: string; rows?: number }) {
  return (
    <label className="block text-sm">
      <span className="text-ink-muted">{label}</span>
      <textarea
        name={name}
        rows={rows}
        className="mt-1 w-full rounded-md border border-hairline bg-background px-3 py-2 text-foreground outline-none transition-colors focus:border-accent-warm"
      />
    </label>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block text-sm">
      <span className="text-ink-muted">{label}</span>
      <select
        name={name}
        defaultValue=""
        className="mt-1 w-full rounded-md border border-hairline bg-background px-3 py-2 text-foreground outline-none transition-colors focus:border-accent-warm"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}