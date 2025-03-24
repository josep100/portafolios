import { TypeAnimation } from "react-type-animation";
import { useTheme } from "@/context/ThemeContext";
import { useEffect } from "react";
import StarryBackground from '@/components/Starrybackground';
 
export default function Intro (){
    const { theme, systemPrefersDark } = useTheme();
    
    return (
        <section className="relative" id="Inicio">
            {(theme === "dark" || (theme === "system" && systemPrefersDark)) && <StarryBackground />}
            <div className="overflow-hidden pb-5">
                <div className="relative ">
                    <div className="dark:bg-transparent bg-primary-500">
                        <div className="container md:ml-0 flex flex-col md:flex-row justify-center items-center gap-11 xl:gap-52  py-20 xl:pl-56 sm:px-4">
                            <div className="dark:text-white text-black col-span-2 lg:col-span-1 w-[255px]">
                                <h1 className="text-6xl font-bold leading-tight drop-shadow-xl">Josep<br />Perales</h1>
                                <span className="text-xl font-light uppercase leading-10">
                                    <TypeAnimation
                                        sequence={[
                                            'front-end developer', 1000, 
                                            '', 500, 
                                        ]}
                                        speed={20}
                                        wrapper="span"
                                        cursor={true} 
                                        repeat={Infinity}
                                        style={{ transition: 'none' }}
                                    />
                                </span>
                            </div>
                            <div className="col-span-2 animate-move-y lg:col-span-1">
                                <figure className="h-56"><img src="images/hero.svg" alt="imagen hero" className="h-full" /></figure>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`left-0 h-[150px] w-[6000px] bg-bottom ${
                        (theme === "dark" || (theme === "system" && systemPrefersDark)) ? "opacity-0" : "opacity-100 animate-wave-1 bg-bg-wave"
                        }`} id = "wave1"
                    ></div>
                    <div
                        className={`absolute bottom-0 left-0 h-[150px] w-[6000px] opacity-50 bg-bottom ${
                        (theme === "dark" || (theme === "system" && systemPrefersDark)) ? "opacity-0" : "opacity-100 animate-wave-2 bg-bg-wave"
                        }`} id = "wave2"
                    ></div>
                </div>
            </div>
        </section>
    );
}