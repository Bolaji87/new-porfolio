"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  ReactNode,
  useState,
} from "react";
import { useLocalStorageState } from "../hooks/useLocalStorage";

interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

interface DarkModeProviderProps {
  children: ReactNode;
}

function DarkModeProvider({ children }: DarkModeProviderProps) {
  const getSystemPrefersDark = (): boolean => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [isMounted, setIsMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useLocalStorageState<boolean>(
    getSystemPrefersDark(),
    "isDarkMode"
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode, isMounted]);

  function toggleDarkMode() {
    setIsDarkMode((prev) => !prev);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode(): DarkModeContextType {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
}

export { DarkModeProvider, useDarkMode };
