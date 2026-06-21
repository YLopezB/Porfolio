import { Button } from "./Button";

export default function Footer() {
  const sitemap = [
    {
      label: "Inicio",
      href: "#home",
    },
    {
      label: "Sobre mí",
      href: "#about",
    },
    {
      label: "Proyectos",
      href: "#work",
    },
    {
      label: "Comentarios",
      href: "#reviews",
    },
    {
      label: "Contacto",
      href: "#contact",
    },
  ];

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/YLopezB",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yeison-lopez-2132a2410",
    }
    /*{
      label: "Twitter X",
      href: "https://x.com/codewithsadee_",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/codewithsadee",
    },
    {
      label: "CodePen",
      href: "https://codepen.io/codewithsadee",
    },*/
  ];
  return (
    <footer className="section flex items-center z-40 bg-gradient-to-b from-zinc-900/50 to-red-800/50 justify-center">
      <div className="container pt-20 ">
        <div className="lg:grid lg:grid-cols-2">
          <div className="">
            <h2 className="headLine-1 mb-8 lg:max-w-[12ch] ">
              Trabajemos Juntos!
            </h2>
            <Button
              href="mailto:contacto@yeisonlopez.dev"
              label="Empecemos un proyecto"
              icon="chevron_right"
              classes="btn-primary"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2">Mapa del sitio</p>
              <ul>
                {sitemap.map((social, key) => (
                  <li key={key}>
                    <a
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                      href={social.href}
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2">Redes Sociales</p>
              <ul>
                {socials.map((social, key) => (
                  <li key={key}>
                    <a
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                      href={social.href}
                      target="_black"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between pt-10 pb-5">
          <a href="" className="flex items-center gap-3">
            <img src="/images/logoYL.png" width={60} height={60} alt="Logo" />
            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-xl md:text-2xl font-bold tracking-wide">
                <span className="text-white">YEISON</span>{" "}
                <span className="text-[#E53935]">LÓPEZ</span>
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-zinc-300 mt-1">
                Software Engineer
              </span>
            </div>
          </a>
          <p className="text-zinc-500 text-sm">
            &copy; 2026 <span className="text-zinc-200">Yeison Lopez</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
