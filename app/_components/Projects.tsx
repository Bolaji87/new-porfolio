"use client";
import Image from "next/image";
import React, { useState } from "react";
import LinkProjectBtn from "./LinkProjectBtn";

type Project = {
  id: number;
  title: string;
  image: string;
  description: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Fast React Pizza Co.",
    image: "/projects/react-pizza.png",
    description:
      "A responsive pizza delivery web app with cart functionality, priority order, and geolocation.",
  },
  {
    id: 2,
    title: "Modish Styles.",
    image: "/projects/modish.png",
    description:
      "A responsive e-commerce site built with React js and Tailwind css.",
  },
  {
    id: 3,
    title: "Wild oasis website",
    image: "/projects/wild-oasis.png",
    description:
      "A hotel website built with Next.js and Tailwind CSS, enabling guests booking and authentication.",
  },
  {
    id: 6,
    title: "Weather App",
    image: "/projects/modish.png",
    description:
      "Weather forecasting app using OpenWeatherMap API and geolocation.",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState<null>(null);
  return (
    <div className="py-12 pt-20 min-h-screen bg-gray-100 text-stone-800 px-8 sm:px-12 md:px-14 lg:px-24 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
        <p className="text-center mt-1.5 mb-5 text-xl text-gray-100 font-bold">
          Check out some of my recent works
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-sky-100 rounded-xl shadow-md mt-4 overflow-hidden cursor-pointer transform  hover:shadow-xl transition duration-300"
            >
              <Image
                width={330}
                height={400}
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative animate-fadeIn">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-3 text-gray-700 text-xl font-bold hover:text-red-500"
            >
              &times;
            </button>

            <Image
              width={330}
              height={400}
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 object-cover"
            />
            {/* <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 object-cover rounded mb-4"
            /> */}
            <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
            <p className="text-gray-600">{selectedProject.description}</p>
            <LinkProjectBtn />
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
