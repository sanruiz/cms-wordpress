import { createContext, useState } from "react";

const ThemeContext = createContext("");

function ThemeProvider(props) {
  const [darkMode, setDarkMode] = useState(false);

  const themeContext = {
    darkMode,
    setDarkMode,
  };

  return <ThemeContext.Provider value={themeContext} {...props} />;
}

export default ThemeProvider;
