import useReveal from "../hooks/useReveal";
import { IconSeedling, IconScan, IconInsight } from "./Icons";
import "./Features.css";

const FEATURES = [
  {
    icon: IconSeedling,
    title: "Crop recommendation",
    desc: "Enter N-P-K, temperature, humidity and pH once, and get the crop best suited to that exact plot, ranked against runner-up options.",
  },
  {
    icon: IconScan,
    title: "Plant disease detection",
    desc: "Scan a leaf photo to catch blight, rust and mildew patterns while they're still treatable, with a confidence score and next step.",
  },
  {
    icon: IconInsight,
    title: "AI-powered insights",
    desc: "Every recommendation comes with the reasoning behind it — which readings mattered most, and what to watch next season.",
  },
];

export default function Features() {
  const ref = useReveal();
  return (
    <section id="features" className="features" ref={ref}>
      <div className="container">
        <div className="features__head reveal">
          <span className="eyebrow">Capabilities</span>
          <h2 className="features__title">Built around two questions farmers ask most.</h2>
        </div>

        <div className="features__grid">
          {FEATURES.map((f, idx) => (
            <div className="feature-card reveal" key={f.title} style={{ transitionDelay: `${idx * 90}ms` }}>
              <div className="feature-card__icon"><f.icon /></div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
