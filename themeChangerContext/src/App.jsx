import { useEffect, useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import { ThemeProvider } from "./contexts/themeContext";

function App() {
  const [theme, setTheme] = useState("light");

  function lightTheme() {
    setTheme("light");
  }

  function darkTheme() {
    setTheme("dark");
  }

  useEffect(() => {
    const htmlElement = document.querySelector('html')
    htmlElement.classList.remove("light", "dark")
    htmlElement.classList.add(theme)
  }, [theme]);

  return (
    <ThemeProvider value={{theme, lightTheme, darkTheme}}>
      <div className="h-screen flex flex-col justify-center items-center gap-3 dark:bg-slate-900">
        <Button />
        <Card />
      </div>
    </ThemeProvider>
  );
}

export default App;
