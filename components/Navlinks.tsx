import {useActiveSection} from "@/context/ ActiveSectionContext";

export default function NavLinks ({ className, setIsOpen }: { className: string, setIsOpen?: React.Dispatch<React.SetStateAction<boolean>> }){
    const {activeSection, setActiveSection} = useActiveSection();
    
      function handleClick(section: string) {
            
            if(typeof setIsOpen === "function"){
                setActiveSection(section); // Refresca el estado después del scroll
                setIsOpen(false);
            }
            
      }

    return(
        <ul className={ className }>
                    {["Inicio", "Sobre-mi", "Habilidades", "Proyectos", "Contacto"].map((section) => (
                        <li key={section} className="cursor-pointer hover:animate-zoom ">
                            <a
                                
                                href={`#${section}`}
                                onClick={() => handleClick(section)} // ⬅️ Cambia el estado al hacer clic
                                className={`px-2 py-1 dark:text-white text-black ${
                                activeSection === section
                                    ? " dark:bg-cyan-500/0 rounded-full bg-[rgb(2,138,199)] text-white scale-110"
                                    : ""
                                    }`}
                            >
                                {section.replace("-", " ")}
                            </a>
                        </li>
                    ))}
        </ul>
    );
}