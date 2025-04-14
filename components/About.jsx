import { useTheme } from "@/context/ThemeContext";
import DownHubIcon from '@/components/icons/DownHubicon';
import StarryBackground from '@/components/Starrybackground';
import Link from "next/link";

export default function About(){
    
    const { theme, systemPrefersDark } = useTheme();
        
    return (
        <section className="relative container mx-auto overflow-hidden px-2 py-36 sm:px-4 mr-4 dark:bg-white/0" id="Sobre-mi">
            {(theme === "dark" || (theme === "system" && systemPrefersDark)) && <StarryBackground />}
            <div className="grid grid-cols-2 gap-16 lg:gap-40 xl:gap-0 lg:pl-11">
                <div className="col-span-2 lg:col-span-1">
                    <h1 className="mb-5 text-2xl font-bold uppercase dark:text-white text-black text-center">sobre mí</h1>
                    <p className=' whitespace-pre-line dark:text-white text-black'>
                    {`Hola, soy Josep 👋 
                    
                    Soy desarrollador Frontend y disfruto creando interfaces web que no solo se vean bien, sino que también funcionen con fluidez. Llevo un año trabajando con tecnologías como React, Next.js, TypeScript y Tailwind CSS, y cada proyecto que hago me ayuda a mejorar tanto a nivel técnico como personal.

                    Desarrollé este portafolio desde cero para mostrar lo que sé hacer y también para seguir aprendiendo. Me gusta cuidar los detalles, escribir código limpio y pensar en cómo mejorar la experiencia del usuario en cada pantalla.

                    Me motiva trabajar en equipo, rodearme de personas de las que pueda aprender y aportar valor en proyectos reales. Uno de mis objetivos principales es seguir creciendo como profesional en entornos colaborativos, donde pueda enfrentar nuevos retos, mejorar mis habilidades y convertirme en un desarrollador cada vez más completo.

                    Estoy abierto a nuevas oportunidades que me permitan aprender, aportar y avanzar en mi carrera como Frontend Developer 🚀`}
                    </p>
                </div>
                <div className="col-span-2 place-self-center lg:col-span-1 pt-0 md:pt-12 ">
                        <figure className='lg:rotate-12 rotate-0 '>
                            <img className="w-80 h-80 object-cover rounded-2xl border-4 dark:border-gray-50 border-cyan-500 shadow-lg " src="/images/IMG_4336.jpeg" alt="Sobre mi" />
                        </figure>
                    <div className="flex justify-center lg:justify-start">
                        <Link href="/files/JOSEP PERALES-CV1.pdf" className="mt-5 inline-flex gap-2 rounded-full dark:bg-gray-700 bg-primary-500 px-3 py-2 text-white shadow-[inset_0px_-4px_2px_rgb(0_0_0_/_25%)] hover:animate-zoom z-40 relative items-center " target='_blank' download>
                            <DownHubIcon />
                            Descargar CV
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}