export default function About() {
  return (
    <section id="about" className="pt-20 reveal-x">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <img
            src="https://readme-typing-svg.herokuapp.com?font=Time+New+Roman&color=FFFFFF&size=25&width=600&height=100&lines=Hola Soy Yeison Lopez...;Desarrollador Web...;Desarrollador Backend...;Apasionado por la programación;Estudiante de Ingenieria de Software &hearts;"
            alt=""
          />
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Actualmente curso séptimo semestre de Ingeniería de Software y me
            especializo en el desarrollo de aplicaciones web Full Stack.
            <br />
            He trabajado en proyectos utilizando React, Node.js, Express, Java,
            Spring Boot, PostgreSQL y MongoDB, desarrollando tanto interfaces
            modernas como servicios backend y APIs REST documentadas.
            <br />
            Mi objetivo es crecer como Software Engineer participando en
            proyectos donde pueda aportar soluciones eficientes, aprender
            constantemente y generar impacto mediante la tecnología.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div>
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="text-zinc-400 ">Proyectos Desplegados</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">7°</h3>
              <p className="text-zinc-400">Semestre</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">5+</h3>
              <p className="text-zinc-400">Tecnologías Backend</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">Full</h3>
              <p className="text-zinc-400">Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
