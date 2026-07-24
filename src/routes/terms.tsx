import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Prose, Section } from "@/components/site/Prose";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms — The Native AI Group" },
      { name: "description", content: "Terms of use for The Native AI Group website." },
      { property: "og:title", content: "Terms — The Native AI Group" },
      { property: "og:description", content: "Terms of use." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" />
      <Section bordered={false}>
        <Prose>
          <p>
            This website is operated by The Native AI Group. Content is provided for informational purposes.
            Nothing on this website constitutes an offer to sell or a solicitation of an offer to buy any
            security.
          </p>
          <h2>No investment advice</h2>
          <p>Information on this website is not investment, legal, tax or accounting advice. You should
            consult your own advisors before making any decision.</p>
          <h2>Forward-looking statements</h2>
          <p>Statements about strategy, plans and future performance are forward-looking and involve risks and
            uncertainties. Actual results may differ materially.</p>
          <h2>Trademarks</h2>
          <p>All trademarks, logos and brand names are the property of their respective owners.</p>
        </Prose>
      </Section>
    </>
  ),
});