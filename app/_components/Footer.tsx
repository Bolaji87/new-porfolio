import React from "react";

function Footer() {
  const year: number = 2024;
  return (
    <footer className="py-5 bg-gray-200 shadow-xl h-16 text-stone-800 text-center text-sm sm:text-lg font-semibold">
      &copy; {year} Saka Bolaji Waheed. All rights reserved
    </footer>
  );
}

export default Footer;
