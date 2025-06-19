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
];

export default function component() {
  return (
    <section className="flex flex-col pt-10 gap-6 mb-20">
      {SKILL.map((skill, index) => (
        <Skill key={skill.name}  name={skill.name} yearsOfXp={skill.yearsOfXP} />
      ))}
    </section>
  );
}
