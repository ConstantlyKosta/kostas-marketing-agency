# Kosta’s Marketing Agency — Website

Dark‑mode‑only, localized marketing site with EN / RU / HE routes and RTL support for Hebrew.

## Edit in 30 seconds
Update contact details, locations, and core offer in `src/config/site.ts`:
- `site.contacts`
- `site.locationLines`
- `site.serviceAreaLine`
- `site.offerDetails`
- `site.proofList`

All pages pull copy from that file.

## Translations
Russian and Hebrew copy are **draft translations** and may need a native edit. Update text inside `src/config/site.ts`.

## Scripts
- `npm run dev` – local dev
- `npm run build` – production build
- `npm run export` – static export to `out/`

## Deploy
- **Vercel**: import the repo and deploy (static output).
- **GitHub Pages**: run `npm run export` and publish the `out/` folder. If your repo is not at the domain root, set `basePath` in `next.config.mjs`.

## Notes
- OpenGraph placeholder is `public/og.svg` (replace with a branded image when ready).
