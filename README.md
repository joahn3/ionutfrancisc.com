# Ionuț Francisc Personal Website

Personal portfolio site for Ionuț Francisc, built with Next.js, TypeScript, and Tailwind CSS.

The site presents a security, privacy, and GRC profile first, supported by
regulated delivery experience, public credentials, case studies, web systems,
automation, and founder-led projects. It includes recruiter-focused pages at
`/security-privacy` and `/ro/securitate-confidentialitate`, plus Romanian routes
under `/ro` for all primary pages.

## Stack

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 3
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

The build runs `next build`, exports the static site to `out`, and generates the sitemap.

## Analytics

Google Analytics 4 uses the public measurement ID `G-E0LHCWXKPF`. The Google
tag is blocked until the visitor explicitly accepts analytics. The ID can be
overridden with `NEXT_PUBLIC_GA_MEASUREMENT_ID`.

## Quality Audits

```bash
npm run check
npm run test:e2e
npm run audit:a11y
npm run audit:links
npm run audit:lighthouse
npm run audit:all
```

Playwright covers desktop and mobile routes, Axe checks automatically
detectable accessibility issues, and Linkinator checks the static export.

## LLM Discovery

`public/llms.txt` provides a concise, public map of the professional profile,
CV, credentials, case studies, services, and bilingual routes. It contains no
private client information or direct email address.

## Public CV

Generate the downloadable PDF with:

```bash
python3 scripts/generate-public-cv.py
```

## Content Model

Core content lives in `src/data`:

- `profile.ts` for identity, SEO defaults, focus areas, stack, and contact links.
- `work.tsx` for portfolio categories and projects.
- `caseStudies.ts` for structured context, problem, contribution, and result.
- `services.ts` for the consulting and mentoring page content.
- `skills.tsx` for homepage service cards.
- `credentials.ts` for public credential and experience highlights.
- `navigation.tsx` for internal and external navigation.

This keeps the site easy to update without editing page markup for every content change.

## Original Credit

This site started as a fork of [mattwaler/mattwaler.com](https://github.com/mattwaler/mattwaler.com) and has since been refactored around the current Ionuț Francisc profile and portfolio.
