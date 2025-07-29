import Image from "next/image";

import { ProjectCardProps } from "../utils/types";

function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div
      onClick={() => onSelect(project)}
      className="bg-gray-200 rounded-xl shadow-md overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-300 "
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
        <h3 className="text-lg font-semibold mb-1 text-stone-800">
          {project.title}
        </h3>
        <p className="text-stone-700 text-sm">{project.description}</p>
      </div>
    </div>
  );
}
export default ProjectCard;
