'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type ThemeType = "light" | "dark" | "system";

//tipo del contexto
interface ThemeContextProps {
    theme: ThemeType;
    systemPrefersDark: boolean;
    setTheme: (theme: ThemeType) => void;
}

//creamos el contexto
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

//Proveedor del contexto
export const ThemeProvider = ({ children }: { children: ReactNode }) =>{
    const [theme, setTheme] = useState<ThemeType>(() => localStorage.getItem("theme") as ThemeType || "light");
    const [systemPrefersDark, setSystemPrefersDark] = useState<boolean>(false);
    

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme:dark)");

        // Guardamos la preferencia en el estado
        setSystemPrefersDark(mediaQuery.matches);

        // Opcional: Escuchamos si el usuario cambia la preferencia del sistema
        const handleSystemThemeChange = (e: MediaQueryListEvent) => {
            setSystemPrefersDark(e.matches);
        };

        mediaQuery.addEventListener("change", handleSystemThemeChange);

        // Limpieza al desmontar
        return () => {
            mediaQuery.removeEventListener("change", handleSystemThemeChange);
        };
    }, []);

    //guardamos el tema escogido por el usuario y lo guardamos en localstorage para que siempre este aunque cargues la web
    useEffect(() => {
        const htmlElement = document.documentElement;
        
       

        if (theme === "system") {
            if (systemPrefersDark) {
                htmlElement.classList.add("dark");
                localStorage.setItem("theme", "system");
            } else {
                htmlElement.classList.remove("dark");
            }
        } else {
            if (theme === "dark") {
                htmlElement.classList.add("dark");
            } else {
                htmlElement.classList.remove("dark");
            }
        }
    
        if (theme !== "system") {
            localStorage.setItem("theme", theme);
        }
    },[theme, systemPrefersDark]);

    return (
        <ThemeContext.Provider value={{ theme,systemPrefersDark,setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

//Hook para usar el contexto
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context) {
        throw new Error("useTheme debe usarse dentro de un ThemeProvider");
    }
    return context;
};