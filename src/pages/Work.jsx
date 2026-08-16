
import { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import "./Work.css";

function Work() {
  const [filter, setFilter] = useState("ALL");

  const categories = [
    "ALL",
    "POSTER DESIGN",
    "SOCIAL MEDIA",
    "EVENT GRAPHICS",
    "CAMPAIGN DESIGN",
    "BRAND IDENTITY",
  ];

  const filteredProjects =
    filter === "ALL"
      ? projects
      : projects.filter(
          (project) => project.category === filter
        );

  return (
    <main className="work">
      <div className="container">

        {/* HEADER */}
        <header className="work__header">
          <div>
            <p className="label">
              10 GRAPHICS / SELECTED WORK
            </p>

            <h1>
              THE
              <br />
              WORK.
            </h1>
          </div>

          <p className="work__intro">
            A SELECTION OF VISUAL WORK,
            <br />
            POSTERS, CAMPAIGNS AND
            <br />
            CREATIVE DIRECTION.
          </p>
        </header>

        {/* FILTERS */}
        <div
          className="work__filters"
          role="group"
          aria-label="Filter projects by category"
        >
          {categories.map((category) => {
            const isActive = filter === category;

            return (
              <button
                key={category}
                type="button"
                className={`work__filter ${
                  isActive
                    ? "work__filter--active"
                    : ""
                }`}
                onClick={() => setFilter(category)}
                aria-pressed={isActive}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* PROJECT COUNT */}
        <div className="work__meta">
          <span>
            {filteredProjects.length}{" "}
            {filteredProjects.length === 1
              ? "PROJECT"
              : "PROJECTS"}
          </span>

          <span>
            FILTER / {filter}
          </span>
        </div>

        {/* PROJECT GRID */}
        {filteredProjects.length > 0 ? (
          <div className="work__grid">
            {filteredProjects.map((project) => (
              <Link
                to={`/work/${project.id}`}
                className="work-card"
                key={project.id}
              >
                <div className="work-card__image">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                  />

                  <div
                    className="work-card__overlay"
                    aria-hidden="true"
                  >
                    <span>
                      VIEW PROJECT →
                    </span>
                  </div>
                </div>

                <div className="work-card__info">
                  <div>
                    <h2>{project.title}</h2>

                    <p>
                      {project.category}
                    </p>
                  </div>

                  <span>
                    {project.year}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="work__empty">
            <p>NO PROJECTS FOUND.</p>

            <button
              type="button"
              onClick={() => setFilter("ALL")}
            >
              VIEW ALL PROJECTS →
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default Work;

