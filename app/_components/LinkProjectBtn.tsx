import Link from "next/link";
import React from "react";
type LinkType = {
  id: number;
  domain: string;
};

const links: LinkType[] = [
  {
    id: 34556,
    domain: "https://fast-react-pizza-lemon-xi.vercel.app/",
  },
  {
    id: 3556567,
    domain: "https://modish-dynamics.vercel.app/",
  },
  {
    id: 3556,
    domain: "https://the-wild-oasis-website-bj.vercel.app/",
  },
  {
    id: 329556,
    domain: "https://the-wild-oasis-website-bj.vercel.app/",
  },
];

function LinkProjectBtn() {
  function handleClick() {
    links.map((link) => <Link href={link.domain} key={link.id}></Link>);
  }

  return (
    <button
      onClick={handleClick}
      className="bg-orange-400 hover:bg-orange-500 text-stone-800 px-4 py-2 rounded-lg mt-3"
    >
      view project
    </button>
  );
}

export default LinkProjectBtn;
