export type HeroImage = {
  url: string;
  alt: string;
  credit?: string;
};

export type Vertical = {
  slug: string;
  displayName: string;
  tagline: string;
  toneAdjectives: string[];
  description: string;
  heroImage: HeroImage;
  published: boolean;
  cta: { label: string; href: string };
};

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=2400&q=80&auto=format&fit=crop`;

export const VERTICALS: readonly Vertical[] = [
  {
    slug: "consulting",
    displayName: "Consulting",
    tagline: "Strategic advisory and project delivery.",
    toneAdjectives: ["precise", "credentialed", "outcome-focused"],
    description:
      "Strategy, project delivery, supply chain support, and commercial services for organisations that need clarity and control.",
    heroImage: {
      url: unsplash("1507679799987-c73779587ccf"),
      alt: "Dark boardroom with long table and warm lighting."
    },
    published: true,
    cta: { label: "Explore consulting", href: "/contact" }
  },
  {
    slug: "property",
    displayName: "Property Management",
    tagline: "Reliable, local property operations.",
    toneAdjectives: ["reliable", "local", "responsive"],
    description:
      "Comprehensive property management covering maintenance, letting, and construction support for owners who need dependable operations.",
    heroImage: {
      url: unsplash("1512453979798-5ea266f8880c"),
      alt: "Modern residential building exterior at dusk."
    },
    published: true,
    cta: { label: "Speak to the team", href: "/contact" }
  },
  {
    slug: "fashion",
    displayName: "Downtown Fashion",
    tagline: "Bespoke attire and branded clothing.",
    toneAdjectives: ["celebratory", "bespoke", "warm"],
    description:
      "Wedding attire, matric dance outfits, uniforms, and embroidered or printed clothing made to translate your vision into craft.",
    heroImage: {
      url: unsplash("1515549832467-8783363e19b6"),
      alt: "Tailor's bench with fabric and sewing tools in warm light."
    },
    published: true,
    cta: { label: "Start a commission", href: "/contact" }
  },
  {
    slug: "yachts",
    displayName: "Yacht Charters",
    tagline: "Self-catering catamaran charters.",
    toneAdjectives: ["aspirational", "experiential", "easy"],
    description:
      "A self-catering catamaran with four double cabins — freedom to explore the coastline at your own pace.",
    heroImage: {
      url: unsplash("1505873242700-f289a29e1e0f"),
      alt: "Catamaran sailing on open water at golden hour."
    },
    published: true,
    cta: { label: "Enquire about a charter", href: "/contact" }
  },
  {
    slug: "auto",
    displayName: "Piqi Auto",
    // TODO copy issue: panel beating + tyre sales is an unusual pairing; surface this to stakeholders in Phase 3.
    tagline: "Panel beating and tyre sales.",
    toneAdjectives: ["practical", "transparent", "hands-on"],
    description:
      "Professional automotive services covering panel beating and tyre sales, focused on professionalism, care, and customer satisfaction.",
    heroImage: {
      url: unsplash("1504222490345-c075b6008014"),
      alt: "Close-up of a car body panel in a dimly lit workshop."
    },
    published: true,
    cta: { label: "Book a service", href: "/contact" }
  },
  {
    slug: "coaching",
    displayName: "Coaching",
    tagline: "Leadership, communication, balance.",
    toneAdjectives: ["encouraging", "direct", "confidential"],
    description:
      "Leadership enhancement, communication coaching, and work-life balance guidance for individuals and teams ready to grow.",
    heroImage: {
      url: unsplash("1521295121783-8a321d551ad2"),
      alt: "Figure in profile at a window, quiet contemplative light."
    },
    published: true,
    cta: { label: "Start a conversation", href: "/contact" }
  }
] as const;

export function getVertical(slug: string): Vertical | undefined {
  return VERTICALS.find((v) => v.slug === slug);
}

export function getAllVerticals(): readonly Vertical[] {
  return VERTICALS.filter((v) => v.published);
}
