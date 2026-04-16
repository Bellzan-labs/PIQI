# piqigroup.com source-content corpus

## What this folder is

Raw content dump from the five live piqigroup.com vertical pages (consulting, property-management, auto, downtown-fashion, yacht-chartering), captured on 2026-04-15 via WebFetch. Each file holds every paragraph, list, FAQ, CTA, and quote we want preserved across the migration, tagged as `[NEW]` / `[MIGRATED]` / `[PARTIAL]` so we can see at a glance what's already in the new site and what's still waiting.

Important quirk documented in `consulting.md`: the live URL `/consulting/` does not host consulting content — it hosts the Coaching page. The real consulting copy lives on the homepage under the "Piqi Consulting" section, and both have been captured.

## How to use it

When enriching a page on the new site, open the matching source-content file, pull any `[NEW]` or `[PARTIAL]` items that fit the section you're building, and apply them with light editing for tone. Do not fabricate — only use what's in these files or already in the site. The tagging is the point: if something is already `[MIGRATED]` you don't need to re-migrate it; `[PARTIAL]` means the new site has some of it and the live page has more; `[NEW]` means it's untouched.

Cross-check before you migrate: the four data files in `lib/data/` (`verticals.ts`, `consulting-services.ts`, `faqs.ts`) and the page bodies in `app/consulting/page.tsx` and `app/about/page.tsx` are where the new site's content actually lives. Edit there, not here.

## High-value [NEW] items worth migrating next

1. **Yacht photography (5 real JPGs)** — `/wp-content/uploads/2023/05/YATCH-DECK*.jpg` etc. The live site has actual photos of the actual boat — interior, deck, on the water. The new site is on stock Unsplash. If the WP JPGs can be pulled, swap them in. Single highest-value migration.
2. **Homepage consulting paragraph** (consulting.md): "At the end of the day, it is an accepted fact that profitability is all about your business model and the overall efficiency of your setup…" — this is MIGRATED in paraphrase, but the "fortunate to have worked with numerous organisations helping them fine-tune their business" voice is a warmer register we've flattened. Consider a light restoration.
3. **Property: "minimize downtime and maximize the longevity of your assets"** — not in new site body copy; could land as a short insurance-framed pull-quote on `/property-management` if we add one.
4. **Fashion H2 "Banish the mundane and embrace the extraordinary"** — theatrical but memorable. If the fashion page needs one more beat, this is the line.
5. **Yacht H2 "A voyage that will exceed your expectations."** — same pattern. Candidate eyebrow for the yacht hero or a mid-page section.
6. **Auto tyre-selection framing** ("optimal traction, durability, and fuel efficiency") — not migrated; could go on a tyre offering card if we ever split tyres into its own page.
7. **Fashion closing sentence** "Dive into the realm of fashion forward luxury clothing that allows you to not only wear attire but voice your own unique style." — not migrated, fine as-is; only useful if we want a footer-level fashion CTA.

## Dead / unused items

- **"Payoff line"** — the literal string "Payoff line" appears on the homepage hero as an unfilled subtitle placeholder. Do not migrate — this is CMS debt, not copy.
- **"HOVER FOR MORE INFO"** — UI instruction string on several pages. Ignore.
- **Property FAQ Q3** — "What industries and domains does Piqi Consulting have expertise in?" has the wrong answer pasted in (it's the letting answer). Broken — do not migrate.
- **Fashion FAQ intro** — "Amidst the vibrant city life, let your style do the talking. personalized Our bespoke clothing is not just attire, it's a lifestyle choice." Contains a stray word "personalized" and a stitched-together voice. Do not migrate as-is.
- **"Suites" typo** — "Groom and Best man's suites" on the fashion page. Typo for "suits". Already corrected in new site.
- **"men and woman" typo** — same fashion page. Already corrected.
- **`/consulting/` URL hosting coaching content** — structural defect we resolve via the new site's clean `/consulting` vs `/coaching` split and a 301 redirect at launch.
- **"Close Trigger" / popup overlay** — UI element; not a content item.
- **Generic CTA closers** — "Experience exceptional automotive service that exceeds your expectations", "Indulge in an experience of luxury fashion made just for you", "create unforgettable memories with your loved ones". All too generic; new site voice rejects these.
- **"state-of-the-art equipment" / "advanced techniques"** (auto page) — claim copy with no substance. Deliberately dropped.