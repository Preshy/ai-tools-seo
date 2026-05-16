# AI Tools SEO - Programmatic Site

Static site built with Astro, deployed to GitHub Pages.

## Setup
```bash
npm install
npm run dev
```

## Add Keywords
1. Edit `data/keywords.json`
2. Or run `npm run generate` to auto-add templates

## Deploy
Push to `main`. GitHub Actions builds and deploys to Pages automatically.

## Customize
- Change `site` & `base` in `astro.config.mjs`
- Replace `ca-pub-XXXXXXXXXXXXXXXX` with your AdSense ID
- Update affiliate links in `data/keywords.json`
