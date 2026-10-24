# Illia Voitenko, QA Engineer portfolio

Personal portfolio site for a QA engineer: who I am, what I test and which tools I use.
Built with Next.js (App Router), TypeScript and Tailwind CSS 4.

## Tech stack

- Next.js 16 (App Router, static prerendering)
- React 19, TypeScript (strict)
- Tailwind CSS 4
- Geist Sans and Geist Mono fonts
- lucide-react icons
- ESLint and Prettier

## Getting started

Requirements: Node.js 22 or newer (see `.nvmrc`).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command             | What it does                  |
| ------------------- | ----------------------------- |
| `npm run dev`       | Start the dev server          |
| `npm run build`     | Create a production build     |
| `npm start`         | Run the production build      |
| `npm run lint`      | Check code with ESLint        |
| `npm run typecheck` | Check types with TypeScript   |
| `npm run format`    | Format the code with Prettier |

## Environment variables

Copy `.env.example` to `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

The URL is used for metadata, `sitemap.xml` and `robots.txt`.

## Project structure

```
src/
  app/              Layout, page, metadata, robots, sitemap, icon
  components/
    header.tsx
    footer.tsx
    sections/       Hero, About, Skills, Contact
    ui/             Container, Section, Button, TestRun
  data/profile.ts   All content: text, skills, contacts, languages
  lib/cn.ts         Class name helper (clsx + tailwind-merge)
```

## Customizing

- **Content:** edit `src/data/profile.ts`. Components only render this data.
- **Colors:** change the tokens in the `@theme` block of `src/app/globals.css`.
- **Hero test run:** edit the `heroRun` array in `profile.ts`. The animation lives in `src/components/ui/test-run.tsx`.
- **Section order:** change it in `src/app/page.tsx`.

## Accessibility and performance

- Semantic landmarks, skip link and visible keyboard focus
- Animation respects `prefers-reduced-motion`
- Fully static page, no runtime data fetching
- Open Graph metadata and JSON-LD `Person` schema
