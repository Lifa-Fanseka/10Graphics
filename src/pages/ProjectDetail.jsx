import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { id } = useParams();

  const projectIndex = projects.findIndex(
    (project) => project.id === Number(id)
  );

  const project = projects[projectIndex];

  /* =================================
     PROJECT NOT FOUND
     ================================= */

  if (!project) {
    return (
      <main className="project-detail project-detail--not-found">
        <div className="container">
          <p className="label">
            404 / PROJECT NOT FOUND
          </p>

          <h1>
            NOT
            <br />
            HERE.
          </h1>

          <Link
            to="/work"
            className="project-detail__back"
          >
            ← BACK TO WORK
          </Link>
        </div>
      </main>
    );
  }

  /* =================================
     NEXT PROJECT
     ================================= */

  const nextProject =
    projects[
      (projectIndex + 1) % projects.length
    ];

  return (
    <main className="project-detail">
      <div className="container">

        {/* =================================
            HEADER
            ================================= */}

        <header className="project-detail__header">
          <Link
            to="/work"
            className="project-detail__back"
          >
            ← ALL WORK
          </Link>

          <span className="project-detail__number">
            {String(projectIndex + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
        </header>

        {/* =================================
            INTRO
            ================================= */}

        <section className="project-detail__intro">
          <div>
            <p className="label">
              {project.category}
            </p>

            <h1>{project.title}</h1>
          </div>

          <div className="project-detail__meta">
            <div>
              <span>YEAR</span>

              <strong>
                {project.year}
              </strong>
            </div>

            <div>
              <span>DISCIPLINE</span>

              <strong>
                {project.category}
              </strong>
            </div>
          </div>
        </section>

        {/* =================================
            HERO IMAGE
            ================================= */}

        <section className="project-detail__hero">
          <img
            src={project.image}
            alt={project.title}
            decoding="async"
          />
        </section>

        {/* =================================
            PROJECT INFORMATION
            ================================= */}

        <section className="project-detail__info">
          <div>
            <p className="label">
              THE PROJECT
            </p>
          </div>

          <div className="project-detail__description">
            <p>
              {project.description}
            </p>

            <p>
              This project explores how strong
              visual communication can turn an
              idea into something people notice,
              remember and engage with.
            </p>
          </div>
        </section>

        {/* =================================
            STATEMENT
            ================================= */}

        <section className="project-detail__statement">
          <span>10G</span>

          <h2>
            DESIGN
            <br />
            THAT
            <br />
            <em>STANDS OUT.</em>
          </h2>
        </section>

        {/* =================================
            NEXT PROJECT
            ================================= */}

        <section className="project-detail__next">
          <p className="label">
            NEXT PROJECT
          </p>

          <Link
            to={`/work/${nextProject.id}`}
            className="project-detail__next-link"
          >
            <span>
              {nextProject.title}
            </span>

            <span>→</span>
          </Link>
        </section>

        {/* =================================
            CTA
            ================================= */}

        <section className="project-detail__cta">
          <p className="label">
            HAVE A PROJECT IN MIND?
          </p>

          <Link to="/start-project">
            START A PROJECT →
          </Link>
        </section>

      </div>
    </main>
  );
}

export default ProjectDetail;