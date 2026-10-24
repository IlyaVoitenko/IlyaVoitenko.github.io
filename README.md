# Illia Voitenko, QA Engineer portfolio

Personal portfolio site for a QA engineer: who I am, what I test and which tools I use.
Built with Next.js (App Router), TypeScript and Tailwind CSS 4.

## Tech stack

- Next.js 16 (App Router, static export)
- React 19, TypeScript (strict)
- Tailwind CSS 4
- Geist Sans and Geist Mono fonts
- lucide-react icons
- ESLint and Prettier
- Yarn 1 as the package manager

## Getting started

Requirements: Node.js 22 or newer (see `.nvmrc`) and Yarn 1.x.

```bash
yarn install
yarn dev
```

Open http://localhost:3000.

## Scripts

| Command          | What it does                  |
| ---------------- | ----------------------------- |
| `yarn dev`       | Start the dev server          |
| `yarn build`     | Create a production build     |
| `yarn start`     | Run the production build      |
| `yarn lint`      | Check code with ESLint        |
| `yarn typecheck` | Check types with TypeScript   |
| `yarn format`    | Format the code with Prettier |

The build is a static export. The generated site is written to the `out/` folder.

## Environment variables

Copy `.env.example` to `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_BASE_PATH=
```

- `NEXT_PUBLIC_SITE_URL` is used for metadata, `sitemap.xml` and `robots.txt`.
- `NEXT_PUBLIC_BASE_PATH` is the repository name with a leading slash, for example
  `/illia-voitenko-portfolio`. It is needed when the site is served from a
  `username.github.io/repo-name` address. Leave it empty for a custom domain or a
  `username.github.io` repository.

## Project structure

```
.github/workflows/  GitHub Pages deploy workflow
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

## Deployment (GitHub Pages)

The site deploys automatically on every push to `main` through
`.github/workflows/deploy.yml`.

1. In the repository open Settings, then Pages, and set Source to **GitHub Actions**.
2. Make sure `yarn.lock` is committed.
3. Push to `main` and wait for the workflow in the Actions tab to finish.

The site is then available at `https://<username>.github.io/<repository-name>/`.
