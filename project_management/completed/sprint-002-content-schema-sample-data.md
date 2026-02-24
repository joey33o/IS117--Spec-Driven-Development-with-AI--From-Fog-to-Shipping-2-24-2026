# Sprint 002 — Content Schema & Sample Project Data
**Status:** completed

## Goal
Define the Zod content collection schema so a missing `receipt` field causes a build failure, then add exactly 3 sample project markdown files that satisfy the schema.

## Tasks
1. Create `src/content/config.ts` with the `projects` collection and all 6 required Zod fields
2. Create `src/content/projects/project-one.md` with valid frontmatter
3. Create `src/content/projects/project-two.md` with valid frontmatter
4. Create `src/content/projects/project-three.md` with valid frontmatter
5. Confirm `npm run build` fails when `receipt` is removed from any file, then restore it

## Files
- `src/content/config.ts`
- `src/content/projects/project-one.md`
- `src/content/projects/project-two.md`
- `src/content/projects/project-three.md`

## Acceptance Criteria
- [x] `config.ts` exports a `collections` object with a `projects` key
- [x] Schema requires: `title` (string), `tagline` (string), `receipt` (string), `category` (enum: Deep Dive | Real World | Specialist), `coverImage` (string), `gitLink` (URL string)
- [x] All 3 markdown files have valid frontmatter that passes schema validation
- [x] `npm run build` fails with a Zod error when `receipt` is omitted from any project file (verified manually then reverted)
- [x] `npm run build` succeeds with all 3 files intact

## Verification Steps
1. Run `npm run build` — exits 0.
2. Temporarily delete `receipt` from one `.md` file, run `npm run build` — confirm error mentions `receipt`; restore the field.
3. In a test script or Astro page, call `getCollection('projects')` and confirm it returns exactly 3 entries.

## What NOT to Do (Scope Creep)
- Do NOT build any page that renders the projects yet
- Do NOT add extra schema fields beyond the 6 in the spec
- Do NOT use real images; placeholder strings like `/images/project-one.jpg` are fine
- Do NOT wire up routing or dynamic pages in this sprint
