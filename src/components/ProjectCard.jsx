import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link
        to={`/work/${project.id}`}
        className="project-card__link"
        aria-label={`View ${project.title} project`}
      >
        <div className="project-card__image">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
          />

          <div className="project-card__overlay">
            <span className="project-card__view">
              VIEW PROJECT →
            </span>
          </div>
        </div>

        <div className="project-card__info">
          <div>
            <h3>{project.title}</h3>
            <p>{project.category}</p>
          </div>

          <span>{project.year}</span>
        </div>
      </Link>
    </article>
  );
}

export default ProjectCard;