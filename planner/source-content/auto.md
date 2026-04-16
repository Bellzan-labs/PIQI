# Piqi Auto — source content from piqigroup.com

**URL:** https://piqigroup.com/auto/
**Fetched:** 2026-04-15
**Migration state summary:** ~4 items [NEW] · ~14 items [MIGRATED] · ~1 items [PARTIAL]

## Hero / opening

**H1:** Piqi Auto — [MIGRATED] (same displayName in `verticals.auto`)
**Subhead / lead paragraph:** "Are you in need of professional automotive services that encompass panel beating and tyre sales? Our dedicated team specializes in providing top-notch panel beating solutions and high-quality tyres to meet all your automotive needs." — [PARTIAL] (new site opens with "Professional panel beating and tyre sales. Our technicians handle minor dents, scratches, and major collision repairs…" — same substance, no rhetorical opening question)

## Headings (document order)

- H1: Piqi Auto
- H2: How does it work?
- H2: Panel beating
- H2: Tyre Supplier
- H2: GET ANSWERS HERE
- H2: FAQ
- H3: What services does Piqi Auto offer for panel beating?
- H3: Can I purchase high-quality tyres from Piqi Auto?
- H3: How can I book Piqi Auto's panel beating or tyre sales services?

## Body copy — verbatim

### How does it work?

> "Whether you require minor repairs or a full tyre replacement, our skilled technicians and wide range of tyres are here to cater to your needs" — [PARTIAL] (new site says "Our technicians handle minor dents, scratches, and major collision repairs with the precision the job demands" — covers the same beat)

### Panel beating

> "At Piqi Auto, we understand that accidents happen, and your vehicle may require panel beating to restore its original condition. Our experienced technicians possess the expertise and precision to handle minor dents, scratches, and even major repairs with meticulous care. Using advanced techniques and state-of-the-art equipment, we ensure that your vehicle looks as good as new." — [MIGRATED] ("Accidents happen." now opens `auto.bodyParagraphs[0]`, paired with the write-and-approve / fleet-and-corporate-accounts frame)

### Tyre Supplier

> "We understand that the right set of tyres can significantly impact your vehicle's performance, safety, and comfort. That's why we stock a wide selection of tyres from trusted brands, catering to various vehicle types and driving preferences. Our knowledgeable staff can assist you in choosing the perfect tyres that meet your specific requirements, ensuring optimal traction, durability, and fuel efficiency." — [MIGRATED] (the Tyre supply lane description now carries the "traction, durability, and fuel efficiency across driving conditions" framing)

> "When you choose Piqi Auto for your automotive needs, you can trust in our commitment to professionalism and customer satisfaction." — [NEW] (generic CTA sentence; do not migrate)

### GET ANSWERS HERE (FAQ intro)

> "Discover the convenience and quality of Piqi Auto's panel beating and tyre sales services. Whether you require minor repairs or a full tyre replacement, our skilled technicians and wide range of tyres are here to cater to your needs. Experience exceptional automotive service that exceeds your expectations." — [NEW] (marketing intro; not migrated)

## Services / offerings list

(live page does not use a bulleted list. New site enumerates:)

- Panel beating — minor dents, scratches, and major repairs — [MIGRATED]
- Tyre supply for most vehicle types — [MIGRATED]
- Trusted fitment-centre referrals — [MIGRATED]

## FAQs

### Q: What services does Piqi Auto offer for panel beating? — [MIGRATED]
A: "Piqi Auto specializes in panel beating services, ranging from minor dents and scratches to major repairs. Our experienced technicians utilize advanced techniques and state-of-the-art equipment to restore your vehicle to its original condition with meticulous care."

### Q: Can I purchase high-quality tyres from Piqi Auto? — [MIGRATED]
A: "Absolutely! Piqi Auto offers a comprehensive range of high-quality tyres for various vehicle types. We stock tyres from trusted brands to enhance your driving experience in terms of performance, safety, and comfort. Our knowledgeable staff can assist you in choosing the right tyres that meet your specific requirements. We do not fit tyres but can recommend a fitment centre in your area." (new site splits this into a yes/no and a separate fitment answer)

### Q: How can I book Piqi Auto's panel beating or tyre sales services? — [MIGRATED]
A: "Booking Piqi Auto's panel beating or tyre sales services is simple. You can reach out to us through our website or contact information to schedule an appointment or request a quote. Our team will be happy to assist you and provide the necessary information and guidance for your automotive needs." (covered by `auto.faqs` "How do I book?")

## Testimonials / quotes

(none on page)

## CTAs on page

- "CONTACT US" → (nav) — [MIGRATED]
- "GET ANSWERS HERE" → #FAQ — [NEW] (jump-anchor pattern not in new site)
- "Send" → contact form submit — [MIGRATED]

## Taglines / standalone lines

- "HOVER FOR MORE INFO" — [NEW] (UI string; do not migrate)
- "Send us a message, we'd love to hear from you" — [NEW] (form header; generic, do not migrate)

## Contact block on page

- PO Box 751615 Gardenview 2047, South Africa — [MIGRATED]
- info@piqi.co.za — [MIGRATED]
- +27(0) 10 007-3358 — [MIGRATED]
- +27(0) 86 671-7958 — [MIGRATED]

## Images referenced

- PIQI logo (SVG) — [MIGRATED]
- Home / Property / Consulting / Yacht Charters / Auto / Fashion nav icons — [MIGRATED]
- No auto-specific editorial photography visible in the fetched markup (likely SVG placeholders only at fetch time). (not stated on live site)

## Notable single sentences (pull-quote candidates)

- "Accidents happen, and your vehicle may require panel beating to restore its original condition." (workable as a plain opener but voice is too soft for the new site's auto tone)
- "We do not fit tyres but can recommend a fitment centre in your area." (MIGRATED — this is the clearest practical statement on the live page and lands verbatim in `auto.faqs`)

## Structural elements

- Contact form present: yes (Name / Email / Message / Send)
- FAQ accordion: yes (3 Q&A pairs)
- Google Maps embed: yes (address link)
- Image gallery: no
- Popup trigger: yes

## Notable contradictions / discrepancies vs. new site

- Live site says "state-of-the-art equipment" and "advanced techniques" — generic marketing claims. New site avoids this language.
- Live site does NOT mention insurance-vs-cash decisioning, WhatsApp photo for initial view, fleet/corporate accounts, paint-work warranty, courtesy car coordination, or turnaround expectations. These are ALL new in `auto.bodyParagraphs` and `auto.faqs` — meaningful enrichment from the live site.
- Live site is silent on the "we don't fit tyres" fact in the body copy (it only appears in the Q&A). New site surfaces this into the body and an offering bullet.