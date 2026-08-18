import useReveal from "../hooks/useReveal";
import { IconInput, IconCpu, IconReport } from "./Icons";
import "./HowItWorks.css";

const STEPS = [
  {
    icon: IconInput,
    title: "Input agricultural data",
    desc: "Type in soil readings (N, P, K, pH) and local conditions, or upload a leaf photo straight from your phone.",
  },
  {
    icon: IconCpu,
    title: "AI analyzes the data",
    desc: "AgroMind compares the reading against agronomic ranges and visual disease markers in under a second.",
  },
  {
    icon: IconReport,
    title: "Get a clear recommendation",
    desc: "Receive the best-fit crop or a disease verdict, each with a confidence score and a plain-language next step.",
  },
];

export default function HowItWorks() {
  const ref = useReveal();
  return (
    <section id="how-it-works" className="how" ref={ref}>
      <div className="container">
        <div className="how__head reveal">
          <span className="eyebrow">How it works</span>
          <h2 className="how__title">From field reading to decision, in three steps.</h2>
        </div>

        <div className="how__steps">
          {STEPS.map((s, idx) => (
            <div className="how-step reveal" key={s.title} style={{ transitionDelay: `${idx * 100}ms` }}>
              <div className="how-step__num">{String(idx + 1).padStart(2, "0")}</div>
              <div className="how-step__icon"><s.icon /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              {idx < STEPS.length - 1 && <span className="how-step__connector" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
