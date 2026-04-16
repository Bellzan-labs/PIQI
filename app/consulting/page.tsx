import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQ } from "@/components/sections/FAQ";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/global/JsonLd";
import { buildReview, buildWebPage } from "@/lib/schema";
import { getVertical } from "@/lib/data/verticals";
import { getAllConsultingServices } from "@/lib/data/consulting-services";
import { getFAQs } from "@/lib/data/faqs";
import { SITE } from "@/lib/constants";

const VERTICAL = getVertical("consulting");

const PULLQUOTE_BODY =
  "An effective high-level strategy is the secret behind every successful business.";
const PULLQUOTE_AUTHOR = "Mike Wright";

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
        <Container variant="narrow">
          <p className="eyebrow">The advisory arm</p>
          <h2>Piqi Consulting — one arm of PIQI Group.</h2>
          <div className="prose">
            <p>
              Piqi Consulting is the advisory practice of PIQI Group. Our expertise spans business
              consulting, strategy, project management, process consulting, supply chain support,
              and project commercial services — brought in where your organisation needs clarity on
              the next move and control over the work that delivers it.
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

      <section className="section">
        <Container variant="narrow">
          <p className="eyebrow">What we do</p>
          <h2>Cradle-to-grave project support.</h2>
          <div className="prose">
            <p>
              With extensive experience in the Project Commercial environment, Piqi Consulting
              provides cradle-to-grave project support services. We run project reviews so
              Front-End Loading (FEL) is streamlined and efficient, and we stay close to delivery
              so budgeting, planning, and risk management all land against the original end-goal.
            </p>
            <p>
              The second half is discipline during implementation: procurement, contracts, claims,
              cost control — protecting the commercial outcome until close-out, with Knowledge
              Management Learnings written down and transferred to your team.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="section-heading">
            <p className="eyebrow">Where we come in</p>
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

      <section className="section">
        <Container variant="narrow">
          <blockquote className="pullquote">
            &ldquo;{PULLQUOTE_BODY}&rdquo;
            <cite>&mdash; {PULLQUOTE_AUTHOR}</cite>
          </blockquote>
          <JsonLd
            data={buildReview({ body: PULLQUOTE_BODY, authorName: PULLQUOTE_AUTHOR })}
          />
        </Container>
      </section>

      <FAQ
        items={getFAQs("consulting")}
        eyebrow="Questions"
        title="Good questions to ask a consulting partner."
      />

      <CTABanner
        headline="Need a short read on where to start?"
        actionLabel="Talk to consulting"
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
