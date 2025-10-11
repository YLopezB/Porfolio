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
              Disponible
            </div>
          </div>
          <h2 className="headLine-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 ñg:mb-10">
            Apasionado por crear soluciones web modernas con Java y React.
          </h2>
          <div className="flex items-center gap-3">
            <Button label="Descargar HV" icon="download" classes="btn-primary"/> 
            <Button href="#about" label="Continuar" icon="arrow_downward" classes="btn-outline"/>
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
