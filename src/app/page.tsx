"use client";
import { LiquidGlass } from "@creativoma/liquid-glass";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import TechStackSection from "./components/TechStackSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  const [bahasa, setBahasa] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="fixed bottom-4 right-4 z-[9999] flex gap-2">
        <button
          onClick={() => setBahasa(false)}
          className={`px-3 py-1 rounded-md border text-sm font-semibold transition ${
            !bahasa
              ? "bg-gray-800 text-white"
              : "bg-white text-gray-800 hover:bg-gray-100"
          }`}
        >
          EN
        </button>

        <button
          onClick={() => setBahasa(true)}
          className={`px-3 py-1 rounded-md border text-sm font-semibold transition ${
            bahasa
              ? "bg-gray-800 text-white"
              : "bg-white text-gray-800 hover:bg-gray-100"
          }`}
        >
          ID
        </button>
      </div>
      <div className="w-full" data-aos="fade-up">
        <LiquidGlass
          tintColor="rgba(255, 255, 255, 0.2)"
          backdropBlur={3}
          className="rounded-3xl md:p-8 border mt-2 md:mt-5 border-white/30 shadow-lg w-full md:w-3/4 mx-auto"
        >
          <HeroSection bahasa={bahasa} />
          <AboutSection bahasa={bahasa} />
          <ProjectsSection bahasa={bahasa} />
          <TechStackSection bahasa={bahasa} />
          <ContactSection bahasa={bahasa} />
        </LiquidGlass>
      </div>
    </>
  );
}
