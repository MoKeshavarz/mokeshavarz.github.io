# Ario Keshavarz — Portfolio

A static software-engineering portfolio published at [mokeshavarz.github.io](https://mokeshavarz.github.io).

## Update the content

All editable portfolio content lives in `app/content.ts`: profile details, experience, journal entries, books, skills, and activities. Edit that file in GitHub and commit the change; the deployment workflow republishes the site automatically.

Images live in `public/`. Use root-relative paths such as `/images/hero4-cutout.png` in the content file.

## Run locally

```bash
npm install
npm run dev
```

## Publish

The workflow in `.github/workflows/deploy-pages.yml` builds the static site and deploys the `out/` directory to GitHub Pages after every push to `main`.
