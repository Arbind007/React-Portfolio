# Arbind Lochan Mishra — Identity Security Portfolio

Multi-page React portfolio for identity security, IAM, identity governance, automation, and emerging AI identity research.

## Run locally

```bash
npm install
npm start
```

The site uses a lightweight history-based router so every required route works directly and on refresh. Netlify-style fallback routing is included in `public/_redirects`. The homepage enhances itself with a real Three.js identity network loaded from the public CDN and falls back to a CSS network when WebGL, the CDN, or reduced-motion preferences prevent enhancement.

## Content architecture

- `src/data/profile.js` — verified profile positioning and LinkedIn URL.
- `src/data/experience.js` — journey, work streams, expertise groups, and lab experiments.
- `src/data/projects.js` — project case studies and conceptual diagrams.
- `src/data/articles.js` — manually maintained writing entries.
- `src/App.js` — route map, shared shell, pages, and Three.js scene.
- `src/App.css` — visual system and responsive layouts.

The resume route is ready for the real PDF at `public/resume/arbind-lochan-mishra.pdf`. The PDF was not present in the supplied workspace, so the page shows an explicit non-fabricated attachment state until that asset is provided.
