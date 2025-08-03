import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ThemeContext from "./contexts/themeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeContext.Provider value={{ currTheme, changeTheme }}>
        <App />
      </ThemeContext.Provider>
    </BrowserRouter>
  </StrictMode>
);
