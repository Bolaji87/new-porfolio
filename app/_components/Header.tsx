"use client";
import IconButton from "./IconButton";
import HamburgerMenu from "./HamburgerMenu";
import NavModal from "./NavModal";
import { useNavModal } from "./NavModalContext";
import Toggletheme from "./Toggletheme";
import { useThemeStore } from "../store/themeStore";
import { Container } from "./shared/Container";
import NavItem from "./NavItem";
import { navItems } from "../utils/data";

function Header() {
  const { isOpen } = useNavModal();
  const { theme, toggleTheme } = useThemeStore();

  return (
    <header className="py-4 bg-white dark:bg-sky-900 w-full sticky top-0 z-50 scroll-smooth  shadow-lg">
      <Container className="flex items-center justify-between ">
        <h1 className="sm:text-xl text-lg  cursor-pointer font-semibold text-sky-500 hover:text-sky-600">
          SB
        </h1>

        <nav className=" lg:h-auto h-0  w-full absolute top-full left-0 lg:static lg:top-0  lg:bg-transparent">
          <ul className="lg:flex hidden lg:flex-row lg:justify-center lg:items-center gap-5">
            {navItems.map((item, key) => (
              <NavItem key={key} text={item.text} href={item.href} />
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <IconButton id="#contact">
            <span>Hire me</span>
          </IconButton>

          <HamburgerMenu />
          <Toggletheme theme={theme} toggleTheme={toggleTheme} />
          <div className=" absolute top-20 right-2 ">
            {isOpen && <NavModal />}
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
