# Tuonchi Digital

Marketing website for **Tuonchi Digital**, a Kenya-based digital agency offering web design, website optimization, WhatsApp/SMS automation, and SEO services.

## Project structure

- `index.html` – page markup/content.
- `styles.css` – site styling, themes, responsive behavior, and animations.
- `main.js` – interactive behavior (theme toggle, mobile navigation, smooth scrolling, section highlights, and reveal animations).
- `logo.png`, `hero-g.png` – image assets.

## Run locally

Because this is a static website, you can serve it with any lightweight HTTP server.

### Option 1: Python

```bash
python -m http.server 8000
```

Then open: `http://localhost:8000`

### Option 2: VS Code Live Server

Open the folder and start Live Server from `index.html`.

## Editing guide

- Update section content directly in `index.html`.
- Update colors/spacing/animations in `styles.css`.
- Update interactivity in `main.js`.
- For new sections, add a corresponding nav link (`href="#section-id"`) if it should appear in top navigation.

## Deployment

This site can be deployed to any static host, for example:

- GitHub Pages
- Netlify
- Vercel (static mode)
- Cloudflare Pages

Deploy the repository root as-is (no build step required).

## Quick QA checklist

Before publishing changes:

1. Verify the site loads without console errors.
2. Verify mobile menu opens/closes correctly.
3. Verify theme toggle persists after refresh.
4. Verify all CTA links (WhatsApp/email/phone) open the expected destination.
5. Verify section anchor scrolling is correct and nav highlighting still works.
