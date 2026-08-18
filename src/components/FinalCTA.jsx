import useReveal from "../hooks/useReveal";
import { IconArrowRight } from "./Icons";
import "./FinalCTA.css";

export default function FinalCTA() {
  const ref = useReveal();
  return (
    <section className="final-cta" ref={ref}>
      <div className="container">
        <div className="final-cta__card reveal">
          <span className="eyebrow">Ready when your field is</span>
          <h2>Bring your next reading to AgroMind AI.</h2>
          <p>Run the live demo above with your own soil numbers, or explore the code behind it on GitHub.</p>
          <div className="final-cta__actions">
            <a href="#demo" className="btn btn-primary">
              Try the live demo <IconArrowRight />
            </a>
            <a href="#top" className="btn btn-ghost">Back to top</a>
          </div>
        </div>
      </div>
    </section>
  );
}
