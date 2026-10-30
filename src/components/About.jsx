
import { useEffect, useState } from "react";
import "./About.css";

const skills = [
  {
    name: "Python",
    category: "DATA ANALYSIS & STATISTICS",
    image: "/data/skills/python.png",
    description:
      "Data analysis, statistical computing, automation, and predictive modelling.",
  },
  {
    name: "R",
    category: "DATA ANALYSIS & STATISTICS",
    image: "/data/skills/r.png",
    description:
      "Statistical analysis, data exploration, modelling, and visualization.",
  },
  {
    name: "Stata",
    category: "DATA ANALYSIS & STATISTICS",
    image: "/data/skills/stata.png",
    description:
      "Statistical analysis, quantitative research, and data interpretation.",
  },
  {
    name: "MATLAB",
    category: "DATA ANALYSIS & STATISTICS",
    image: "/data/skills/mat.png",
    description:
      "Mathematical modelling, numerical computation, and statistical analysis.",
  },
  {
    name: "Microsoft Excel",
    category: "DATA ANALYSIS & STATISTICS",
    image: "/data/skills/excel.png",
    description:
      "Data organization, analysis, calculations, and reporting.",
  },
  {
    name: "KoboToolbox",
    category: "DATA COLLECTION TOOLS",
    image: "/data/skills/kobo.png",
    description:
      "Digital data collection, questionnaire design, and field data management.",
  },
  {
    name: "ODK",
    category: "DATA COLLECTION TOOLS",
    image: "/data/skills/odk.png",
    description:
      "Mobile-based data collection, form design, and field surveys.",
  },
  {
    name: "QGIS",
    category: "GIS & SPATIAL ANALYSIS",
    image: "/data/skills/qgis.png",
    description:
      "Geospatial data analysis, mapping, and spatial visualization.",
  },
  {
    name: "PostgreSQL",
    category: "DATABASE MANAGEMENT",
    image: "/data/skills/postgresql.png",
    description:
      "Relational database management, SQL queries, and data storage.",
  },
  {
    name: "MySQL",
    category: "DATABASE MANAGEMENT",
    image: "/data/skills/mysql.png",
    description:
      "Relational databases, SQL queries, and data management.",
  },
  {
    name: "MongoDB",
    category: "DATABASE MANAGEMENT",
    image: "/data/skills/mongo.png",
    description:
      "NoSQL databases and flexible document-based data storage.",
  },
  {
    name: "Node.js",
    category: "BACKEND DEVELOPMENT",
    image: "/data/skills/node.png",
    description:
      "Server-side applications and REST API development.",
  },
];

export default function About() {
  const [activeSkill, setActiveSkill] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const skill = skills[activeSkill];

  function showNextSkill() {
    setActiveSkill((current) => (current + 1) % skills.length);
  }

  function showPreviousSkill() {
    setActiveSkill(
      (current) => (current - 1 + skills.length) % skills.length
    );
  }

  // Automatically change technology every 3 seconds.
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveSkill((current) => (current + 1) % skills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="about"
      className="about"
      aria-labelledby="about-title"
    >
      <div className="about__inner">
        <div className="about__heading">
          <span className="about__eyebrow">
            02 / A LITTLE ABOUT ME
          </span>

          <h2 id="about-title" className="about__title">
            Curious by nature.
            <br />
            <span>Driven to build.</span>
          </h2>
        </div>

        <div className="about__layout">
          <div className="about__visual">
            <div
              className="about__skill-card"
              aria-live="off"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onFocus={() => setIsPaused(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setIsPaused(false);
                }
              }}
            >
              <div className="about__card-top">
                <span>TECHNOLOGY INDEX</span>
                <span>
                  {String(activeSkill + 1).padStart(2, "0")} /{" "}
                  {String(skills.length).padStart(2, "0")}
                </span>
              </div>

              <div
                className="about__skill-display"
                key={skill.name}
              >
                <div
                  className="about__skill-orbit"
                  aria-hidden="true"
                >
                  <span />
                  <span />
                  <span />
                </div>

                <div className="about__skill-icon">
                  <img
                    src={skill.image}
                    alt={`${skill.name} logo`}
                    onError={(event) => {
                      event.currentTarget.style.visibility = "hidden";
                    }}
                  />
                </div>
              </div>

              <div
                className="about__skill-info"
                key={`info-${skill.name}`}
              >
                <span className="about__skill-category">
                  {skill.category}
                </span>

                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </div>

              <div className="about__skill-controls">
                <button
                  type="button"
                  onClick={showPreviousSkill}
                  aria-label="Previous technology"
                >
                  ←
                </button>

                <div
                  className="about__skill-dots"
                  aria-label="Choose a technology"
                >
                  {skills.map((item, index) => (
                    <button
                      key={item.name}
                      type="button"
                      className={
                        index === activeSkill
                          ? "about__dot about__dot--active"
                          : "about__dot"
                      }
                      onClick={() => setActiveSkill(index)}
                      aria-label={`Show ${item.name}`}
                      aria-pressed={index === activeSkill}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={showNextSkill}
                  aria-label="Next technology"
                >
                  →
                </button>
              </div>
            </div>

            <p className="about__visual-caption">
              A selection of tools I use to turn ideas into working solutions.
            </p>
          </div>

          <div className="about__copy">
            <p className="about__lead">
              I'm <strong>Mutwii Andrian Muia</strong>, a software
              developer and data analyst interested in building useful
              digital products and finding meaningful insights in data.
            </p>

            <p>
              With a background in Mathematics and Computer Science,
              I apply analytical thinking, statistical methods, and
              computational techniques to explore data, identify patterns,
              and solve practical problems.
            </p>

            <p>
              I also develop full-stack web applications, working across
              frontend and backend technologies to build reliable,
              scalable, and user-focused software solutions.
            </p>

            <div className="about__focus">
              <h3>What I enjoy working on</h3>

              <ul>
                <li>
                  <span>01</span>
                  Full-stack applications and APIs
                </li>
                <li>
                  <span>02</span>
                  Data analysis and statistical modelling
                </li>
                <li>
                  <span>03</span>
                  Data collection and geospatial analysis
                </li>
              </ul>
            </div>

            <a
              href="/data/reen.pdf"
              download
              className="about__resume"
            >
              Download my resume <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
