import "./Skills.css";

const technicalSkills = [
  { name: "JavaScript", level: 75 },
  { name: "React", level: 72 },
  { name: "Flutter / Dart", level: 65 },
  { name: "Python", level: 60 },
  { name: "MongoDB", level: 55 },
  { name: "Git & GitHub", level: 80 },
];

const softSkills = [
  { name: "Trabajo en equipo", icon: "🤝" },
  { name: "Creatividad", icon: "💡" },
  { name: "Versatilidad", icon: "🔄" },
  { name: "Mejora continua", icon: "📈" },
  { name: "Comunicación", icon: "💬" },
  { name: "Resolución de problemas", icon: "🧩" },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <p className="section-label">// habilidades</p>
        <h2 className="section-title">Mi <span>stack</span></h2>

        <div className="skills__grid">
          <div className="skills__block">
            <h3 className="skills__subtitle">Técnicas</h3>
            <div className="skills__bars">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="skill-bar">
                  <div className="skill-bar__header">
                    <span className="skill-bar__name">{skill.name}</span>
                    <span className="skill-bar__level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar__track">
                    <div
                      className="skill-bar__fill"
                      style={{ "--target-width": `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills__block">
            <h3 className="skills__subtitle">Blandas</h3>
            <div className="skills__soft">
              {softSkills.map((skill) => (
                <div key={skill.name} className="soft-card">
                  <span className="soft-card__icon">{skill.icon}</span>
                  <span className="soft-card__name">{skill.name}</span>
                </div>
              ))}
            </div>

            <div className="skills__languages">
              <h3 className="skills__subtitle" style={{ marginTop: "32px" }}>Idiomas</h3>
              <div className="lang-item">
                <span>🇨🇴 Español</span>
                <div className="lang-dots">
                  {[1,2,3,4,5].map(i => <div key={i} className="lang-dot lang-dot--filled"></div>)}
                </div>
              </div>
              <div className="lang-item">
                <span>🇺🇸 English</span>
                <div className="lang-dots">
                  {[1,2,3].map(i => <div key={i} className="lang-dot lang-dot--filled"></div>)}
                  {[4,5].map(i => <div key={i} className="lang-dot"></div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
