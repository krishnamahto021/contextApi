import { createContext, useContext, useState } from "react";

export const themeContext = createContext();

// debug the below custom hook
export const getThemeValue = () => {
  const value = useContext(themeContext);
  return value;
};

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState("light");

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </themeContext.Provider>
  );
};
