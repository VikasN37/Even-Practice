import { createContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider() {
  const [currTheme, setCurrTheme] = useState("light");

  const changeTheme = () => {
    setCurrTheme((prev) => {
      prev === "dark" ? "light" : "dark";
    });
  };
  return (
    <ThemeContext.Provider value={{ currTheme, setCurrTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
