"use client";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import { projects } from "../utils/data";
import { useProjects } from "../hooks/useProjects";
import { Container } from "./shared/Container";

function Projects() {
  const { handleSelect, handleClose, selectedProject } = useProjects();

  return (
    <section className="min-h-screen  py-20 text-stone-800 ">
      <Container>
        <header className="mb-12 text-center">
          <h2 className="text-3xl font-bold">My Projects</h2>
          <p className="mt-2 text-lg text-stone-700 ">
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
      </Container>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleClose} />
      )}
    </section>
  );
}

export default Projects;
