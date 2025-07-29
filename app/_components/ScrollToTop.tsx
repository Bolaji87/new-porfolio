"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(function () {
    function toggleVisibility() {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  function handleScrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  if (!isVisible) return null;

  return (
    <button
      onClick={handleScrollUp}
      className="fixed bottom-6 right-6 z-50 bg-stone-800 text-gray-50 p-3 rounded-full shadow-lg hover:text-gray-100 hover:bg-stone-900 transition-all ease-in-out duration-300"
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTop;
