import { useEffect, useRef } from "react";
import "./Hero.css";

export default function Hero({ setActiveSection }) {
  const blobRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!blobRef.current) return;
      blobRef.current.style.transform = `translate(${e.clientX * 0.03}px, ${e.clientY * 0.03}px)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const scrollTo = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="hero__bg-blob" ref={blobRef}></div>
      <div className="hero__grid-lines"></div>

      <div className="container hero__content">
        

        <h1 className="hero__title">
          Hola, soy<br />
          <span className="hero__name">Santiago</span><br />
          <span className="hero__name hero__name--dim">Machacon</span>
        </h1>

        <p className="hero__subtitle">
          Desarrollador <span className="hero__highlight">Frontend</span> · React · Flutter · Python
        </p>

        <p className="hero__desc">
          Tecnólogo en Desarrollo de Software y estudiante de Ingeniería de Sistemas.<br />
          Construyo interfaces web modernas con pasión por el detalle y la experiencia de usuario.
        </p>

        <div className="hero__cta">
          <button className="btn-primary" onClick={() => scrollTo("projects")}>
            Ver proyectos
          </button>
          <button className="btn-ghost" onClick={() => scrollTo("contact")}>
            Contactarme
          </button>
        </div>
        
      </div>
    </section>
  );
}
