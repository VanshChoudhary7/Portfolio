import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AboutSection from './components/AboutSection';
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#060b18] text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <AboutSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
