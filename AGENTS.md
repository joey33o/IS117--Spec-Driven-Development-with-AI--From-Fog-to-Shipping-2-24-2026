Implementation Spec: Soft Minimalist "Receipt-First" Portfolio
1. Core Technical Identity
Framework: Astro 4.x (Static Site Generation)

Styling: Vanilla CSS (8px Grid System)

Typography: Inter (400, 700, 800)

Deployment: GitHub Actions to GitHub Pages

2. Global Style Module (src/styles/global.css)
Requirement: All measurements must be derived from the 8px base unit.

CSS
:root {
  /* Color Palette */
  --color-bg: #F9F9F9;
  --color-text: #1A1A1A;
  --color-border: #EEEEEE;
  
  /* Spacing Scale (8px base) */
  --space-1: 8px;
  --space-2: 16px;
  --space-4: 32px;
  --space-10: 80px;
  
  /* Component Rules */
  --radius: 12px;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: var(--space-10) 5%; /* 5% horizontal gutter */
}

/* Typography Hierarchy */
h1 { font-size: 4rem; font-weight: 800; letter-spacing: -0.03em; margin-bottom: var(--space-4); }
h2 { font-size: 2.25rem; font-weight: 700; margin-top: var(--space-10); margin-bottom: var(--space-4); }
p { font-size: 1.125rem; margin-bottom: var(--space-2); }

/* Link Styling (No Blue) */
a { color: inherit; text-decoration: underline; text-underline-offset: 4px; }
a:hover { opacity: 0.7; }
3. Data Schema & Validation (src/content/config.ts)
Requirement: Deployment must fail if a project lacks a "receipt" (quantifiable proof).

TypeScript
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    receipt: z.string(), // "Result: 25% faster load time"
    category: z.enum(['Deep Dive', 'Real World', 'Specialist']),
    coverImage: z.string(),
    gitLink: z.string().url(),
  }),
});

export const collections = { projects };
4. Acceptance Criteria per Page
Home Page (index.astro)
[ ] Hero displays H1 and a 1-sentence value proposition.

[ ] Fetches exactly 3 projects from src/content/projects/.

[ ] Projects are displayed in a responsive grid (1 column mobile, 2 columns desktop).

[ ] Each project card shows the receipt in a bold, charcoal-on-white badge.

Case Study Page ([slug].astro)
[ ] Content width is capped at 800px for readability.

[ ] Displays the gitLink as a primary CTA button.

[ ] Section headers (H2) must have exactly 80px of top margin.

[ ] Image assets must use a 12px border-radius.

5. Deployment Step Acceptance Criteria
Step 1: astro.config.mjs
[ ] site property must be set to https://[username].github.io.

[ ] base property must match the GitHub repository name.

Step 2: GitHub Actions Workflow
[ ] Must use actions/deploy-pages.

[ ] Trigger must be on: push to main.

[ ] Use withastro/action for the build step.

6. Non-Goals (Out of Scope)
No Dark Mode: Stay strictly on the #F9F9F9 background.

No Framework JS: Do not use React/Vue/Svelte; use Astro components only.

No Custom Backend: No form handlers or databases; static content only.

No Hover Complexity: Keep animations limited to simple opacity fades.

Final Diagnostic Check (Self-Test)
Alignment: Do all elements snap to a vertical line on the left?

Contrast: Is all text clearly legible against the #F9F9F9 background?

Hierarchy: Is the H1 significantly more dominant than the H2?

Receipts: Does every project start with a bold metric or proof point?

Navigation: Does the URL work when manually refreshed in the browser?
