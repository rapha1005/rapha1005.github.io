import Skill from "./Skill";


const SKILL = [
  {
    name: "HTML",
    yearsOfXP: 2,
  },
  {
    name: "CSS",
    yearsOfXP: 2,
  },
  {
    name: "Javascript",
    yearsOfXP: 2,
  },
  {
    name: "React",
    yearsOfXP: 0.5,
  },
  {
    name: "NodeJS",
    yearsOfXP: 1,
  },
  {
    name: "GIT",
    yearsOfXP: 1,
  },
  {
    name: "SQL",
    yearsOfXP: 1,
  },
  {
    name: "Tailwind",
    yearsOfXP: 0.0005,
  },
  {
    name: "Redis",
    yearsOfXP: 0.0015,
  },
  {
    name: "Figma",
    yearsOfXP: 1,
  },
];

export default function component() {
  return (
    <section className="grid grid-cols-1 w-[90%] mx-auto gap-6 pt-10 mb-20  md:grid-cols-2 md:gap-12 lg:grid-cols-3">
      {SKILL.map((skill, index) => (
        <Skill key={skill.name}  name={skill.name} yearsOfXp={skill.yearsOfXP} />
      ))}
    </section>
  );
}
