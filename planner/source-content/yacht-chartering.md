# Yacht Chartering — source content from piqigroup.com

**URL:** https://piqigroup.com/yacht-chartering/
**Fetched:** 2026-04-15
**Migration state summary:** ~0 items [NEW] · ~18 items [MIGRATED] · ~3 items [PARTIAL]

## Hero / opening

**H1:** Yacht Chartering — [MIGRATED] (new site uses displayName "Yacht Charters" in `verticals.yachts`; same intent)
**Subhead / lead paragraph:** "Are you ready for an extraordinary sailing adventure along the picturesque coastline? We offer a unique catamaran yacht charter on a self-catering basis, providing you with the freedom to explore the stunning surroundings at your own pace." — [PARTIAL] (new site opens with "A spacious catamaran with four double cabins, chartered on a self-catering basis. Bring your own food and drinks, run your own itinerary, and explore the coastline at your own pace." — same substance, drops the rhetorical hook)

## Headings (document order)

- H1: Yacht Chartering
- H2: A voyage that will exceed your expectations.
- H2: FAQ
- H3: Contact
- H3: Website
- H3: Legal
- H3: Get in touch

## Body copy — verbatim

### A voyage that will exceed your expectations

> "With our spacious catamaran featuring 4 double cabins, you and your companions can embark on an unforgettable voyage. Our catamaran is designed to provide both comfort and ample space for your sailing journey. The 4 double cabins offer cozy accommodations, ensuring a good night's rest after a day of exploration. Whether you're planning a romantic getaway or an adventure with friends and family, our catamaran can accommodate your needs." — [MIGRATED] (rewritten as `yachts.bodyParagraphs[1]` and `[2]` — new site reframes "the boat accommodates what you plan, not what someone else's brochure suggests")

### FAQ intro paragraph

> "One of the exceptional features of our self-catering catamaran charter is that you have the freedom to provide your own food and drinks. We encourage you to immerse yourself in the local culture by purchasing provisions from nearby shops and markets." — [MIGRATED] (covered by `yachts.faqs` self-catering Q&A plus the provisioning briefing in `yachts.howWeEngage`)

### Closing

> "Embark on an extraordinary sailing adventure with NW Yacht Chartering today. Our catamaran yacht charter on a self-catering basis offers the perfect blend of freedom and comfort. Enjoy the spacious accommodations, explore the coastline at your leisure, and create unforgettable memories with your loved ones." — [PARTIAL] (new site references the operator brand `NW Yacht Chartering` via `verticals.yachts.operatorBrand` but doesn't reuse the CTA prose)

## Services / offerings list

(Live page doesn't bullet-list. New site enumerates:)

- Self-catering catamaran charter — [MIGRATED]
- Four double cabins — up to eight guests — [MIGRATED]
- Client-led itinerary along the coastline — [MIGRATED]
- Fuel covered for anchoring and shore trips — [MIGRATED]

## FAQs

### Q: What does a self-catering basis mean for the catamaran yacht charter? — [MIGRATED]
A: "A self-catering basis means that you are responsible for providing your own food and drinks during the catamaran yacht charter. You have the freedom to purchase provisions from local shops and markets to create personalized dining experiences on board."

### Q: How many cabins does the catamaran yacht have for accommodation? — [MIGRATED]
A: "The catamaran yacht offered by NW Yacht Chartering features 4 double cabins. These spacious cabins provide comfortable accommodations for you and your fellow travellers during the charter."

### Q: Is fuel provided for all trips during the catamaran yacht charter? — [MIGRATED]
A: "Fuel provided by NW Yacht Chartering is primarily for shore trips. This means that fuel for anchoring and shore trips using the engine will be covered. However, fuel required for other purposes or extended trips are the responsibility of the clients." (new site FAQ tightens this; same facts)

### Q: How can I book a catamaran yacht charter with NW Yacht Chartering? — [MIGRATED]
A: "Booking a catamaran yacht charter with NW Yacht Chartering is easy. You can contact us through our website or contact information to inquire about availability, discuss your requirements, and make a reservation. Our team will guide you through the booking process and answer any questions you may have."

## Testimonials / quotes

(none on page)

## CTAs on page

- "GET ANSWERS HERE" → #FAQ — [NEW] (jump-anchor pattern not in new site)
- "CONTACT US" → #CONTACT — [MIGRATED]

## Taglines / standalone lines

- "A voyage that will exceed your expectations." — [MIGRATED] (now the eyebrow on the `/yachts` ImageGallery section)

## Contact block on page

- PO Box 751615 Gardenview 2047, South Africa — [MIGRATED]
- info@piqi.co.za — [MIGRATED]
- +27(0) 10 007-3358 — [MIGRATED]
- +27(0) 86 671-7958 — [MIGRATED]

## Images referenced

All images appear as `/wp-content/uploads/2023/05/…`:

- YATCH-DECK-2.jpg — yacht deck exterior (port side) — [MIGRATED] (downloaded to `public/brand/yachts/deck-2.jpg`, rendered in the `/yachts` ImageGallery)
- YATCH-DECK.jpg — yacht deck exterior (alt angle) — [MIGRATED] (downloaded to `public/brand/yachts/deck-1.jpg`, rendered in the `/yachts` ImageGallery)
- YATCH-IN-THE-OCEAN.jpg — catamaran in open water — [MIGRATED] (downloaded to `public/brand/yachts/ocean.jpg`, rendered in the `/yachts` ImageGallery)
- YATCH-INTERIOR.jpg — cabin/lounge interior — [MIGRATED] (downloaded to `public/brand/yachts/interior.jpg`, rendered in the `/yachts` ImageGallery)
- YATCH-ON-THE-WATER.jpg — catamaran on water (wide shot) — [MIGRATED] (downloaded to `public/brand/yachts/on-water.jpg`, now the `/yachts` hero)

(These are the real yacht photos — 5 of them. They are the single most valuable "not yet migrated" asset on the live site. If we can pull originals from the WP install, we should; they'll be mood-continuous and show the actual boat, rather than a stock catamaran.)

Note filename typo: "YATCH" instead of "YACHT" across all five files.

## Notable single sentences (pull-quote candidates)

- "Whether you're planning a romantic getaway or an adventure with friends and family, our catamaran can accommodate your needs." (MIGRATED in compressed form)
- "We encourage you to immerse yourself in the local culture by purchasing provisions from nearby shops and markets." (not migrated; reasonable line for a local-provisioning callout if we ever add one)
- "A voyage that will exceed your expectations." (H2; NEW — candidate pull-quote)

## Structural elements

- Contact form present: yes (Name / Email / Message / Send)
- FAQ accordion: yes (4 Q&A pairs)
- Google Maps embed: yes (address link)
- Image gallery: yes (5-image carousel, repeated — the gallery is genuinely on the live site)
- Popup trigger: yes

## Notable contradictions / discrepancies vs. new site

- Live site uses "Yacht Chartering" as the vertical name; new site uses "Yacht Charters" (displayName) with `slug: "yachts"`. Minor naming difference — resolve on redirect / sitemap.
- Live site mentions `NW Yacht Chartering` as the operator brand — new site captures this via `verticals.yachts.operatorBrand`. Consistent.
- Live site does NOT mention: eight-guest capacity (though implied by "4 double cabins"), skipper add-on, bareboat qualification check, weather/itinerary reshape process, pets policy, or security deposit/insurance. These are ALL new and important in `yachts.faqs`.
- Live site has a real image gallery of the actual boat. New site currently uses a stock Unsplash catamaran. If we can get the source JPGs, this is a high-priority migration.