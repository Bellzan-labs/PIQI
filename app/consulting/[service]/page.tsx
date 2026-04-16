import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQ } from "@/components/sections/FAQ";
import { MediaSplit } from "@/components/sections/MediaSplit";
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
        actions={[{ label: "Talk to consulting", href: "/contact?vertical=consulting", variant: "primary" }]}
        image={{ src: service.heroImage.url, alt: service.heroImage.alt }}
      />

      <MediaSplit
        eyebrow="Where we come in"
        title={service.heroTagline}
        body={service.bodyParagraphs ?? [service.heroDescription]}
        image={{ src: service.heroImage.url, alt: service.heroImage.alt }}
        reverse={service.order % 2 === 0}
      />

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

      {service.felStages && service.felStages.length > 0 ? (
        <section className="section fel-section">
          <Container>
            <div className="section-heading">
              <p className="eyebrow">FEL stages</p>
              <h2>What each gate actually produces.</h2>
            </div>
            <ol className="fel-stages">
              {service.felStages.map((s) => (
                <li key={s.stage} className="fel-stage">
                  <h3>{s.stage}</h3>
                  <dl className="fel-stage-rows">
                    <dt>Deliverable</dt>
                    <dd>{s.deliverable}</dd>
                    <dt>Decision</dt>
                    <dd>{s.decision}</dd>
                    <dt>Duration</dt>
                    <dd>{s.duration}</dd>
                  </dl>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      ) : null}

      {service.faqs && service.faqs.length > 0 ? (
        <FAQ
          items={service.faqs}
          slugForSchema={`consulting-${service.slug}`}
          eyebrow="Questions"
          title={`Good questions about ${service.shortTitle.toLowerCase()}.`}
        />
      ) : null}

      <section className="section consulting-back-link-section">
        <Container variant="narrow">
          <Link href="/consulting" className="back-link">
            <span aria-hidden="true">&larr;</span> Back to Consulting
          </Link>
        </Container>
      </section>

      <CTABanner
        actionLabel={`Start with ${service.shortTitle.toLowerCase()}`}
        actionHref="/contact?vertical=consulting"
      />

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
