# FideSpark Design Direction

## Goal

Make the site feel like a refined editorial studio case study, not a generic SaaS landing page.

The visitor should understand in 30 seconds:

FideSpark sets up and supports a simple submit → preview → approve workflow so small nonprofits can keep website updates current without editing the backend.

## Inspiration

Reference: https://kanso.framer.media/

Borrow:
- numbered chapter sections
- editorial pacing
- generous whitespace
- strong typography
- thin dividers
- restrained colors
- calm, premium rhythm
- one idea per section

Do not copy:
- exact layout
- copy
- images
- brand identity

## Page Story

1. Hero — clear promise
2. Problem — updates get stuck
3. Workflow — submit → preview → approve → publish
4. Setup — identify → configure → prepare
5. Monthly Support — keep workflow running and review what needs attention
6. Client Story — Woody Cat Rescue proof
7. Pricing — setup + required monthly support
8. FAQ — objections
9. Footer CTA — book a call

## Design Rules

- One visual idea per section.
- Prefer editorial rows over card grids.
- Use cards only when they clarify a concrete object.
- Use thin dividers and whitespace instead of heavy boxes.
- Keep colors restrained.
- Do not add gradients, decorative blobs, or busy dashboards.
- Mobile must never horizontally scroll.
- Mobile story order should be text first, supporting visual second.
- Do not introduce new classes without matching CSS.
- Do not restructure multiple sections in one phase.

## Workflow Rules for Claude

Before editing:
- list exact files
- list exact sections/classes
- wait for approval

When editing:
- one issue per pass
- CSS-only unless HTML is explicitly approved
- run git diff --stat after every change
- stop after the requested task

Locked files/areas unless explicitly approved:
- privacy.html
- vercel.json
- sitemap.xml
- robots.txt
- JSON-LD
- pricing
- FAQ
