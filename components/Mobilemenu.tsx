import CloseHubIcon from '@/components/icons/CloseHubicon';
import NavLink from '@/components/Navlinks';
import GitHubIcon from "@/components/icons/GitHubicon";
import LinkHubIcon from "@/components/icons/LinkHubicon";
import DarkMode from '@/components/Darkmode';
import { useEffect } from 'react';

export default function MobileMenu({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }){
    useEffect(() => {
        if (isOpen) {
          document.body.classList.add("overflow-hidden");
        } else {
          document.body.classList.remove("overflow-hidden");
        }
    
        return () => {
          document.body.classList.remove("overflow-hidden"); // Cleanup al desmontar
        };
      }, [isOpen]);
    return(
        <div className={`fixed inset-0 z-50 flex h-screen w-screen bg-black/30 lg:hidden ${isOpen?"-translate-x-0  visible":"-translate-x-full  invisible"} transition-all  duration-500 ease-in-out`}>
            <div className="relative mr-auto flex h-full w–[228px] min-w-[318px] flex-col bg-white/80 dark:bg-black/70 shadow-lg backdrop-blur" style={{ transform: "translateX(0px) translateZ(0px)" }}>
                <button className="absolute right-5 top-5 p-[3px] dark:text-white" onClick={() => {setIsOpen(false)}}>
                    <CloseHubIcon /> 
                </button>
                <div className="my-auto flex flex-col items-center gap-10">
                    <nav>
                        <NavLink className="flex flex-col items-center gap-5" setIsOpen={setIsOpen} isOpen = {isOpen} />
                    </nav>
                    <div className='flex gap-5 text-2xl dark:text-white'>
                        <a href="https://github.com/" target='black' className='hover:animate-zoom'><GitHubIcon /></a>
                        <a href="https://www.linkedin.com/feed/" target='black' className='hover:animate-zoom'><LinkHubIcon /></a>
                    </div>
                    <div className='ml:auto gap-5 text-2xl lg:flex'>
                        <DarkMode bgColor='bg-black/5'/>
                    </div>
                </div>
            </div>
        </div>
    );
}


//flex justify-center items-center gap-8