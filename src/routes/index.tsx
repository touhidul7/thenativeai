import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaButton, PageHero, Section } from "@/components/site/Prose";
import { ClosingCta, GrowthCards } from "@/components/site/Content";
import { departmentIcons, pageHead } from "@/lib/site-presentation";
import { websiteCopy as copy } from "@/lib/website-copy";
import { companies, site } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => pageHead("An AI-native holding company", copy.home.lead),
  component: Home,
});
function Home() {
  return (
    <>
      <PageHero
        graphic
        eyebrow="An AI-native holding company"
        title={copy.home.title}
        lead={copy.home.lead}
      >
        <div className="flex flex-wrap gap-3">
          <CtaButton to="/portfolio">Explore Our Portfolio</CtaButton>
          <CtaButton to="/contact" variant="ghost">
            Partner With Us
          </CtaButton>
        </div>
      </PageHero>
      <div className="border-b border-hairline">
        <p className="container-page py-8 text-sm uppercase tracking-[0.24em] text-ink-muted">
          {site.supportingLine}
        </p>
      </div>
      <Section eyebrow="Three ways in" title="How we grow the group">
        <GrowthCards />
      </Section>
      <Section eyebrow="The AI OS" title={copy.osTeaser.title} lead={copy.osTeaser.body}>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
          {copy.departments.map((department, index) => {
            const Icon = departmentIcons[index];
            return (
              <div key={department.title} className="glass-panel rounded-xl p-5">
                <Icon className="size-6 text-accent-warm" aria-hidden />
                <p className="mt-4 text-sm">{department.title}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-10">
          <CtaButton to="/ai-os" variant="ghost">
            Explore the AI OS →
          </CtaButton>
        </div>
      </Section>
      <Section eyebrow="Portfolio preview" title="A growing group of specialized companies">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {companies.map((company) => (
            <Link
              key={company.slug}
              to="/portfolio"
              className="glass-panel flex min-h-32 items-center justify-center rounded-xl p-6 text-center font-display text-2xl transition-colors hover:border-accent-warm"
            >
              {company.name}
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <CtaButton to="/portfolio" variant="ghost">
            View All Companies →
          </CtaButton>
        </div>
      </Section>
      <ClosingCta
        title={copy.home.closing}
        primary={{ label: "Partner With Us", to: "/contact" }}
        secondary={{ label: "Contact Our Team", to: "/contact" }}
      />
    </>
  );
}
