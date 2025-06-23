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


  {
    name: "Star Citizen",
    yearsOfXP: 1,
  },
  {
    name: "ChatGPT",
    yearsOfXP: 2,
  },
  {
    name:"Ctrl + C / Ctrl + V",
    yearsOfXP: "∞",
  },
  {
    name: "Scanneur de QR code en 0.3s",
    yearsOfXP: 2,
  },
  {
    name: "Pro player Microsoft Flight Simulator",
    yearsOfXP: 5,
  },
  {
    name: "Peut écrire 'AZERTY' sans regarder le clavier",
    yearsOfXP: 4,
  },
  {
    name: "Consultant expert en médias numériques à thématique anthropomorphique",
    yearsOfXP: 16,
  },
  {
    name: "Peut voir les longueurs d'ondes lumineuses de 300 nm a 800 nm",
    yearsOfXP: 5,
  }
  
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
