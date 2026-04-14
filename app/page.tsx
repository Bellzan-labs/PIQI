import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { GroupFacts } from "@/components/sections/GroupFacts";
import { VerticalGrid } from "@/components/sections/VerticalGrid";
import { UVP } from "@/components/sections/UVP";
import { CTABanner } from "@/components/sections/CTABanner";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "PIQI Group",
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "PIQI Group",
    description: SITE.description,
    url: SITE.url
  }
};

const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=1600&q=80&auto=format&fit=crop`;

const COLLAGE_TILES = [
  {
    url: UNSPLASH("1486406146926-c627a92ad1ab"),
    alt: "Long architectural corridor with dramatic light and shadow.",
    label: "Architecture"
  },
  {
    url: UNSPLASH("1497366216548-37526070297c"),
    alt: "Modernist interior with clean geometric volumes.",
    label: "Interiors"
  },
  {
    url: UNSPLASH("1519452575417-564c1401ecc0"),
    alt: "Dark dramatic architectural facade.",
    label: "Form"
  },
  {
    url: UNSPLASH("1511497584788-876760111969"),
    alt: "Abstract architectural study in deep tones.",
    label: "Craft"
  }
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="PIQI Group"
        title={
          <>
            One group. Six arms. <span className="text-accent">Practical</span> outcomes.
          </>
        }
        subtitle="Consulting, property, fashion, yacht charters, auto, and coaching — run by a South African group that serves clients internationally."
        actions={[
          { label: "Contact us", href: "/contact", variant: "primary" },
          { label: "About the group", href: "/about", variant: "secondary" }
        ]}
        video={{
          src: "/brand/video/consultants-office.mp4",
          poster: "/brand/hero/Consutling.png"
        }}
      >
        <div className="hero-collage hero-collage-editorial" aria-hidden="true">
          <div className="collage-primary collage-tile-img">
            <Image
              src={COLLAGE_TILES[0].url}
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className="collage-cover"
            />
            <span className="collage-badge">{COLLAGE_TILES[0].label}</span>
          </div>
          <div className="collage-grid collage-grid-editorial">
            {COLLAGE_TILES.slice(1).map((t) => (
              <div key={t.url} className="collage-tile collage-tile-img">
                <Image src={t.url} alt="" fill sizes="22vw" className="collage-cover" />
                <span className="collage-badge">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Hero>
      <GroupFacts />
      <VerticalGrid />
      <UVP />
      <CTABanner />
      {/* TODO Phase 3: add group-voice trust strip once named team / client logos land. */}
    </>
  );
}
