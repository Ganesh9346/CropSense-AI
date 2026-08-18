# AgroMind AI — Premium Home Page

An AI-powered agriculture platform landing page: crop recommendation and plant
disease detection, built as a self-contained React + Vite frontend (no
backend). Submission for **Acdyon Technologies — Frontend Challenge, Part 2**.

## Stack

React 19 · Vite · plain CSS (design tokens, no UI framework) · no backend

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve the production build locally
```

## What's interactive

- **Crop recommendation** (`#demo`): drag the six sliders (N, P, K,
  temperature, humidity, pH) and watch the recommended crop and confidence
  gauge update live. Scoring logic lives in `src/lib/cropModel.js` — a small,
  transparent rule-based comparator against typical agronomic ranges, not a
  trained model. It's labeled "demo model" in the UI for that reason.
- **Disease detection** (`#demo`): step through three sample leaf scans.
  Since there's no backend or real vision model in this build, results are
  pre-scored sample data (`src/lib/diseaseSamples.js`), clearly labeled
  "Sample scans" rather than presented as a live upload pipeline.
- **Insights preview** (`#insights`): a confidence-spread chart and crop-list
  card, explicitly labeled as demo/product-preview data — no invented user
  counts, testimonials, or company stats anywhere on the page.

## Deploying

This is a static Vite build, so any static host works:

```bash
npm run build
```

- **Vercel**: `vercel --prod` (or import the repo in the Vercel dashboard —
  it auto-detects Vite).
- **Netlify**: drag-and-drop the `dist/` folder in the Netlify dashboard, or
  connect the repo with build command `npm run build` and publish directory
  `dist`.
- **GitHub Pages**: push `dist/` to a `gh-pages` branch, or use the
  `gh-pages` npm package with `"homepage"` set in `package.json`.

## Project structure

```
src/
  components/     Navbar, Hero, ProductDemo, Features, HowItWorks,
                   InsightsPreview, FinalCTA, Footer (each with its own .css)
  hooks/          useReveal.js — IntersectionObserver-based scroll reveal
                  useKonami.js — bonus-round easter egg trigger
  lib/            cropModel.js, diseaseSamples.js — demo data + logic
  index.css       design tokens (color, type, radius) + base styles
  App.jsx         section composition
```

## Bonus round

There's a small easter egg on the page — try the Konami code
(↑ ↑ ↓ ↓ ← → ← → B A).
