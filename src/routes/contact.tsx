import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { site } from "@/lib/site-content";
import { PageHero, Section } from "@/components/site/Prose";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Native AI Group" },
      {
        name: "description",
        content:
          "Start a confidential conversation about selling your business, working with a portfolio company, joining the team or partnering with The Native AI Group.",
      },
      { property: "og:title", content: "Contact — The Native AI Group" },
      { property: "og:description", content: "Start a conversation." },
    ],
  }),
  component: ContactPage,
});

const paths = [
  {
    t: "Sell or transition your business",
    b: "Confidential conversations about acquisition and founder succession.",
    href: "/acquisitions#form",
  },
  {
    t: "Work with a portfolio company",
    b: "Marketing, media, accounting, M&A advisory or AI implementation.",
    href: "/portfolio",
  },
  { t: "Join the team", b: "Operators, functional leaders and specialists.", href: "#form" },
  {
    t: "Partner with us",
    b: "Advisors, capital partners, referral partners and vendors.",
    href: "#form",
  },
  { t: "Press or media", b: "Media inquiries and speaking engagements.", href: "#form" },
];

function ContactPage() {
  const [formError, setFormError] = useState<string>();
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation."
        lead="Choose the path that fits your inquiry."
      />

      <Section eyebrow="Paths" title="How can we help?">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {paths.map((p) => (
            <a
              key={p.t}
              href={p.href}
              className="group glass-panel rounded-2xl p-6 transition-colors hover:border-accent-warm"
            >
              <p className="font-display text-xl text-foreground">{p.t}</p>
              <p className="mt-2 text-sm text-ink-muted">{p.b}</p>
              <p className="mt-4 text-sm text-accent-warm">Continue →</p>
            </a>
          ))}
        </div>
      </Section>

      <section id="form" className="border-b border-hairline">
        <div className="container-page grid gap-12 py-20 md:grid-cols-[1fr_1.4fr] md:py-28">
          <div>
            <p className="text-xs uppercase tracking-widest text-accent-warm">General inquiry</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl">Send us a message</h2>
            <p className="mt-6 text-ink-muted">
              For confidential acquisition inquiries, please use the acquisitions form. We respond
              within two business days.
            </p>
          </div>
          <form
            className="space-y-5 glass-panel rounded-2xl p-8"
            onSubmit={(e) => {
              e.preventDefault();
              // The published server-side delivery handler was not included in the recovered source.
              // Keep the entered values and show the published fallback until delivery is configured.
              setFormError(`We couldn't send your inquiry — please email ${site.emails.general}.`);
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Input label="Name" name="name" required />
              <Input label="Email" type="email" name="email" required />
              <Input label="Company" name="company" />
              <Select
                label="Type of inquiry"
                name="type"
                required
                options={[
                  "Sell or transition my business",
                  "Work with a portfolio company",
                  "Join the team",
                  "Partnership",
                  "Press or media",
                  "Other",
                ]}
              />
            </div>
            <label className="block text-sm">
              <span className="text-ink-muted">Message *</span>
              <textarea
                name="message"
                rows={5}
                required
                className="mt-1 w-full rounded-md border border-hairline bg-background px-3 py-2 text-foreground outline-none focus:border-accent-warm"
              />
            </label>
            <input
              type="text"
              name="website"
              aria-hidden="true"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />
            {formError && (
              <p className="text-sm text-red-600" role="alert">
                {formError}
              </p>
            )}
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-accent-warm px-6 py-3 text-sm font-medium text-brand-foreground transition-colors hover:bg-accent-warm/90 disabled:opacity-60"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Input({
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
      <span className="text-ink-muted">
        {label}
        {required && " *"}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-1 w-full rounded-md border border-hairline bg-background px-3 py-2 text-foreground outline-none focus:border-accent-warm"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block text-sm">
      <span className="text-ink-muted">
        {label}
        {required && " *"}
      </span>
      <select
        required={required}
        name={name}
        defaultValue=""
        className="mt-1 w-full rounded-md border border-hairline bg-background px-3 py-2 text-foreground outline-none focus:border-accent-warm"
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
