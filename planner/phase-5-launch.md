# Phase 5: Polish & Launch (PIQI Group — DNS cutover from WordPress)

> Final QA, analytics, legal, accessibility, performance. DNS migration FROM the existing WordPress site (hosted via Crowberry Media) TO Vercel.
> After this phase: piqigroup.com is live on the new Next.js site.

**Depends on:** Phases 1-4 complete; domain access; Resend account

---

## 1. Site Search

**Deferred for v1.** 16 pages doesn't justify a search index. Re-evaluate post-launch if blog ships.

---

## 2. Analytics (GA4)

- [ ] Set up GA4 property for `piqigroup.com` (TBD — need account)
- [ ] Add GA4 tracking via consent-gated injection (loaded only after consent granted)
- [ ] `NEXT_PUBLIC_GA4_ID` env var
- [ ] Conversion events:
  - `generate_lead` — fires on contact form submit success
  - `cta_click` — fires on primary CTA buttons (with destination + vertical label)
- [ ] Verify enhanced measurement (scroll, outbound clicks)
- [ ] Test: submit contact form → `generate_lead` event in GA4 real-time

---

## 3. Cookie Consent

- [ ] Choose cookie consent platform (e.g., CookieYes, Cookiebot — TBD)
- [ ] `NEXT_PUBLIC_COOKIE_CONSENT_ID` env var
- [ ] Categories: Analytics (GA4), Functional (map embed if used)
- [ ] Verify GA4 only fires after consent
- [ ] Banner respects `prefers-reduced-motion`
- [ ] Banner language: en-ZA / en

---

## 3.5 Third-Party Script Loading Strategy

- **Cookie consent platform:** `async`, after critical CSS in `<head>`. Consent gate must load early but not block render.
- **GA4 (gtag.js):** NEVER static in `<head>`. Inject only after consent accept callback.
- **Map iframe:** `loading="lazy"` (if used).

### Performance regression guard
- [ ] `@lhci/cli` in CI (Phase 1A workflow). Fail PR if Performance < 90.

---

## 4. Legal Pages

### Privacy (`/privacy`)
- [ ] Build `app/privacy/page.tsx`
- [ ] Cover: data collection, cookies, third-party (GA4, Resend, consent platform), contact info, user rights, POPIA awareness (South Africa)
- [ ] Linked from footer
- [ ] BreadcrumbList: Home > Privacy

### Terms (`/terms`)
- [ ] Build `app/terms/page.tsx`
- [ ] Cover: site terms, IP, governing law (RSA)
- [ ] Linked from footer
- [ ] BreadcrumbList: Home > Terms

### Cookie Policy
- [ ] Use the consent platform's hosted policy if available; otherwise inline within Privacy

---

## 5. Custom 404

- [ ] Build `app/not-found.tsx`
- [ ] Friendly message
- [ ] Links back to all six vertical hubs + About + Contact
- [ ] CTA → `/contact`
- [ ] No JSON-LD
- [ ] Metadata `robots: { index: false, follow: false }`
- [ ] Fire GA4 `event: 'page_not_found'` on load (broken-link monitoring)

---

## 6. OG Images

- [ ] Default group OG (1200x630 JPEG) at `public/images/og/default.jpg`
- [ ] Per-vertical OG images using each vertical's own imagery (do NOT use a blended group OG for vertical hubs)
- [ ] Test sharing on LinkedIn / WhatsApp / Twitter
- [ ] `og:type`: `website` for hubs, `article` for any future blog post
- [ ] Twitter card: `summary_large_image`

> OG images MUST be JPEG or PNG — never WebP/AVIF.

---

## 7. Print Styles

- [ ] `@media print` in globals.css:
  - Hide: header, footer, mobile nav, CTABanner, brand motifs, cookie banner
  - Show: main content, black on white
  - Consulting service pages should print cleanly (B2B prospects may print)

---

## 8. Security Headers & vercel.json

Create `vercel.json` at root:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" },
        { "key": "Content-Security-Policy", "value": "default-src 'self'; script-src 'self' https://*.googletagmanager.com https://*.google-analytics.com https://*.cookieyes.com; style-src 'self' 'unsafe-inline'; font-src 'self'; frame-src https://*.google.com; img-src 'self' data: https://*.google-analytics.com https://*.googletagmanager.com; connect-src 'self' https://*.google-analytics.com https://*.googletagmanager.com https://*.cookieyes.com" }
      ]
    }
  ]
}
```

> Update CSP origins to match the actual analytics + consent providers chosen. HSTS preload only after HTTPS confirmed working.

- [ ] Add 301 redirects from old WordPress URLs once mapped (T-7 prep)

---

## 9. SEO Validation

### JSON-LD (CI does the heavy lifting; this is spot-check)
- [ ] Organization + WebSite — every page (root layout)
- [ ] LocalBusiness — `/contact`
- [ ] Service — 5 consulting spokes
- [ ] AboutPage — `/about`
- [ ] ContactPage — `/contact`
- [ ] CollectionPage — `/consulting`
- [ ] BreadcrumbList — every page with breadcrumbs
- [ ] FAQPage — `/faqs` if built
- [ ] WebPage — homepage + each vertical hub

### On-Page SEO
- [ ] Title < 60 chars per page
- [ ] Meta description < 160 chars per page
- [ ] Canonical URL correct (no trailing slash)
- [ ] Exactly one H1, logical hierarchy
- [ ] OG image present (custom or default)
- [ ] No duplicate titles/descriptions across pages

### Sitemap
- [ ] Generate `sitemap.xml` via Next.js metadata API (`app/sitemap.ts`)
- [ ] All 16 pages included
- [ ] No draft pages
- [ ] Excludes 404

### 16-Page Test Matrix (manual pass per page)
| # | Path | Render | JSON-LD | A11y | Perf | Forms | Mobile |
|---|------|--------|---------|------|------|-------|--------|
| 1 | `/` | | | | | n/a | |
| 2 | `/about` | | | | | n/a | |
| 3 | `/contact` | | | | | YES | |
| 4 | `/consulting` | | | | | n/a | |
| 5 | `/consulting/business-process` | | | | | n/a | |
| 6 | `/consulting/strategy` | | | | | n/a | |
| 7 | `/consulting/project-management` | | | | | n/a | |
| 8 | `/consulting/supply-chain` | | | | | n/a | |
| 9 | `/consulting/commercial-services` | | | | | n/a | |
| 10 | `/property` | | | | | n/a | |
| 11 | `/fashion` | | | | | n/a | |
| 12 | `/yachts` | | | | | n/a | |
| 13 | `/auto` | | | | | n/a | |
| 14 | `/coaching` | | | | | n/a | |
| 15 | `/privacy` | | | | | n/a | |
| 16 | `/terms` | | | | | n/a | |
| (404) | `/_404` | | n/a | | | n/a | |

---

## 10. Performance Optimization

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| FCP | < 1.5s |
| CLS | < 0.1 |
| TBT | < 200ms |
| Page weight | < 500KB (excl. images) |
| Lighthouse Performance | 95+ |

- [ ] All raster images via `next/image`
- [ ] Montserrat + Hind via `font-display: swap`, no FOIT
- [ ] Zero CLS from font loading
- [ ] Minimize client components (`"use client"`) — keep MobileNav + ContactForm + ThemeToggle. Audit homepage `LottiePanel` and any other client islands for necessity.
- [ ] Hero video: ensure poster image, `playsInline`, `muted`, `autoPlay` (already in place); evaluate replacing with optimized still on mobile
- [ ] Lighthouse on: `/`, `/consulting/strategy`, `/contact`, one vertical hub
- [ ] Fix any score below 95

---

## 11. Accessibility Audit

### Global
- [ ] Skip-to-content link
- [ ] `:focus-visible` ring
- [ ] Contrast 4.5:1 normal / 3:1 large (verify against the dark theme palette)
- [ ] `prefers-reduced-motion` respected (Lottie + reveal animations)
- [ ] Semantic HTML
- [ ] Meaningful `alt` text; decorative `alt=""`

### Interactive
- [ ] **MobileNav**: `inert` on `<main>` when open, Escape to close, `aria-hidden` on background
- [ ] **ContactForm**: `aria-describedby` errors, `aria-live="polite"` feedback, focus rings
- [ ] **FAQ accordion** (if shipped): `aria-expanded`, `aria-controls`, `role="region"`

### Testing
- [ ] Keyboard-only pass on Home, /consulting/strategy, /yachts, /contact
- [ ] Screen reader pass (NVDA or VoiceOver) on the same pages
- [ ] axe-core via Lighthouse on 5+ pages

---

## 11.5 Uptime Monitoring (Pre-Launch)

- [ ] UptimeRobot (5-min interval)
- [ ] Monitors: homepage (200), `/api/contact` (405 GET — confirms exists), `/sitemap.xml` (200)
- [ ] Email alerts to team
- [ ] Verify alerting by pausing one monitor

---

## 12. Pre-Launch Final Checks

- [ ] `npm run check` passes
- [ ] `npm run lint` passes
- [ ] `next build` succeeds with zero errors and warnings
- [ ] `next start` serves all pages correctly
- [ ] No console errors
- [ ] `/api/contact` returns 500 cleanly on Resend failure (test invalid key)
- [ ] Vercel function timeout configured (default 10s OK for Resend)
- [ ] Contact form end-to-end in production build
- [ ] Cookie banner controls GA4
- [ ] `robots.txt` correct
- [ ] Favicon + manifest present
- [ ] Print styles work

---

## 13. Email & Resend Domain Verification

> **Critical:** before go-live. Without verification, contact emails land in spam.

### Pre-requisites to confirm
- [ ] info@piqi.co.za inbound mailbox — current provider TBD (blocker — investigate via Crowberry Media)
- [ ] Decide: keep existing MX (most likely) vs migrate
- [ ] Define addresses:
  - `from`: `noreply@piqi.co.za` (or `noreply@piqigroup.com` if domain consolidates)
  - `to`: `info@piqi.co.za`
  - `reply-to`: form submitter's email

### Resend Verification
- [ ] Add `piqi.co.za` to Resend (and/or `piqigroup.com` if site uses a different sending domain)
- [ ] Add DNS records:
  - SPF (TXT)
  - DKIM (TXT or CNAME)
  - DMARC: start `v=DMARC1; p=none; rua=mailto:dmarc@piqi.co.za`. Escalate to `p=quarantine` after 2-4 weeks of clean reports.
- [ ] Verify "Verified" status in Resend dashboard
- [ ] Test send (check inbox + spam)

### Existing email preservation
- [ ] **Do NOT modify or remove existing MX records** — breaks inbound to info@piqi.co.za
- [ ] **Do NOT replace existing SPF** — merge Resend's `include:` into the existing SPF TXT
- [ ] After DNS change, send test TO info@piqi.co.za to confirm inbound still works

---

## 14. Production Deployment

### Build-phase setup (Stephen's Vercel)

- [ ] Connect this repo to Stephen's Vercel
- [ ] Settings:
  - Framework: Next.js (auto-detected)
  - Build: `next build`
  - Output: `.next` (auto)
  - Node 22
  - Region: closest to South Africa (Frankfurt `fra1` or London `lhr1`)
- [ ] Branch mapping: `main` → Production, others → Preview
- [ ] Env vars (Production + Preview): `RESEND_API_KEY`, `NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_COOKIE_CONSENT_ID`
- [ ] Enable Vercel Speed Insights

### Transfer (when client ready)

- [ ] Transfer repo to PIQI's GitHub org (TBD)
- [ ] Transfer Vercel project to PIQI's Vercel team (TBD)

### Initial deploy + verify on preview URL

- [ ] All 16 pages render
- [ ] Contact form sends email (Resend logs)
- [ ] GA4 fires (real-time)
- [ ] Cookie banner controls GA4
- [ ] JSON-LD validates
- [ ] Lighthouse 95+

---

## 15. DNS Migration & Go-Live (FROM WordPress TO Vercel)

> Current state: piqigroup.com hosted on WordPress via Crowberry Media. Cutover to Vercel.

### T-7: Preparation
- [ ] Crawl existing WordPress site → URL inventory
- [ ] Map old URL → new URL → 301 redirects in `vercel.json`
- [ ] Identify the DNS provider (TBD — likely controlled via Crowberry Media; investigate and log)
- [ ] Export ALL existing DNS records (MX, A, AAAA, CNAME, TXT) as backup screenshot
- [ ] Stand up the WordPress site at a staging subdomain (e.g., `wp.piqigroup.com` or `legacy.piqigroup.com`) that will remain reachable for 7 days post-cutover (rollback safety net)
- [ ] Resend domain verified (Section 13)
- [ ] All env vars set in Vercel production
- [ ] Content freeze — no new pages after this point

### T-3: Full QA on preview URL
- [ ] Lighthouse 95+ on 5 representative pages
- [ ] Contact form end-to-end (delivery confirmed, not in spam)
- [ ] Link checker passes
- [ ] All JSON-LD validates
- [ ] Responsive at 375 / 768 / 1280
- [ ] Print styles

### T-1: DNS prep
- [ ] Lower TTL to 300s on A and CNAME (must happen 24h+ before cutover)
- [ ] Confirm canonical: `piqigroup.com` apex; `www.piqigroup.com` redirects to apex
- [ ] Prepare changes (do not apply):
  - A `@` → `76.76.21.21` (Vercel)
  - CNAME `www` → `cname.vercel-dns.com`
  - **Keep all MX records unchanged** (preserve info@piqi.co.za inbound — note: piqi.co.za is a separate domain from piqigroup.com; piqigroup.com MX may or may not exist — confirm in T-7 backup)
  - **Keep TXT records unchanged** (SPF, DKIM, DMARC for any email on piqigroup.com)
  - Add Resend SPF/DKIM if not already done

### T-0: Launch Day
1. Deploy production build on Vercel (promote preview → prod, or merge to `main`)
2. Apply DNS A/CNAME at registrar
3. Vercel → Domains → add `piqigroup.com` + `www.piqigroup.com` → set `www` → apex redirect
4. Wait for SSL auto-provision (Let's Encrypt, usually < 5 min)
5. Verify:
   - `https://piqigroup.com` renders the new site
   - `www.piqigroup.com` → `piqigroup.com`
   - `http://piqigroup.com` → `https://piqigroup.com`
6. Test contact form on production (check Resend logs)
7. Test GA4 (real-time)
8. Submit `sitemap.xml` to Google Search Console
9. Lighthouse on production — 95+

### T+1: Post-Launch Verification
- [ ] DNS propagation via dnschecker.org
- [ ] Resend logs — bounces / failures
- [ ] Vercel logs — 404s, 5xx
- [ ] info@piqi.co.za inbound still works (send test)
- [ ] Search Console — crawl errors

### T+7: Stabilization
- [ ] TTL back to 3600s
- [ ] First Search Console coverage report — fix "Discovered — currently not indexed" issues
- [ ] Decommission staging-WordPress subdomain if all clean (or extend monitoring window if not)
- [ ] Update Google Business Profile (if exists) with new site URL

---

## 16. Rollback Plan

### Website issues (broken build, JS errors)
- [ ] Vercel → Deployments → promote previous deployment (instant, no DNS change)

### DNS issues (site unreachable, SSL errors)
- [ ] Revert A/CNAME at registrar to previous values (documented in T-7)
- [ ] At 300s TTL, takes effect within 5 min
- [ ] Staging-WordPress subdomain remains reachable as a backup public face for 7 days

### Email issues (info@piqi.co.za stops working)
- [ ] Restore MX records from T-7 backup
- [ ] If SPF broken: confirm SPF includes both legacy `include:` and Resend `include:` in a single TXT
- [ ] Test by sending to info@piqi.co.za

### Total revert
- [ ] Point apex `@` back at WordPress's IP and CNAME `www` back at WordPress's host
- [ ] Re-publish from Crowberry Media if needed

---

## Phase 5 Checklist (Done When...)

- [ ] piqigroup.com live on Vercel with valid SSL
- [ ] `www` redirects to apex
- [ ] Lighthouse 95+ on production
- [ ] All JSON-LD validates via Google Rich Results Test
- [ ] Sitemap submitted to Search Console
- [ ] GA4 receiving data after consent
- [ ] Cookie consent live + controls GA4
- [ ] Contact form sends + delivers (not spam)
- [ ] Zero broken links
- [ ] WCAG 2.1 AA passes
- [ ] No console errors
- [ ] Print styles work
- [ ] info@piqi.co.za inbound preserved
- [ ] Uptime monitoring active
- [ ] Rollback procedure documented + tested
- [ ] DNS TTL restored to 3600s
- [ ] Legacy WordPress reachable at staging subdomain for 7 days
