# Downtown Fashion — source content from piqigroup.com

**URL:** https://piqigroup.com/downtown-fashion/
**Fetched:** 2026-04-15
**Migration state summary:** ~6 items [NEW] · ~12 items [MIGRATED] · ~5 items [PARTIAL]

## Hero / opening

**H1:** Downtown Fashion — [MIGRATED]
**Subhead / lead paragraph:**
> "Downtown Fashion powered by Piqi Group not only translates your vision into masterpieces with high fashion & bespoke clothing while truly allowing you to voice your own unique luxurious style." — [MIGRATED] (rewritten plainly as `fashion.bodyParagraphs[0]`: "Downtown Fashion, powered by PIQI Group, translates your vision into bespoke clothing — cut, sewn, and finished in-house…")

## Headings (document order)

- H1: Downtown Fashion
- H2: How does it work?
- H2: Banish the mundane and embrace the extraordinary
- H2: FAQ
- H2: Contact
- H2: Website
- H2: Legal
- H2: Get in touch

## Body copy — verbatim

### Downtown Fashion (opening)

> "We design and manufacture wedding attire including wedding dresses, Bridesmaid's and flower girls outfits as well as Groom and Best man's suites. We also do matric dance outfits for boys and girls as well as bespoke outfits for any occasion. Lastly but not least we do school uniforms, tracksuits, safety clothing and branded (embroidered or printed) clothing." — [MIGRATED] (captured in `fashion.offerings` bullets and in `fashion.bodyParagraphs[0]`)

### How does it work?

> "Within the creative hub of Piqi Group, we take your unique vision and craft it into a masterpiece, bringing to life bespoke clothing that mirrors your individual style and persona" — [PARTIAL] (new site avoids the word "masterpiece"; the substance — bespoke, in-house, vision-to-garment — is in `fashion.bodyParagraphs[0–1]`)

> "Let your style do the talking." — [MIGRATED] (quoted verbatim inside `fashion.bodyParagraphs[1]`)

> "Tailored to meet the discerning tastes of sophisticated professionals and fashion-forward men and woman, our clothing line embodies the essence of luxury, exuding elegance and precision in every stitch" — [PARTIAL] (new site tones this down to "Tailored for the bride looking for a unique wedding dress, the business professional needing an impactful outfit, and the fashion enthusiast who wants a piece that actually fits")

### Banish the mundane and embrace the extraordinary

> "Immerse yourself in the world of high fashion through Downtown Fashion, fuelled by the innovation of Piqi Group." — [NEW] (marketing intro; not migrated)

> "Say farewell to the mundane and welcome the extraordinary with Downtown Fashion through our bespoke clothing offerings." — [NEW]

> "For the discerning bride in search of a unique wedding dress, the business professional seeking an impactful ensemble, or the fashion enthusiast desiring a statement piece – Downtown Fashion is your destination." — [MIGRATED] (rewritten as the second sentence of `fashion.bodyParagraphs[1]`)

> "Indulge in an experience of luxury fashion made just for you" — [NEW] (not migrated; generic)

### FAQ intro

> "Amidst the vibrant city life, let your style do the talking. personalized Our bespoke clothing is not just attire, it's a lifestyle choice. We encourage you to differentiate yourself from the crowd." — [NEW] (contains a visible typo — "personalized" is a stray word. Do not migrate as-is.)

### Closing

> "Dive into the realm of fashion forward luxury clothing that allows you to not only wear attire but voice your own unique style." — [NEW] (generic close; not migrated)

## Services / offerings list

(Live page doesn't bullet-list them — they're embedded in the opening paragraph. New site enumerates:)

- Wedding attire — bridal, bridesmaid, flower girl, groom, best man — [MIGRATED]
- Matric dance outfits for boys and girls — [MIGRATED]
- School uniforms, tracksuits, and safety clothing — [MIGRATED]
- Embroidered and printed branded clothing — [MIGRATED]
- Bespoke commissions for any occasion — [MIGRATED]

## FAQs

### Q: What is Downtown Fashion? — [MIGRATED]
A: "Downtown Fashion is a high-fashion brand powered by Piqi Group, specialising in bespoke clothing." (new site expands the answer with the specific offerings list)

### Q: What can I expect from Downtown Fashion's clothing range? — [MIGRATED]
A: "You can expect high-quality design, personalized detailing, and unrivalled craftsmanship in Downtown Fashion's clothing range."

### Q: What sets Downtown Fashion apart from other fashion brands? — [MIGRATED]
A: "Downtown Fashion emphasises fashion forward clothing that reflects persona so that you're expressing your personal style."

### Q: Is Downtown Fashion only for special occasions? — [MIGRATED]
A: "No, Downtown Fashion offers a wide range of clothing options for various occasions and everyday wear." (new site version expands this to mention uniforms, workwear, safety clothing explicitly)

## Testimonials / quotes

(none on page)

## CTAs on page

- "CONTACT US" → #CONTACT — [MIGRATED]
- "GET ANSWERS HERE" → #FAQ — [NEW] (jump-anchor pattern not in new site)
- "Send" → contact form submit — [MIGRATED]

## Taglines / standalone lines

- "Let your style do the talking." — [MIGRATED]
- "Banish the mundane and embrace the extraordinary" — [NEW] (not migrated; tonally off for the new site but memorable enough to flag as a possible H2 if the fashion page needs another beat)
- "Indulge in an experience of luxury fashion made just for you" — [NEW]
- "HOVER FOR MORE INFO" — [NEW] (UI string)

## Contact block on page

- PO Box 751615 Gardenview 2047, South Africa — [MIGRATED]
- info@piqi.co.za — [MIGRATED]
- +27(0) 10 007-3358 — [MIGRATED]
- +27(0) 86 671-7958 — [MIGRATED]

## Images referenced

- PIQI logo (SVG) — [MIGRATED]
- Home / Property / Consulting / Yacht Charters / Auto / Fashion nav icons — [MIGRATED]
- No garment photography in the fetched markup (SVG placeholders only). (not stated on live site)

## Notable single sentences (pull-quote candidates)

- "Let your style do the talking." (MIGRATED — already used)
- "Banish the mundane and embrace the extraordinary" (candidate for an H2 if we want to keep one theatrical line)
- "We design and manufacture wedding attire including wedding dresses, Bridesmaid's and flower girls outfits as well as Groom and Best man's suites." (good for a services-at-a-glance line — MIGRATED via offerings)

## Structural elements

- Contact form present: yes (Name / Email / Message / Send)
- FAQ accordion: yes (4 Q&A pairs)
- Google Maps embed: yes (address link)
- Image gallery: no
- Popup trigger: yes
- Grammar/typo: "men and woman" in the "How does it work?" paragraph (should be "men and women") — NEW content is clean

## Notable contradictions / discrepancies vs. new site

- Live site spells "suites" where it means "suits" ("Groom and Best man's suites"). Typo — do NOT migrate.
- Live site has "men and woman" (should be "men and women"). Typo.
- Live site has "personalized Our" as a broken fragment in the FAQ intro — CMS editing slip. Do NOT migrate.
- Live site does NOT mention fittings count (2–3), four-month wedding-gown lead time, minimum order quantity, sizing runs across sites, reference images vs own fabric policy, or post-delivery alterations. These are ALL new and valuable in `fashion.bodyParagraphs` and `fashion.faqs` — the new site is meaningfully better resourced here.
- Live site does NOT mention the `Bespoke occasion wear` / `Uniforms` / `Branded wear` lane split — that's new structural work in the new site.