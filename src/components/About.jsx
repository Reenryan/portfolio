
import { useState } from "react";
import "./About.css";

const skills = [
  {
    name: "Python",
    category: "DATA ANALYSIS",
    image: "/data/skills/python.png",
    description: "Data analysis, automation, and predictive modelling.",
  },
  {
    name: "Pandas",
    category: "DATA ANALYSIS",
    image: "/data/skills/data.png",
    description: "Data cleaning, transformation, and exploration.",
  },
  {
    name: "MySQL",
    category: "DATABASES",
    image: "/data/skills/mysql.png",
    description: "Relational databases, SQL queries, and data management.",
  },
  {
    name: "Node.js",
    category: "BACKEND DEVELOPMENT",
    image: "/data/skills/node.png",
    description: "Server-side applications and REST API development.",
  },
  {
    name: "MongoDB",
    category: "DATABASES",
    image: "/data/skills/mongo.png",
    description: "Document databases and flexible data storage.",
  },
  {
    name: "Statistics",
    category: "STATISTICS",
    image: "/data/skills/mat.png",
    description: "Statistical reasoning, descriptive analysis, and interpretation.",
  },
];

export default function About() {
  const [activeSkill, setActiveSkill] = useState(0);
  const skill = skills[activeSkill];

  function showNextSkill() {
    setActiveSkill((current) => (current + 1) % skills.length);
  }

  function showPreviousSkill() {
    setActiveSkill(
      (current) => (current - 1 + skills.length) % skills.length
    );
  }

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
              aria-live="polite"
              aria-atomic="true"
            >
              <div className="about__card-top">
                <span>TECHNOLOGY INDEX</span>
                <span>
                  {String(activeSkill + 1).padStart(2, "0")} /{" "}
                  {String(skills.length).padStart(2, "0")}
                </span>
              </div>

              <div className="about__skill-display" key={skill.name}>
                <div className="about__skill-orbit" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="about__skill-icon">
                  <img
                    src={skill.image}
                    alt=""
                    onError={(event) => {
                      event.currentTarget.style.visibility = "hidden";
                    }}
                  />
                </div>
              </div>

              <div className="about__skill-info" key={`info-${skill.name}`}>
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

                <div className="about__skill-dots" aria-label="Choose a technology">
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
              I'm <strong>Mutwii Andrian Muia</strong>, a software developer
              and data analyst interested in building useful digital products
              and finding meaningful insights in data.
            </p>

            <p>
              I work across web development, data analysis, and visual design.
              I enjoy solving practical problems, learning new technologies,
              and creating solutions that are both reliable and easy to use.
            </p>

            <p>
              My goal is to bring technical thinking and creativity together,
              whether I'm developing an application, exploring a dataset, or
              communicating information through a dashboard.
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
                  Data analysis, statistics, and dashboards
                </li>
                <li>
                  <span>03</span>
                  Visual design and clear communication
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
