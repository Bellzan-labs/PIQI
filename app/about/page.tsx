import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { GroupFacts } from "@/components/sections/GroupFacts";
import { CTABanner } from "@/components/sections/CTABanner";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/global/JsonLd";
import { buildWebPage } from "@/lib/schema";
import { SITE } from "@/lib/constants";

const DESCRIPTION =
  "PIQI Group is a South African multi-vertical business founded in 2016, serving clients internationally across consulting, property, fashion, yachts, auto, and coaching.";

export const metadata: Metadata = {
  title: "About PIQI Group",
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: { title: "About PIQI Group", description: DESCRIPTION, url: `${SITE.url}/about` }
};

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        title={
          <>
            A group built around <span className="text-accent">useful</span> work.
          </>
        }
        subtitle="PIQI Group was founded in 2016 in South Africa. We serve clients internationally across six distinct verticals, each run on its own terms."
        actions={[{ label: "Contact the group", href: "/contact", variant: "primary" }]}
        image={{
          src: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=2400&q=80&auto=format&fit=crop",
          alt: "Sweeping modernist staircase in a dark architectural space."
        }}
      />

      <section className="section">
        <Container variant="narrow">
          <div className="prose">
            <p>
              Each vertical is self-contained and speaks in its own voice. At the group level we
              keep things practical: clear ownership, honest briefs, and a commercial mindset that
              protects the outcome.
            </p>
            <p>
              We do not list named team members on this site yet. Once leadership bios are
              approved, they will appear here and in the group profile document.
            </p>
            {/* TODO Phase 3: Group Profile PDF download link once asset is delivered. */}
          </div>
        </Container>
      </section>

      <GroupFacts />

      <section className="section">
        <Container variant="narrow">
          <h2>How we operate as a group</h2>
          <p>
            Verticals don&apos;t cross-sell each other by default. The group function keeps
            standards consistent across brand, contracting, and governance, and steps in where a
            client benefits from more than one vertical working together.
          </p>
          {/* TODO Phase 3: expand into the group-level governance and shared services picture. */}
        </Container>
      </section>

      <CTABanner />

      <JsonLd
        data={buildWebPage({
          title: "About PIQI Group",
          description: DESCRIPTION,
          url: `${SITE.url}/about`,
          type: "AboutPage"
        })}
      />
    </>
  );
}
