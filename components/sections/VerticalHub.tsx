import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/global/JsonLd";
import { buildWebPage } from "@/lib/schema";
import type { Vertical } from "@/lib/data/verticals";
import { SITE } from "@/lib/constants";

export type VerticalHubProps = {
  vertical: Vertical;
  offerings: string[];
  body?: string;
};

export function VerticalHub({ vertical, offerings, body }: VerticalHubProps) {
  const url = `${SITE.url}/${vertical.slug}`;
  return (
    <>
      <Hero
        eyebrow={vertical.displayName}
        title={vertical.tagline}
        subtitle={vertical.description}
        actions={[{ label: vertical.cta.label, href: vertical.cta.href, variant: "primary" }]}
        image={{ src: vertical.heroImage.url, alt: vertical.heroImage.alt }}
      />

      <section className="section">
        <Container variant="narrow">
          <p className="eyebrow">What we offer</p>
          <h2>Core offerings</h2>
          <ul className="offerings-list">
            {offerings.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
          {body ? <p>{body}</p> : null}
        </Container>
      </section>

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
