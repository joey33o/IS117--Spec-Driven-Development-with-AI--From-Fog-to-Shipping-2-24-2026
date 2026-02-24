# Sprint 004 — Case Study Page ([slug].astro)
**Status:** completed

## Goal
Build the dynamic case study page with a readable 800px content width, a primary CTA button linking to the git repo, correct H2 top margin, and 12px border-radius on images.

## Tasks
1. Create `src/pages/projects/[slug].astro` with `getStaticPaths` returning all project slugs
2. Render the project's `title` as H1 and the markdown body content below it
3. Cap the content container at `max-width: 800px` with `margin: 0 auto`
4. Render a styled CTA button/link using `gitLink` — must look like a primary button (border, padding, no underline on the button itself)
5. Add a scoped `<style>` block: `h2 { margin-top: 80px }` and `img { border-radius: 12px }`
6. Update the home page cards to link to the correct case study URL (if not done in Sprint 003)

## Files
- `src/pages/projects/[slug].astro`
- `src/pages/index.astro` (add card links if missing)

## Acceptance Criteria
- [x] Visiting `/projects/project-one` renders the correct project without a 404
- [x] Content wrapper has `max-width: 800px` and is centered
- [x] A visible CTA button/link points to the `gitLink` URL
- [x] All `<h2>` elements on the page have `margin-top: 80px` (exactly `var(--space-10)`)
- [x] All `<img>` elements inside the content have `border-radius: 12px`
- [x] `npm run build` exits 0 and generates a static page for each of the 3 projects

## Verification Steps
1. `npm run build` — confirm 3 HTML files under `dist/projects/`.
2. `npm run preview` — navigate to `/projects/project-one`, inspect `.content-wrapper` → `max-width: 800px`.
3. Inspect the CTA button — confirm `href` equals the `gitLink` value from frontmatter.
4. Inspect any `<h2>` in content — `margin-top` computed value must be `80px`.
5. Inspect any `<img>` in content — `border-radius` must be `12px`.

## What NOT to Do (Scope Creep)
- Do NOT add comments, related posts, or share buttons
- Do NOT add a navigation bar or breadcrumb (not in spec)
- Do NOT add JavaScript for any interactive behavior
- Do NOT modify global typography — use scoped styles only for page-specific overrides
