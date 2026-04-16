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
    },
    {
      question: "What is FEL and why does it matter at each gate?",
      answer:
        "Front-End Loading is the discipline of pressure-testing scope, cost, and execution readiness before sanction. Each gate — concept, pre-feasibility, feasibility, execution — produces a specific deliverable and a specific decision. Skipping gates is where projects quietly lose their margin."
    },
    {
      question: "How do you split scope between owner, EPC, and specialists?",
      answer:
        "We help owners set the split before tender, not argue it after award. Our view is pragmatic: the owner keeps what only the owner can do (strategy, stakeholder, commercial accountability), the EPC takes integrated delivery, and specialists cover the disciplines where depth beats breadth."
    },
    {
      question: "Do you write contracts, or review them?",
      answer:
        "Both, but more often we structure the contract strategy and administer the result. Drafting bespoke contracts from scratch is rarely the right call — we work with recognised forms (FIDIC, NEC, bespoke SA amendments) and make the commercial terms do the heavy lifting."
    },
    {
      question: "Where does procurement strategy sit vs. procurement execution?",
      answer:
        "Strategy sits in FEL 2–3: packaging, market testing, contract form, incentive structure. Execution sits in FEL 4: tender, evaluation, award, administration. We'll run either or both, but we won't run execution without a strategy we can stand behind."
    },
    {
      question: "Can you plug into an existing PMO, or do you stand one up?",
      answer:
        "Either. If you have a PMO, we embed against your templates and cadence. If you don't, we stand one up sized for the project — not a permanent function you'll have to dismantle when the project closes."
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
    },
    {
      question: "What counts as an emergency maintenance call-out, and what does the landlord pay for?",
      answer:
        "Anything affecting safety, security, or habitability — burst pipes, electrical faults, lock-outs, no water or power. What the landlord pays versus what's on the tenant is set in the management agreement up front so there are no 10pm negotiations."
    },
    {
      question: "Do you handle compliance (COC, beetle, electrical, gas) on our behalf?",
      answer:
        "Yes. We coordinate the inspections, hold the certificates on file, and flag renewals before they expire. You see the paperwork and the quotes before any work is commissioned."
    },
    {
      question: "How do you vet tenants and how quickly can you fill a vacancy?",
      answer:
        "Credit check, ITC, employment verification, reference calls, and affordability review against the rent. Time-to-fill depends on the property and the market — we'll give you an honest view after the site walk, not a generic promise."
    },
    {
      question: "Can you quote on a small renovation while you manage the letting?",
      answer:
        "Yes — it's a common combination. We'll scope and quote the work, coordinate with the tenant if the property is occupied, and manage the contractors against the agreed budget and timeline."
    },
    {
      question: "What reporting do landlords get, and how often?",
      answer:
        "Monthly statement covering rent received, expenses, maintenance completed, and any items needing your decision. Plain language, no 40-page packs. Ad-hoc reporting for specific events — inspections, vacancies, claims — goes out as it happens."
    },
    {
      question: "How do you coordinate with the body corporate on sectional title stock?",
      answer:
        "We work to the rules and we keep the lines clean. Unit-level issues are ours, common-property issues go to the body corporate, and where it's unclear we'll flag it and agree the path before incurring cost on your behalf."
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
    },
    {
      question: "How many fittings does a bespoke gown need, and over what period?",
      answer:
        "Usually two to three fittings across the build. For a full wedding gown, allow at least four months from first appointment to collection — it gives us room for fabric lead times, fittings, and the small adjustments that make the piece sit right."
    },
    {
      question: "Can a bridal client bring their own fabric or reference images?",
      answer:
        "Reference images — always welcome, and usually the quickest way to shape the brief. Own fabric is case-by-case: we'll look at the hand, the weight, and the quantity before committing. If it's right for the design, we'll use it; if it isn't, we'll say so."
    },
    {
      question: "Minimum order quantity for uniforms and branded wear?",
      answer:
        "No fixed minimum on bespoke work, but pricing gets friendlier at volume because the setup cost is shared across the run. We'll quote honestly on any size order and tell you where the price breaks sit."
    },
    {
      question: "Do you handle sizing runs for staff across multiple sites?",
      answer:
        "Yes. We'll run sizing sessions on-site or provide a size kit, collect the schedule, and deliver in batches if the sites need it. Re-orders for new hires run against the same patterns so consistency holds over time."
    },
    {
      question: "How are alterations handled after final delivery?",
      answer:
        "Minor adjustments after collection are part of the service within a reasonable window — bring the piece back and we'll take a look. Weight change, repair after wear, or reworks for a new occasion are priced as a separate job."
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
    },
    {
      question: "How does self-catering provisioning actually work?",
      answer:
        "You buy your own food and drinks ashore before the charter or during shore trips. We'll run through the galley, fridge and freezer space, and the nearest shops during the handover briefing so you know what fits and what to top up locally."
    },
    {
      question: "Can I add a skipper, and what does that cost?",
      answer:
        "A skipper can be arranged if you'd rather not bareboat, or if your group doesn't hold the required qualifications. Cost depends on duration and is quoted with the charter — ask us when you enquire."
    },
    {
      question: "What's the minimum sailing experience needed to bareboat?",
      answer:
        "Enough to handle the boat and the conditions safely. We'll ask about your experience and qualifications during the enquiry; if bareboating isn't the right call, we'll recommend a skippered option rather than send you out under-prepared."
    },
    {
      question: "What happens if weather forces a route change?",
      answer:
        "Safety leads. We'll reshape the itinerary with you around the conditions — sometimes that means a sheltered anchorage, sometimes a shorter passage, sometimes sitting out a day. The briefing covers how these calls get made and who signs off."
    },
    {
      question: "Pets on board?",
      answer:
        "Case-by-case. Ask us at enquiry stage with the animal and the duration in mind — we'll give you a straight answer rather than a policy line."
    },
    {
      question: "Insurance and deposit expectations?",
      answer:
        "A refundable security deposit is held against the charter and released after return inspection. Insurance covers the vessel; your personal items and any group travel cover are on you. Specifics are confirmed in writing before the booking is locked in."
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
    },
    {
      question: "Will fixing this through insurance affect my no-claim bonus?",
      answer:
        "Often, yes. Send us a WhatsApp photo of the damage and we'll give you an initial view on whether the repair cost is likely to be worth the bonus hit. Your insurer makes the final call, but going in with a realistic number helps."
    },
    {
      question: "Do you give cash-job discounts for small dents and scratches?",
      answer:
        "Cash jobs are quoted on what the work actually takes — no insurance admin loaded in. For small dents and scratches that usually works out cheaper than going through a claim. We'll tell you when it doesn't."
    },
    {
      question: "Is there a warranty on paint work?",
      answer:
        "Yes. Paint and refinish work is warranted against defects in materials and workmanship for a defined period agreed in writing on the job card. Stone chips, new damage, and poor after-care aren't covered — normal wear is."
    },
    {
      question: "Can I drop off the car and collect it, or do I need to wait for assessment?",
      answer:
        "Drop off and collect is the norm. We'll quote in writing from the initial assessment, contact you for approval before starting, and let you know when it's ready. If you'd rather wait and talk it through at the counter, that's fine too."
    },
    {
      question: "Do you handle courtesy car or loan vehicle arrangements?",
      answer:
        "If your insurance policy includes a loan vehicle, we'll coordinate with the insurer to make that work. We don't keep a fleet of our own courtesy cars — if you need one outside of your policy, we'll point you at a local hire option."
    },
    {
      question: "How long is a typical tyre change vs. a full panel beat?",
      answer:
        "Tyre supply is usually same-day — we stock the tyres, you collect them or take them to your fitment centre. A full panel beat depends on the damage and parts availability: small panels turn around in a few days, collision work runs longer. We'll give you an honest timeline with the quote."
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
    },
    {
      question: "How many sessions does a typical engagement last, and over what period?",
      answer:
        "Most engagements run three to six months at a fortnightly cadence — so six to twelve sessions. We set the length against what you're working on, not against a standard package."
    },
    {
      question: "Is coaching confidential when my employer is paying?",
      answer:
        "Yes. Sponsor-paid engagements stay confidential in content — the sponsor sees progress against the outcomes you agreed, not session notes. That boundary is set in writing before the first session."
    },
    {
      question: "What's the difference between coaching, mentoring, and therapy in your work?",
      answer:
        "Coaching is forward-looking, behavioural, and goal-anchored — we work on what you want to do differently. Mentoring leans on the coach's direct experience in your field. Therapy addresses clinical mental health, which we don't do and we'll refer on if that's what's needed."
    },
    {
      question: "Do you coach individuals, teams, or both?",
      answer:
        "Both. Individual engagements are one-on-one and confidential. Team engagements work on how a specific group operates together — decision-making, communication, accountability — and are structured differently from the start."
    },
    {
      question: "How do you measure progress without making it feel like a performance review?",
      answer:
        "We agree the outcomes you want at the start, in your language, and we check against them at defined review points — not every session. Progress is observable behaviour, not a score, and you own the read on whether it's shifting."
    },
    {
      question: "How do you know the coaching is actually working?",
      answer:
        "We agree outcomes at the start — specific behaviours, specific shifts — and review against them at an agreed midpoint. The work is confidential, but progress against agreed outcomes is visible to whoever is sponsoring the engagement. If the shift isn't happening, we say so and adjust cadence or approach."
    }
  ]
} as const;

export function getFAQs(slug: string): readonly FAQ[] {
  return FAQS[slug] ?? [];
}
