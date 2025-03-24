import { useTheme } from "@/context/ThemeContext";
import DownHubIcon from '@/components/icons/DownHubicon';
import StarryBackground from '@/components/Starrybackground';

export default function About(){
    
    const { theme, systemPrefersDark } = useTheme();
        
    return (
        <section className="relative container mx-auto overflow-hidden px-2 py-36 sm:px-4 mr-4 dark:bg-white/0" id="Sobre-mi">
            {(theme === "dark" || (theme === "system" && systemPrefersDark)) && <StarryBackground />}
            <div className="grid grid-cols-2 gap-16 lg:gap-40 xl:gap-0 lg:pl-11">
                <div className="col-span-2 lg:col-span-1">
                    <h1 className="mb-5 text-2xl font-bold uppercase dark:text-white text-black text-center">sobre mí</h1>
                    <p className=' whitespace-pre-line dark:text-white text-black'>
                            Soy un desarrollador Frontend apasionado por crear interfaces intuitivas y eficientes. Me destaco por mi capacidad de resolución de problemas, abordando cada desafío con un enfoque lógico y creativo para encontrar la mejor solución.
                            {'\n'}{'\n'}
                            Creo en el poder del trabajo en equipo y disfruto colaborar con diseñadores, desarrolladores y otros profesionales para construir experiencias digitales de alto impacto. Mi capacidad de adaptabilidad me permite aprender rápidamente nuevas tecnologías y ajustarme a diferentes entornos de desarrollo, asegurando siempre la entrega de productos de calidad.
                            {'\n'}{'\n'}
                            Siempre busco mejorar mis habilidades y enfrentar nuevos retos que me ayuden a crecer como profesional. 
                    </p>
                </div>
                <div className="col-span-2 place-self-center lg:col-span-1 pt-0 md:pt-12 ">
                        <figure className='lg:rotate-12 rotate-0 '>
                            <img className="w-80 h-80 object-cover rounded-2xl border-4 dark:border-gray-50 border-cyan-500 shadow-lg " src="/images/IMG_4336.jpeg" alt="Sobre mi" />
                        </figure>
                    <div className="flex justify-center lg:justify-start">
                        <a href="/files/JOSEP PERALES-CV1.pdf" className="mt-5 inline-flex gap-2 rounded-full dark:bg-gray-700 bg-primary-500 px-3 py-2 text-white shadow-[inset_0px_-4px_2px_rgb(0_0_0_/_25%)] hover:animate-zoom z-40 relative items-center " download>
                            <DownHubIcon />
                            Descargar CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}