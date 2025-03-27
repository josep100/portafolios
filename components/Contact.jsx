import { useForm } from "react-hook-form";
import { useRef } from 'react';
import { useTheme } from "@/context/ThemeContext";
import LinkHubIcon from '@/components/icons/LinkHubicon';
import GitHubIcon from '@/components/icons/GitHubicon';
import emailjs from 'emailjs-com';
import StarryBackground from '@/components/Starrybackground';

export default function Contact(){
    const form = useRef();
    const { theme, systemPrefersDark } = useTheme();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({mode: 'onChange',});

        const sendEmail = (data) => {
            emailjs
              .send("service_dvzx7ya", "template_45nfkjj", data , "7dddrKB1ddLiY9x7N",)
              .then(
                () => {
                  console.log('SUCCESS!');
                  reset();
                },
                (error) => {
                  console.log('FAILED...', error.text);
                },
              );
          };
    return(
        <section id="Contacto" className="relative overflow-hidden">
            {(theme === "dark" || (theme === "system" && systemPrefersDark)) && <StarryBackground />}
            <div className={`left-0 h-[50px] w-[6000px] -scale-y-100 ${
                 (theme === "dark" || (theme === "system" && systemPrefersDark)) ? "opacity-0" : "opacity-100 bg-bg-wave2"} 
                 bg-contain bg-bottom`}
            ></div>
            <div className="dark:bg-transparent bg-slate-200">
                <div className="container mx-auto grid grid-cols-2 gap-10 overflow-hidden px-2 py-32 sm:gap-5 sm:px-4">
                    <div data-aos="fade-right" data-aos-duration="200" className="col-span-2 sm:col-span-1 dark:text-white text-black">
                            <h1 className="mb-5 text-2xl font-bold uppercase">mantengámonos en contacto</h1>
                            <a href="https://www.linkedin.com/in/josep-perales/" className="mr-4 inline-block hover:animate-zoom" target="_blank">
                                <LinkHubIcon tamaño="text-3xl" />
                            </a>
                            <a href="https://github.com/josep100" className="inline-block hover:animate-zoom" target="_blank">
                                <GitHubIcon tamaño="text-3xl" />
                            </a>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="200" className='col-span-2 sm:col-span-1 dark:text-white text-black'>
                        <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                            <label className='mb-5 flex flex-col gap-3'>
                                <span className='text-sm font-bold uppercase'>escribe tu nombre</span>
                                <input 
                                    {...register("name", {
                                        required: "El nombre es obligatorio",
                                        pattern: {
                                            value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                                            message: "El nombre solo debe contener letras",   
                                        },
                                    })}
                                    type="text" placeholder='Nombre completo' 
                                    className={`max-w-lg rounded-md border-2 border-slate-300 p-2 text-sm outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-0 dark:text-black
                                               ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-300'}`} name='name' 
                                />
                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                            </label>
                            <label className='mb-5 flex flex-col gap-3'>
                                <span className='text-sm font-bold uppercase'>escribe tu email</span>
                                <input 
                                    {...register("email", {
                                        required: "El correo es obligatorio",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: "Correo electrónico no es válido",   
                                        },
                                    })}
                                    type="mail" placeholder='tumail@ejemplo.com' 
                                    className={`max-w-lg rounded-md border-2 border-slate-300 p-2 text-sm outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-0 dark:text-black
                                                ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-300'}`} name='email' 
                                />
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                            </label>
                            <label className='mb-5 flex flex-col gap-3'>
                                <span className='text-sm font-bold uppercase'>escribe tu mensaje</span>
                                <textarea
                                    {...register("message", {
                                        required: "El mensaje no puede estar vacio",
                                    })} 
                                    rows="5" placeholder='Escribe tu mensaje' 
                                    className={`max-w-lg resize-none overflow-y-auto rounded-md border-2 border-slate-300 p-2 text-sm outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-0 dark:text-black
                                                ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-slate-300'}`} name='message'
                                ></textarea>
                                {errors.message && <p className='text-red-500'>{errors.message.message}</p>}
                            </label>
                            <button type='submit' className='rounded-full dark:border-2 dark:border-cyan-500 dark:bg-transparent bg-primary-500 px-3 py-2 text-white shadow-[inset_0px_-4px_2px_rgb(0_0_0_/_25%)] hover:animate-zoom'>Envía ahora</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}