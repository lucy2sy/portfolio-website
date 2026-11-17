# lucy lee — portfolio

Personal UX/product design portfolio. Designed in Figma, built with [Astro](https://astro.build).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Pages

| URL | File |
|---|---|
| `/` | `src/pages/index.astro` |
| `/about` | `src/pages/about.astro` |
| `/work` | `src/pages/work.astro` |
| `/work/roomie-receipts` | `src/pages/work/roomie-receipts.astro` |
| `/resume` | `src/pages/resume.astro` |
| `/contact` | `src/pages/contact.astro` |

## Adding images

1. Put the file in `public/images/` (case study screenshots in `public/images/roomie/`).
2. Find the `<Photo ... />` for that spot and add `src="/images/your-file.jpg"` and a short `alt` description.
   Leave `public` out of the path.
   - Case study screenshots: fill in the `img` object at the top of `roomie-receipts.astro`.
   - Home project cards: fill in `image:` in the `projects` list at the top of `index.astro`.

## Other things to edit

- Email, LinkedIn, GitHub, resume PDF path: `src/data/site.ts`
- Resume PDF: put it at `public/Resume_Siyoung_Lee.pdf`
- Colours, fonts, shared styles: `src/styles/global.css`

## Structure

```
src/
├── data/site.ts             # Contact links, in one place
├── styles/global.css        # Chic palette tokens, fonts, shared classes
├── layouts/BaseLayout.astro # <head>, Nav, <main>, Footer
├── components/
│   ├── Nav.astro            # Figma: Zine Nav
│   ├── Footer.astro         # Figma: Zine Footer
│   ├── Photo.astro          # Image or labelled placeholder
│   └── Star.astro           # Starburst decoration
└── pages/                   # Each file = one URL
```

## Deploy (Cloudflare Pages)

- Build command: `npm run build`
- Output directory: `dist`
