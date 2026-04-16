export type FAQ = { question: string; answer: string };
export type FAQsByVertical = Record<string, readonly FAQ[]>;

export const FAQS: FAQsByVertical = {
  consulting: [
    {
      question: "What do PIQI's consulting services actually cover?",
      answer:
        "Business consulting, strategy, project management, process consulting, supply chain support, and project commercial services — across the strategy-to-delivery arc. Most engagements combine more than one of these."
    },
    {
      question: "How do you start?",
      answer:
        "With a short brief. From there we run a strategy capture — a structured session with your core management to document the current direction, surface gaps, and agree what needs to shift before we propose scope."
    },
    {
      question: "Can you work alongside our team rather than replace them?",
      answer:
        "That's the default model. We bring experienced management capacity into the room without adding permanent headcount, and we write down what we do so your team owns the work at close-out."
    },
    {
      question: "Do you work outside South Africa?",
      answer: "Yes. PIQI Group is SA-based and serves clients internationally."
    }
  ],
  property: [
    {
      question: "What services does PIQI's property management cover?",
      answer:
        "Maintenance, letting, construction support, inspections, repairs, preventive measures, emergency response, tenant screening, lease agreements, rent collection, and property marketing."
    },
    {
      question: "Can we trust you to manage our properties?",
      answer:
        "Yes. PIQI offers reliable, professional property management with an experienced team and a structured approach — inspections on a schedule, clear reporting, and accountability on maintenance."
    },
    {
      question: "How is maintenance handled?",
      answer:
        "Proactively. Routine inspections, timely repairs, emergency response, and preventive measures keep assets in good condition and catch issues before they become expensive."
    },
    {
      question: "What's included in the letting service?",
      answer:
        "Tenant screening, lease agreement management, rent collection, property marketing, and ongoing landlord-tenant relationship management through the tenancy."
    },
    {
      question: "Do you offer construction services?",
      answer:
        "Yes — renovations, remodelling, and new construction. Projects are run to timeline and budget, with quality standards you can inspect."
    }
  ],
  fashion: [
    {
      question: "What is Downtown Fashion?",
      answer:
        "Downtown Fashion is a high-fashion brand powered by PIQI Group, specialising in bespoke clothing — wedding attire, matric dance outfits, uniforms, tracksuits, safety clothing, and branded embroidered or printed clothing."
    },
    {
      question: "What can I expect from the clothing range?",
      answer:
        "High-quality design, personalised detailing, and in-house craftsmanship. Every piece is cut, fitted, and finished on the garment, not at the end."
    },
    {
      question: "What sets Downtown Fashion apart?",
      answer:
        "Fashion-forward clothing that reflects how you want to show up. Bespoke means your style leads the brief — we build around it."
    },
    {
      question: "Is Downtown Fashion only for special occasions?",
      answer:
        "No. Alongside wedding attire and matric outfits, we produce uniforms, workwear, safety clothing, and everyday branded pieces."
    }
  ],
  yachts: [
    {
      question: "What does a self-catering basis mean?",
      answer:
        "You're responsible for your own food and drinks during the charter. You buy provisions from local shops and markets and run your own meals on board."
    },
    {
      question: "How many cabins does the catamaran have?",
      answer:
        "Four double cabins — comfortable accommodation for you and your fellow travellers for the duration of the charter."
    },
    {
      question: "Is fuel included?",
      answer:
        "Fuel is covered for anchoring and short shore trips under engine. Fuel for extended sailing or longer passages is the client's responsibility."
    },
    {
      question: "How do I book?",
      answer:
        "Enquire through the form or contact us directly with your preferred dates and group size. We'll come back with availability, a provisioning briefing, and the next steps."
    }
  ],
  auto: [
    {
      question: "What panel beating services do you offer?",
      answer:
        "Minor dents and scratches through to major collision repairs. Our technicians handle the spectrum with the precision the work demands."
    },
    {
      question: "Can I buy high-quality tyres from PIQI Auto?",
      answer: "Yes. We stock tyres for most vehicle types."
    },
    {
      question: "Do you fit tyres?",
      answer:
        "No. We sell tyres but don't fit them — we'll recommend a trusted fitment centre in your area."
    },
    {
      question: "How do I book?",
      answer:
        "Contact us through the form or directly, describing the vehicle, the damage or the tyres you need, and your preferred timing."
    }
  ],
  coaching: [
    {
      question: "Who is PIQI coaching for?",
      answer:
        "Leaders and professionals working through a specific challenge — leadership development, communication, or life-work rhythm. Individuals and teams both."
    },
    {
      question: "What makes the approach different?",
      answer:
        "It's holistic and specific at once. We address professional goals alongside the personal habits that shape whether those goals get reached."
    },
    {
      question: "How long does a coaching engagement run?",
      answer:
        "Usually three to six months at a fortnightly cadence. We agree the outcomes we're tracking at the start, and we review progress at a defined midpoint."
    },
    {
      question: "How do I start?",
      answer:
        "Book an intake call. It's no-obligation and lets us agree whether coaching is the right shape of help for where you are."
    }
  ]
} as const;

export function getFAQs(slug: string): readonly FAQ[] {
  return FAQS[slug] ?? [];
}
