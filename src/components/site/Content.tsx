import { Link } from "@tanstack/react-router";
import { Rocket, Building2, Handshake, ArrowRight } from "lucide-react";
import { CtaButton } from "./Prose";
import { websiteCopy as copy } from "@/lib/website-copy";

const growthIcons = [Rocket, Building2, Handshake];

export function GrowthCards({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {copy.growth.map((path, index) => {
        const Icon = growthIcons[index];
        const body = detailed ? path.body : path.short;
        return (
          <article key={path.title} className="glass-panel flex flex-col rounded-2xl p-8">
            <Icon className="size-7 text-accent-warm" aria-hidden />
            <h3 className="mt-6 font-display text-3xl">{path.title}</h3>
            <p className="mt-4 flex-1 leading-relaxed text-ink-muted">
              {detailed && path.title === "Acquire" ? (
                <>
                  {body.split("Deal Structures")[0]}
                  <Link
                    to="/deal-structures"
                    className="text-accent-warm underline underline-offset-4"
                  >
                    Deal Structures
                  </Link>
                  {body.split("Deal Structures")[1]}
                </>
              ) : (
                body
              )}
            </p>
            <Link
              to={path.to}
              className="mt-6 inline-flex items-center gap-2 text-sm text-accent-warm"
            >
              {path.cta}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </article>
        );
      })}
    </div>
  );
}

export function ClosingCta({
  title,
  body,
  primary,
  secondary,
}: {
  title?: string;
  body?: string;
  primary: { label: string; to: string };
  secondary?: { label: string; to: string };
}) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="hero-atmosphere pointer-events-none absolute inset-0 opacity-80"
        aria-hidden
      />
      <div className="container-page relative py-20 md:py-28">
        <div className="glass-panel rounded-2xl p-8 text-center md:p-12">
          {title && (
            <h2 className="mx-auto max-w-3xl font-display text-4xl md:text-5xl">{title}</h2>
          )}
          {body && (
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-ink-muted">{body}</p>
          )}
          <div className={`flex flex-wrap justify-center gap-3 ${title || body ? "mt-10" : ""}`}>
            <CtaButton to={primary.to}>{primary.label}</CtaButton>
            {secondary && (
              <CtaButton to={secondary.to} variant="ghost">
                {secondary.label}
              </CtaButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
