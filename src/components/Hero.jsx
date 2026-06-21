import { Button } from "./Button";

export const Hero = () => {
  return (
    <section className="pt-28 lg:pt-36" id="home">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="img-box w-9 h-9 rounded-full">
              <img
                src="/images/perfil.jpg"
                width={40}
                height={40}
                alt="Yeison Lopez perfil"
                className="img-cover"
              />
            </div>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Disponible ahora
            </div>
          </div>
          <p className="headline-2 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 ñg:mb-10">
            Yeison Lopez
          </p>
          <p className="text-zinc-400 text-lg max-w-[55ch] mb-8">
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
          <div className="flex gap-8 mb-10">
            <div>
              <h3 className="text-2xl font-bold headline-2">10+</h3>
              <p className="text-zinc-400 text-sm">Proyectos</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold headline-2">5+</h3>
              <p className="text-zinc-400 text-sm">Tecnologías</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold headline-2">9°</h3>
              <p className="text-zinc-400 text-sm">Ingeniería de software</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 m-8">
            {["Express", "TailwindCSS", "React", "Node.js", "PostgreSQL"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-sm"
                >
                  {tech}
                </span>
              ),
            )}
          </div>
          <div className="flex items-center gap-3">
            <Button
              href="/CV/Yeison-Lopez-CV.pdf"
              download="CV-Yeison-Lopez.pdf"
              label="Descargar CV"
              icon="download"
              classes="btn-primary"
            />
            <Button
              href="/CV/Yeison-Lopez-CV.pdf"
              target="_blank"
              label="Ver CV"
              icon="visibility"
              classes="btn-outline"
            />
            <Button
              href="#work"
              label="Ver proyectos"
              icon="arrow_downward"
              classes="btn-outline"
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="bg-gradient-to-t from-red-400 via-25% via-red-400 to-65% rounded-[60px] overflow-hidden w-full max-w-[480px] ml-auto">
            <img
              src="/images/banner.png"
              width={656}
              height={800}
              alt="Banner Yeison Lopez"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
