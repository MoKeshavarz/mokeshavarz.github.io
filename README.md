# Mohamad Keshavarz — The Curious Orchestrator

A connected personal portfolio for projects, engineering decisions, writing, books, learning notes, experience, and interests beyond software.

## Content

The portfolio deliberately avoids invented work or achievements. Replace the clearly marked project, writing, technical-book, and experience placeholders in `app/content.ts` with verified information. Existing reading and profile details are kept separate from demonstration entries through explicit labels.

The main content records are:

- `projects` — problem, responsibility, engineering decision, connected systems, outcome, and lesson
- `writing` — articles, case studies, book summaries, and evolving learning notes
- `books` — technical/non-technical type, reading status, progress, and personal notes
- `capabilities`, `interests`, and `profile` — supporting personal information

Images live in `public/`. Social metadata uses `public/og.png`.

## Development

```bash
npm install
npm run dev
```

Run `npm run lint` and `npm run build` before publishing. The build is a static export suitable for GitHub Pages, with a sitemap, robots file, and RSS feeds generated from the content records.

The GitHub Pages workflow republishes the `out/` directory after changes reach `main`.
