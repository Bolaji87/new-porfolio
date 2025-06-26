import Link from "next/link";
import React from "react";
import { ProjectLinkBtnProp } from "../utils/types";

function LinkProjectBtn({ project }: ProjectLinkBtnProp) {
  return (
    <>
      <Link
        href={project.domain}
        target="_blank"
        className="bg-orange-400 hover:bg-orange-500 text-stone-800 px-4 py-2 rounded-lg"
      >
        View Project
      </Link>
    </>
  );
}

export default LinkProjectBtn;
