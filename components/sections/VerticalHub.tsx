import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQ } from "@/components/sections/FAQ";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/global/JsonLd";
import { buildWebPage } from "@/lib/schema";
import { getFAQs } from "@/lib/data/faqs";
import type { Vertical } from "@/lib/data/verticals";
import { SITE } from "@/lib/constants";

export type VerticalHubProps = {
  vertical: Vertical;
};

const LANES_HEADING: Record<string, string> = {
  property: "Three lanes, one accountable team.",
  fashion: "Three lanes, one in-house studio.",
  auto: "Two lanes, one workshop.",
  coaching: "Three lanes of work."
};

export function VerticalHub({ vertical }: VerticalHubProps) {
  const url = `${SITE.url}/${vertical.slug}`;
  const faqs = getFAQs(vertical.slug);
  const lanesHeading = LANES_HEADING[vertical.slug] ?? "What we actually do.";
  return (
    <>
      <Hero
        eyebrow={vertical.displayName}
        title={vertical.tagline}
        subtitle={vertical.description}
        actions={[{ label: vertical.cta.label, href: vertical.cta.href, variant: "primary" }]}
        image={{ src: vertical.heroImage.url, alt: vertical.heroImage.alt }}
      />

      {vertical.operatorBrand ? (
        <section className="section hero-subline-section">
          <Container variant="narrow">
            <p className="hero-subline">Operated as {vertical.operatorBrand}</p>
          </Container>
        </section>
      ) : null}

      <section className="section">
        <Container variant="narrow">
          <p className="eyebrow">What we offer</p>
          <h2>Core offerings</h2>
          {vertical.bodyParagraphs && vertical.bodyParagraphs.length > 0 ? (
            <div className="prose">
              {vertical.bodyParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          ) : null}
          <ul className="offerings-list">
            {vertical.offerings.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </Container>
      </section>

      {vertical.lanes && vertical.lanes.length > 0 ? (
        <section className="section lanes-section">
          <Container>
            <div className="section-heading">
              <p className="eyebrow">What we actually do</p>
              <h2>{lanesHeading}</h2>
            </div>
            <div className="lanes-grid">
              {vertical.lanes.map((lane) => (
                <article key={lane.title} className="lane-card">
                  <h3>{lane.title}</h3>
                  <p className="lane-description">{lane.description}</p>
                  {lane.whenItApplies ? (
                    <p className="lane-when">
                      <span>When it applies:</span> {lane.whenItApplies}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {vertical.howWeEngage && vertical.howWeEngage.length > 0 ? (
        <section className="section engagement-section">
          <Container>
            <div className="section-heading">
              <p className="eyebrow">How we engage</p>
              <h2>What working with us looks like.</h2>
            </div>
            <ol className="engagement-steps">
              {vertical.howWeEngage.map((step, i) => (
                <li key={step.title} className="engagement-step">
                  <span className="engagement-step-index" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      ) : null}

      <FAQ
        items={faqs}
        slugForSchema={vertical.slug}
        eyebrow="Questions"
        title="Good questions to ask."
      />

      <CTABanner actionLabel={vertical.cta.label} actionHref={vertical.cta.href} />

      <JsonLd
        data={buildWebPage({
          title: vertical.displayName,
          description: vertical.description,
          url,
          type: "CollectionPage"
        })}
      />
    </>
  );
}
