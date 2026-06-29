# Muhammad Waleed — Developer Portfolio

A modern, premium, production-ready portfolio for a Full Stack Developer. Built with the latest
Next.js App Router, TypeScript, Tailwind CSS v4, and Framer Motion — designed to impress recruiters
at top product companies.

![Tech](https://img.shields.io/badge/Next.js-15-black) ![TS](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-4-06b6d4)

## ✨ Features

- **Premium design system** — custom HSL theme tokens, signature violet→rose→cyan gradient, glassmorphism, dark & light mode.
- **Smooth, performant animations** — Framer Motion with reduced-motion support.
- **Rich sections** — Hero (typing effect, availability badge), About, categorized Skills, animated Experience timeline, Projects with **search + filter + case-study modals**, Deployment showcase, Architecture diagram, live GitHub stats, Testimonials, Blog (scaffolded), Contact (EmailJS).
- **Power-user UX** — ⌘K Command Palette, custom cursor, scroll progress, back-to-top, loading screen, smooth scroll, keyboard shortcuts.
- **SEO & a11y** — metadata, Open Graph/Twitter cards, JSON-LD, `sitemap.xml`, `robots.txt`, web manifest, semantic HTML, skip-link, focus states.
- **Performance** — Next/Image optimization, self-hosted Geist fonts, code-splitting, static generation.

## 🧱 Tech Stack

| Area      | Tech                                                      |
| --------- | -------------------------------------------------------- |
| Framework | Next.js 15 (App Router, RSC)                             |
| Language  | TypeScript                                               |
| Styling   | Tailwind CSS v4, CSS variables, `tw-animate-css`         |
| UI        | shadcn-style primitives on Radix UI, `lucide-react`     |
| Animation | Framer Motion                                            |
| Fonts     | Geist Sans / Geist Mono (self-hosted)                    |
| Forms     | EmailJS                                                   |
| Tooling   | ESLint, Prettier (+ Tailwind plugin)                     |

## 📁 Folder Structure

```
src/
├── app/                 # App Router: layout, page, globals.css, sitemap, robots, manifest
├── components/
│   ├── ui/              # Reusable primitives (button, card, dialog, tabs, command, …)
│   ├── layout/          # Navbar, footer, cursor, command palette, scroll progress, …
│   ├── sections/        # Page sections (hero, about, skills, projects, …)
│   └── shared/          # Section wrapper, headings, reveal, magnetic, backgrounds
├── data/                # Single source of truth (profile, projects, skills, experience, …)
├── hooks/               # Custom hooks (active section, media query, mounted)
└── lib/                 # utils (cn) + motion presets
```

## 🚀 Getting Started

```bash
npm install
cp .env.example .env.local   # fill in your values
npm run dev                  # http://localhost:3000
```

### Scripts

| Command          | Description              |
| ---------------- | ------------------------ |
| `npm run dev`    | Start dev server         |
| `npm run build`  | Production build         |
| `npm run start`  | Run the production build |
| `npm run lint`   | Lint with ESLint         |
| `npm run format` | Format with Prettier     |

## ⚙️ Environment Variables

See [`.env.example`](./.env.example). All are `NEXT_PUBLIC_*` (client-side):

| Variable                          | Purpose                     |
| --------------------------------- | --------------------------- |
| `NEXT_PUBLIC_SITE_URL`            | Canonical site URL (SEO/OG) |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID`  | EmailJS service             |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template            |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`  | EmailJS public key          |

## ✏️ Customizing Content

Everything personal lives in [`src/data/`](./src/data) — edit those files and the whole site updates:

- `profile.ts` — name, bio, links, résumé, metrics
- `projects.ts` — projects + full case studies (add screenshots to `public/projects/`)
- `skills.ts`, `experience.ts`, `testimonials.ts`, `deployments.ts`, `blog.ts`, `navigation.ts`

## 🌐 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md). Optimized for **Vercel** (one-click from GitHub).

---

Built with Next.js, TypeScript, Tailwind CSS & Framer Motion.
