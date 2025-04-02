import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import Navbar from '@/components/Navbar';
import GitHubIcon from "@/components/icons/GitHubicon";
import LinkHubIcon from "@/components/icons/LinkHubicon";
import HamburgerHubIcon from '@/components/icons/HamburgerHubicon';
import DarkMode from '@/components/Darkmode';
import clsx from 'clsx';
import Link from "next/link";


export default function Header ({setIsOpen }: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }){

    const [isAtTop, setIsAtTop] = useState(true);
    const { theme, systemPrefersDark } = useTheme();

    useEffect(() => {;
        const handleScroll = () => {
          setIsAtTop(window.scrollY === 0);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    return (
        <>
            <span id="Inicio" className="absolute -top-10" />
            <header
                className={clsx(
                    isAtTop && "relative",
                    ((theme === "light" || (theme === "system" && !systemPrefersDark)) && !isAtTop) && "sticky top-0 z-50 shadow-lg",
                    "bg-primary-500 dark:bg-transparent z-40"
                )}
            >
                <div className='container mx-auto flex justify-center items-center gap-20 px-2 py-4 sm:px-4'>
                    <figure>
                            <Image 
                                src='/images/IMG_4336.jpeg' 
                                alt='foto personal'
                                className='rounded-full size-10 shadow-lg '
                                width={0}
                                height={0}
                                
                            />
                    </figure>
                    <Navbar />
                    <button id="mobile-menu" className=' ml-auto lg:hidden dark:text-white' onClick={() => {setIsOpen(true)}}>
                        <HamburgerHubIcon />
                    </button>
                    <div className='ml:auto gap-5 text-2xl lg:flex hidden'>
                        <DarkMode />
                    </div>
                    <div className='ml:auto hidden gap-5 text-2xl lg:flex dark:text-white text-black '>
                        <Link href="https://github.com/josep100" target='_blank' className='hover:animate-zoom'><GitHubIcon /></Link>
                        <Link href="https://www.linkedin.com/in/josep-perales/" target='_blank' className='hover:animate-zoom'><LinkHubIcon /></Link>
                    </div>
                </div>
            </header>
        </>
    );
}