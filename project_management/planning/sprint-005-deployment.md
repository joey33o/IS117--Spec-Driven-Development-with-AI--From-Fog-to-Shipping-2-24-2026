# Sprint 005 — Deployment Configuration
**Status:** planning

## Goal
Wire up `astro.config.mjs` with the correct `site` and `base` values, and create a GitHub Actions workflow that builds and deploys to GitHub Pages on every push to `main`.

## Tasks
1. Update `astro.config.mjs`: set `site: 'https://<username>.github.io'` and `base: '<repo-name>'`
2. Create `.github/workflows/deploy.yml`
3. Configure workflow trigger: `on: push: branches: [main]`
4. Use `withastro/action` for the Astro build step
5. Use `actions/deploy-pages` for the deploy step
6. Verify the workflow file passes `act` dry-run or GitHub's YAML linter

## Files
- `astro.config.mjs`
- `.github/workflows/deploy.yml`

## Acceptance Criteria
- [ ] `astro.config.mjs` has a `site` property set to `https://<username>.github.io`
- [ ] `astro.config.mjs` has a `base` property matching the GitHub repository name
- [ ] Workflow file has `on: push` with `branches: [main]`
- [ ] Workflow uses `withastro/action` for the build
- [ ] Workflow uses `actions/deploy-pages` (not `gh-pages` branch manually)
- [ ] `npm run build` with `base` set produces correct asset paths (no broken `/assets/` references)
- [ ] Workflow YAML is valid (no syntax errors)

## Verification Steps
1. `npm run build` — inspect `dist/index.html` to confirm asset hrefs include the base path prefix.
2. Push to `main` — confirm GitHub Actions tab shows a green deployment run.
3. Visit `https://<username>.github.io/<repo-name>/` — confirm the live site matches local `npm run preview`.
4. Manually refresh the URL — page loads without 404 (validates base path correctness).

## What NOT to Do (Scope Creep)
- Do NOT add staging environments, preview deployments, or branch rules
- Do NOT add caching steps unless the build is failing due to timeouts
- Do NOT change any page content or styles in this sprint
- Do NOT add secrets beyond what `withastro/action` and `actions/deploy-pages` require by default
