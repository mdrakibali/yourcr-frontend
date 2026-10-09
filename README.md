# Your CR — Landing Page

A responsive Bangla-first landing page starter built with Next.js App Router, TypeScript, Tailwind CSS v4, and Lucide icons. The design uses CSS illustrations and a custom phone dashboard mockup instead of large images.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Included

- `app/page.tsx` — landing page sections, mobile nav, interactive FAQ, theme toggle, language selection UI, CSS phone preview
- `app/globals.css` — design tokens, responsive styles, dark mode, reduced-motion and focus states
- `app/layout.tsx` — Bangla document language, font setup, SEO and OpenGraph metadata

## Before production

- Replace placeholder anchors (`#signup`, `#join`, `#login`) with real routes or auth flows.
- Confirm pricing, privacy/security wording, support email, and data-retention behavior before publishing.
- Configure a real Open Graph image and canonical URL in metadata.
- For production-grade language switching, localize all page copy instead of only changing the selected language state.

The landing page is intentionally frontend-only; it does not create accounts or join groups until connected to your backend.
