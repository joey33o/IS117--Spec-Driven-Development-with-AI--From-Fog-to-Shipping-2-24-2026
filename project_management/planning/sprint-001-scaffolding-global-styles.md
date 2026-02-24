# Sprint 001 — Project Scaffolding & Global Styles
**Status:** active

## Goal
Bootstrap the Astro 4.x project and implement `global.css` exactly per spec so every future sprint can build on a correct foundation.

## Tasks
1. Initialize Astro 4.x project (`npm create astro@latest`), accept defaults, set SSG output
2. Install Inter font (via `@fontsource/inter` or Google Fonts `<link>`)
3. Create `src/styles/global.css` with all CSS custom properties, body rule, typography hierarchy, and link styles exactly matching spec
4. Create `src/layouts/BaseLayout.astro` that imports `global.css` and renders `<slot />`
5. Add a minimal `src/pages/index.astro` placeholder that uses `BaseLayout` so the dev server can confirm styles load

## Files
- `package.json`
- `astro.config.mjs` (stub — no site/base yet)
- `tsconfig.json`
- `src/styles/global.css`
- `src/layouts/BaseLayout.astro`
- `src/pages/index.astro` (placeholder only)

## Acceptance Criteria
- [ ] `global.css` defines `--color-bg`, `--color-text`, `--color-border`, `--space-1/2/4/10`, `--radius`
- [ ] `body` has `background-color: var(--color-bg)`, `font-family: 'Inter', sans-serif`, `padding: var(--space-10) 5%`, `margin: 0`
- [ ] `h1` renders at `4rem`, weight `800`, `letter-spacing: -0.03em`, `margin-bottom: var(--space-4)`
- [ ] `h2` renders at `2.25rem`, weight `700`, `margin-top: var(--space-10)`, `margin-bottom: var(--space-4)`
- [ ] `p` renders at `1.125rem`, `margin-bottom: var(--space-2)`
- [ ] `a` has `color: inherit`, `text-decoration: underline`, `text-underline-offset: 4px`; hover is `opacity: 0.7`
- [ ] `astro dev` starts without errors and the placeholder page renders on `#F9F9F9` background with Inter loaded

## Verification Steps
1. Run `npm run dev` — browser shows placeholder page with correct background color (#F9F9F9).
2. Open DevTools > Computed: verify `background-color`, `font-family`, `padding` on `body`.
3. Inspect an `h1` element — verify `font-size: 64px` (`4rem`) and `font-weight: 800`.
4. Inspect an `h2` element — verify `font-size: 36px` (`2.25rem`), `margin-top: 80px`.
5. Run `npm run build` — exits 0.

## What NOT to Do (Scope Creep)
- Do NOT build any page content beyond the placeholder
- Do NOT add any color besides the spec palette
- Do NOT add dark mode, animations, or JavaScript
- Do NOT configure GitHub Actions or `site`/`base` in `astro.config.mjs`
- Do NOT create the content schema or project markdown files
