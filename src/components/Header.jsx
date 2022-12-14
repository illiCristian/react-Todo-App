import React, { useEffect, useRef, useState } from "react";
import MoonIcon from "./icons/MoonIcon";
import IconSun from "./icons/IconSun";

const initialStateDarkMode = localStorage.getItem("theme") === "dark";

function Header() {
  const [darkMode, setDarkMode] = useState(initialStateDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="container mx-auto px-4 pt-8 md:max-w-xl">
      <div className="flex justify-between">
        <h1 className="upperc:ase text-3xl font-bold tracking-[0.3em] text-white">
          Todo
        </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <MoonIcon /> : <IconSun />}
        </button>
      </div>
    </header>
  );
}

export default Header;
