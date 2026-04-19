import { projects } from "./projects.data";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <p className="section-label">// proyectos</p>
        <h2 className="section-title">Lo que he <span>construido</span></h2>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article
      className="project-card"
      style={{ "--project-color": project.color, animationDelay: `${index * 0.1}s` }}
    >
      <div className="project-card__top">
        <div className="project-card__emoji">{project.emoji}</div>
        <span className="project-card__category">{project.category}</span>
      </div>

      <div className="project-card__glow"></div>

      <h3 className="project-card__name">{project.name}</h3>
      <p className="project-card__desc">{project.description}</p>

      <div className="project-card__tech">
        {project.tech.map((t) => (
          <span key={t} className="tech-pill">{t}</span>
        ))}
      </div>

      
    </article>
  );
}
