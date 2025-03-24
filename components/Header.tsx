import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import Navbar from '@/components/Navbar';
import GitHubIcon from "@/components/icons/GitHubicon";
import LinkHubIcon from "@/components/icons/LinkHubicon";
import HamburgerHubIcon from '@/components/icons/HamburgerHubicon';
import DarkMode from '@/components/Darkmode';
import clsx from 'clsx';


export default function Header ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }){

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
                            <img 
                                src='/images/IMG_4336.jpeg' 
                                alt='foto personal'
                                className='rounded-full size-10 shadow-lg'
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
                        <a href="https://github.com/" target='black' className='hover:animate-zoom'><GitHubIcon /></a>
                        <a href="https://www.linkedin.com/feed/" target='black' className='hover:animate-zoom'><LinkHubIcon /></a>
                    </div>
                </div>
            </header>
        </>
    );
}