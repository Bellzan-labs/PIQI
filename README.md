# PIQI One-Page Rebuild

Brand-faithful one-page Next.js site for PIQI Group, rebuilt from the live WordPress site into a cleaner, faster, more modern experience.

## What’s Included

- App Router Next.js setup with TypeScript
- Sticky one-page navigation
- Hero section with the PIQI logo, video background, and motion panel
- Light/dark theme toggle with theme-aware image treatment
- Service, approach, commercial, brand, and contact sections
- Animated motion gallery using the bundled PIQI Lottie assets
- Local `public/brand` assets pulled from the live PIQI site
- Accessible contact form that opens the user’s email client

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- `lottie-react`

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

Run lint checks:

```bash
npm run lint
```

## Brand Assets

The rebuilt site uses local assets in `public/brand/`, including:

- `logo/` for the PIQI logo
- `video/` for the hero office video
- `animations/` for Lottie files
- `icons/` and `brands/` for the service and brand visuals

## Notes

- The site is intentionally a single scrolling page.
- The contact form is backend-free and opens a prefilled email draft.
- The design keeps the PIQI color direction while tightening the layout, spacing, and content hierarchy.
