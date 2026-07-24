import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Prose, Section } from "@/components/site/Prose";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — The Native AI Group" },
      { name: "description", content: "How The Native AI Group collects, uses and protects personal information." },
      { property: "og:title", content: "Privacy — The Native AI Group" },
      { property: "og:description", content: "Privacy policy." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <Section bordered={false}>
        <Prose>
          <p>
            The Native AI Group ("we", "our", "us") respects your privacy. This policy describes how we
            collect, use and safeguard the information you provide through this website and related forms.
          </p>
          <h2>Information we collect</h2>
          <p>We collect only information you choose to submit, including your name, contact details and any
            information you provide in connection with an inquiry.</p>
          <h2>How we use information</h2>
          <p>Information is used to respond to your inquiry, evaluate a potential partnership and communicate
            about our companies. We do not sell personal information.</p>
          <h2>Confidentiality</h2>
          <p>Acquisition inquiries and related information are treated confidentially and shared only with
            personnel and advisors who need it to evaluate a potential transaction.</p>
          <h2>Contact</h2>
          <p>Questions about this policy can be sent to hello@nativeai.group.</p>
        </Prose>
      </Section>
    </>
  ),
});