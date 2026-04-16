# Property Management — source content from piqigroup.com

**URL:** https://piqigroup.com/property-management/
**Fetched:** 2026-04-15
**Migration state summary:** ~5 items [NEW] · ~17 items [MIGRATED] · ~4 items [PARTIAL]

## Hero / opening

**H1:** Property Management — [MIGRATED] (new site uses same displayName in `verticals.property`)
**Subhead / lead paragraph:** "Are you seeking professional property management services that cover all aspects of your real estate investments? Look no further than Piqi Group. We offer comprehensive property management solutions, including maintenance, letting, and construction services." — [PARTIAL] (the new site opens with "Comprehensive property operations for owners who want their buildings running without daily oversight…" — same substance, less sales-brochure voice)

## Headings (document order)

- H1: Property Management
- H2: How does it work?
- H2: Exceed your property expectations.
- H2: Experience peace of mind
- H2: FAQ
- H2: Contact
- H2: Website
- H2: Legal
- H2: Get in touch

## Body copy — verbatim

### How does it work?

> "We understand that managing properties can be a complex and time-consuming task. Our comprehensive property management services are designed to alleviate the burdens associated with property ownership." — [PARTIAL] (new site expresses the same idea via the lead paragraph "…without daily oversight" but doesn't reuse this sentence)

### Exceed your property expectations.

> "Piqi Group's property management service includes proactive and efficient maintenance solutions. From routine inspections and repairs to preventive measures and emergency response, we ensure that your properties are well-maintained and in optimal condition." — [MIGRATED] (absorbed into `property.bodyParagraphs[1]`: "We treat property management as a proactive discipline. Routine inspections and preventive maintenance catch issues before they become emergencies…")

### Experience peace of mind

> "Piqi Group's property management service includes proactive and efficient maintenance solutions. From routine inspections and repairs to preventive measures and emergency response, we ensure that your properties are well-maintained and in optimal condition. Our aim is to minimize downtime and maximize the longevity of your assets." — [MIGRATED] ("Minimize downtime. Maximize the longevity of your assets." now runs as a `Callout` closing pull-quote on `/property`)

> "Additionally, Piqi Group offers comprehensive letting services to streamline the process of renting out your properties. Our experienced team handles all aspects of property letting, from tenant screening and lease agreements to rent collection and property marketing." — [MIGRATED] (covered by `property.offerings` bullets and the `Letting` lane)

### FAQ (intro paragraph)

> "We ensure that projects are executed efficiently, adhering to timelines and budgets while maintaining the highest quality standards. When you choose Piqi Group for your property management needs, you benefit from our commitment to efficient and reliable solutions." — [PARTIAL] (substance lands in the `Construction support` lane)

### Closing tagline paragraph

> "We combine industry expertise, meticulous attention to detail, and personalized service to enhance the value and performance of your real estate investments" — [NEW] (not a direct match in new site; could be a CTA footer line candidate)

## Services / offerings list

(no enumerated list on the live page — offerings are embedded in prose. New site exposes `property.offerings`:)

- Routine inspections and preventive maintenance — [MIGRATED]
- Letting, tenant screening, and lease management — [MIGRATED]
- Rent collection and property marketing — [MIGRATED]
- Construction support — renovation, remodelling, new builds — [MIGRATED]

## FAQs

### Q: What services does Piqi Group's property management offer? — [MIGRATED]
A: "Piqi Group's property management service includes a range of comprehensive solutions. We handle property maintenance, letting, and even construction projects. Our team is equipped to take care of routine inspections, repairs, tenant screening, lease agreements, rent collection, and more, ensuring your properties are well-maintained and managed efficiently." (new site FAQ is tighter but covers the same ground)

### Q: Can I trust Piqi Group to manage my properties? — [MIGRATED]
A: "Absolutely. Piqi Group is committed to professionalism, expertise, and customer satisfaction. Our team consists of experienced professionals with a deep understanding of property management. We prioritize efficient and reliable solutions, ensuring that your properties are in safe hands and that you receive the highest standard of service."

### Q: What industries and domains does Piqi Consulting have expertise in? — [NEW / likely defect]
A: "Piqi Group handles all aspects of property letting, making the process hassle-free for you. We screen potential tenants, manage lease agreements, collect rent, and market your properties effectively. Our goal is to find reliable tenants and maintain positive landlord-tenant relationships, ensuring a smooth and successful letting experience."

(This is almost certainly a CMS error on the live site — the question references "Piqi Consulting" but the answer is the letting answer. The answer itself duplicates the Q5 answer below. Do NOT migrate as written.)

### Q: How does Piqi Group handle property maintenance? — [MIGRATED]
A: "Piqi Group takes a proactive approach to property maintenance. We conduct routine inspections and provide timely repairs to ensure your properties are in optimal condition. Our aim is to minimize downtime and preserve the value and appeal of your investments. In case of emergencies, we also offer a prompt response to address any urgent maintenance needs."

### Q: What is involved in Piqi Group's property letting service? — [MIGRATED]
A: "Piqi Group handles all aspects of property letting, making the process hassle-free for you. We screen potential tenants, manage lease agreements, collect rent, and market your properties effectively. Our goal is to find reliable tenants and maintain positive landlord-tenant relationships, ensuring a smooth and successful letting experience."

### Q: Does Piqi Group offer construction services for real estate projects? — [MIGRATED]
A: "Yes, Piqi Group provides construction services for real estate projects. Whether you require renovations, remodelling, or new construction, our skilled team can handle a wide range of construction needs. We strive to deliver projects efficiently, adhering to timelines and budgets while maintaining the highest quality standards."

## Testimonials / quotes

(none on page)

## CTAs on page

- "CONTACT US" → (nav) — [MIGRATED]
- "GET ANSWERS HERE" → #FAQ — [NEW] (jump-anchor pattern not used on new site)
- "Send" → contact form submit — [MIGRATED]
- "Close Trigger" → javascript:void(0) — [NEW] (popup close; UI only)

## Taglines / standalone lines

- "Exceed your property expectations." — [NEW] (H2 tagline; could be repurposed as a section eyebrow if desired)
- "Experience peace of mind" — [NEW] (H2 tagline; same)
- "HOVER FOR MORE INFO" — [NEW] (UI instruction; do not migrate)

## Contact block on page

- PO Box 751615 Gardenview 2047, South Africa — [MIGRATED]
- info@piqi.co.za — [MIGRATED]
- +27(0) 10 007-3358 — [MIGRATED]
- +27(0) 86 671-7958 — [MIGRATED]

## Images referenced

- PIQI logo (SVG) — [MIGRATED]
- Home / Property / Consulting / Yacht Charters / Auto / Fashion nav icons — [MIGRATED]
- No property-specific editorial photography served (the live page uses SVG placeholders only — likely a WP image-loading issue at fetch time). (not stated on live site in fetched markup)

## Notable single sentences (pull-quote candidates)

- "Our aim is to minimize downtime and maximize the longevity of your assets." (slightly corporate but the "minimize downtime" frame is a decent property-maintenance pull-quote)
- "We combine industry expertise, meticulous attention to detail, and personalized service to enhance the value and performance of your real estate investments"
- "Our team is equipped to take care of routine inspections, repairs, tenant screening, lease agreements, rent collection, and more…"

## Structural elements

- Contact form present: yes (Name / Email / Message / Send)
- FAQ accordion: yes (6 Q&A pairs, one broken — see Q3 above)
- Google Maps embed: yes (address links to Google Maps)
- Image gallery: no
- Popup trigger: yes (Elementor popup on load)
- Skip-to-content link: yes

## Notable contradictions / discrepancies vs. new site

- Q3 on the live FAQ is misconfigured: the question is about Consulting, the answer is about letting. New site avoids this.
- Live site does NOT mention compliance paperwork (COC, beetle, electrical, gas), body corporate coordination, or vetting depth. New site's FAQ adds all of these — genuinely new content.
- Live site does NOT mention the "10pm call" promise or the "no phone tree" language. That wording is NEW in `property.bodyParagraphs[2]` and is some of the strongest copy in the new site.
- Live site does NOT differentiate the three lanes (Letting / Maintenance / Construction) — new site does via `property.lanes`. This is a new-site improvement, not a live-site loss.