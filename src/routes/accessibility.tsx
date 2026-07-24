import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Prose, Section } from "@/components/site/Prose";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility — The Native AI Group" },
      { name: "description", content: "Our commitment to an accessible web experience." },
      { property: "og:title", content: "Accessibility — The Native AI Group" },
      { property: "og:description", content: "Accessibility statement." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Accessibility" />
      <Section bordered={false}>
        <Prose>
          <p>
            The Native AI Group is committed to providing a website that is accessible to the widest possible
            audience. We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
          </p>
          <h2>Ongoing effort</h2>
          <p>We regularly review the site for accessibility and improve navigation, colour contrast, keyboard
            support and screen reader compatibility.</p>
          <h2>Feedback</h2>
          <p>If you encounter an accessibility barrier on this site, please contact hello@nativeai.group so
            we can address it.</p>
        </Prose>
      </Section>
    </>
  ),
});