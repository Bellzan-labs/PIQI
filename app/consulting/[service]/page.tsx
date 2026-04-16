import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/global/JsonLd";
import { buildService, buildWebPage } from "@/lib/schema";
import {
  getAllConsultingServices,
  getConsultingService
} from "@/lib/data/consulting-services";
import { SITE } from "@/lib/constants";

type Params = { service: string };

export function generateStaticParams(): Params[] {
  return getAllConsultingServices().map((s) => ({ service: s.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const service = getConsultingService(params.service);
  if (!service) return {};
  const url = `${SITE.url}/consulting/${service.slug}`;
  return {
    title: service.title,
    description: service.description,
    keywords: service.seoKeywords,
    alternates: { canonical: `/consulting/${service.slug}` },
    openGraph: { title: `${service.title} | PIQI Consulting`, description: service.description, url }
  };
}

export default function ConsultingServicePage({ params }: { params: Params }) {
  const service = getConsultingService(params.service);
  if (!service) notFound();

  const url = `${SITE.url}/consulting/${service.slug}`;

  return (
    <>
      <Hero
        eyebrow="Consulting"
        title={service.title}
        subtitle={service.heroTagline}
        actions={[{ label: "Talk to consulting", href: "/contact", variant: "primary" }]}
        image={{ src: service.heroImage.url, alt: service.heroImage.alt }}
      />

      <section className="section">
        <Container variant="narrow">
          <p className="eyebrow">Where we come in</p>
          <h2>{service.heroTagline}</h2>
          <p>{service.bodyParagraph ?? service.heroDescription}</p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="section-heading">
            <p className="eyebrow">What we deliver</p>
            <h2>Scope of work</h2>
          </div>
          <div className="feature-grid">
            {service.features.map((f) => (
              <article key={f.title} className="feature-card">
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section consulting-back-link-section">
        <Container variant="narrow">
          <Link href="/consulting" className="back-link">
            <span aria-hidden="true">&larr;</span> Back to Consulting
          </Link>
        </Container>
      </section>

      <CTABanner actionLabel={`Start with ${service.shortTitle.toLowerCase()}`} />

      <JsonLd
        data={[
          buildService({
            name: service.title,
            description: service.description,
            slug: service.slug
          }),
          buildWebPage({
            title: service.title,
            description: service.description,
            url,
            type: "WebPage"
          })
        ]}
      />
    </>
  );
}
