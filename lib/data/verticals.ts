export type HeroImage = {
  url: string;
  alt: string;
  credit?: string;
};

export type EngagementStep = {
  title: string;
  description: string;
};

export type Vertical = {
  slug: string;
  displayName: string;
  tagline: string;
  toneAdjectives: string[];
  description: string;
  heroImage: HeroImage;
  howWeEngage?: EngagementStep[];
  offerings: readonly string[];
  bodyParagraphs?: readonly string[];
  operatorBrand?: string;
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
      "Strategy, project delivery, supply chain, and commercial services for organisations that need clarity and control.",
    heroImage: {
      url: unsplash("1507679799987-c73779587ccf"),
      alt: "Dark boardroom with long table and warm lighting."
    },
    howWeEngage: [
      { title: "Discovery", description: "We meet to understand the brief, the constraints, and what a good outcome looks like." },
      { title: "Proposal + scope", description: "We write down the work, the people, the timeline, and the commercials before starting." },
      { title: "Delivery", description: "We run the work against that plan and keep the commercial detail honest as conditions change." },
      { title: "Close-out", description: "We document what happened, transfer knowledge, and leave your team able to run it themselves." }
    ],
    offerings: [
      "Strategy and strategy-capture",
      "Project management",
      "Process consulting",
      "Supply chain support",
      "Commercial services and project controls"
    ],
    bodyParagraphs: [
      "Strategy, project delivery, supply chain, and commercial services under one roof. We work with organisations that need clarity on where they're going and control over how the work lands — from strategy capture through to close-out."
    ],
    published: true,
    cta: { label: "Explore consulting", href: "/contact" }
  },
  {
    slug: "property",
    displayName: "Property Management",
    tagline: "Reliable, local property operations.",
    toneAdjectives: ["reliable", "local", "responsive"],
    description:
      "Maintenance, letting, and construction support for property owners who want their buildings to run without daily oversight.",
    heroImage: {
      url: unsplash("1512453979798-5ea266f8880c"),
      alt: "Modern residential building exterior at dusk."
    },
    howWeEngage: [
      { title: "Site assessment", description: "We walk the property, review its current condition, and agree what needs attention." },
      { title: "Management agreement", description: "We set the scope, cadence, and reporting so you know what you're paying for." },
      { title: "Active management", description: "Inspections, maintenance, tenant handling, and monthly reporting, on a schedule you can rely on." }
    ],
    offerings: [
      "Routine inspections and preventive maintenance",
      "Letting, tenant screening, and lease management",
      "Rent collection and property marketing",
      "Construction support — renovation, remodelling, new builds"
    ],
    bodyParagraphs: [
      "Comprehensive property operations for owners who want their buildings running without daily oversight. Inspections, tenant handling, letting, and construction support — delivered on a schedule you can rely on.",
      "We treat property management as a proactive discipline. Routine inspections and preventive maintenance catch issues before they become emergencies, and the same team handles letting, rent collection, and construction support so you have a single point of accountability."
    ],
    published: true,
    cta: { label: "Speak to the team", href: "/contact" }
  },
  {
    slug: "fashion",
    displayName: "Downtown Fashion",
    tagline: "Bespoke attire and branded clothing.",
    toneAdjectives: ["celebratory", "bespoke", "warm"],
    description:
      "Wedding attire, matric outfits, uniforms, and embroidered or printed clothing, cut and finished in-house.",
    heroImage: {
      url: unsplash("1515549832467-8783363e19b6"),
      alt: "Tailor's bench with fabric and sewing tools in warm light."
    },
    howWeEngage: [
      { title: "Consultation", description: "Bring the occasion, the fabric preferences, and the references — we'll shape the brief together." },
      { title: "Measure and design", description: "Full measurements, design confirmation, and pricing agreed before a single cut is made." },
      { title: "Fittings", description: "Two to three fittings through the build so adjustments happen on the garment, not at the end." },
      { title: "Collection", description: "Pieces are finished, pressed, and collected by an agreed date." }
    ],
    offerings: [
      "Wedding attire — bridal, bridesmaid, flower girl, groom, best man",
      "Matric dance outfits for boys and girls",
      "School uniforms, tracksuits, and safety clothing",
      "Embroidered and printed branded clothing",
      "Bespoke commissions for any occasion"
    ],
    bodyParagraphs: [
      "Downtown Fashion, powered by PIQI Group, translates your vision into bespoke clothing — cut, sewn, and finished in-house. Wedding attire, matric dance outfits, school uniforms, tracksuits, safety wear, and embroidered or printed branded clothing.",
      "Tailored for the bride looking for a unique wedding dress, the business professional needing an impactful outfit, and the fashion enthusiast who wants a piece that actually fits. Let your style do the talking."
    ],
    published: true,
    cta: { label: "Start a commission", href: "/contact" }
  },
  {
    slug: "yachts",
    displayName: "Yacht Charters",
    tagline: "Self-catering catamaran charters.",
    toneAdjectives: ["aspirational", "experiential", "easy"],
    description:
      "A self-catering catamaran with four double cabins. You bring the people and the plan; we hand you the boat.",
    heroImage: {
      url: unsplash("1505873242700-f289a29e1e0f"),
      alt: "Catamaran sailing on open water at golden hour."
    },
    howWeEngage: [
      { title: "Dates and itinerary", description: "Choose your dates, guest count, and rough cruising plan — we confirm availability." },
      { title: "Provisioning briefing", description: "We walk you through the boat, safety, and what self-catering looks like on board." },
      { title: "Your charter", description: "The coastline is yours for the duration — cook, swim, sail, return to anchor on your own schedule." },
      { title: "Return", description: "Hand the boat back at the agreed time. That's it." }
    ],
    offerings: [
      "Self-catering catamaran charter",
      "Four double cabins — up to eight guests",
      "Client-led itinerary along the coastline",
      "Fuel covered for anchoring and shore trips"
    ],
    bodyParagraphs: [
      "A spacious catamaran with four double cabins, chartered on a self-catering basis. Bring your own food and drinks, run your own itinerary, and explore the coastline at your own pace.",
      "Fuel is covered for anchoring and short shore trips using the engine; longer sailing and provisioning are the client's call. Romantic getaways, family trips, small-group adventures — the boat accommodates what you plan."
    ],
    operatorBrand: "NW Yacht Chartering",
    published: true,
    cta: { label: "Enquire about a charter", href: "/contact" }
  },
  {
    slug: "auto",
    displayName: "Piqi Auto",
    tagline: "Panel beating and tyres.",
    toneAdjectives: ["practical", "transparent", "hands-on"],
    description:
      "Panel beating for bodywork repairs, and tyre supply. Straight-forward pricing and workmanship you can inspect.",
    heroImage: {
      url: unsplash("1504222490345-c075b6008014"),
      alt: "Close-up of a car body panel in a dimly lit workshop."
    },
    howWeEngage: [
      { title: "Booking", description: "Call or enquire — describe the damage or the tyres you need." },
      { title: "Assessment", description: "Bring the vehicle in. We quote on what we can see, in writing, before any work starts." },
      { title: "Repair or supply", description: "Panel beating is done in-house. Tyres are supplied for fitment at your preferred centre." },
      { title: "Handover", description: "Vehicle returned clean with the paperwork that protects your warranty." }
    ],
    offerings: [
      "Panel beating — minor dents, scratches, and major repairs",
      "Tyre supply for most vehicle types",
      "Trusted fitment-centre referrals"
    ],
    bodyParagraphs: [
      "Professional panel beating and tyre sales. Our technicians handle minor dents, scratches, and major collision repairs with the precision the job demands, and we supply a range of high-quality tyres for most vehicle types.",
      "Note: we sell tyres but do not fit them — we'll recommend a trusted fitment centre in your area. Everything else, from quote to handover, happens under one roof."
    ],
    published: true,
    cta: { label: "Book a service", href: "/contact" }
  },
  {
    slug: "coaching",
    displayName: "Coaching",
    tagline: "Leadership, communication, balance.",
    toneAdjectives: ["encouraging", "direct", "confidential"],
    description:
      "One-on-one coaching for leaders and professionals working through a specific challenge — leadership, communication, or life-work rhythm.",
    heroImage: {
      url: unsplash("1521295121783-8a321d551ad2"),
      alt: "Figure in profile at a window, quiet contemplative light."
    },
    howWeEngage: [
      { title: "Intake", description: "A no-obligation first conversation to agree whether coaching is the right fit and what you want to work on." },
      { title: "Cadence", description: "We set a rhythm — usually fortnightly sessions over three to six months — and the outcomes we'll track." },
      { title: "Sessions", description: "Confidential, structured conversations between the sessions we agree to run. Notes stay with you." },
      { title: "Review", description: "At an agreed milestone, we step back, reflect on progress, and decide what comes next." }
    ],
    offerings: [
      "Leadership enhancement",
      "Communication coaching",
      "Work-life balance and personal development",
      "One-on-one engagements for individuals and teams"
    ],
    bodyParagraphs: [
      "Focused guidance for personal and professional growth. Our coaches work one-on-one with individuals and teams — leadership development, communication, work-life balance — with actionable strategies tied to outcomes you can apply in the week.",
      "The approach is holistic and confidential. We work with people ready to look honestly at where they are and what's in the way, and we run the engagement at a cadence that respects your schedule."
    ],
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
