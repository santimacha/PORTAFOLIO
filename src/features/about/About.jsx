import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <p className="section-label">// sobre mí</p>
        <h2 className="section-title">Quién <span>soy</span></h2>

        <div className="about__grid">
          <div className="about__text">
            <p>
              Soy <strong>Santiago Machacon</strong>, Tecnologo en desarrollo de software graduado de COMFENALCO Cartagena y actualmente en 8° semestre de Ingeniería en Sistemas.
            </p>
            <p>
              Me apasiona construir productos web que combinen buen diseño con código limpio. He trabajado en proyectos reales como plataformas académicas, aplicaciones educativas con IA y apps móviles, siempre con un enfoque en la experiencia del usuario.
            </p>
            <p>
              También tengo experiencia como técnico independiente en mantenimiento de computadores: diagnóstico de hardware y software, instalación de sistemas operativos y soporte técnico a usuarios.
            </p>

            <div className="about__info-grid">
              <div className="info-item">
                <span className="info-label">📍 Ubicación</span>
                <span className="info-value">Turbaco, Bolívar, Colombia</span>
              </div>
              <div className="info-item">
                <span className="info-label">📧 Correo</span>
                <a href="mailto:santiagomachacon93@gmail.com" className="info-value info-value--link">
                  santiagomachacon93@gmail.com
                </a>
              </div>
              <div className="info-item">
                <span className="info-label">📞 Teléfono</span>
                <span className="info-value">302 203 3146</span>
              </div>
              <div className="info-item">
                <span className="info-label">🎓 Título</span>
                <span className="info-value">Tecnólogo en Dev. Software · Ing. Sistemas (en curso)</span>
              </div>
            </div>
          </div>

          <div className="about__card">
            <div className="about__card-header">
              <div className="card-dot card-dot--red"></div>
              <div className="card-dot card-dot--yellow"></div>
              <div className="card-dot card-dot--green"></div>
              <span className="card-filename">perfil.json</span>
            </div>
            <div className="about__card-body">
              <pre>{`{
  "nombre": "Santiago Machacón",
  "rol": "Frontend Developer",
  "stack": ["React", "Flutter",
            "Python", "postgreSQL"],
  "educacion": {
    "titulo": "Tecnologo Dev. Software",
    "actual": "Ingeniería en Sistemas",
    "semestre": 8
  },
  "idiomas": {
    "español": "nativo",
    "inglés": "intermedio"
  },
  "disponible": true
}`}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
