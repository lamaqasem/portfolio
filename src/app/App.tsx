import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SparkleEffect from "./components/SparkleEffect";
import GarageAI from "./components/GarageAI";

export default function App() {
  const [hash, setHash] = useState(window.location.hash);
  const isGarage = hash === "#/garage-ai";

  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Scroll handling: top for the Garage page, back to projects when returning
  useEffect(() => {
    if (isGarage) {
      window.scrollTo({ top: 0 });
    } else if (hash === "#projects") {
      requestAnimationFrame(() =>
        document.getElementById("projects")?.scrollIntoView()
      );
    }
  }, [hash, isGarage]);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Subtle background pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 182, 217, 0.15) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Sparkle cursor effect */}
      <SparkleEffect />

      <main className="relative z-10">
        {isGarage ? (
          <GarageAI />
        ) : (
          <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
