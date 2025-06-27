import Image from "next/image";

type SkillType = {
  id: string;
  skillName: string;
  skillLogo: string;
};

type SkillProps = {
  skill: SkillType;
};

const skillSet: SkillType[] = [
  {
    id: crypto.randomUUID(),
    skillName: "HTML",
    skillLogo: "/images/html-5.png",
  },

  {
    id: crypto.randomUUID(),
    skillName: "CSS",
    skillLogo: "/images/css-3.png",
  },

  {
    id: crypto.randomUUID(),
    skillName: "JavaScript",
    skillLogo: "/images/js.png",
  },

  {
    id: crypto.randomUUID(),
    skillName: "React",
    skillLogo: "/images/react.png",
  },
  {
    id: crypto.randomUUID(),
    skillName: "Git",
    skillLogo: "/images/git.png",
  },
  {
    id: crypto.randomUUID(),
    skillName: "Github",
    skillLogo: "/images/github.png",
  },

  {
    id: crypto.randomUUID(),
    skillName: "Tailwind CSS",
    skillLogo: "/images/tailwindcss.png",
  },
  {
    id: crypto.randomUUID(),
    skillName: "Next.js",
    skillLogo: "/images/nextjs.png",
  },
  {
    id: crypto.randomUUID(),
    skillName: "TypeScript",
    skillLogo: "/images/typescript.png",
  },
  {
    id: crypto.randomUUID(),
    skillName: "Supabase",
    skillLogo: "/images/supabase.png",
  },
  {
    id: crypto.randomUUID(),
    skillName: "Redux",
    skillLogo: "/images/redux.png",
  },
];

function Skills() {
  return (
    <div className=" pt-10 bg-gray-200 ">
      <section className="min-h-screen max-w-7xl  mx-auto px-8 sm:px-12 md:px-14 ">
        <div className="text-center space-y-6  mb-3  py-10">
          <h3 className="text-2xl sm:text-3xl text-gray-800 font-bold">
            My Skills
          </h3>
          <p className="font-bold text-stone-800 text-xl">
            Here are the technologies I&rsquo;ve worked with
          </p>
        </div>
        <ul className="grid place-items-center grid-cols-1 sm:grid-cols-2 sm:gap-x-26 md:grid-cols-3 md:gap-x-68 md:px-26 lg:grid-cols-4 gap-x-20  gap-y-12 px-4 py-2">
          {skillSet.map((skill) => (
            <Skill key={skill.id} skill={skill} />
          ))}
        </ul>
      </section>
    </div>
  );
}

function Skill({ skill }: SkillProps) {
  return (
    <li
      className="flex
        rounded-md
        overflow-x-hidden
        w-65
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
        px-16"
    >
      <Image
        width={60}
        height={56}
        className="aspect-square max-w-full object-center object-cover "
        src={skill.skillLogo}
        alt={skill.skillName}
      />
      <p className="font-semibold text-md w-60 text-center text-stone-800 text-lg">
        {skill.skillName}
      </p>
    </li>
  );
}

export default Skills;
