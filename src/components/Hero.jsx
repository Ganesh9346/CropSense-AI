import { useEffect, useState } from "react";
import { IconArrowRight } from "./Icons";
import "./Hero.css";

const READOUT_SEQUENCE = [
  { N: 90, P: 42, K: 43, temp: 26.4, humidity: 82, ph: 6.5, crop: "Rice", confidence: 94 },
  { N: 21, P: 67, K: 79, temp: 18.9, humidity: 26, ph: 7.1, crop: "Chickpea", confidence: 89 },
  { N: 104, P: 78, K: 198, temp: 27.8, humidity: 78, ph: 6.1, crop: "Banana", confidence: 91 },
];

export default function Hero() {
  const [i, setI] = useState(0);
  const [fillPct, setFillPct] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % READOUT_SEQUENCE.length), 4200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    setFillPct(0);
    const t = setTimeout(() => setFillPct(READOUT_SEQUENCE[i].confidence), 160);
    return () => clearTimeout(t);
  }, [i]);

  const data = READOUT_SEQUENCE[i];
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (fillPct / 100) * circumference;

  return (
    <section className="hero" id="top">
      <div className="hero__ambient" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy reveal">
          <span className="eyebrow">Crop intelligence, from soil to screen</span>
          <h1 className="hero__title">
            Read the field <em>before</em> you plant it.
          </h1>
          <p className="hero__sub">
            AgroMind AI turns soil readings and leaf photos into decisions —
            the right crop for this plot, and early warning before disease
            spreads through it. No agronomy degree required.
          </p>
          <div className="hero__cta">
            <a href="#demo" className="btn btn-primary">
              Run a live demo <IconArrowRight />
            </a>
            <a href="#how-it-works" className="btn btn-ghost">See how it works</a>
          </div>
          <div className="hero__meta">
            <span><strong>2</strong> models running &mdash; crop match &amp; disease scan</span>
          </div>
        </div>

        <div className="hero__visual reveal">
          <div className="console">
            <div className="console__head">
              <span className="console__dot" />
              <span className="console__title">field-console</span>
              <span className="console__badge">live read</span>
            </div>

            <div className="console__body">
              <div className="console__rows">
                {[
                  ["N", data.N, "kg/ha"],
                  ["P", data.P, "kg/ha"],
                  ["K", data.K, "kg/ha"],
                  ["Temp", data.temp, "°C"],
                  ["Humidity", data.humidity, "%"],
                  ["pH", data.ph, ""],
                ].map(([label, val, unit]) => (
                  <div className="console__row" key={label}>
                    <span>{label}</span>
                    <span className="console__val">{val}{unit}</span>
                  </div>
                ))}
              </div>

              <div className="console__result">
                <svg viewBox="0 0 100 100" className="console__gauge">
                  <circle cx="50" cy="50" r="40" className="console__gauge-track" />
                  <circle
                    cx="50" cy="50" r="40"
                    className="console__gauge-fill"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                  />
                </svg>
                <div className="console__result-text">
                  <span className="console__result-label">Best match</span>
                  <span className="console__result-crop">{data.crop}</span>
                  <span className="console__result-conf">{fillPct}% confidence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
