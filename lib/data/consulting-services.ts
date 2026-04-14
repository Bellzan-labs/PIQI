export type ConsultingServiceFeature = {
  title: string;
  description: string;
};

export type ConsultingServiceHeroImage = {
  url: string;
  alt: string;
  credit?: string;
};

export type ConsultingService = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  heroTagline: string;
  heroDescription: string;
  heroImage: ConsultingServiceHeroImage;
  features: ConsultingServiceFeature[];
  seoKeywords: string[];
  order: number;
  published: boolean;
};

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=2400&q=80&auto=format&fit=crop`;

export const CONSULTING_SERVICES: readonly ConsultingService[] = [
  {
    slug: "business-process",
    title: "Business Process",
    shortTitle: "Business Process",
    description: "Analyse, streamline, and operationalise the way work gets done.",
    heroTagline: "Analyse, streamline, operationalise.",
    heroDescription:
      "We analyse your processes, identify areas for improvement, and implement streamlined solutions that stick.",
    heroImage: {
      url: unsplash("1473181488821-2d23949a045a"),
      alt: "Industrial operations floor in moody lighting."
    },
    features: [
      {
        title: "Process consulting",
        description:
          "Map current-state operations, surface friction, and rebuild flows that teams actually use."
      },
      {
        title: "Operational performance",
        description:
          "Define measures, controls, and cadences that keep performance visible and improvable."
      },
      {
        title: "Product and service lifecycle",
        description:
          "Standardise how offerings move from brief to launch to maintenance, without losing the detail."
      }
    ],
    seoKeywords: [
      "business process consulting",
      "operational performance",
      "process improvement",
      "PIQI Group"
    ],
    order: 1,
    published: true
  },
  {
    slug: "strategy",
    title: "Strategy",
    shortTitle: "Strategy",
    description: "Strategic advice that drives growth and sharpens positioning.",
    heroTagline: "Strategic advice that drives growth.",
    heroDescription:
      "We help you develop effective business strategies to drive growth, maximise profitability, and gain a competitive edge.",
    heroImage: {
      url: unsplash("1529699211952-734e80c4d42b"),
      alt: "Strategic pieces arranged on a dark surface, overhead framing."
    },
    features: [
      {
        title: "Business strategy",
        description:
          "Clarify direction and trade-offs so leaders and teams make aligned decisions."
      },
      {
        title: "Strategic business planning",
        description:
          "Translate strategy into an operating plan with measurable milestones."
      },
      {
        title: "Competitive positioning",
        description:
          "Sharpen how you show up in the market and why customers should choose you."
      }
    ],
    seoKeywords: ["business strategy", "strategic planning", "competitive positioning", "PIQI Group"],
    order: 2,
    published: true
  },
  {
    slug: "project-management",
    title: "Project Management",
    shortTitle: "Project Management",
    description: "On-time delivery with planning, risk, and stakeholder rigour.",
    heroTagline: "On-time delivery.",
    heroDescription:
      "We help with project planning, risk management, resource allocation, and stakeholder communication to deliver on time and within budget.",
    heroImage: {
      url: unsplash("1541410965313-d53b3c16ef17"),
      alt: "Construction crane against a dusk sky."
    },
    features: [
      {
        title: "Planning",
        description:
          "Scope, schedule, and sequence the work so teams know what they're being asked to deliver."
      },
      {
        title: "Risk management",
        description:
          "Identify, track, and mitigate risks before they become issues that cost time or margin."
      },
      {
        title: "Resource allocation",
        description:
          "Match the right people and capacity to the right workstream at the right time."
      },
      {
        title: "Stakeholder communication",
        description:
          "Keep decision-makers current with concise, accurate status and clear asks."
      }
    ],
    seoKeywords: ["project management", "project planning", "risk management", "PIQI Group"],
    order: 3,
    published: true
  },
  {
    slug: "supply-chain",
    title: "Supply Chain",
    shortTitle: "Supply Chain",
    description: "Operational control across logistics and the flow of work.",
    heroTagline: "Operational control.",
    heroDescription:
      "Supply chain support, logistics analysis, and process streamlining for organisations that need to see and steer their operations.",
    heroImage: {
      url: unsplash("1493238792000-8113da705763"),
      alt: "Stacked shipping containers at a cargo port."
    },
    features: [
      {
        title: "Supply chain support",
        description:
          "Hands-on support across sourcing, flow, and delivery to keep operations moving."
      },
      {
        title: "Logistics analysis",
        description:
          "Quantify where cost, time, and reliability are leaking, and recommend the fix."
      },
      {
        title: "Process streamlining",
        description:
          "Remove duplicated steps and hand-offs so throughput and accuracy both improve."
      }
    ],
    seoKeywords: ["supply chain", "logistics", "operations consulting", "PIQI Group"],
    order: 4,
    published: true
  },
  {
    slug: "commercial-services",
    title: "Commercial Services",
    shortTitle: "Commercial Services",
    description: "Detail that protects the outcome, from procurement to close-out.",
    heroTagline: "Detail that protects the outcome.",
    heroDescription:
      "Procurement, contracts, claims, negotiation, cost control, planning development, risk management, and Front-End Loading (FEL) support for projects where the commercial detail matters.",
    heroImage: {
      url: unsplash("1450101499163-c8848c66ca85"),
      alt: "Close-up of contract documents and pen in muted light."
    },
    features: [
      {
        title: "Procurement and contracts",
        description:
          "Structure and award work so obligations and incentives line up with the result."
      },
      {
        title: "Claims and negotiation",
        description:
          "Protect position through disciplined contract administration and evidence-based negotiation."
      },
      {
        title: "Cost control and planning",
        description:
          "Budgets, forecasts, and schedules that move together and keep the outcome honest."
      },
      {
        title: "Risk management and FEL",
        description:
          "Front-End Loading reviews and risk registers that set projects up for success from day one."
      }
    ],
    seoKeywords: [
      "commercial services",
      "procurement",
      "contracts",
      "Front-End Loading",
      "PIQI Group"
    ],
    order: 5,
    published: true
  }
] as const;

export function getConsultingService(slug: string): ConsultingService | undefined {
  return CONSULTING_SERVICES.find((s) => s.slug === slug);
}

export function getAllConsultingServices(): readonly ConsultingService[] {
  return [...CONSULTING_SERVICES].filter((s) => s.published).sort((a, b) => a.order - b.order);
}
