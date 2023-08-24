import { createContext, useContext, useState } from "react";

export const languageContext = createContext();

// debug the below custom hook
export const getLanguageValue = () => {
  const value = useContext(languageContext);
  return value;
};

export const LanguageContextProvider = (props) => {
  const [language, setLanguage] = useState("English");

  return (
    <languageContext.Provider
      value={{ language, setLanguage }}
    >
      {props.children}
    </languageContext.Provider>
  );
};
