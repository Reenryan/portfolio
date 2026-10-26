
import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "Cnetflix Website",
    category: "WEB DEVELOPMENT",
    description:
      "A movie-focused website project built to explore web development and user-facing interfaces.",
    image: "/data/projects/net.png",
    live: true,
    link: "https://cnetflix-reen-ryan.onrender.com/",
    technologies: ["Web Development", "JavaScript"],
  },
  {
    number: "02",
    title: "React App",
    category: "FRONTEND DEVELOPMENT",
    description:
      "A React application demonstrating component-based development and interactive user interfaces.",
    image: "/data/projects/r.png",
    live: true,
    link: "https://reenryan.github.io/React-app/",
    technologies: ["React", "JavaScript", "CSS"],
  },
  {
    number: "03",
    title: "Data Dashboard",
    category: "DATA ANALYSIS",
    description:
      "A dashboard project intended to present data visually and make important information easier to explore.",
    image: "/dashboard.png",
    live: false,
    link: "",
    technologies: ["Data Visualization", "Analytics"],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="projects"
      aria-labelledby="projects-title"
    >
      <div className="projects__inner">
        <header className="projects__header">
          <span className="projects__eyebrow">
            05 / SELECTED WORK
          </span>

          <div className="projects__heading-row">
            <h2 id="projects-title" className="projects__title">
              Things I've
              <br />
              <span>worked on.</span>
            </h2>

            <p className="projects__intro">
              A selection of projects exploring software development,
              interactive interfaces, and data-driven solutions.
            </p>
          </div>
        </header>

        <div className="projects__grid">
          {projects.map((project) => (
            <article
              className="projects__item"
              key={project.number}
            >
              <div className="projects__image-wrap">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="projects__image"
                  loading="lazy"
                />

                <span
                  className={
                    project.live
                      ? "projects__status projects__status--live"
                      : "projects__status projects__status--offline"
                  }
                >
                  <span aria-hidden="true" className="projects__status-dot" />
                  {project.live ? "Live project" : "Preview only"}
                </span>

                {project.live && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__image-link"
                    aria-label={`Open ${project.title} in a new tab`}
                  >
                    View project <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>

              <div className="projects__details">
                <div className="projects__meta">
                  <span>{project.number}</span>
                  <span>{project.category}</span>
                </div>

                <h3 className="projects__name">{project.title}</h3>

                <p className="projects__description">
                  {project.description}
                </p>

                <div className="projects__technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                {project.live ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__text-link"
                  >
                    Explore project <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span className="projects__coming-soon">
                    Project link coming soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="projects__footer">
          <span>MORE PROJECTS WILL BE ADDED OVER TIME</span>
          <span className="projects__footer-line" aria-hidden="true" />
          <span>BUILD · LEARN · IMPROVE</span>
        </div>
      </div>
    </section>
  );
}

export default Projects;
