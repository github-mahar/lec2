import { createContext, useState } from "react";


export const themeToggler = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const handleToggleTheme = () => {
        console.log("Toggling theme");
        
        
        return setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <themeToggler.Provider value={{ theme, handleToggleTheme }}>
            {children}
        </themeToggler.Provider>
    );
}