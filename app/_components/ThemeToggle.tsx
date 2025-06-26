"use client";
import { useState, useEffect } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function toggleTheme() {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }

  return (
    <div
      onClick={toggleTheme}
      //   className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white"
      className="p-2 rounded-lg bg-sky-700 dark:bg-gray-50 text-white dark:text-sky-700 text-xl sm:block font-bold"
    >
      {/* {darkMode ? "☀️ Light" : "🌙 Dark"} */}
      {darkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </div>
  );
}

// "use client";
// import { useTheme } from "next-themes";
// import { FaToggleOff, FaToggleOn } from "react-icons/fa6";

// export default function ThemeToggle() {
//   const { theme, setTheme } = useTheme();

//   const toggleTheme = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="p-2 rounded-lg bg-sky-700 dark:bg-gray-50 text-white dark:text-sky-700 text-xl hidden sm:block font-bold"
//       aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
//     >
//       {theme === "dark" ? <FaToggleOn /> : <FaToggleOff />}
//     </button>
//   );
// }
