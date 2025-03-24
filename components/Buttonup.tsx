import ArrouHubIcon from '@/components/icons/ArrouHubicon';
import { useEffect, useState } from 'react';
import { useTheme } from "@/context/ThemeContext";

export default function ButtonUp(){
    const [isVisible, setIsVisible ] = useState(false);
    const { theme, systemPrefersDark} = useTheme();

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
            setIsVisible(true); 
          } else {
            setIsVisible(false); 
          }
        };
      
        window.addEventListener("scroll", handleScroll);
      
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    return (
        <div
            className={` fixed bottom-20 right-10 z-40 lg:bottom-20 lg:right-20 transition-opacity duration-200 ease-in-out transform ${
            isVisible ? "opacity-100 visible scale-110" : "opacity-0 invisible scale-95"}
            ${(theme === "dark" || (theme === "system" && systemPrefersDark)) ? "" : "opacity-0 invisible"}
            `}
        >
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-cyan-800 border-2 border-cyan-400 px-4 py-3 text-2xl text-white shadow-[inset_0px_-4px_2px_rgb(0_0_0_/_25%)] transition-all duration-300 hover:animate-zoom"
            >
                <ArrouHubIcon />
            </button>
        </div>
    );
}