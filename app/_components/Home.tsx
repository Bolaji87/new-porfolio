import Image from "next/image";
import React from "react";
import bolajiImage from "@/public/chatgpt-image.png";
import IconButton from "./IconButton";
import SocialLinks from "./SocialLinks";
import { Container } from "./shared/Container";

function Home() {
  return (
    <section className="py-10 min-h-screen">
      <Container>
        <div className="sm:flex-row flex-col-reverse gap-5 items-center  flex sm:justify-between">
          <main className="flex flex-col justify-center items-start mt-16 gap-4">
            <h1 className="sm:text-4xl text-stone-800  text-3xl  sm:font-bold">
              Saka Bolaji Waheed
            </h1>

            <p className="text-lg text-stone-700 text-balance ">
              Welcome to my portfolio! I&apos;m a frontend developer passionate
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
      </Container>
    </section>
  );
}

export default Home;
