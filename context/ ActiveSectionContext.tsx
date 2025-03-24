import { Context, createContext, useState, ReactNode, useContext } from "react";


export const ActiveSectionContext = createContext<{ activeSection: string, setActiveSection: React.Dispatch<React.SetStateAction<string>> } | undefined>(undefined);

interface ActiveSectionProviderProps {
  children: ReactNode;
}

export default function ActiveSectionProvider({ children }: ActiveSectionProviderProps){
    const [activeSection, setActiveSection] = useState("Inicio")
    
    return(
        <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </ActiveSectionContext.Provider>
    );
}

export const useActiveSection = () => {
    const context = useContext(ActiveSectionContext);
    if(!context) {
        throw new Error("useActiveSection debe usarse dentro de un ActiveSectionProvider");
    }
    return context;
};