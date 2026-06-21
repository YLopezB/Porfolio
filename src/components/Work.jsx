import ProjectCard from "./ProjectCard";
export default function Work() {
  const works = [
    {
      imgSrc: "/images/shoplist.png",
      title: "ShopList Hub",
      tags: ["Next", "Express", "MongoDB", "JWT", "Node.js", "API"],
      projectLink: "https://shoplisthub.yeisonlopez.dev/",
    },
    {
      imgSrc: "/images/myitinerary.png",
      title: "My Tinerary",
      tags: ["React", "Express", "MongoDB", "JWT", "Node.js", "API", "TailwinCSS"],
      projectLink: "https://mytinerary.yeisonlopez.dev",
    },
    {
      imgSrc: "/images/Api-Innovapyme.png",
      title: "Backend Api InnovaPyme",
      tags: ["Express", "Prisma ORM", "MySQL", "JWT", "Swagger", "API"],
      projectLink: "https://api-innovapyme.up.railway.app/docs",
    },
    {
      imgSrc: "/images/comics.png",
      title: "COMICS",
      tags: ["React", "Node.js", "TailwinCSS"],
      projectLink: "https://comics.yeisonlopez.dev",
    },
    {
      imgSrc: "/images/ecomerce.png",
      title: "E-comerce: Yeison's shop",
      tags: ["HTML", "CSS", "JS", "LocalStorage", "bootstrap"],
      projectLink: "https://ylopezb.github.io/Ecomerce/",
    },
    {
      imgSrc: "/images/amazingevents.png",
      title: "Amazing Events",
      tags: ["HTML", "CSS", "JS", "Bootstrap"],
      projectLink: "https://ylopezb.github.io/AmazingEventsYeisonLopez",
    },
        {
      imgSrc: "/images/tablerokanban.png",
      title: "Tablero Kanban",
      tags: ["HTML", "CSS", "JS", "drop"],
      projectLink: "https://ylopezb.github.io/TABLERO-KANBAN",
    },
    {
      imgSrc: "/images/gastos.png",
      title: "Manejador de cuentas",
      tags: ["HTML", "CSS", "JS"],
      projectLink: "https://ylopezb.github.io/MANEJO-DE-GASTOS",
    },
    {
      imgSrc: "/images/paletacolores.png",
      title: "Generador paleta colores",
      tags: ["HTML", "CSS", "JS"],
      projectLink: "https://ylopezb.github.io/Generador-de-paleta-de-colores",
    },
  ];
  return (
    <section id="work" className="section pt-20">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal--x">Mis proyectos</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes={"reveal-x"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
