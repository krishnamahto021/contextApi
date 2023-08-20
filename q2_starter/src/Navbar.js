import { useContext } from "react";
import { themeContext } from "./themeContext";

export const Navbar = () => {
  // get theme and lanauge contexts here
  const {language,theme,setTheme} = useContext(themeContext);

  function handleClick(){
    if(theme === 'light'){
      setTheme('dark');
    }else{
      setTheme('light');
    }
  }

  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        <button onClick={handleClick}>{theme==='light'?'Dark Theme':'Light Theme'}</button>
        <span>{language}</span>
      </div>
    </div>
  );
};
