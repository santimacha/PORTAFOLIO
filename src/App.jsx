import { useState } from "react";
import Navbar from "./features/navbar/Navbar";
import Hero from "./features/hero/Hero";
import About from "./features/about/About";
import Projects from "./features/projects/Projects";
import Skills from "./features/skills/Skills";
import Contact from "./features/contact/Contact";
import "./App.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="app">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero setActiveSection={setActiveSection} />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
