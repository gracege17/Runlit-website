# FideSpark — Marketing Website

Intro site for FideSpark (by Grace Ge, San Francisco). Helps small nonprofits learn about the Website Operations System and book a discovery call.

## What the site covers

FideSpark provides two services for small nonprofits:

1. **Website Operations System** — configures a submit → preview → approve → publish workflow for routine outreach content (events, donation updates, volunteer opportunities, announcements, program updates, impact stories)
2. **Website Design / Redesign** — separate scoped project, not included in operations setup or monthly support

## Stack

Plain HTML / CSS / JS — no build tools, no dependencies.

```
index.html        all content and page structure
css/styles.css    all styles (mobile-first)
js/main.js        scroll reveal + mobile nav
```

## Preview locally

Open `index.html` in any browser. No server needed.

## Deploy

Connected to Netlify/Vercel — auto-deploys on every push to `main`.

## Update content

All copy lives in `index.html`. Search for the section you want to change and edit directly.

To swap the Calendly link, find and replace `https://calendly.com/grace-ge/30min` across `index.html`.

## Pricing (current)

| | Starter Setup | Expanded Setup |
|---|---|---|
| One-time setup | $800 | $1,200 |
| Pages in scope | Up to 5 | Up to 10 |
| Publishing types | 2 | Up to 3 |

| | Essential Support | Insights Support |
|---|---|---|
| Monthly | $199/mo | $299/mo |
| Publishing types | Up to 2 | Up to 3 |

Website Design / Redesign and Analytics & Tracking Setup are quoted separately.

## Sections (in order)

1. Hero — two-column: headline + workflow visual (submit → preview → approve → published)
2. Problem — four labeled cards (Events, Donations, Volunteers, Updates)
3. Publishing Demo — selectable type list + preview card workflow
4. How It Works — publish-flow bar + three setup steps
5. Comparison — without a system vs. with Website Operations System
6. Monthly Support Value — monthly review card + what support includes
7. Services — featured Website Operations System card + four optional-service cards
8. Pricing — two groups: A. Initial Setup / B. Required Monthly Support (card layout)
9. FAQ — accordion, first item default-open
10. Final CTA

## Pending

- `og:image` / `twitter:image` meta tags — need a 1200×630px asset; `twitter:card` is currently `summary`, switch to `summary_large_image` once image is ready
