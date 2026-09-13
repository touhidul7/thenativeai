import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { HeroGraphic, Reveal } from "./Motion";

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
  graphic = false,
}: {
  graphic?: boolean;
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-hairline">
      <div className="hero-atmosphere pointer-events-none absolute inset-0" aria-hidden />
      {graphic ? (
        <HeroGraphic />
      ) : (
        <div className="pointer-events-none absolute inset-0 opacity-50" aria-hidden>
          <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-brand/15 blur-3xl" />
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />
        </div>
      )}
      <div className="container-page relative z-10 py-20 md:py-28">
        <div>
          {eyebrow && (
            <Reveal hero>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.24em] text-accent-warm">
                {eyebrow}
              </p>
            </Reveal>
          )}
          <Reveal hero delay={80}>
            <h1 className="max-w-4xl font-display text-4xl leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
              {title}
            </h1>
          </Reveal>
          {lead && (
            <Reveal hero delay={160}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
                {lead}
              </p>
            </Reveal>
          )}
          {children && (
            <Reveal hero delay={240}>
              <div className="mt-10">{children}</div>
            </Reveal>
          )}
        </div>
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
        <Reveal>
          {eyebrow && (
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-accent-warm">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="max-w-3xl font-display text-2xl leading-tight md:text-3xl">{title}</h2>
          )}
          {lead && <p className="mt-6 max-w-2xl text-lg text-ink-muted">{lead}</p>}
        </Reveal>
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
      ? "bg-accent-warm text-brand-foreground hover:bg-accent-warm/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
      : "border border-hairline bg-surface/70 text-foreground backdrop-blur-sm hover:border-accent-warm hover:text-accent-warm";
  return to.startsWith("/") && !to.startsWith("//") ? (
    <div className="inline-flex cta-motion">
      <Link to={to} className={`${base} ${styles}`}>
        {children}
      </Link>
    </div>
  ) : (
    <a href={to} className={`${base} ${styles} cta-motion`}>
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
