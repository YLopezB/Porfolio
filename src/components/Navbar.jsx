import clsx from "clsx";
import { useEffect, useRef } from "react";

export const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = () => {
    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
  };

  useEffect(initActiveBox, []);
  window.addEventListener("resize", initActiveBox);

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
  };

  const navItems = [
    { label: "Inicio", link: "#home", className: "nav-link active" },
    { label: "Sobre mi", link: "#about", className: "nav-link" },
    { label: "Proyectos", link: "#work", className: "nav-link" },
    { label: "Comentarios", link: "#reviews", className: "nav-link" },
    { label: "Contacto", link: "#contact", className: clsx("md:!hidden", "nav-link")},
  ];
  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          className={className}
          key={key}
          ref={className.includes("active") ? lastActiveLink : null}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};
