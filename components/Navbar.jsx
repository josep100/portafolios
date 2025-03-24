'use client'
import { useEffect } from 'react';
import {useActiveSection} from "@/context/ ActiveSectionContext";
import NavLink from '@/components/Navlinks';
import Link from "next/link";

export default function Navbar (){
    
    const {setActiveSection} = useActiveSection();

    useEffect(() => {
        const observerOptions = {
            root: null, // Usa el viewport
            rootMargin: "0px", // Sin margen extra
            threshold: 0.75, // Se activa cuando el 60% de la sección es visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && window.scrollY != 0) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        const sections = document.querySelectorAll("section");
    
        sections.forEach((section) => observer.observe(section));
        

        // ✅ Detectar cuando el usuario está en la parte superior de la página
        const handleScroll = () => {
            if (window.scrollY === 0 ) {
                //setActiveSection("Inicio");
            }

            if (window.location.hash) {
                history.replaceState(null, "", window.location.pathname);
            }
        };
        
        window.addEventListener("scroll", handleScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Dependencia de `activeSection` para que no se actualice innecesariamente

    return (
        
            <nav className="nav hidden lg:flex">
                <NavLink className="flex justify-center items-center gap-8 lg:gap-6"/>    
            </nav>
     
    );
}


