import SkillCard from "./SkillCard";

export default function Skill() {
  const skillitems = {
    frontend: [
      {
        imgSrc: "https://skillicons.dev/icons?i=html",
        label: "HTML5",
        desc: "Markup Language",
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=css",
        label: "CSS3",
        desc: "User Interface",
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=js",
        label: "JavaScript",
        desc: "Programming Language",
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=react",
        label: "React",
        desc: "Frontend Library",
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=tailwind",
        label: "Tailwind CSS",
        desc: "CSS Framework",
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=bootstrap",
        label: "Bootstrap",
        desc: "CSS Framework",
      },
    ],
    backend: [
      {
        imgSrc: "https://skillicons.dev/icons?i=java",
        label: "Java",
        desc: "Backend Development",
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=spring",
        label: "Spring Boot",
        desc: "Backend Framework",
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=nodejs",
        label: "Node.js",
        desc: "Runtime Environment",
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=express",
        label: "Express.js",
        desc: "Node Framework",
      },
    ],
    basesDatos: [
      {
        imgSrc: "https://skillicons.dev/icons?i=postgres",
        label: "PostgreSQL",
        desc: "Relational Database",
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=mysql",
        label: "MySQL",
        desc: "Relational Database",
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=mongodb",
        label: "MongoDB",
        desc: "NoSQL Database",
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=prisma",
        label: "Prisma",
        desc: "ORM",
      },
    ],

    herramientas: [
      {
        imgSrc: "https://skillicons.dev/icons?i=git",
        label: "Git",
        desc: "Version Control",
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=github",
        label: "GitHub",
        desc: "Code Repository",
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=docker",
        label: "Docker",
        desc: "Containerization",
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=linux",
        label: "Linux",
        desc: "Operating System",
      },
    ],
  };

  return (
    <section className="section pt-20 reveal--x" id="skills">
      <div className="container">
        <h2 className="headline-2">Skills</h2>
        <p className="text-zinc-400 mt-3 mb-8 ">
          Durante mi trayectoria académica en la universidad y en proyectos
          personales he adquirido experiencia construyendo interfaces modernas
          con React, desarrollando servicios backend con Node.js y Express,
          Java, Spring Boot, gestionando bases de datos relacionales y NoSQL, y
          utilizando herramientas como Git, Docker y Linux para optimizar los
          flujos de desarrollo y despliegue.
          <br />
          Mi objetivo es seguir fortaleciendo mis habilidades como Software
          Engineer, participando en proyectos que requieran soluciones
          eficientes, escalables y alineadas con las mejores prácticas de la
          industria.
        </p>
        <div className="flex items-center gap-3 mb-6 mt-10">
          <div className="w-1 h-8 bg-[#E53935] rounded-full"></div>
          <span className="material-symbols-rounded headline-3 2xl">web</span>
          <h3 className="text-2xl font-semibold text-zinc-400">Frontend</h3>
          <div className="flex-1 h-px bg-zinc-700"></div>
        </div>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] reveal-x">
          {skillitems.frontend.map(({ imgSrc, label, desc }, key) => (
            <SkillCard imgSrc={imgSrc} label={label} desc={desc} key={key} />
          ))}
        </div>
        <div className="flex items-center gap-3 mb-6 mt-10">
          <div className="w-1 h-8 bg-[#E53935] rounded-full"></div>
          <span className="material-symbols-rounded headline-3">dns</span>
          <h3 className="text-2xl font-semibold text-zinc-400">Backend</h3>
          <div className="flex-1 h-px bg-zinc-700"></div>
        </div>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] reveal-x">
          {skillitems.backend.map(({ imgSrc, label, desc }, key) => (
            <SkillCard imgSrc={imgSrc} label={label} desc={desc} key={key} />
          ))}
        </div>
        <div className="flex items-center gap-3 mb-6 mt-10">
          <div className="w-1 h-8 bg-[#E53935] rounded-full"></div>
          <span className="material-symbols-rounded headline-3">database</span>
          <h3 className="text-2xl font-semibold text-zinc-400">
            Base de datos
          </h3>
          <div className="flex-1 h-px bg-zinc-700"></div>
        </div>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] reveal-x">
          {skillitems.basesDatos.map(({ imgSrc, label, desc }, key) => (
            <SkillCard imgSrc={imgSrc} label={label} desc={desc} key={key} />
          ))}
        </div>
        <div className="flex items-center gap-3 mb-6 mt-10">
          <div className="w-1 h-8 bg-[#E53935] rounded-full"></div>
          <span className="material-symbols-rounded headline-3">build</span>
          <h3 className="text-2xl font-semibold text-zinc-400">Herramientas</h3>
          <div className="flex-1 h-px bg-zinc-700"></div>
        </div>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] reveal-x">
          {skillitems.herramientas.map(({ imgSrc, label, desc }, key) => (
            <SkillCard imgSrc={imgSrc} label={label} desc={desc} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
}
