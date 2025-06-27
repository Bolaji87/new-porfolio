"use client";
import Link from "next/link";
import React from "react";
import { useNavModal } from "./NavModalContext";

import {
  HiOutlineFolder,
  HiOutlineHomeModern,
  HiOutlineInformationCircle,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";

const navModalLinks = [
  {
    name: "Home",
    href: "#home",
    icon: <HiOutlineHomeModern className="text-stone-800 h-5 w-5" />,
  },
  {
    name: "About",
    href: "#about",
    icon: <HiOutlineInformationCircle className="text-stone-800 h-5 w-5" />,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: <HiOutlineFolder className="text-stone-800 h-5 w-5" />,
  },

  {
    name: "Skills",
    href: "#skills",
    icon: <HiOutlineWrenchScrewdriver className="text-stone-800 h-5 w-5" />,
  },
];

function NavModal() {
  const { toggleModal } = useNavModal();

  return (
    <nav className="bg-sky-900  shadow-2xl w-75 rounded-sm h-[420px]  py-8 px-6">
      <ul className="flex flex-col font-semibold mt-4 gap-6 text-xl">
        {navModalLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              onClick={toggleModal}
              className="flex gap-6 px-12 py-3 items-center justify-start hover:text-gray-800 rounded  ease-in-out hover:rounded hover:bg-gray-100  transition duration-300 "
            >
              {link.icon}
              <span> {link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavModal;
