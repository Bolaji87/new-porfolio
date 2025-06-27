import Image from "next/image";
import React from "react";
import bolajiImage from "@/public/chatgpt-image.png";
import IconButton from "./IconButton";
import SocialLinks from "./SocialLinks";

function Home() {
  return (
    <div className="min-h-screen pt-20 bg-gray-100 py-10">
      <div className="max-w-6xl text-stone-800 mx-auto sm:flex-row flex-col-reverse gap-5 items-center  flex sm:justify-between px-4 ">
        <main className="flex flex-col justify-center items-start mt-16 gap-4">
          <h1 className="sm:text-4xl text-3xl  sm:font-bold">
            Saka Bolaji Waheed
          </h1>

          <p className="text-lg">
            Welcome to my portfolio! I&rsqu;m a frontend developer passionate
            about building modern, responsive web applications with React,
            Next.js, and TypeScript. I specialize in creating scalable,
            maintainable UIs using functional components, React Hooks, and
            modern JavaScript.
          </p>
          <div className="flex items-center gap-5 mb-3">
            <IconButton id="#projects">Projects</IconButton>
            <IconButton id="#contact">Contact me</IconButton>
          </div>
          <SocialLinks />
        </main>

        <section>
          <div className="relative h-80 w-80 sm:w-[450px] sm:h-[450px] aspect-video sm:aspect-square">
            <Image
              src={bolajiImage}
              alt="bolaji"
              placeholder="blur"
              fill
              sizes="(min-width: 640px) 450px, 320px"
              className="object-cover object-top rounded-full sm:rounded-2xl"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
