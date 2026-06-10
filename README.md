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
index.html          homepage — all content and page structure
client-story.html   standalone case study page (Woody Cat Rescue)
privacy.html        privacy policy page
css/styles.css      all styles (mobile-first)
js/main.js          scroll reveal + mobile nav
sitemap.xml         covers index, client-story, and privacy pages
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

1. **Hero** — editorial split layout: h1 headline (left) + eyebrow/CTA (right) at ≥720px; 4-step process strip below (Submit → Preview → Approve → Published)
2. **Problem** — dark section (#111111 bg); intro paragraph + 4 consequence rows (Updates / Supporters / Volunteers / Community) + FideSpark resolution paragraph
3. **How We Work** — editorial split: h2 + intro (left), 4 numbered steps (Listen / Set Up / Publish / Support) (right)
4. **Client Story** — compact 2-column teaser: content + CTA (left), large typographic pull quote (right); links to `client-story.html`
5. **Pricing** — Essential ($199/mo) + Insights ($299/mo) cards; optional services grid below
6. **FAQ** — native accordion (`name="faq"`), 7 questions, all collapsed by default
7. **Footer** — CTA heading + brand description col + links col

## Design

- **Fonts:** Geist (headings, 900/700) + DM Sans (body, 400/500/600) via Google Fonts
- **Palette:** `#F8F5EF` cream bg · `#111111` text · `#595959` muted · `#C0BAB1` border — no accent color
- **Problem section:** inverts to `#111111` bg with `#F8F5EF` text (`.problem-dark`)
- **Chapter system:** every content section is `<section class="chapter reveal" id="...">` with a `.chapter-label`
- **Nav:** sticky 60px, hamburger on mobile, inline row at ≥768px
- **Scroll reveal:** `.reveal` elements fade + translate in via IntersectionObserver (`js/main.js`)

## client-story.html

Standalone case study page for Woody Cat Rescue:
- Hero split: label + client name + h1 + 3 result rows (left), 16:10 image placeholder (right)
- Three-column blocks: Challenge / What Improved / Outcome
- Numbered improvements list (01 / 02 / 03)
- Wide image placeholder
- Prominent pull quote block
- All nav/footer links use relative paths

## Pending

- Image placeholders on `client-story.html` need real photos before launch
- `og:image` + `twitter:image` meta tags on both pages (need 1200×630px asset; `twitter:card` is currently `summary`, switch to `summary_large_image` once image is ready)
