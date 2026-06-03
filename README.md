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
privacy.html      privacy policy page
css/styles.css    all styles (mobile-first)
js/main.js        scroll reveal + mobile nav
sitemap.xml       covers index + privacy pages
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

1. Hero — two-column desktop: headline + workflow visual (Community Food Drive example); subhead frames FideSpark as setup-and-support service
2. Problem — four labeled cards (Events, Donations, Volunteers, Updates)
3. How Updates Happen — four-step arrow list explaining who does what: team submits, FideSpark prepares preview, team approves, update publishes
4. How It Works — three setup steps: Identify recurring updates, Configure your system, Prepare your team
5. What Changes — two-column before/after (Manual website updates: 6 numbered steps vs. FideSpark workflow: 4 outcome bullets); dark right column
6. Monthly Support — monthly review card (Content status / Participation pathways / Recommended next step) + what support includes; positioned before proof to answer "what does ongoing look like?"
7. Case Study — Woody Cat Rescue: challenge, what FideSpark improved (3-point list), founder quote in dark card; framed around operational improvement, not growth metrics
8. Pricing — Step 1: Initial Setup / Step 2: Required Monthly Support (card layout); optional services (Design/Redesign, Analytics, System Expansion) shown below notes panel
9. FAQ — native accordion (`name="faq"`), 11 questions, all collapsed by default
10. Final CTA — "Not sure what your website needs next?"

## Design

- **Fonts:** Geist (headings, 400/700/900) + DM Sans (body, 400/500/600) via Google Fonts
- **Palette:** `#F8F5EF` cream bg · `#111111` text · `#C8371A` accent (buttons/borders) · `#595959` muted
- **Hero mobile:** workflow visual renders above copy on small screens; side-by-side at 900px+
- **Nav mobile:** hamburger dropdown with per-item dividers and shadow; inline row at 768px+
- **Internal links:** all use `/runlit/` absolute paths to work correctly under the subpath deployment

## Pending

- `og:image` / `twitter:image` meta tags — need a 1200×630px asset; `twitter:card` is currently `summary`, switch to `summary_large_image` once image is ready
