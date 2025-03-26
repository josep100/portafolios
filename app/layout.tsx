

/*import { ThemeProvider } from "@/context/ThemeContext";
import ActiveSectionProvider from "@/context/ ActiveSectionContext";
import { useEffect, useState } from 'react';
import '@/app/globals.css'
import Header from "@/components/Header";
import Intro from '@/components/Intro';
import About from '@/components/About';
import Skills from '@/components/skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ButtonUp from '@/components/Buttonup';
import Mobilemenu from '@/components/Mobilemenu';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importar los estilos de AOS

export default function RootLayout(){
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {

        AOS.init({ duration: 1000, once: true });
        setTimeout(() => {
            document
              .querySelector("meta[name='theme-color']")
              ?.setAttribute("content", "#ff0000"); // bg-cyan-500
          }, 100); // 100 ms de retraso
      }, []);

    return (
        
        <html lang="es">
            <head>
                <meta name="theme-color" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
            </head>
            <body className="relative bg-gradient-to-b dark:from-blue-950 dark:to-black bg-white">
                <ThemeProvider>
                    <ActiveSectionProvider>
                        <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
                    </ActiveSectionProvider>
                    <main>
                        <Intro />
                        <About />
                        bg-gradient-to-b dark:from-blue-950 dark:to-black
                        <Skills />
                        <Projects />
                        <Contact />
                    </main>
                    <ButtonUp />
                    <ActiveSectionProvider>
                        <Mobilemenu isOpen={isOpen} setIsOpen={setIsOpen}/>
                    </ActiveSectionProvider>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}*/

import { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mi Portafolio",
  description: "Portafolio profesional",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gradient-to-b dark:from-blue-950 dark:to-black bg-white`}>
        {children}
      </body>
    </html>
  );
}
