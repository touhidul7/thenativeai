import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { websiteCopy as copy } from "@/lib/website-copy";
import { pageHead } from "@/lib/site-presentation";
import { site } from "@/lib/site-content";
import { PageHero, Section } from "@/components/site/Prose";

export const Route = createFileRoute("/contact")({
  head: () => pageHead("Contact", copy.contact.title),
  component: ContactPage,
});

function ContactPage() {
  const [inquiry, setInquiry] = useState("");
  const [formError, setFormError] = useState<string>();
  return (
    <>
      <PageHero eyebrow="Contact" title={copy.contact.title} />

      <Section eyebrow="Paths" title="How can we help?">
        <div className="grid gap-4 md:grid-cols-2">
          {copy.contactPaths.map((p) => (
            <a
              key={p.title}
              href="#form"
              onClick={() => setInquiry(p.title)}
              className="group glass-panel rounded-2xl p-6 transition-colors hover:border-accent-warm"
            >
              <p className="font-display text-xl text-foreground">{p.title}</p>
              <p className="mt-2 text-sm text-ink-muted">{p.body}</p>
              <p className="mt-4 text-sm text-accent-warm">{p.cta}</p>
            </a>
          ))}
        </div>
      </Section>

      <section id="form" className="scroll-mt-20 border-b border-hairline">
        <div className="container-page grid gap-12 py-20 md:grid-cols-[1fr_1.4fr] md:py-28">
          <div>
            <p className="text-xs uppercase tracking-widest text-accent-warm">General inquiry</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl">Send us a message</h2>
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
                label="I'm interested in..."
                name="type"
                required
                options={copy.contactPaths.map((path) => path.title)}
                value={inquiry}
                onChange={setInquiry}
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
  value,
  onChange,
}: {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
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
        value={value}
        onChange={(event) => onChange(event.target.value)}
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
