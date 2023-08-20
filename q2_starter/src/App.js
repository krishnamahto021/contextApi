import "./styles.css";
import { useContext, useState } from "react";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { themeContext } from "./themeContext";
import { languageContext } from "./languageContext";

// get theme and language contexts here

export default function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("English");

  return (
    <>
      <div className={`App ${theme}`}>
        <themeContext.Provider value={{ language, theme, setTheme }}>
          <languageContext.Provider value={{ language, setLanguage }}>
            <Navbar />
            <Home />
          </languageContext.Provider>
        </themeContext.Provider>
      </div>

      {/* <languageContext.Provider value={{ language, setLanguage }}>
        <themeContext.Provider value={{ language, theme, setTheme }}>
          <div className={`App ${theme}`}>
            <Navbar />
            <Home />
          </div>
        </themeContext.Provider>
      </languageContext.Provider> */}
    </>
  );
}
