import type { Metadata } from "next";
import { Suspense } from "react";
import { Hero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/global/JsonLd";
import { buildLocalBusiness, buildWebPage } from "@/lib/schema";
import { SITE } from "@/lib/constants";

const DESCRIPTION = `Get in touch with PIQI Group. Email ${SITE.email} or call ${SITE.phonePrimary}.`;

export const metadata: Metadata = {
  title: "Contact PIQI Group",
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact PIQI Group", description: DESCRIPTION, url: `${SITE.url}/contact` }
};

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title={
          <>
            Send a short <span className="text-accent">brief</span>. We will come back quickly.
          </>
        }
        subtitle="We answer during South African business hours. For anything urgent, call the primary line."
        image={{
          src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=2400&q=80&auto=format&fit=crop",
          alt: "Clean architectural interior with glass facade and minimal furniture."
        }}
      />

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-copy">
            <p className="eyebrow">Details</p>
            <h2>Direct contact</h2>
            <ul className="contact-details">
              <li>{SITE.poBox}, {SITE.country}</li>
              <li>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <a href={`tel:${SITE.phonePrimaryE164}`}>{SITE.phonePrimary}</a>
              </li>
              <li>
                <a href={`tel:${SITE.phoneSecondaryE164}`}>{SITE.phoneSecondary}</a>
              </li>
            </ul>

            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${SITE.email}`}>
                Email PIQI
              </a>
              <a className="button button-secondary" href={`tel:${SITE.phonePrimaryE164}`}>
                Call now
              </a>
            </div>
          </div>

          <div className="contact-card">
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>

      <JsonLd
        data={[
          buildLocalBusiness(),
          buildWebPage({
            title: "Contact PIQI Group",
            description: DESCRIPTION,
            url: `${SITE.url}/contact`,
            type: "ContactPage"
          })
        ]}
      />
    </>
  );
}
