# Mohamad Keshavarz — The Curious Orchestrator

A connected personal portfolio for projects, engineering decisions, writing, books, learning notes, experience, and interests beyond software.

## Content

The portfolio deliberately avoids invented work or achievements. Content is split by purpose under `app/content/` and re-exported through `app/content.ts`:

- `experience.ts` — verified career chapters, narrative sections, technologies, and selected-work relationships
- `projects.ts` — case studies covering context, responsibility, constraints, decisions, outcomes, trade-offs, and lessons
- `writing.ts` — published writing plus a separate, non-public draft idea list
- `books.ts` — technical/non-technical reading records and personal notes
- `profile.ts` and `misc.ts` — profile, capabilities, and interests

Experience pages describe what happened. Case studies explain how a particular engineering problem was handled. Writing is reserved for later reflection, and draft ideas are not exported as public pages.

Images live in `public/`. Social metadata uses `public/og.png`.

## Development

```bash
npm install
npm run dev
```

Run `npm run lint` and `npm run build` before publishing. The build is a static export suitable for GitHub Pages, with a sitemap, robots file, and RSS feeds generated from the content records.

The GitHub Pages workflow republishes the `out/` directory after changes reach `main`.
