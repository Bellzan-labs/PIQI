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
          "We map current-state operations, surface friction, and rebuild flows that teams actually use."
      },
      {
        title: "Operational performance",
        description:
          "We define measures, controls, and cadences that keep performance visible and improvable."
      },
      {
        title: "Product and service lifecycle",
        description:
          "We standardise how offerings move from brief to launch to maintenance, without losing the detail."
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
    description: "Strategy work that sets direction, clarifies trade-offs, and sharpens positioning.",
    heroTagline: "Direction, trade-offs, positioning.",
    heroDescription:
      "We structure business strategies that set clear direction, protect margin, and sharpen how you compete in chosen markets.",
    heroImage: {
      url: unsplash("1529699211952-734e80c4d42b"),
      alt: "Strategic pieces arranged on a dark surface, overhead framing."
    },
    features: [
      {
        title: "Business strategy",
        description:
          "We clarify direction and trade-offs so leaders and teams make aligned decisions."
      },
      {
        title: "Strategic business planning",
        description:
          "We translate strategy into an operating plan with measurable milestones and owners."
      },
      {
        title: "Competitive positioning",
        description:
          "We sharpen how you compete in chosen markets and why customers should choose you."
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
      "We plan, schedule, and steer projects across risk, resource, and stakeholder lines so they land on time and within budget.",
    heroImage: {
      url: unsplash("1541410965313-d53b3c16ef17"),
      alt: "Construction crane against a dusk sky."
    },
    features: [
      {
        title: "Planning",
        description:
          "We scope, schedule, and sequence the work so teams know exactly what they are being asked to deliver."
      },
      {
        title: "Risk management",
        description:
          "We identify, track, and mitigate risks before they become issues that cost time or margin."
      },
      {
        title: "Resource allocation",
        description:
          "We match the right people and capacity to the right workstream at the right time."
      },
      {
        title: "Stakeholder communication",
        description:
          "We keep decision-makers current with concise, accurate status and clear asks."
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
      "We provide supply chain support, logistics analysis, and process streamlining for organisations that need to see and steer their operations.",
    heroImage: {
      url: unsplash("1493238792000-8113da705763"),
      alt: "Stacked shipping containers at a cargo port."
    },
    features: [
      {
        title: "Supply chain support",
        description:
          "We provide hands-on support across sourcing, flow, and delivery to keep operations moving."
      },
      {
        title: "Logistics analysis",
        description:
          "We quantify where cost, time, and reliability are leaking, and recommend the fix."
      },
      {
        title: "Process streamlining",
        description:
          "We remove duplicated steps and hand-offs so throughput and accuracy both improve."
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
        title: "Procurement",
        description:
          "We structure tender strategy, evaluate bidders, and award work so obligations and incentives line up with the intended outcome."
      },
      {
        title: "Contracts management",
        description:
          "We administer contracts end-to-end — variations, notices, and obligations — so the paper trail holds up when it matters."
      },
      {
        title: "Claims management",
        description:
          "We prepare and defend claims with evidence-based entitlement analysis that protects commercial position without stalling delivery."
      },
      {
        title: "Negotiation",
        description:
          "We negotiate rates, variations, and settlements from a prepared position, grounded in contract and data rather than posture."
      },
      {
        title: "Cost control",
        description:
          "We run budgets, commitments, and forecasts against actuals so leadership sees the true cost position every reporting cycle."
      },
      {
        title: "Planning development",
        description:
          "We build and maintain integrated schedules that link scope, resource, and cost so slippage is visible before it becomes damage."
      },
      {
        title: "Risk management",
        description:
          "We stand up risk registers, quantify exposure, and track mitigations so decisions are made with the downside priced in."
      },
      {
        title: "Front-End Loading (FEL)",
        description:
          "We run FEL reviews that pressure-test scope, cost, and execution readiness before sanction — setting projects up for success from day one."
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
