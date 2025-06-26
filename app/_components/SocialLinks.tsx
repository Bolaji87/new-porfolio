import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

function SocialLinks() {
  return (
    <div className="flex mt-2 gap-8">
      <div className="p-2 rounded-full bg-black hover:bg-gray-800 transition">
        <Link href="https://github.com/Bolaji87">
          <FaGithub className="text-white text-2xl" />
        </Link>
      </div>

      <div className="p-2 rounded-full bg-[#0077B5] hover:bg-[#006699] transition">
        <Link href="https://www.linkedin.com/in/saka-bolaji-waheed-4b90b1217/">
          <FaLinkedin className="text-white text-2xl" />
        </Link>
      </div>

      <div className="p-2 rounded-full bg-sky-500 hover:bg-sky-600 transition">
        <Link href="https://x.com/Awayewaserere77">
          <FaTwitter className="text-white text-2xl" />
        </Link>
      </div>
    </div>
  );
}

export default SocialLinks;
