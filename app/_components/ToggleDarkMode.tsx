// "use client";
// import { useState, useEffect } from "react";
// import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

// export default function ThemeToggle() {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     if (
//       localStorage.theme === "dark" ||
//       (!("theme" in localStorage) &&
//         window.matchMedia("(prefers-color-scheme: dark)").matches)
//     ) {
//       setDarkMode(true);
//       document.documentElement.classList.add("dark");
//     } else {
//       setDarkMode(false);
//       document.documentElement.classList.remove("dark");
//     }
//   }, []);

//   function toggleTheme() {
//     setDarkMode(!darkMode);
//     if (!darkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.theme = "dark";
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.theme = "light";
//     }
//   }

//   return (
//     <div
//       onClick={toggleTheme}
//       className="p-2 rounded-lg bg-sky-700 dark:bg-gray-50 text-white dark:text-sky-700 text-xl sm:block font-bold"
//     >
//       {darkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
//     </div>
//   );
// }

"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../contexts/DarkModeContext";

function ToggleDarkMode() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode} className="block p-2 text-2xl">
      <AnimatePresence mode="wait">
        {isDarkMode ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <HiOutlineSun className="dark:text- font-bold text-indigo-600 dark:text-gray-50" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <HiOutlineMoon className="font-bold text-indigo-600 dark:text-gray-50" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

export default ToggleDarkMode;
