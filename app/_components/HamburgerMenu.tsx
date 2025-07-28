import React from "react";
import { HiMenu } from "react-icons/hi";
import { useNavModal } from "./NavModalContext";
import { FaTimes } from "react-icons/fa";

function HamburgerMenu() {
  const { toggleModal, isOpen } = useNavModal();
  return (
    <div className="text-3xl text-sky-500 hover:text-sky-600 transition ease-in-out font-bold lg:hidden">
      {isOpen ? (
        <FaTimes onClick={toggleModal} />
      ) : (
        <HiMenu onClick={toggleModal} />
      )}
    </div>
  );
}

export default HamburgerMenu;
