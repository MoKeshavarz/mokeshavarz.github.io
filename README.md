# Mohamad Keshavarz — The Curious Orchestrator

A connected engineering career portfolio documenting work, decisions, trade-offs, and the lessons carried forward.

## Content

The public portfolio is organized around four connected layers:

- **Experience** — career narratives, context, and the lessons that shaped later work
- **Case Studies / Selected Work** — specific engineering problems, responsibilities, decisions, approaches, outcomes, and trade-offs
- **Writing** — broader reflections derived from engineering experience; only finished writing is published
- **Library / Reading** — books, reading progress, and learning material

Typed records live under `app/content/`. The site is statically generated, and unpublished writing drafts are not exposed as article pages.

Images live in `public/`. Social metadata uses `public/og.png`.

## Development

```bash
npm install
npm run dev
```

Run `npm run lint` and `npm run build` before publishing. The build is a static export suitable for GitHub Pages, with a sitemap, robots file, and RSS feeds generated from the content records.

The GitHub Pages workflow republishes the `out/` directory after changes reach `main`.
