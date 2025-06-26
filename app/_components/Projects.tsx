"use client";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import { projects } from "../utils/data";
import { useProjects } from "../hooks/useProjects";

function Projects() {
  const { handleSelect, handleClose, selectedProject } = useProjects();

  return (
    <section className="min-h-screen bg-gray-100 px-6 py-20 text-stone-800 dark:bg-gray-900 dark:text-gray-100 sm:px-12 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-center">
          <h2 className="text-3xl font-bold">My Projects</h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Check out some of my recent work
          </p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleClose} />
      )}
    </section>
  );
}

export default Projects;
