export type HeroImage = {
  url: string;
  alt: string;
  credit?: string;
};

export type EngagementStep = {
  title: string;
  description: string;
};

export type Lane = {
  title: string;
  description: string;
  whenItApplies?: string;
};

export type VerticalGallery = {
  src: string;
  alt: string;
  caption?: string;
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
  lanes?: readonly Lane[];
  gallery?: readonly VerticalGallery[];
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
      url: unsplash("1740933084077-edca148dbd5a"),
      alt: "Dark boardroom table lined with leather chairs, warm pendant lights glowing softly behind."
    },
    gallery: [
      {
        src: unsplash("1636996692940-4e61c2d79dfa"),
        alt: "Hands writing planning notes in a spiral notebook in dim, low light."
      },
      {
        src: unsplash("1639485527766-92d074dcb142"),
        alt: "A person working at a laptop in a dark office, lit by a small desk lamp."
      },
      {
        src: unsplash("1761322572550-967ea8c0bfd9"),
        alt: "An open notebook with a pen and pencils on a dark wood desk."
      }
    ],
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
      "Strategy, project delivery, supply chain, and commercial services under one roof. We work with organisations that need clarity on where they're going and control over how the work lands — from strategy capture through to close-out.",
      "Our engagements are sized for mid-market and enterprise operators who need capacity in the room, not a slide deck. If McKinsey would show up with fifty people, we're the wrong fit; if you need three senior people who have sat in procurement committees and contract reviews, that's us."
    ],
    published: true,
    cta: { label: "Explore consulting", href: "/contact?vertical=consulting" }
  },
  {
    slug: "property",
    displayName: "Property Management",
    tagline: "Reliable, local property operations.",
    toneAdjectives: ["reliable", "local", "responsive"],
    description:
      "Maintenance, letting, and construction support for property owners who want their buildings to run without daily oversight.",
    heroImage: {
      url: unsplash("1742427605934-db05a2a833f6"),
      alt: "Modern residential building exterior at dusk, warm-lit windows against a deep blue sky."
    },
    gallery: [
      {
        src: unsplash("1600585154340-be6161a56a0c"),
        alt: "Modern residential home exterior in low, warm light."
      },
      {
        src: unsplash("1759300631898-c07422768bb5"),
        alt: "Architectural concrete interior with soft directional light and clean lines."
      },
      {
        src: unsplash("1745015446589-7ee6f702d8c1"),
        alt: "Glass curtain-wall facade detail in cool dusk tones."
      }
    ],
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
      "We treat property management as a proactive discipline. Routine inspections and preventive maintenance catch issues before they become emergencies, and the same team handles letting, rent collection, and construction support so you have a single point of accountability.",
      "When something breaks at 10pm, you call one number — ours — and we manage the response. No phone tree, no branch routing. Inspections follow a schedule you sign off, and you get monthly reporting in plain language, not a 40-page pack."
    ],
    lanes: [
      {
        title: "Letting",
        description:
          "Tenant screening, lease drafting, rent collection, and marketing — building occupancy and keeping it occupied with the right tenants.",
        whenItApplies: "You own rental stock and want to stop running it yourself."
      },
      {
        title: "Maintenance",
        description:
          "Routine inspections, preventive work, and emergency call-outs. One point of contact, day or night, for anything that breaks.",
        whenItApplies: "Your property needs to keep running whether you're there or not."
      },
      {
        title: "Construction support",
        description:
          "Renovations, remodelling, and new-build oversight — alongside the other lanes or as a standalone.",
        whenItApplies: "You have a project that needs running, from quote through sign-off."
      }
    ],
    published: true,
    cta: { label: "Speak to the team", href: "/contact?vertical=property" }
  },
  {
    slug: "fashion",
    displayName: "Downtown Fashion",
    tagline: "Bespoke attire and branded clothing.",
    toneAdjectives: ["celebratory", "bespoke", "warm"],
    description:
      "Wedding attire, matric outfits, uniforms, and embroidered or printed clothing, cut and finished in-house.",
    heroImage: {
      url: unsplash("1445205170230-053b83016050"),
      alt: "Garments on a rail viewed through a boutique window in warm light."
    },
    gallery: [
      {
        src: unsplash("1497997092403-f091fcf5b6c4"),
        alt: "Close-up of a sewing-machine foot guiding thread across dark fabric."
      },
      {
        src: unsplash("1611171711960-cc3da04c95bf"),
        alt: "A tailored suit jacket on a dress form in a dim studio."
      },
      {
        src: unsplash("1585412459212-8def26f7e84c"),
        alt: "Detail of a finished tailored jacket — lapel, pocket, and seams in directional light."
      }
    ],
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
      "Tailored for the bride looking for a unique wedding dress, the business professional needing an impactful outfit, and the fashion enthusiast who wants a piece that actually fits. Let your style do the talking.",
      "First appointment is a conversation about the occasion, the references you've collected, and what the garment has to do. We talk fabric, shape, and fit before we talk schedule. If it's a wedding, allow at least four months for a full bespoke gown; matric and uniform runs have their own rhythms and we'll tell you the honest timeline on the spot.",
      "Everything is cut and finished in-house in South Africa. Fabrics are sourced against the brief — local where it's right, international where it makes the piece. The design is yours; the craft is ours."
    ],
    lanes: [
      {
        title: "Bespoke occasion wear",
        description:
          "Wedding attire, matric dance, and made-to-measure pieces for moments that need to be right. Two to three fittings, cut and finished in-house.",
        whenItApplies: "You want a piece made for you, not altered to fit you."
      },
      {
        title: "Uniforms",
        description:
          "School uniforms, tracksuits, and safety clothing — with sizing runs that handle staff across multiple sites.",
        whenItApplies: "You're kitting out a team, a school, or a site and need consistency at volume."
      },
      {
        title: "Branded wear",
        description:
          "Embroidery and print work on apparel for companies, events, and giveaways. Artwork through to delivery.",
        whenItApplies: "You need your logo on clothing, and you want it to look good."
      }
    ],
    published: true,
    cta: { label: "Start a commission", href: "/contact?vertical=fashion" }
  },
  {
    slug: "yachts",
    displayName: "Yacht Charters",
    tagline: "Self-catering catamaran charters.",
    toneAdjectives: ["aspirational", "experiential", "easy"],
    description:
      "A self-catering catamaran with four double cabins. You bring the people and the plan; we hand you the boat.",
    heroImage: {
      url: "/brand/yachts/on-water.jpg",
      alt: "The catamaran on open water."
    },
    gallery: [
      { src: "/brand/yachts/ocean.jpg", alt: "Catamaran at anchor in open water." },
      { src: "/brand/yachts/deck-1.jpg", alt: "Yacht deck — view forward." },
      { src: "/brand/yachts/deck-2.jpg", alt: "Yacht deck — alternate angle." },
      { src: "/brand/yachts/interior.jpg", alt: "Cabin and lounge interior." }
    ],
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
      "Fuel is covered for anchoring and short shore trips using the engine; longer sailing and provisioning are the client's call. Romantic getaways, family trips, small-group adventures — the boat accommodates what you plan.",
      "Four double cabins means up to eight guests sleeping comfortably. Two couples, a small family, a group of friends — the boat accommodates what you plan, not what someone else's brochure suggests. Layout and who sleeps where is something we walk through before you confirm the booking.",
      "Your first day on board starts with a handover briefing — safety, systems, the galley, what's stocked, what you're buying ashore. Fuel is covered for anchoring and short shore trips under engine; longer sailing under engine is on the client. After the briefing, the coastline is yours."
    ],
    operatorBrand: "NW Yacht Chartering",
    published: true,
    cta: { label: "Enquire about a charter", href: "/contact?vertical=yachts" }
  },
  {
    slug: "auto",
    displayName: "Piqi Auto",
    tagline: "Panel beating and tyres.",
    toneAdjectives: ["practical", "transparent", "hands-on"],
    description:
      "Panel beating for bodywork repairs, and tyre supply. Straight-forward pricing and workmanship you can inspect.",
    heroImage: {
      url: unsplash("1769021955466-ed4372792114"),
      alt: "Close-up of a car body panel in a dimly lit workshop, a tool resting against the bodywork."
    },
    gallery: [
      {
        src: unsplash("1486262715619-67b85e0b08d3"),
        alt: "Workshop detail — tools and bodywork under directional light."
      },
      {
        src: unsplash("1643700973089-baa86a1ab9ee"),
        alt: "Mechanic working beneath a vehicle on a lift in a darkened workshop bay."
      },
      {
        src: unsplash("1625047509248-ec889cbff17f"),
        alt: "Hand finishing a car panel with focused precision."
      }
    ],
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
      "Accidents happen. Bring the vehicle in, we assess and quote in writing, you approve, we book the work. Fleet and corporate accounts are welcome — if you have multiple vehicles needing regular body or tyre work, we'll set up an account with agreed pricing and reporting.",
      "Insurance claim or cash job, we'll tell you which is the better call before you decide. We've seen customers lose no-claim bonuses on repairs that would have cost less out of pocket; we've also seen cash jobs that should have gone through insurance. Send us a WhatsApp photo of the damage for an initial view before you commit either way."
    ],
    lanes: [
      {
        title: "Panel beating and body repair",
        description:
          "Minor dents, scratches, and major collision work — insurance claim or cash job, we'll tell you which is the better call.",
        whenItApplies: "Your car needs bodywork or paintwork after damage."
      },
      {
        title: "Tyre supply",
        description:
          "We stock tyres for most vehicle types, with an eye on traction, durability, and fuel efficiency across driving conditions. We don't fit them ourselves — we'll recommend a trusted fitment centre in your area.",
        whenItApplies: "You need new tyres and want them bought through someone who won't upsell you."
      }
    ],
    published: true,
    cta: { label: "Book a service", href: "/contact?vertical=auto" }
  },
  {
    slug: "coaching",
    displayName: "Coaching",
    tagline: "Leadership, communication, balance.",
    toneAdjectives: ["encouraging", "direct", "confidential"],
    description:
      "One-on-one coaching for leaders and professionals working through a specific challenge — leadership, communication, or life-work rhythm.",
    heroImage: {
      url: unsplash("1673643680854-70f901ee7bba"),
      alt: "A figure in profile reaching toward a shaft of light from a small window in a dark room."
    },
    gallery: [
      {
        src: unsplash("1646940930383-de7a8a5a44ff"),
        alt: "Two people across a small table in warm, dim light, absorbed in quiet thought."
      },
      {
        src: unsplash("1761933799610-c9a75f115794"),
        alt: "Two professionals in a close, intent conversation in dim, warm light."
      },
      {
        src: unsplash("1579279252285-c988761b913f"),
        alt: "A hand holding a pen over a spiral notebook on a dark wooden surface."
      }
    ],
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
      "The approach is holistic and confidential. We work with people ready to look honestly at where they are and what's in the way, and we run the engagement at a cadence that respects your schedule.",
      "First session is a no-obligation intake. We agree whether coaching is the right shape of help, what you want to work on, and the cadence that fits your schedule. If we don't think coaching is the right call, we'll say so.",
      "Individual engagements are confidential, full stop. Sponsor-paid engagements (your employer pays) stay confidential in content — the sponsor sees progress against agreed outcomes, not session notes. That line is set before session one."
    ],
    lanes: [
      {
        title: "Leadership",
        description:
          "For leaders working on a specific behavioural shift — clearer decisions, harder conversations, or the step up into a larger role.",
        whenItApplies:
          "You've got a situation that needs you to show up differently, and you want a structured way to get there."
      },
      {
        title: "Communication",
        description:
          "For professionals who need to say the thing they've been avoiding, or say it earlier. One-on-one, confidential, practical.",
        whenItApplies:
          "The conversations you're dreading are shaping your week more than the ones you're having."
      },
      {
        title: "Work-life balance",
        description:
          "For people rebuilding a workable rhythm across work, home, and energy. Not therapy — behaviour-change work for professionals who want their time back.",
        whenItApplies: "You know how you'd want the week to look, and you're not getting there."
      }
    ],
    published: true,
    cta: { label: "Start a conversation", href: "/contact?vertical=coaching" }
  }
] as const;

export function getVertical(slug: string): Vertical | undefined {
  return VERTICALS.find((v) => v.slug === slug);
}

export function getAllVerticals(): readonly Vertical[] {
  return VERTICALS.filter((v) => v.published);
}
