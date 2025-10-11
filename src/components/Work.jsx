import ProjectCard from "./ProjectCard";
export default function Work() {
  const works = [
    {
      imgSrc: "https://img.freepik.com/vector-premium/plantilla-web-gestion-proyectos_93487-539.jpg?w=2000",
      title: "Full stack music app",
      tags: ["API", "MVC", "Development"],
      projectLink: "https://musify-5al0.onrender.com/",
    },
    {
      imgSrc: "https://as1.ftcdn.net/v2/jpg/02/63/59/42/1000_F_263594298_RlMBBQYDcg1NeVn6zinSyYuZgZ1H6BsN.jpg",
      title: "Free stock photo app",
      tags: ["API", "SPA"],
      projectLink: "https://pixstock-official.vercel.app/",
    },
    {
      imgSrc: "https://st.depositphotos.com/2236871/4874/v/950/depositphotos_48741353-stock-illustration-website-template-design.jpg",
      title: "Recipe app",
      tags: ["Development", "API"],
      projectLink: "",
    },
    {
      imgSrc: "https://images01.nicepagecdn.com/page/27/49/es/creador-de-sitios-web-preview-2749463.jpg",
      title: "Real state website",
      tags: ["Web-design", "Development"],
      projectLink: "https://github.com/codewithsadee-org/wealthome",
    },
    {
      imgSrc: "https://mir-s3-cdn-cf.behance.net/projects/404/90acb567314179.Y3JvcCwxMzY2LDEwNjgsMCww.png",
      title: "eCommerce website",
      tags: ["eCommerce", "Development"],
      projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
    },
    {
      imgSrc: "https://www.zohowebstatic.com/sites/default/files/projects/templates_0.png",
      title: "vCard Personal portfolio",
      tags: ["Web-design", "Development"],
      projectLink: "https://github.com/codewithsadee/vcard-personal-portfolio",
    },
  ];
  return (
    <section id="work" className="section pt-20">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal--x">Mi portafolio</h2 >
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({imgSrc, title, tags, projectLink}, key) => (
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
