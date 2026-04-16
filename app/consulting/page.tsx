import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQ } from "@/components/sections/FAQ";
import { MediaSplit } from "@/components/sections/MediaSplit";
import { IconList } from "@/components/sections/IconList";
import { ImageGallery } from "@/components/sections/ImageGallery";
import { QuoteBlock } from "@/components/sections/QuoteBlock";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/global/JsonLd";
import { buildWebPage } from "@/lib/schema";
import { getVertical } from "@/lib/data/verticals";
import { getAllConsultingServices } from "@/lib/data/consulting-services";
import { getFAQs } from "@/lib/data/faqs";
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
        actions={[{ label: "Contact PIQI Consulting", href: "/contact?vertical=consulting", variant: "primary" }]}
        image={
          vertical?.heroImage
            ? { src: vertical.heroImage.url, alt: vertical.heroImage.alt }
            : undefined
        }
      />

      <section className="section">
        <Container>
          <div className="section-heading">
            <p className="eyebrow">The advisory arm</p>
            <h2>Piqi Consulting — one arm of PIQI Group.</h2>
          </div>
          <div className="prose prose-wide">
            <p>
              Piqi Consulting is the advisory practice of PIQI Group. Our expertise spans business
              consulting, strategy, project management, process consulting, supply chain support,
              and project commercial services — brought in where your organisation needs clarity
              on the next move and control over the work that delivers it.
            </p>
            <p>
              Across engagements we offer Strategic Business Planning, Operational Performance,
              Product and Service Lifecycle, and Supply Chain Systems — alongside the deeper
              commercial detail that protects the outcome on capital projects. Each of the five
              services below is a distinct practice; most clients draw on more than one.
            </p>
          </div>
        </Container>
      </section>

      <MediaSplit
        reverse
        tone="accent"
        eyebrow="What we do"
        title="Cradle-to-grave project support."
        body={[
          "With extensive experience in the Project Commercial environment, Piqi Consulting provides cradle-to-grave project support services. We run project reviews so Front-End Loading (FEL) is streamlined and efficient, and we stay close to delivery so budgeting, planning, and risk management all land against the original end-goal.",
          "The second half is discipline during implementation: procurement, contracts, claims, cost control — protecting the commercial outcome until close-out, with Knowledge Management Learnings written down and transferred to your team."
        ]}
        image={{
          src: "https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?w=2400&q=80&auto=format&fit=crop",
          alt: "Construction crane against a dusk sky — project delivery."
        }}
      />

      {vertical?.gallery && vertical.gallery.length > 0 ? (
        <ImageGallery
          eyebrow="Inside the work"
          title="What the engagement looks like."
          items={vertical.gallery}
        />
      ) : null}

      <IconList
        eyebrow="At a glance"
        title="Five practices, one commercial mindset."
        items={[
          {
            iconSrc: "/brand/icons/Consultation.svg",
            title: "Business process",
            description: "Analyse, streamline, operationalise."
          },
          {
            iconSrc: "/brand/icons/Stats.svg",
            title: "Strategy",
            description: "Direction, trade-offs, positioning."
          },
          {
            iconSrc: "/brand/icons/Management.svg",
            title: "Project management",
            description: "On-time delivery."
          },
          {
            iconSrc: "/brand/icons/Cube.svg",
            title: "Supply chain",
            description: "Operational control."
          },
          {
            iconSrc: "/brand/icons/Projects.svg",
            title: "Commercial services",
            description: "Detail that protects the outcome."
          }
        ]}
      />

      <section className="section">
        <Container>
          <div className="section-heading">
            <p className="eyebrow">Where we come in</p>
            <h2>Five services, one commercial mindset.</h2>
          </div>
          <p className="section-lead">
            Each of the five services below is a distinct practice. Most clients draw on more than one.
          </p>
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

      <QuoteBlock
        eyebrow="Voice from the work"
        quote="An effective high-level strategy is the secret behind every successful business."
        authorName="Mike Wright"
        emitReviewSchema
      />

      <FAQ
        items={getFAQs("consulting")}
        eyebrow="Questions"
        title="Good questions to ask a consulting partner."
      />

      <CTABanner
        headline="Need a short read on where to start?"
        actionLabel="Talk to consulting"
        actionHref="/contact?vertical=consulting"
      />

      <JsonLd
        data={buildWebPage({
          title: "PIQI Consulting",
          description: vertical?.description ?? "",
          url: `${SITE.url}/consulting`,
          type: "CollectionPage",
          hasPart: services.map((s) => `${SITE.url}/consulting/${s.slug}`)
        })}
      />
    </>
  );
}