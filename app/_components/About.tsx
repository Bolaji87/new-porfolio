import React from "react";
import Link from "next/link";
import { Container } from "./shared/Container";

function AboutMe() {
  return (
    <section className=" min-h-screen pt-20 py-12 ">
      <Container>
        <div className=" text-center text-stone-800">
          <h2 className="text-3xl font-bold mb-6 text-primary">About Me</h2>
          <p className="text-lg  mb-4">
            Hi, I&rsquo;m{" "}
            <span className="font-semibold text-violet-500">Bolaji</span> — nice
            to meet you! 👋 Please take a look around.
          </p>
          <p className="text-lg  mb-4">
            I&rsquo;m a frontend developer passionate about crafting modern,
            responsive, and accessible web applications. I specialize in
            creating seamless user experiences using clean, scalable code and
            modern technologies like{" "}
            <span className="font-medium text-violet-500">React</span>,{" "}
            <span className="font-medium text-violet-500">Next.js</span>, and{" "}
            <span className="font-medium text-violet-500">TypeScript</span>.
          </p>
          <p className="text-lg  mb-6">
            My goal is to build high-performing, maintainable interfaces that
            not only look great but also function flawlessly across devices.
          </p>

          <Link href="/bolaji-resume.pdf" target="_blank">
            <button className="px-6 py-3 bg-primary  font-semibold rounded-xl shadow-md bg-violet-600 hover:bg-violet-700 transition ease-linear text-white duration-300">
              📄 View My Resume
            </button>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default AboutMe;
