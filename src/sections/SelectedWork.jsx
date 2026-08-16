import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import "./SelectedWork.css";

const categories = [
  "ALL",
  "MUSIC",
  "EVENTS",
  "BRANDING",
  "CAMPAIGN",
  "EXPERIMENTAL",
];

function SelectedWork() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "ALL") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section className="selected-work" id="work">
      <div className="container">

        <div className="selected-work__header">
          <div>
            <p className="label">SELECTED WORK</p>

            <h2 className="selected-work__title">
              WORK
            </h2>
          </div>

          <Link
            to="/work"
            className="selected-work__all"
          >
            VIEW ALL WORK →
          </Link>
        </div>

        <div
          className="selected-work__filters"
          aria-label="Portfolio filters"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? "filter filter--active"
                  : "filter"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="selected-work__grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default SelectedWork;