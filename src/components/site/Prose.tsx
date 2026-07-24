import { type ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-hairline">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-accent-warm/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-accent-warm/5 blur-3xl" />
      </div>
      <div className="container-page relative py-20 md:py-28">
        {eyebrow && (
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.24em] text-accent-warm">{eyebrow}</p>
        )}
        <h1 className="max-w-4xl font-display text-4xl leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">{lead}</p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}

export function Section({
  eyebrow,
  title,
  lead,
  children,
  bordered = true,
}: {
  eyebrow?: string;
  title?: ReactNode;
  lead?: ReactNode;
  children: ReactNode;
  bordered?: boolean;
}) {
  return (
    <section className={bordered ? "border-b border-hairline" : ""}>
      <div className="container-page py-20 md:py-28">
        {eyebrow && (
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-accent-warm">{eyebrow}</p>
        )}
        {title && (
          <h2 className="max-w-3xl font-display text-2xl leading-tight md:text-3xl">{title}</h2>
        )}
        {lead && <p className="mt-6 max-w-2xl text-lg text-ink-muted">{lead}</p>}
        <div className={title || lead ? "mt-14" : ""}>{children}</div>
      </div>
    </section>
  );
}

export function CtaButton({
  to,
  children,
  variant = "primary",
}: {
  to: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-accent-warm text-accent-foreground hover:bg-accent-warm/90"
      : "border border-hairline text-foreground hover:border-accent-warm hover:text-accent-warm";
  return (
    <a href={to} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-ink-muted [&_h2]:mt-16 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:text-foreground [&_h3]:mt-10 [&_h3]:font-display [&_h3]:text-2xl [&_h3]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_strong]:text-foreground">
      {children}
    </div>
  );
}