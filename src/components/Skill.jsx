import SkillCard from "./SkillCard";

export default function Skill() {
  const skillItem = [
    {
      imgSrc: "https://skillicons.dev/icons?i=figma",
      label: "Figma",
      desc: "Design tool",
    },
    {
      imgSrc: "https://skillicons.dev/icons?i=css&perline=12",
      label: "CSS",
      desc: "User Interface",
    },
    {
      imgSrc: "https://skillicons.dev/icons?i=js&perline=12",
      label: "JavaScript",
      desc: "Interaction",
    },
    {
      imgSrc: "https://skillicons.dev/icons?i=nodejs&perline=12",
      label: "NodeJS",
      desc: "Web Server",
    },
    {
      imgSrc: "https://skillicons.dev/icons?i=express&perline=12",
      label: "ExpressJS",
      desc: "Node Framework",
    },
    {
      imgSrc: "https://skillicons.dev/icons?i=mongo&perline=12",
      label: "MongoDB",
      desc: "Database",
    },
    {
      imgSrc: "https://skillicons.dev/icons?i=react&perline=12",
      label: "React",
      desc: "Framework",
    },
    {
      imgSrc: "https://skillicons.dev/icons?i=tailwind&perline=12",
      label: "TailwindCSS",
      desc: "User Interface",
    },
  ];

  return (
    <section className="section pt-20 reveal--x">
      <div className="container">
        <h2 className="headline-2">Herramientas</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cum
          qui dignissimos pariatur modi sunt maiores consectetur sint dicta
          aliquam, temporibus, eum nulla unde corrupti praesentium voluptatem
          iure ea ad.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] reveal-x">
          {skillItem.map(({ imgSrc, label, desc }, key) => <SkillCard imgSrc={imgSrc} label={label} desc={desc} key={key}/>)}
        </div>
      </div>
    </section>
  );
}
