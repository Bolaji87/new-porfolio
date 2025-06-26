"use client";
import IconButton from "./IconButton";
import ThemeToggle from "./ThemeToggle";
import HamburgerMenu from "./HamburgerMenu";
import NavModal from "./NavModal";
import { useNavModal } from "./NavModalContext";

function Header() {
  const { isOpen } = useNavModal();

  return (
    <header className="py-4 bg-gray-50 dark:bg-gray-800 w-full fixed scroll-smooth top-0 z-50 shadow-lg border-b border-b-gray-200 text-stone-700">
      <div className="flex text-lg  items-center max-w-6xl mx-auto justify-between lg:px-0 px-3">
        <h1 className="sm:text-xl text-lg  cursor-pointer font-semibold text-sky-500 hover:text-sky-600">
          SB
        </h1>

        <nav>
          <ul className="sm:flex hidden  font-semibold text-lg items-center gap-6">
            <li className="hover:text-sky-600 hover:scale-110 transition duration-300  text-sky-500">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-sky-600 hover:scale-110 transition duration-300  text-sky-500">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-sky-600 hover:scale-110 transition duration-300  text-sky-500">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-sky-600 hover:scale-110 transition duration-300  text-sky-500">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:text-sky-600 hover:scale-110 transition duration-300  text-sky-500">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <IconButton id="#contact">
            <span>Hire me</span>
          </IconButton>

          <HamburgerMenu />
          <div className=" absolute top-20 right-2 ">
            {isOpen && <NavModal />}
          </div>
          <div className="sm:block hidden">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
