import Link from "next/link";
import React from "react";

interface NavItemProps {
  text: string;
  href: string;
}

export default function NavItem({ text, href }: NavItemProps) {
  return (
    <li className="hover:text-sky-600 hover:scale-110 transition duration-300  text-sky-500">
      <Link
        href={href}
        className="duration-300 font-medium ease-linear hover:text-primary"
      >
        {text}
      </Link>
    </li>
  );
}
