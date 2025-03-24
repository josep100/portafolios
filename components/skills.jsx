import { skills } from '@/data/skills';
import { useTheme } from "@/context/ThemeContext";
import BrusHubIcon from '@/components/icons/BrushHubicon';
import TagHubIcon from '@/components/icons/TagHubicon';
import MobileHubIcon from '@/components/icons/MobileHubicon';
import StarryBackground from '@/components/Starrybackground';

export default function Skills (){
    
    const { theme, systemPrefersDark } = useTheme();

    return (
        <section className="relative overflow-hidden" id="Habilidades">
            {(theme === "dark" || (theme === "system" && systemPrefersDark)) && <StarryBackground />}
            <div className={`left-0 h-[50px] w-[6000px] -scale-y-100 ${
                  (theme === "dark" || (theme === "system" && systemPrefersDark)) ? "opacity-0": " opacity-100 bg-bg-wave"} 
                  bg-contain bg-bottom`}
            ></div>
            <div className="dark:bg-transparent bg-primary-500 py-20">
                <div className="container mx-auto px-2 sm:px-4 dark:text-white text-black">
                    <h1 className="text-center text-2xl font-bold uppercase">mis habilidades</h1>
                    <p className="mb-16 text-center font-light">Me gusta crear productos web hermosos y escalables</p>
                    <div className="flex flex-wrap justify-center gap-7">
                            {
                                skills.map(({id, name, alt, icon},index) => (
                                    <figure data-aos="fade-up" data-aos-delay={index > 0 ? index * 200 : 0} data-aos-duration="300" key={id} >
                                        <div  className='mx-auto h-[60px] w-[60px] rounded-full bg-white'>
                                            <img className='p-3' src={icon} alt={alt} />
                                        </div>
                                        <figcaption className='mt-2 text-center font-semibold first-letter:uppercase'>{name}</figcaption>
                                    </figure>
                                ))
                            }
                    </div>
                    <div className='mt-20 grid lg:grid-cols-12 grid-cols-2 md:ml-5 gap-5 gap-y-8'>
                            <div data-aos="fade-right" data-aos-delay="1600" data-aos-duration="400" className='col-span-12 flex gap-10 md:col-span-4'>
                                <BrusHubIcon />
                                <div>
                                    <h3 className='mb-2 text-xl font-semibold'>Diseño + Desarrollo</h3>
                                    <p className='text-sm'>
                                        Diseños limpios y modernos, optimizados para el rendimiento, los motores de búsqueda y la conversión de usuarios en clientes.
                                    </p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="2300" data-aos-duration="400"className='col-span-12 flex gap-10 md:col-span-4'>
                                <TagHubIcon />
                                <div>
                                    <h3 className='mb-2 text-xl font-semibold'>Tecnología</h3>
                                    <p className='text-sm'>
                                        Combinó todas las últimas tecnologías en un sitio web progresivo.
                                    </p>
                                </div>
                            </div>
                            <div data-aos="fade-left" data-aos-delay="2000" data-aos-duration="400" className='col-span-12 flex gap-10 md:col-span-4'>
                                <MobileHubIcon />
                                <div>
                                    <h3 className='mb-2 text-xl font-semibold'>Siempre receptivo</h3>
                                    <p className='text-sm'>
                                        Un diseño responsivo hace que su sitio web sea accesible para todos los usuarios, independientemente de su dispositivo.
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className={`left-0 h-[50px] w-[6000px] -scale-x-100 ${
                 (theme === "dark" || (theme === "system" && systemPrefersDark)) ? "opacity-0" : "opacity-100 bg-bg-wave"} 
                 bg-contain bg-bottom`}
            ></div>
        </section>
    );
}