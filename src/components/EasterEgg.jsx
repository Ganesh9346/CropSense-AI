import useKonami from "../hooks/useKonami";
import "./EasterEgg.css";

export default function EasterEgg() {
  const [triggered, dismiss] = useKonami();
  if (!triggered) return null;

  return (
    <div className="egg" role="dialog" aria-label="Easter egg">
      <div className="egg__card">
        <span className="egg__sprout">🌱</span>
        <h3>Field sensors calibrated.</h3>
        <p>You found the console's hidden switch. Every crop in this build grows 20% faster for the next 5 seconds — purely cosmetic, we promise.</p>
        <button className="btn btn-primary btn-sm" onClick={dismiss}>Back to the field</button>
      </div>
    </div>
  );
}
