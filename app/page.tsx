"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider } from "@/context/ThemeContext";
import ActiveSectionProvider from "@/context/ ActiveSectionContext";
import "@/app/globals.css";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Skills from "@/components/skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ButtonUp from "@/components/Buttonup";
import Mobilemenu from "@/components/Mobilemenu";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <ThemeProvider>
      <ActiveSectionProvider>
        <Header setIsOpen={setIsOpen} />
        <main>
          <Intro />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <ButtonUp />
        <Mobilemenu isOpen={isOpen} setIsOpen={setIsOpen} />
        <Footer />
      </ActiveSectionProvider>
    </ThemeProvider>
  );
}