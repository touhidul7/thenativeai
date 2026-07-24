import { createFileRoute } from "@tanstack/react-router";
import { CtaButton, PageHero, Section } from "@/components/site/Prose";
import { osLayers } from "@/lib/site-content";

export const Route = createFileRoute("/ai-os")({
  head: () => ({
    meta: [
      { title: "AI OS — The Native AI Group" },
      {
        name: "description",
        content:
          "AI OS is the shared operational foundation used to improve how our companies sell, deliver, communicate, manage and learn.",
      },
      { property: "og:title", content: "AI OS — The Native AI Group" },
      { property: "og:description", content: "The shared operating system behind every company." },
    ],
  }),
  component: AiOsPage,
});

const agents = [
  { t: "Sales AI", b: "Prospect research, outreach, lead qualification, follow-up and proposal development." },
  { t: "Marketing AI", b: "Content production, campaign analysis, research, optimization and reporting." },
  { t: "Finance AI", b: "Transaction classification, reporting, variance analysis, forecasting and review." },
  { t: "Operations AI", b: "Workflow coordination, quality control, task management and delivery." },
  { t: "Customer Success AI", b: "Onboarding, communication, account monitoring and retention." },
];

const workflow = [
  "A new inquiry enters the customer relationship management system.",
  "The lead is enriched and routed.",
  "The sales team receives a recommended next action.",
  "Meeting notes and requirements are summarized.",
  "A draft proposal is prepared.",
  "The operator reviews and approves it.",
  "Onboarding workflows are triggered.",
  "Delivery tasks are created.",
  "Progress is monitored.",
  "Reporting is prepared for the client and management.",
];

function AiOsPage() {
  return (
    <>
      <PageHero
        eyebrow="AI OS"
        title="The shared operating system behind every company."
        lead="AI OS connects knowledge, workflows, data, automation and human judgment across the Native AI Group portfolio."
      />

      <Section
        eyebrow="Introduction"
        title="Every company becomes smarter together"
        lead="AI OS is not a single tool. It is a coordinated system of data, processes, automations, AI agents, knowledge, reporting, human review and continuous improvement."
      >
        <div className="flex flex-wrap gap-2 text-sm">
          {["Data", "Processes", "Automations", "AI agents", "Knowledge", "Reporting", "Human review", "Continuous improvement"].map(
            (t) => (
              <span key={t} className="rounded-full border border-hairline px-4 py-2 text-foreground">
                {t}
              </span>
            ),
          )}
        </div>
      </Section>

      <Section eyebrow="Layers" title="The AI OS stack">
        <ol className="space-y-px overflow-hidden rounded-2xl border border-hairline bg-hairline">
          {osLayers.map((l) => (
            <li key={l.n} className="grid gap-4 bg-background p-8 md:grid-cols-[6rem_1fr] md:p-10">
              <p className="font-display text-4xl text-accent-warm">{l.n}</p>
              <div>
                <h3 className="font-display text-2xl text-foreground">{l.title}</h3>
                <p className="mt-3 max-w-2xl text-ink-muted">{l.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16">
          <h3 className="font-display text-2xl text-foreground">AI agents supporting each function</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {agents.map((a) => (
              <div key={a.t} className="rounded-xl border border-hairline bg-surface p-5">
                <p className="font-display text-xl text-accent-warm">{a.t}</p>
                <p className="mt-2 text-sm text-ink-muted">{a.b}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-accent-warm/40 bg-accent-warm/5 p-8 md:p-12">
          <p className="text-xs uppercase tracking-widest text-accent-warm">Human oversight</p>
          <p className="mt-3 max-w-3xl font-display text-2xl text-foreground">
            AI OS is built around human accountability. Operators review, approve and refine important
            outputs and decisions.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2 text-sm text-ink-muted">
            {["Quality", "Accuracy", "Context", "Compliance", "Brand alignment", "Customer trust", "Responsible implementation"].map(
              (s) => (
                <li key={s} className="rounded-full border border-hairline px-3 py-1">
                  {s}
                </li>
              ),
            )}
          </ul>
        </div>
      </Section>

      <Section eyebrow="Example workflow" title="From lead to client outcome">
        <ol className="relative border-l border-hairline pl-8">
          {workflow.map((step, i) => (
            <li key={i} className="relative mb-8 last:mb-0">
              <span className="absolute -left-[41px] flex size-8 items-center justify-center rounded-full border border-accent-warm/50 bg-background font-display text-sm text-accent-warm">
                {i + 1}
              </span>
              <p className="text-foreground">{step}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-2xl text-ink-muted">
          The system supports the team at each stage while keeping the operator responsible for the outcome.
        </p>
      </Section>

      <Section eyebrow="What we measure" title="Operating results, not vanity metrics">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Response time",
            "Conversion rates",
            "Employee output",
            "Delivery time",
            "Gross margin",
            "Customer retention",
            "Error rates",
            "Administrative hours",
            "Reporting accuracy",
            "Customer satisfaction",
          ].map((m) => (
            <li key={m} className="rounded-md border border-hairline px-4 py-3 text-foreground">
              {m}
            </li>
          ))}
        </ul>
      </Section>

      <section className="container-page py-24 md:py-32">
        <h2 className="max-w-3xl font-display text-4xl md:text-6xl">
          Build once. Improve continuously. Share across the portfolio.
        </h2>
        <div className="mt-10">
          <CtaButton to="/model">Explore Our Model</CtaButton>
        </div>
      </section>
    </>
  );
}