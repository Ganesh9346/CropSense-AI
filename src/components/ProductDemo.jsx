import { useMemo, useState } from "react";
import { recommendCrop } from "../lib/cropModel";
import { DISEASE_SAMPLES } from "../lib/diseaseSamples";
import useReveal from "../hooks/useReveal";
import "./ProductDemo.css";

const FIELDS = [
  { key: "N", label: "Nitrogen (N)", unit: "kg/ha", min: 0, max: 140 },
  { key: "P", label: "Phosphorus (P)", unit: "kg/ha", min: 5, max: 145 },
  { key: "K", label: "Potassium (K)", unit: "kg/ha", min: 5, max: 205 },
  { key: "temp", label: "Temperature", unit: "°C", min: 8, max: 40, step: 0.1 },
  { key: "humidity", label: "Humidity", unit: "%", min: 10, max: 100 },
  { key: "ph", label: "Soil pH", unit: "", min: 3.5, max: 9, step: 0.1 },
];

const DEFAULTS = { N: 90, P: 42, K: 43, temp: 26.4, humidity: 82, ph: 6.5 };

export default function ProductDemo() {
  const ref = useReveal();
  const [inputs, setInputs] = useState(DEFAULTS);
  const [activeSample, setActiveSample] = useState(DISEASE_SAMPLES[1]);

  const result = useMemo(() => recommendCrop(inputs), [inputs]);
  const circumference = 2 * Math.PI * 46;
  const offset = circumference - (result.confidence / 100) * circumference;

  return (
    <section id="demo" className="demo" ref={ref}>
      <div className="container">
        <div className="demo__head reveal">
          <span className="eyebrow">Product demo — try it yourself</span>
          <h2 className="demo__title">Two models, one console.</h2>
          <p className="demo__sub">
            Drag the sliders to match a real soil report, or step through a
            sample leaf scan. This is a self-contained demo running in your
            browser — no data leaves this page.
          </p>
        </div>

        <div className="demo__grid">
          {/* Crop recommendation panel */}
          <div className="demo-card reveal">
            <div className="demo-card__header">
              <h3>Crop recommendation</h3>
              <span className="demo-card__tag">Rule-based demo model</span>
            </div>

            <div className="demo-card__body demo-card__body--split">
              <div className="sliders">
                {FIELDS.map((f) => (
                  <label className="slider" key={f.key}>
                    <span className="slider__label">
                      <span>{f.label}</span>
                      <span className="slider__value">
                        {inputs[f.key]}{f.unit}
                      </span>
                    </span>
                    <input
                      type="range"
                      min={f.min}
                      max={f.max}
                      step={f.step || 1}
                      value={inputs[f.key]}
                      onChange={(e) =>
                        setInputs((prev) => ({ ...prev, [f.key]: parseFloat(e.target.value) }))
                      }
                    />
                  </label>
                ))}
              </div>

              <div className="result-panel">
                <svg viewBox="0 0 120 120" className="result-panel__gauge">
                  <circle cx="60" cy="60" r="46" className="result-panel__track" />
                  <circle
                    cx="60" cy="60" r="46"
                    className="result-panel__fill"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                  />
                </svg>
                <div className="result-panel__text">
                  <span className="result-panel__eyebrow">Best match</span>
                  <span className="result-panel__crop">{result.crop.name}</span>
                  <span className="result-panel__conf">{result.confidence}% confidence</span>
                </div>
                <p className="result-panel__note">{result.crop.note}</p>
                <p className="result-panel__runner">
                  Runner-up: {result.runnerUp.name}
                </p>
              </div>
            </div>
          </div>

          {/* Disease detection panel */}
          <div className="demo-card reveal">
            <div className="demo-card__header">
              <h3>Plant disease detection</h3>
              <span className="demo-card__tag">Sample scans</span>
            </div>

            <div className="demo-card__body">
              <div className="sample-picker">
                {DISEASE_SAMPLES.map((s) => (
                  <button
                    key={s.id}
                    className={`sample-picker__item ${activeSample.id === s.id ? "is-active" : ""}`}
                    onClick={() => setActiveSample(s)}
                  >
                    <LeafThumb tone={s.tone} />
                    <span>{s.label}</span>
                  </button>
                ))}
              </div>

              <div className={`scan-result scan-result--${activeSample.tone}`}>
                <div className="scan-result__thumb">
                  <LeafThumb tone={activeSample.tone} large />
                </div>
                <div className="scan-result__info">
                  <div className="scan-result__row">
                    <span className="scan-result__crop">{activeSample.crop} leaf</span>
                    <span className="scan-result__conf">{activeSample.confidence}% confidence</span>
                  </div>
                  <span className={`scan-result__verdict scan-result__verdict--${activeSample.tone}`}>
                    {activeSample.verdict}
                  </span>
                  <p className="scan-result__detail">{activeSample.detail}</p>
                  <p className="scan-result__action">{activeSample.action}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LeafThumb({ tone = "healthy", large = false }) {
  const size = large ? 64 : 30;
  const colors = {
    healthy: "#3E8E5A",
    warning: "#C1502E",
  };
  const color = colors[tone] || colors.healthy;
  return (
    <svg viewBox="0 0 40 40" width={size} height={size}>
      <path d="M8 32C8 16 18 9 32 9C32 24 22 32 8 32Z" fill={color} fillOpacity="0.16" stroke={color} strokeWidth="1.6" />
      <path d="M8 32C11 24 17 17 26 13" stroke={color} strokeWidth="1.3" fill="none" strokeLinecap="round" />
      {tone === "warning" && (
        <>
          <circle cx="18" cy="21" r="2.4" fill={color} fillOpacity="0.7" />
          <circle cx="23" cy="16" r="1.6" fill={color} fillOpacity="0.5" />
        </>
      )}
    </svg>
  );
}
