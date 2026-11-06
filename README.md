# Stripchat India Agency — Website

Simple, mobile-first 3-page website for a verified Stripchat creator agency in India.

## Pages

- `/` — Home: what the work is, requirements, earnings, privacy, videos, FAQ, WhatsApp CTA
- `/apply` — 2-field application form (name, city, 18+ confirm) that opens WhatsApp with a pre-filled message
- `/help` — Help / safety / agency switch / FAQ

Old routes (`/about`, `/services`, `/why-join`, `/requirements`, `/faq`, `/contact`, `/privacy`, `/terms`) redirect to the relevant new pages via `next.config.mjs`.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS v4
- TypeScript
- Lucide icons

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Notes

- 18+ only. Income figures shown on the site are indicative, not guaranteed.
- Contact: +91 87009 55207 · info@stripchatagency.in
