import Image from "next/image";

import { ProjectCardProps } from "../utils/types";

function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div
      onClick={() => onSelect(project)}
      className="bg-sky-100 rounded-xl shadow-md overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-300 focus:ring-2 focus:ring-sky-400"
    >
      <Image
        width={330}
        height={400}
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover object-top"
        sizes="(max-width: 1024px) 100vw, 33vw"
        priority
      />
      <div className="p-5 text-left">
        <h3 className="text-lg font-semibold mb-1 text-sky-700 dark:text-sky-400">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {project.description}
        </p>
      </div>
    </div>
  );
}
export default ProjectCard;
