import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Prose";
import { ClosingCta } from "@/components/site/Content";
import { departmentIcons, pageHead } from "@/lib/site-presentation";
import { websiteCopy as copy } from "@/lib/website-copy";

export const Route = createFileRoute("/ai-os")({
  head: () => pageHead("AI OS", copy.aiOs.lead),
  component: AiOs,
});
function AiOs() {
  return (
    <>
      <PageHero eyebrow="AI OS" title={copy.aiOs.title} lead={copy.aiOs.lead} />
      <Section bordered={false}>
        <div className="space-y-6">
          {copy.departments.map((department, index) => {
            const Icon = departmentIcons[index];
            return (
              <article key={department.title} className="glass-panel rounded-2xl p-8 md:p-10">
                <div className="flex items-center gap-4">
                  <Icon className="size-7 shrink-0 text-accent-warm" aria-hidden />
                  <h2 className="font-display text-3xl">{department.title}</h2>
                </div>
                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-ink-muted">Problem</h3>
                    <p className="mt-3 leading-relaxed text-ink-muted">{department.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-accent-warm">
                      What the AI OS does
                    </h3>
                    <p className="mt-3 leading-relaxed text-ink-muted">{department.body}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Section>
      <ClosingCta
        title={copy.aiOs.closingTitle}
        body={copy.aiOs.closingBody}
        primary={{ label: "See It In Action Across Our Portfolio →", to: "/portfolio" }}
      />
    </>
  );
}
