import { LeafMark } from "./Icons";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__row">
        <a href="#top" className="footer__brand">
          <span className="footer__mark"><LeafMark /></span>
          AgroMind <em>AI</em>
        </a>

        <nav className="footer__links" aria-label="Footer">
          <a href="#demo">Live demo</a>
          <a href="#features">Capabilities</a>
          <a href="#how-it-works">How it works</a>
          <a href="#insights">Insights</a>
        </nav>

        <p className="footer__note">Built as a frontend challenge submission. Demo data only — no live backend.</p>
      </div>
    </footer>
  );
}
