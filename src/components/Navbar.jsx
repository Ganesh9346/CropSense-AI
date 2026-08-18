import { useEffect, useState } from "react";
import { LeafMark } from "./Icons";
import "./Navbar.css";

const LINKS = [
  { href: "#demo", label: "Live demo" },
  { href: "#features", label: "Capabilities" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#insights", label: "Insights" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__row">
        <a href="#top" className="nav__brand">
          <span className="nav__mark"><LeafMark /></span>
          AgroMind <em>AI</em>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="nav__actions">
          <a href="#demo" className="btn btn-primary btn-sm">Try the demo</a>
        </div>

        <button
          className={`nav__burger ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`nav__mobile ${open ? "is-open" : ""}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href="#demo" className="btn btn-primary" onClick={() => setOpen(false)}>Try the demo</a>
      </div>
    </header>
  );
}
