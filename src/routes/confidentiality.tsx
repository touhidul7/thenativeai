import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Prose, Section } from "@/components/site/Prose";

export const Route = createFileRoute("/confidentiality")({
  head: () => ({
    meta: [
      { title: "Confidentiality — The Native AI Group" },
      { name: "description", content: "How we treat confidential acquisition and business information." },
      { property: "og:title", content: "Confidentiality — The Native AI Group" },
      { property: "og:description", content: "Confidentiality statement." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Confidentiality" />
      <Section bordered={false}>
        <Prose>
          <p>
            The Native AI Group treats all acquisition inquiries and related information as strictly
            confidential. Information shared with us in the context of a potential transaction is used only
            to evaluate that transaction.
          </p>
          <h2>Access</h2>
          <p>Access is limited to the personnel, operating leaders and outside advisors who require it. We
            do not disclose the identity of a prospective seller to third parties without consent.</p>
          <h2>Retention</h2>
          <p>Information is retained only as long as necessary to evaluate the opportunity and to meet legal
            and regulatory obligations.</p>
          <h2>Mutual NDAs</h2>
          <p>We are prepared to execute a mutual non-disclosure agreement at any stage of the conversation.</p>
        </Prose>
      </Section>
    </>
  ),
});