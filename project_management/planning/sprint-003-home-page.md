# Sprint 003 — Home Page (index.astro)
**Status:** planning

## Goal
Build the home page: an H1 hero with a value proposition, a responsive 2-column project grid, and a receipt badge on each card.

## Tasks
1. Replace the placeholder `index.astro` with the real home page
2. Fetch all projects via `getCollection('projects')` and assert the count is 3
3. Render H1 and a one-sentence value proposition paragraph
4. Render a CSS Grid container: 1 column on mobile, 2 columns on desktop (use a CSS class, not inline styles)
5. For each project, render a card with: title, tagline, cover image, and a receipt badge (bold, charcoal `#1A1A1A` text on white `#FFFFFF` background)
6. Add card-level CSS (border, border-radius, padding) inside a `<style>` block in the component

## Files
- `src/pages/index.astro`
- `src/styles/global.css` (grid utility if needed — minimal additions only)

## Acceptance Criteria
- [ ] Page has exactly one `<h1>` with visible text
- [ ] A one-sentence paragraph below the H1 acts as value proposition
- [ ] `getCollection('projects')` is called and exactly 3 cards are rendered
- [ ] CSS Grid switches from 1 column (`< 768px`) to 2 columns (`≥ 768px`) via a media query
- [ ] Each card displays a distinct receipt badge: bold text, `background: #FFFFFF`, `color: #1A1A1A`
- [ ] `npm run build` exits 0; `npm run preview` shows the grid

## Verification Steps
1. `npm run dev` — count cards on screen (must be 3).
2. Resize browser below 768px — grid collapses to 1 column.
3. Resize above 768px — grid shows 2 columns.
4. Inspect a receipt badge — confirm `font-weight: bold`, `background-color: #fff`, `color: #1a1a1a`.
5. Confirm exactly one `<h1>` via DevTools (`document.querySelectorAll('h1').length === 1`).

## What NOT to Do (Scope Creep)
- Do NOT add filtering, sorting, or pagination
- Do NOT link cards to the case study page yet (or add a stub `href` only — no routing logic)
- Do NOT add hover animations beyond `opacity: 0.7`
- Do NOT style the case study page here
