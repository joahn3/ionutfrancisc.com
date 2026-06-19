# Ionut Francisc Personal Website

Personal portfolio site for Johnny / Ionut Francisc, built with Next.js, TypeScript, and Tailwind CSS.

The site presents security and privacy consulting, web and AI-assisted product work, active founder projects, selected business websites, educational tools, and personal experiments.

## Stack

- Next.js 12
- React 17
- TypeScript
- Tailwind CSS
- Netlify static export

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The build runs `next build`, exports the static site to `.dist`, and generates the sitemap.

## Content Model

Core content lives in `src/data`:

- `profile.ts` for identity, SEO defaults, focus areas, stack, and contact links.
- `work.tsx` for portfolio categories and projects.
- `services.ts` for the consulting and mentoring page content.
- `skills.tsx` for homepage service cards.
- `navigation.tsx` for internal and external navigation.

This keeps the site easy to update without editing page markup for every content change.

## Original Credit

This site started as a fork of [mattwaler/mattwaler.com](https://github.com/mattwaler/mattwaler.com) and has since been refactored around the current Ionut Francisc profile and portfolio.
