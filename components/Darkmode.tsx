import SunHubIcon from '@/components/icons/SunHubicon';
import DarkHubIcon from '@/components/icons/DarkHubicon';
import SystemHubIcon from '@/components/icons/SystemHubicon';
import { useTheme, ThemeType } from '@/context/ThemeContext';

export default function DarkMode ({bgColor = "bg-[rgb(2,138,199)]"} : {bgColor?:string}){
    const { theme, setTheme } = useTheme();

    const handleClick = (newTheme: ThemeType) => {
        setTheme(newTheme); // Cambiar el tema cuando se hace clic
    };

    return (
        <div className={`group rounded-3xl inline-flex overflow-hidden flex-row gap-3 border-[1px] border-transparent dark:border-white  dark:bg-transparent  shadow-[inset_0_2px_8px_0_rgba(165,170,174,0.25)] ${bgColor}  p-2 dark:text-white text-black`}>
            <button 
                className={`p-1 relative after:absolute after:inset-0 after:bg-white after:bg-opacity-30 after:rounded-full after:scale-0 after:transition-transform  after:duration-500 after:ease-in-out ${theme === "light" ? "after:scale-100" : ""}`} 
                onClick={() => handleClick('light')}
            >
                <SunHubIcon />
            </button>
            <button 
                className={`p-1 relative after:absolute after:inset-0 after:bg-white after:bg-opacity-30 after:rounded-full after:scale-0 after:transition-transform after:duration-500 after:ease-in-out ${theme === "dark" ? "after:scale-100" : ""}`} 
                onClick={() => handleClick('dark')}
            >
                <DarkHubIcon />
            </button>
            <button 
                className={`p-1 relative after:absolute after:inset-0 after:bg-white after:bg-opacity-30 after:rounded-full after:scale-0 after:transition-transform after:duration-500 after:ease-in-out ${theme === "system" ? "after:scale-100" : ""}`} 
                onClick={() => handleClick('system')}
            >
                <SystemHubIcon />
            </button>
        </div>
    );
}