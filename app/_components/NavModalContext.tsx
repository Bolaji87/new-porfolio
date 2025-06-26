"use client";

import { useContext, createContext, useState, ReactNode } from "react";

interface NavModalContextType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  toggleModal: () => void;
}

const NavModalContext = createContext<NavModalContextType | undefined>(
  undefined
);

function NavModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen((prev) => !prev);
  }
  return (
    <NavModalContext.Provider value={{ isOpen, setIsOpen, toggleModal }}>
      {children}
    </NavModalContext.Provider>
  );
}

function useNavModal() {
  const context = useContext(NavModalContext);
  if (!context) {
    throw new Error("useNavModal must be used within a NavModalProvider");
  }
  return context;
}

export { NavModalProvider, useNavModal };
