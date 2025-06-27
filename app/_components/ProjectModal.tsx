import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

import LinkProjectBtn from "./LinkProjectBtn";

import { ProjectModalProps } from "../utils/types";
import { useCloseModalWithKey } from "../hooks/useCloseModalWithKey";

function ProjectModal({ project, onClose }: ProjectModalProps) {
  useCloseModalWithKey("Escape", onClose);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-lg animate-fadeIn">
        <button
          aria-label="Close modal"
          onClick={onClose}
          className="absolute top-2 right-3 text-2xl font-bold text-gray-600 hover:text-red-500"
        >
          &times;
        </button>

        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="mb-4 h-48 w-full rounded object-cover object-top"
        />

        <h3 className="mb-2 text-2xl font-bold text-sky-700 ">
          {project.title}
        </h3>
        <p className="text-gray-700 ">{project.description}</p>

        <div className="mt-6 flex items-center justify-between gap-4">
          <Link
            href="https://github.com/Bolaji87"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source on GitHub"
            className="rounded-full bg-black p-3 text-white transition hover:bg-gray-800"
          >
            <FaGithub className="text-2xl" />
          </Link>

          <LinkProjectBtn project={project} />
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
