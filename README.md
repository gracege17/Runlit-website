# FideSpark — Marketing Website

Intro site for FideSpark (by Grace Ge, San Francisco). Helps small nonprofits learn about the Website Operations System and book a discovery call.

## What the site covers

FideSpark provides two core services for small nonprofits:

1. **Website Operations System** — configures a submit → preview → approve → publish workflow for routine outreach content (events, donation needs, volunteer opportunities, announcements, program updates, impact stories). Requires an active monthly support plan.
2. **Website Design / Redesign** — separate scoped project, not included in operations setup or monthly support.

Additional services: Analytics & Tracking Setup, System Expansion (additional publishing types, new pages, features, or integrations).

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

Auto-deploys on every push to `main`.

## Update content

All copy lives in `index.html`. Search for the section heading you want to change and edit directly.

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

1. Hero — two-column desktop: headline + workflow visual (Community Food Drive example)
2. Problem — four labeled cards (Events, Donations, Volunteers, Updates)
3. Publishing Demo — publishing type list + submit/preview card workflow + note panel
4. How It Works — publish-flow bar + three setup steps
5. Comparison — without a system vs. with Website Operations System
6. Monthly Support — monthly review card (grouped by Content status / Participation pathways / Recommended next step) + what support includes
7. Services — featured Website Operations System card + three optional-service cards (3-column desktop grid)
8. Pricing — Step 1: Initial Setup / Step 2: Required Monthly Support (card layout)
9. FAQ — native accordion (`name="faq"`), "Why is monthly support required?" default-open
10. Final CTA — "Not sure what your website needs next?"

## Pending

- `og:image` / `twitter:image` meta tags — need a 1200×630px asset; `twitter:card` is currently `summary`, switch to `summary_large_image` once image is ready
