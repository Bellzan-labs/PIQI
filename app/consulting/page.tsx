import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/global/JsonLd";
import { buildWebPage } from "@/lib/schema";
import { getVertical } from "@/lib/data/verticals";
import { getAllConsultingServices } from "@/lib/data/consulting-services";
import { SITE } from "@/lib/constants";

const VERTICAL = getVertical("consulting");

export const metadata: Metadata = {
  title: "Consulting",
  description: VERTICAL?.description ?? "",
  alternates: { canonical: "/consulting" },
  openGraph: {
    title: "PIQI Consulting",
    description: VERTICAL?.description ?? "",
    url: `${SITE.url}/consulting`
  }
};

export default function ConsultingHubPage() {
  const services = getAllConsultingServices();
  const vertical = VERTICAL;
  return (
    <>
      <Hero
        eyebrow="Consulting"
        title={
          <>
            Strategic advisory and <span className="text-accent">project</span> delivery.
          </>
        }
        subtitle={vertical?.description}
        actions={[{ label: "Contact PIQI Consulting", href: "/contact", variant: "primary" }]}
        image={
          vertical?.heroImage
            ? { src: vertical.heroImage.url, alt: vertical.heroImage.alt }
            : undefined
        }
      />

      <section className="section">
        <Container>
          <div className="section-heading">
            <p className="eyebrow">What we do</p>
            <h2>Five services, one commercial mindset.</h2>
          </div>
          <div className="consulting-grid">
            {services.map((s) => (
              <Link key={s.slug} href={`/consulting/${s.slug}`} className="consulting-tile">
                <h3>{s.title}</h3>
                <p>{s.heroTagline}</p>
                <p className="consulting-tile-desc">{s.description}</p>
                <span className="consulting-tile-cta">Read more</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        headline="Need a short read on where to start?"
        actionLabel="Talk to consulting"
      />

      <JsonLd
        data={buildWebPage({
          title: "PIQI Consulting",
          description: vertical?.description ?? "",
          url: `${SITE.url}/consulting`,
          type: "CollectionPage"
        })}
      />
    </>
  );
}
