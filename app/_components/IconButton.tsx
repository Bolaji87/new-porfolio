import Link from "next/link";
import React, { ReactNode } from "react";

type IconButtonProps = {
  children: ReactNode;
  id: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

function IconButton({ children, id }: IconButtonProps) {
  if (id === "#projects")
    return (
      <Link
        className="bg-sky-500 w-full min-w-max text-white hover:bg-sky-600 transition-all ease-in-out py-2 px-5 rounded-md"
        href="#projects"
      >
        {children}
      </Link>
    );
  if (id === "#contact")
    return (
      <Link
        className="bg-sky-500 w-full min-w-max text-white hover:bg-sky-600 transition-all ease-in-out py-2 px-5 rounded-md"
        href="#contact"
      >
        {children}
      </Link>
    );

  return (
    <button
      id={id}
      className="bg-sky-500 w-full min-w-max text-white hover:bg-sky-600 transition-all ease-in-out py-2 px-5 rounded-md"
    >
      {children}
    </button>
  );
}

export default IconButton;
