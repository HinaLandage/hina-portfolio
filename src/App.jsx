import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("portfolio-theme");

      if (savedTheme) {
        return savedTheme === "dark";
      }

      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return true;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
    } catch {
      // Theme still works if storage is unavailable.
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((current) => !current);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-[#09090f] text-white" : "bg-[#faf9ff] text-[#181522]"
      }`}
    >
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main>
        <Hero isDark={isDark} />
        <About isDark={isDark} />
        <Skills isDark={isDark} />
        <Projects isDark={isDark} />
        <Experience isDark={isDark} />
        <Contact isDark={isDark} />
      </main>
    </div>
  );
}
