import Link from "next/link";
import React, { ReactNode } from "react";

type IconButtonProps = {
  children: ReactNode;
  id?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

function IconButton({ children, id, className = "" }: IconButtonProps) {
  if (id === "#projects")
    return (
      <Link
        className={`bg-violet-600 w-full min-w-max text-white hover:bg-violet-700 transition-all duration-300 ease-in-out py-3 px-5 rounded-full ${className}`}
        href="#projects"
      >
        {children}
      </Link>
    );
  if (id === "#contact")
    return (
      <Link
        className={`bg-violet-600 w-full min-w-max text-white hover:bg-violet-700 transition-all duration-300 ease-in-out py-3 px-5 rounded-full ${className}`}
        href="#contact"
      >
        {children}
      </Link>
    );

  return (
    <button
      // id={id}
      className={`bg-violet-600 w-full min-w-max text-white hover:bg-violet-700 transition-all ease-in-out py-3 px-5 rounded-full ${className}`}
    >
      {children}
    </button>
  );
}

export default IconButton;
