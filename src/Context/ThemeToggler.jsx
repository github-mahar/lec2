import React, { createContext, useState, useEffect } from "react";


export const themeToggler = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Load saved theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const handleToggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme); // persist to localStorage
      return newTheme;
    });
  };

  return (
    <themeToggler.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </themeToggler.Provider>
  );
};
