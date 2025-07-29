"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

const footerLinks = [
  {
    name: "Home",
    href: "#home",
    className: "hover:text-white transition",
  },
  {
    name: "About",
    href: "#about",
    className: "hover:text-white transition",
  },
  {
    name: "Projects",
    href: "#projects",
    className: "hover:text-white transition",
  },

  {
    name: "Skills",
    href: "#skills",
    className: "hover:text-white transition",
  },
];

function Footer() {
  const year: number = 2024;
  return (
    <footer className="bg-indigo-900 text-gray-300 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <h2 className="text-xl font-bold text-white">Saka Bolaji Waheed</h2>
          <p className="text-sm mt-1 italic text-gray-400">(Awayewaserere)</p>
          <p className="text-sm mt-2">© {year} All rights reserved.</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Navigation</h3>
          <ul className="space-y-1">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <h3 className="font-semibold mb-2">Connect</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <Link href="https://github.com/Bolaji87">
              <FaGithub className="text-white text-lg hover:text-stone-800" />
            </Link>

            <Link href="https://www.linkedin.com/in/saka-bolaji-waheed-4b90b1217/">
              <FaLinkedin className="text-white text-lg hover:text-stone-800 " />
            </Link>

            <Link href="https://x.com/Awayewaserere77">
              <FaTwitter className="text-white text-lg hover:text-stone-800" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
