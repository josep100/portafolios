import { projects } from '@/data/projects';
import { useTheme } from "@/context/ThemeContext";
import Image from 'next/image';
import EyeHubIcon from '@/components/icons/EyeHubicon';
import GitHubIcon from '@/components/icons/GitHubicon';
import StarryBackground from '@/components/Starrybackground';
import clsx from "clsx";
import Link from 'next/link';

export default function Projects(){
    const { theme } = useTheme();
    
    return (
        <section id='Proyectos' className='relative h-auto container mx-auto px-2 py-36 sm-px-4 dark:bg-transparent'>
           {theme == "dark" && <StarryBackground />}
            <h1 className='text-center text-2xl font-bold uppercase dark:text-white text-black'>proyectos</h1>
            <p className='mb-16 text-center font-light dark:text-white text-black'>Mis proyectos más destacados</p>
            <div className='grid grid-cols-12 gap-5'>
                {
                    projects.map(({id, link, img, title, gitHub, description}, index) => (
                        <div data-aos="fade-up" data-aos-delay={index > 0 ? index * 200 : 0} data-aos-duration="300" className='col-span-12 flex min-h-[400px] flex-col overflow-hidden rounded-lg dark:bg-transparent dark:border-4 dark:border-gray-500/50 bg-white shadow-[0_0.5rem_1rem_rgba(0,_0,_0,_0.15)] md:col-span-6 lg:col-span-4' key={id}>
                            <figure>
                                <Image className='h-auto w-full object-cover' src={img} alt={title} width={0} height={0}/>
                                <figcaption className='my-2 px-2 text-xl font-semibold dark:text-white text-black'>{title}</figcaption>
                                <figcaption className='px-2 text-sm dark:text-gray-300 text-black'>{description}</figcaption>
                            </figure>
                            <div className='mt-auto flex justify-center gap-10 p-3'>
                                <Link
                                    className={clsx("flex items-center gap-1 rounded-full px-2 py-1 text-white shadow-[inset_0px_-4px_2px_rgb(0_0_0_/_25%)] ", description === 'Próximamente' 
                                        ? "bg-gray-400 cursor-not-allowed" 
                                        : "bg-primary-500 hover:animate-zoom dark:border-2 dark:border-cyan-500 dark:bg-transparent"
                                    )}
                                    href={description === "Próximamente" ? "#" : link} onClick={(e) => description === "proximamente" && e.preventDefault()}
                                    target='_blank'
                                >
                                    <EyeHubIcon />
                                    Demo
                                </Link>
                                <Link 
                                    className={`flex items-center gap-1 rounded-full px-2 py-1 border-2 ${description === 'Próximamente'
                                        ?'bg-gray-400 cursor-not-allowed text-white border-gray-500'
                                        :'border-cyan-500  text-cyan-500 hover:animate-zoom'
                                    }`}
                                    href={description === 'Próximamente' ? '#' : gitHub} onClick={(e) => description === 'proximamente' && e.preventDefault()}
                                    target='_blank'
                                >
                                    <GitHubIcon />
                                    Repo
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}
