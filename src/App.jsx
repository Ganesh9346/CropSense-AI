import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductDemo from "./components/ProductDemo";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import InsightsPreview from "./components/InsightsPreview";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import EasterEgg from "./components/EasterEgg";

export default function App() {
  useEffect(() => {
    if (window.location.hash) return;

    const demoSection = document.getElementById("demo");
    if (!demoSection) return;

    window.history.replaceState(null, "", "#demo");
    requestAnimationFrame(() => {
      demoSection.scrollIntoView({ behavior: "auto", block: "start" });
    });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <ProductDemo />
        <Hero />
        <Features />
        <HowItWorks />
        <InsightsPreview />
        <FinalCTA />
      </main>
      <Footer />
      <EasterEgg />
    </>
  );
}
