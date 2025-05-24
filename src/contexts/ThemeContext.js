import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Persist theme preference in localStorage
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem("dark-theme");
    return stored ? JSON.parse(stored) : false;
  });

  const toggleTheme = () => setDark((prev) => !prev);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
    localStorage.setItem("dark-theme", JSON.stringify(dark));
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
