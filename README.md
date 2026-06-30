# buzonas.dev

[![Build Status](https://github.com/sbuzonas/buzonas.dev/actions/workflows/ci.yml/badge.svg)](https://github.com/sbuzonas/buzonas.dev/actions/workflows/ci.yml)
[![Deploy](https://github.com/sbuzonas/buzonas.dev/actions/workflows/cd.yml/badge.svg)](https://github.com/sbuzonas/buzonas.dev/actions/workflows/cd.yml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**[buzonas.dev](https://buzonas.dev)** — Personal portfolio and professional brand site for Steve Buzonas, Senior Engineering Leader & Cloud Architect.

---

## About This Project

This site is a working prototype as much as it is a portfolio. It's built using the same tools, workflow, and iterative process I'd apply to any production system — and it's intentionally documented as such. The full planning artifacts (PRD, technical architecture, architectural decision records) are public, because the *process* of building this site is itself part of what it demonstrates.

The site covers four things that don't usually live on the same page: a 20+ year engineering career across cloud architecture and platform engineering, a body of technical and open-source project work, active veteran service across five organizations, and a connection to the Appalachian land I steward in Pennsylvania.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 15](https://nextjs.org) — App Router, static export |
| Language | TypeScript (strict mode) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| UI Components | [shadcn/ui](https://ui.shadcn.com) |
| Content | MDX via [@next/mdx](https://nextjs.org/docs/app/guides/mdx) |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |

No backend, no database, no CMS. All content is version-controlled — structured data in TypeScript, long-form content in MDX.

## Architecture & Planning

Every significant decision behind this project is documented before it was built, not after. Full governance documentation lives in [`buzonas.dev-governance`](https://github.com/sbuzonas/buzonas.dev-governance):

- **Product Requirements Document** — scope, audiences, release phases
- **Technical Architecture Document** — system design, repo structure, pipeline design
- **Architectural Decision Records** — 13 ADRs in MADR format, including the reasoning behind every major technical choice and the alternatives that were rejected
- **Brand Guide** — visual identity, color system, typography
- **Component Inventory** — full component and page specification

This documentation also serves as AI coding context (`CLAUDE.md`) — the project was built with AI-assisted development from the planning stage forward, and the governance docs are the same artifacts an AI coding assistant reads before generating code.

## Local Development

```bash
# Clone the repository
git clone https://github.com/sbuzonas/buzonas.dev.git
cd buzonas.dev

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Production static export to /out
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript compiler check (no emit)
npx serve out        # Preview the production build locally
npx lhci autorun     # Run Lighthouse CI against local build
```

## Project Structure

```
buzonas.dev/
├── app/            # Next.js App Router pages
├── components/     # React components (sections, layout, shared, shadcn/ui)
├── content/        # MDX content — blog posts, project write-ups
├── data/           # TypeScript data files — career, projects, skills, VSO
├── lib/            # Content access helpers
├── public/         # Static assets, resume PDF
└── styles/         # Print stylesheets
```

See `CLAUDE.md` for the complete structure and architectural constraints.

## Deployment

This site follows a continuous delivery model:

- Every push to `main` runs the full CI pipeline (typecheck, lint, build, Lighthouse CI, accessibility scan)
- Production deploys are triggered explicitly by a semantic version tag (`v1.0.0`) or a published GitHub Release
- `main` is always intended to be in a deployable state

```bash
# Trigger a production release
git tag v1.0.0
git push origin v1.0.0
```

## Sections

| Section | Description |
|---------|-------------|
| **Experience** | 20+ year career timeline, including U.S. Marine Corps service |
| **Projects** | Professional, open source, and personal projects, with case studies for select work |
| **Consulting** | Services offered through FancyGuy Technologies |
| **Veteran & Nonprofit** | VFW, American Legion, DAV, Marine Corps League, IAVA, and Veterans Corner (in formation) |
| **Land & Conservation** | Stewardship of Appalachian land in Pennsylvania |
| **Blog** | Technical writing, veteran community topics, and reflections on land and conservation |

## License

Site code is available under the [MIT License](LICENSE). Content (resume data, biographical text, blog posts) is not licensed for reuse.

## Contact

- **LinkedIn:** [linkedin.com/in/sbuzonas](https://linkedin.com/in/sbuzonas)
- **GitHub:** [github.com/sbuzonas](https://github.com/sbuzonas)
- **Site:** [buzonas.dev](https://buzonas.dev)

---

*Built with [Claude](https://claude.ai) as an AI-assisted development partner, from planning through implementation.*
