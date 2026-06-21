import { useState } from "react";
import { Navbar } from "./Navbar";

const Header = () => {
  const [navOpen, SetNavOpen] = useState(false);

  return (
<header className="fixed top-0 left-0 w-full h-25 flex items-center z-40 bg-gradient-to-b from-red-800/50 to-zinc-900/50">
  <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-6 flex justify-between items-center">
    
    <h1>
      <a href="/" className="flex items-center gap-3">
        <img
          src="/images/logoYL.png"
          width={70}
          height={70}
          alt="Yeison Lopez"
        />

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
    </h1>

    <div className="relative md:justify-self-center justify-end">
      <button
        className="menu-btn"
        onClick={() => SetNavOpen((prev) => !prev)}
      >
        <span className="material-symbols-rounded">
          {navOpen ? "close" : "menu"}
        </span>
      </button>

      <Navbar navOpen={navOpen} />
    </div>

    <a
      href="#contact"
      className="max-w-max h-9 gap-2 px-4 items-center rounded-xl font-medium text-sm ring-1 ring-zinc-50/5 ring-inset transition-[background-color] btn-secondary hidden md:flex"
    >
      Contacto
    </a>
  </div>
</header>
  );
};

export default Header;
