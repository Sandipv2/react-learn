import React from "react";
import useTheme from "../contexts/themeContext";

function Button() {
  const { theme, lightTheme, darkTheme } = useTheme();

  function onThemeChange(e) {
    if (e.target.checked) {
      darkTheme();
    } else {
      lightTheme();
    }
  }

  return (
    <div>
      <label className="inline-flex items-center mb-5 cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={theme == "dark"}
          onChange={onThemeChange}
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Switch Theme
        </span>
      </label>
    </div>
  );
}

export default Button;
