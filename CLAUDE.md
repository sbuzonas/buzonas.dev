# CLAUDE.md
## AI Coding Context — buzonas.dev Portfolio Site

This file is the primary context document for AI-assisted development of the buzonas.dev portfolio site. Read this file completely before writing any code, suggesting any architecture, or answering any question about this project. All decisions documented here are final unless explicitly superseded by the developer in the current session.

---

## 1. Project Identity

**Site:** buzonas.dev
**Owner:** Steve Buzonas
**Purpose:** Personal portfolio and professional brand site — serves simultaneously as a job-seeking surface, consulting lead generation, and demonstration of engineering practice.
**Personal brand:** Steve Buzonas (primary)
**Consulting entity:** FancyGuy Technologies LLC (DBA under buzonas.dev)
**Nonprofit:** Veterans Corner (in formation)
**Repository:** `sbuzonas/buzonas.dev`
**Governance repository:** `sbuzonas/buzonas.dev-governance` (PRD, TAD, ADRs, brand guide live there)

---

## 2. Stack — Non-Negotiable

These decisions are locked. Do not suggest alternatives unless the developer explicitly asks for options.

| Layer | Choice | Notes |
|-------|--------|-------|
| Framework | Next.js 15 — App Router | NOT Pages Router. Ever. |
| Language | TypeScript — strict mode | `"strict": true`, `"noUncheckedIndexedAccess": true` |
| Styling | Tailwind CSS v4 | Brand tokens as CSS custom properties in `globals.css` |
| UI Components | shadcn/ui | Generated into `/components/ui/` — do not hand-edit generated files |
| MDX | @next/mdx | NOT next-mdx-remote. See ADR-008. |
| Icons | Lucide React | Already a shadcn/ui dependency |
| Fonts | next/font/google | Plus Jakarta Sans (display) + JetBrains Mono (mono) |
| Hosting | GitHub Pages | Static export only. `output: 'export'` in next.config.ts |
| CI/CD | GitHub Actions | Two workflows: ci.yml (push to main) + cd.yml (semver tag) |
| Package manager | npm | Use `npm ci` in CI, `npm install` locally |

---

## 3. Hard Constraints

Violating these will break the build or the deployment. Check every code suggestion against this list.

### Static Export Constraints (`output: 'export'`)
- **NO API routes** — `/app/api/` does not exist in this project
- **NO Server Actions** — no form mutations, no `'use server'` functions
- **NO ISR** — no `revalidate` exports on any page
- **NO Middleware** — `middleware.ts` does not exist
- **NO `next/image` with remote optimization** — always use `unoptimized: true` or pre-optimize images manually
- **ALL dynamic routes must export `generateStaticParams`** — missing this causes a build failure, not a 404
- **`dynamicParams = false`** must be exported from all dynamic route pages
- **Never scaffold a dynamic route whose `generateStaticParams()` would return `[]` at build time** — under `output: 'export'`, Next.js throws a misleading "missing generateStaticParams()" error rather than building zero pages (confirmed bug, see ADR-014/ADR-015, [vercel/next.js#71862](https://github.com/vercel/next.js/issues/71862)). If a dynamic route has zero content at the time it's built (e.g. first blog post, first reference architecture), defer creating that `page.tsx` until real content exists. The static (non-dynamic) parent index route should handle the zero-content empty state instead.

### App Router Constraints
- **NO `'use client'` unless strictly necessary** — only Nav and ThemeToggle are client components at MVP
- **Server components are the default** — do not add `'use client'` to section components, page components, or data-display components
- **Data fetching is synchronous from TypeScript files** — no `fetch()`, no `async` data calls in components except MDX dynamic imports

### TypeScript Constraints
- **No `any`** — use proper types or `unknown` with narrowing
- **No type assertions (`as X`)** without a comment explaining why
- **All data shapes defined as interfaces in `/data/` files** — import types from there, do not redefine inline

### next.config.ts
```typescript
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
}
```
Do not modify these three settings without explicit developer instruction.

---

## 4. Repository Structure

```
buzonas.dev/
├── .github/
│   ├── workflows/
│   │   ├── ci.yml              # Runs on every push to main
│   │   └── cd.yml              # Runs on v*.*.* tag or GitHub Release
│   └── PULL_REQUEST_TEMPLATE.md
├── app/                        # Next.js App Router — pages only
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home — all anchor sections
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── consulting/
│   │   ├── page.tsx
│   │   └── architectures/[slug]/page.tsx  # Stub at MVP
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── globals.css
│   └── not-found.tsx
├── components/
│   ├── ui/                     # shadcn/ui — DO NOT HAND-EDIT
│   ├── layout/                 # Nav, Footer, ThemeToggle
│   ├── sections/               # Hero, Experience, Competencies, Veteran, Land, Contact
│   ├── projects/               # ProjectCard, ProjectGrid, ProjectPage
│   ├── consulting/             # ServiceCard, ArchitectureCard
│   ├── blog/                   # PostCard, PostGrid, PostHeader, AuthorBlock, EmptyBlog
│   └── shared/                 # TechTag, SectionEyebrow, StatusBadge, MdxContent, SVG components
├── content/
│   ├── blog/                   # MDX blog posts — empty at MVP
│   ├── projects/               # MDX project write-ups — optional per project
│   └── architectures/          # MDX reference architectures — Phase 2
├── data/                       # TypeScript data files — source of truth for all content
│   ├── experience.ts
│   ├── projects.ts
│   ├── competencies.ts
│   ├── consulting.ts
│   └── vso.ts
├── lib/
│   ├── blog.ts                 # getBlogPosts(), getBlogPost(slug)
│   └── projects.ts             # getProjects(), getProject(slug)
├── public/
│   ├── resume/steve-buzonas-resume.pdf
│   ├── images/
│   │   ├── headshot.jpg
│   │   └── og-default.png
│   ├── CNAME                   # buzonas.dev
│   └── robots.txt
├── styles/
│   └── print.css               # Color + B&W print stylesheets
├── mdx-components.tsx          # Global MDX component overrides — Next.js convention
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── components.json             # shadcn/ui config
```

---

## 5. Brand Tokens

These tokens are the single source of truth for all color decisions. Use CSS custom properties — never hardcode hex values in components.

### Color Custom Properties (`app/globals.css`)

```css
:root {
  --color-void:    #0A0F1E;   /* Page background */
  --color-deep:    #0D1B2A;   /* Section backgrounds, card base */
  --color-steel:   #1B3A5C;   /* Primary surface, nav */
  --color-sky:     #A8D4E6;   /* Primary accent, links, highlights */
  --color-glacier: #C9E8F5;   /* Light accent, hover states */
  --color-mist:    #7BA7BC;   /* Secondary text, labels */
  --color-patriot: #8B1A2B;   /* Veteran section ONLY — never primary actions */
  --color-iron:    #2E3F50;   /* Dividers, secondary surfaces */
  --color-pine:    #1A2B1E;   /* Land/conservation section, tree SVG */
  --color-cloud:   #EFF6FB;   /* Body text on dark backgrounds */
}

.light {
  --color-bg-primary:   #F0F7FB;
  --color-bg-surface:   #FFFFFF;
  --color-text-primary: #0D1B2A;
  --color-text-muted:   #1B3A5C;
}
```

### Tailwind Config Extensions

```typescript
// tailwind.config.ts
extend: {
  colors: {
    void:    'var(--color-void)',
    deep:    'var(--color-deep)',
    steel:   'var(--color-steel)',
    sky:     'var(--color-sky)',
    glacier: 'var(--color-glacier)',
    mist:    'var(--color-mist)',
    patriot: 'var(--color-patriot)',
    iron:    'var(--color-iron)',
    pine:    'var(--color-pine)',
    cloud:   'var(--color-cloud)',
  },
  fontFamily: {
    display: ['var(--font-display)', 'sans-serif'],
    body:    ['var(--font-body)', 'sans-serif'],
    mono:    ['var(--font-mono)', 'monospace'],
  },
}
```

### Color Discipline Rules

- `--color-patriot` is used **only** in the Veteran section — card borders, section accents. Never as a primary action color anywhere else.
- `--color-sky` is the primary interactive accent — links, hover states, current nav item, CTA buttons.
- `--color-pine` is used only in the Land section and tree SVG elements.
- Dark mode is the **primary designed experience**. Light mode is fully specified, not inverted.

---

## 6. Typography Rules

| Role | Class | Font |
|------|-------|------|
| Hero name | `font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold tracking-wide` | Plus Jakarta Sans |
| Section headers | `font-display text-[clamp(1.75rem,3.5vw,3rem)] font-bold` | Plus Jakarta Sans |
| Section eyebrow | `font-mono text-sm uppercase tracking-[0.15em] text-mist` | JetBrains Mono |
| Body text | `font-body text-base text-cloud` | Inter / system |
| Tech tags / labels | `font-mono text-xs` | JetBrains Mono |
| Code blocks | `font-mono text-sm` | JetBrains Mono |

**Section eyebrow pattern** — always precedes a section heading:
```tsx
<SectionEyebrow label="EXPERIENCE" />
<h2 className="font-display ...">Career Timeline</h2>
```

---

## 7. Component Rules

### Client Components
Only two components use `'use client'`:
- `components/layout/Nav.tsx` — scroll behavior, mobile menu toggle
- `components/layout/ThemeToggle.tsx` — localStorage read/write, class toggle on `<html>`

If you find yourself adding `'use client'` to any other component, stop and reconsider. Extract the client behavior to a hook or a small wrapper instead.

### shadcn/ui Usage
- Import from `@/components/ui/[component]`
- Never modify files in `/components/ui/` directly
- Customize via Tailwind className props or wrapper components
- Add new shadcn components via CLI: `npx shadcn@latest add [component]`

### SVG Components
Three brand SVG components exist as stubs at MVP:
- `<AppalachianSilhouette />` — Pennsylvania conifer treeline, lower hero
- `<HexLattice />` — geometric network, upper left hero
- `<HexGrid />` — smaller hex accent, upper right hero

At MVP these render CSS placeholders. When SVG assets are available, replace the internal implementation — the component interface does not change. Colors must use `currentColor` or CSS custom properties — never hardcoded hex in SVG `fill` or `stroke`.

### Dynamic Route Pattern
Every dynamic route follows this exact pattern:
```typescript
// app/[section]/[slug]/page.tsx
import { getItems } from '@/data/items'

export async function generateStaticParams() {
  return getItems().map((item) => ({ slug: item.slug }))
}

export const dynamicParams = false

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  // ...
}
```

### MDX Dynamic Import Pattern
```typescript
// For pages that render MDX content
const { default: Content } = await import(`@/content/blog/${slug}.mdx`)
return <Content />
```

Always guard with `hasMdx` flag from the data file before attempting import. A missing MDX file at import time throws — do not assume the file exists.

---

## 8. Data Architecture

All structured content lives in `/data/` TypeScript files. These are the source of truth — never fetch from an API, never read from the filesystem for structured data (only `lib/blog.ts` and `lib/projects.ts` read the filesystem, for MDX enumeration).

### Key Types

```typescript
// data/projects.ts
export interface Project {
  slug: string
  title: string
  category: 'professional' | 'consulting' | 'opensource' | 'personal'
  status: 'complete' | 'active' | 'in-progress' | 'coming-soon'
  year: string
  org: string
  tags: string[]
  github?: string
  demo?: string
  excerpt: string
  depth: 'card' | 'case-study' | 'deep-dive'
  hasMdx: boolean
}

// data/experience.ts
export interface ExperienceEntry {
  company: string
  role: string
  dateRange: string
  location: string
  type: 'employment' | 'consulting' | 'military'
  bullets: string[]
  current?: boolean
}

// data/vso.ts
export interface VSOAffiliation {
  name: string
  role?: string
  url?: string
}

// Nonprofit is Veterans Corner — in formation
export interface NonprofitEntry {
  name: 'Veterans Corner'
  status: 'forming'
  description: string
}
```

---

## 9. Theming Architecture

### Theme Classes
Theme is applied as a class on `<html>`:
- `dark` — default, primary designed experience
- `light` — fully specified alternative

### FOUC Prevention
This inline script must be in `app/layout.tsx` `<head>`, before any other scripts:
```html
<script dangerouslySetInnerHTML={{ __html: `
  (function() {
    try {
      const theme = localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      document.documentElement.classList.add(theme);
    } catch(e) {}
  })();
` }} />
```

### Print Styles
`styles/print.css` handles both color and B&W print:
- `@media print` base — suppresses nav, footer, animations, decorative SVGs
- Color print — preserves brand palette
- B&W print — forces black/white, high contrast
- Import in `app/layout.tsx`

### `prefers-reduced-motion`
All CSS animations and transitions must be wrapped:
```css
@media (prefers-reduced-motion: no-preference) {
  /* animation code here */
}
```
Never animate without this guard.

---

## 10. CI/CD Pipeline

### ci.yml — Runs on every push to `main`
Steps in order:
1. Checkout + Node.js 22.x setup
2. `npm ci`
3. `tsc --noEmit` (TypeScript check)
4. `eslint .`
5. `next build` (static export to `/out`)
6. Lighthouse CI — all four scores must be ≥ 0.9
7. axe-core accessibility scan
8. Dead link check (lychee)

### cd.yml — Runs on `v*.*.*` tag or GitHub Release publish
1. Full CI pipeline (same steps as above)
2. Build static export
3. Write `CNAME` file: `buzonas.dev`
4. Deploy `/out` to `gh-pages` branch via `peaceiris/actions-gh-pages` or equivalent

### Lighthouse Gates (`lighthouserc.json`)
```json
{
  "ci": {
    "assert": {
      "assertions": {
        "categories:performance":    ["error", { "minScore": 0.9 }],
        "categories:accessibility":  ["error", { "minScore": 0.9 }],
        "categories:best-practices": ["error", { "minScore": 0.9 }],
        "categories:seo":            ["error", { "minScore": 0.9 }]
      }
    }
  }
}
```

A failing Lighthouse gate blocks deployment. Fix the score before tagging a release.

---

## 11. Content Guidelines

### Voice & Tone by Section

| Section | Tone | Notes |
|---------|------|-------|
| Hero | Confident, minimal | Let the work speak |
| Experience | Precise, results-oriented | Metrics when available |
| Projects | Builder's pride | Show the thinking |
| Consulting | Professional, capability-forward | FancyGuy Technologies framing |
| Veteran | Respectful, purposeful | Service without sentimentality |
| Land | Warm, personal | Only section where full warmth is appropriate |
| Blog | Peer-to-peer | Write like at a whiteboard |

### Copy Rules
- Lead with outcomes, not responsibilities
- Use the specific: "19 EKS clusters" not "large-scale Kubernetes"
- Never use the word "passionate"
- Never use "results-driven"
- Military section uses the same register as tech sections — precision, not sentiment
- Veterans Corner is always described as "in formation" — never imply it is operational

### FancyGuy Technologies
- Always refer to as "FancyGuy Technologies" — never "my company" or unnamed
- Consulting section framing: "FancyGuy Technologies — Steve Buzonas, Principal Consultant"
- FancyGuy Technologies is a formal LLC

---

## 12. Routes & Navigation

### Route Map
| Route | Page | Dynamic | `generateStaticParams` |
|-------|------|---------|----------------------|
| `/` | Home | No | N/A |
| `/projects` | Project index | No | N/A |
| `/projects/[slug]` | Project detail | Yes | All project slugs |
| `/consulting` | Consulting overview | No | N/A |
| `/consulting/architectures/[slug]` | Architecture (stub) | Yes | Returns `[]` at MVP |
| `/blog` | Blog index | No | N/A |
| `/blog/[slug]` | Blog post | Yes | Returns `[]` at MVP |

### Home Page Anchors
`/#experience` · `/#competencies` · `/#veteran` · `/#land` · `/#contact`

### Navigation Links
Experience · Projects · Consulting · Blog · Contact

---

## 13. What Phase 2 Looks Like

Do not implement these unless explicitly instructed:

- Reader mode (stripped MDX reading experience)
- Blog post content (first posts)
- Staging environment (requires hosting migration to Vercel or Cloudflare Pages)
- Project tag/category filtering
- Reference architecture pages (`/consulting/architectures/[slug]` full content)
- Analytics (Plausible or Fathom — privacy-respecting, no cookies)
- RSS feed
- Static search (Pagefind)
- Real photography for Land section
- Framer Motion animations
- Contact form (requires serverless function or form service)

---

## 14. Governance References

Full documentation lives in `.governance/` (git submodule — `sbuzonas/buzonas.dev-governance`):

| Document | Purpose |
|----------|---------|
| `.governance/PRD.md` | Product requirements, section specs, release phases |
| `.governance/TAD.md` | Technical architecture, repo layout, pipeline design |
| `.governance/ADRs.md` | 16 architectural decision records with full rationale |
| `.governance/buzonas-brand-guide.md` | Color system, typography, visual elements, tone |
| `.governance/component-inventory.md` | Full component list, props interfaces, data sources |

When in doubt about a decision, check the ADRs before suggesting an alternative. If an ADR covers the question, the decision is made.

---

## 15. Session Startup Checklist

At the start of every coding session, confirm:

- [ ] You have read this entire file
- [ ] You know the stack (§2) and will not suggest alternatives unprompted
- [ ] You know the hard constraints (§3) and will check every code suggestion against them
- [ ] You know which components are client components (§7) — only Nav and ThemeToggle
- [ ] You know the brand tokens (§5) and will use CSS custom properties, not hex values
- [ ] You know what is Phase 2 (§13) and will not implement it unless instructed

---

*CLAUDE.md v1.0 — buzonas.dev Portfolio Site*
*This file should be updated whenever an architectural decision changes.*
*Next document: Project README*
