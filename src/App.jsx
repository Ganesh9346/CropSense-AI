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
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductDemo />
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
