import useReveal from "../hooks/useReveal";
import { CROPS } from "../lib/cropModel";
import "./InsightsPreview.css";

const CONFIDENCE_SPREAD = [
  { range: "50–65%", pct: 8 },
  { range: "65–80%", pct: 22 },
  { range: "80–90%", pct: 34 },
  { range: "90–97%", pct: 36 },
];

const STAT_CARDS = [
  { label: "Crop profiles in this build", value: String(CROPS.length) },
  { label: "Inputs per recommendation", value: "6" },
  { label: "On-device inference time", value: "< 1s" },
];

export default function InsightsPreview() {
  const ref = useReveal();
  return (
    <section id="insights" className="insights" ref={ref}>
      <div className="container">
        <div className="insights__head reveal">
          <span className="eyebrow">Insights preview</span>
          <h2 className="insights__title">What the console looks like day to day.</h2>
          <p className="insights__sub">
            Sample product-preview data from this build — shown to illustrate
            the reporting layer, not a claim about live usage.
          </p>
        </div>

        <div className="insights__grid">
          <div className="insight-card insight-card--chart reveal">
            <div className="insight-card__header">
              <h3>Recommendation confidence spread</h3>
              <span className="insight-card__tag">Demo dataset</span>
            </div>
            <div className="bar-chart">
              {CONFIDENCE_SPREAD.map((b) => (
                <div className="bar-chart__col" key={b.range}>
                  <div className="bar-chart__track">
                    <div className="bar-chart__fill" style={{ "--target": `${b.pct}%` }} />
                  </div>
                  <span className="bar-chart__value">{b.pct}%</span>
                  <span className="bar-chart__label">{b.range}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="insight-card reveal">
            <div className="insight-card__header">
              <h3>Supported crop profiles</h3>
              <span className="insight-card__tag">This build</span>
            </div>
            <ul className="crop-list">
              {CROPS.map((c) => (
                <li key={c.name}>
                  <span>{c.name}</span>
                  <span className="crop-list__dot" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="stat-row reveal">
          {STAT_CARDS.map((s) => (
            <div className="stat-card" key={s.label}>
              <span className="stat-card__value">{s.value}</span>
              <span className="stat-card__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
