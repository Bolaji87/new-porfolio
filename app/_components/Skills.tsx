import Image from "next/image";
import { Container } from "./shared/Container";
import { skillItems } from "../utils/data";
import { SkillProps } from "../utils/types";

function Skills() {
  return (
    <Container>
      <div className=" pt-10 min-h-screen ">
        <div className="text-center space-y-6  mb-3  py-10">
          <h3 className="text-2xl sm:text-3xl text-gray-800 font-bold">
            My Skills
          </h3>
          <p className="font-bold text-stone-700 text-xl">
            Here are the technologies I&rsquo;ve worked with
          </p>
        </div>
        {/* <ul className="grid place-items-center grid-cols-1 sm:grid-cols-2 sm:gap-x-26 md:grid-cols-3 md:gap-x-68 md:px-26 lg:grid-cols-4 gap-x-20  gap-y-12 px-4 py-2"> */}
        <ul className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-12 px-4 py-2">
          {skillItems.map((skill, key) => (
            <Skill key={key} skill={skill} />
          ))}
        </ul>
      </div>
    </Container>
  );
}

function Skill({ skill }: SkillProps) {
  return (
    <li
      className="flex
        rounded-md
        overflow-x-hidden
        max-w-full
        flex-col
        items-center
        gap-3
        bg-gray-200
        shadow-lg
        hover:scale-105
        hover:shadow-xl
        transition-all
        duration-500
        py-10
       px-10 "
    >
      <Image
        width={60}
        height={56}
        className="aspect-square max-w-full w-72 md:w-65 object-center object-cover "
        src={`/images/${skill}.png`}
        alt={skill}
      />
      <p className="font-semibold text-md w-60 text-center text-stone-800 text-lg">
        {skill}
      </p>
    </li>
  );
}

export default Skills;
