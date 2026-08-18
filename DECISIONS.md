# DECISIONS.md — AgroMind AI Home Page (Part 2)

## 1. Why this approach over the obvious alternative

The obvious path was a Tailwind + component-library build (shadcn, a UI kit,
pre-made "SaaS landing page" blocks). I rejected it because the brief is
explicit that taste is being graded, and library defaults are exactly the
templated look the brief warns against. Instead I built a small custom design
token system (`src/index.css`) — a specific color palette (deep forest
`#153A2B`, growth green `#3E8E5A`, warm wheat `#E0A438`), a serif/sans/mono
type pairing (Fraunces / Manrope / IBM Plex Mono), and one signature element:
the "field console" — a sensor-readout-styled panel with an animated
confidence gauge — used in both the hero and the live demo so the product's
core value (turn raw field numbers into a decision) is shown, not described.

## 2. Where I used AI tools, and what I verified afterward

I used Claude to scaffold the Vite project, write the component structure,
and draft the crop-scoring heuristic and copy. What I personally checked
afterward:
- Ran `npm run build` and `npm run lint` (oxlint, zero warnings) to confirm
  the generated code actually compiles and isn't just plausible-looking.
- Read through `cropModel.js` line by line and adjusted the agronomic ranges
  (N/P/K/temp/humidity/pH per crop) against general agronomy knowledge so the
  demo doesn't silently recommend nonsense for reasonable inputs.
- Manually re-checked every stat and label on the page against the "no fake
  claims" constraint — removed anything that could read as a user count or
  testimonial, and added explicit "demo model" / "sample scans" / "demo
  dataset" labels wherever the UI shows a number that isn't backed by a real
  backend, so the page can't be mistaken for shipping more than it does.
- Verified responsiveness by reading every media query at 390px and 1440px
  breakpoints rather than assuming the generated CSS behaved correctly.

## 3. One trade-off under the time limit, and what I'd do with a real week

**Trade-off:** the disease-detection panel uses three pre-scored sample scans
instead of real image upload + inference, because there's no backend in this
build and a genuinely useful vision model doesn't run client-side in a
reasonable bundle size. I chose to be explicit about this ("Sample scans" tag,
no upload button implying live inference) rather than fake a working upload
flow that silently returns canned results — that felt closer to the
challenge's honesty constraint than a more "impressive"-looking but
misleading demo.

**With a real week:** I'd wire up an actual `<input type="file">` upload flow
against a lightweight image classifier (e.g., a TF.js MobileNet fine-tuned on
PlantVillage, run client-side via WASM/WebGL so it still needs no backend),
add real Lighthouse-driven perf passes on the font loading strategy, and
extend the crop model from six illustrative profiles to a fuller dataset with
citations back to the agronomic ranges used.
