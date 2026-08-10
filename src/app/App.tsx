import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SparkleEffect from "./components/SparkleEffect";

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Subtle background pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 182, 217, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Sparkle cursor effect */}
      <SparkleEffect />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}