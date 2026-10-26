
import "./TechSkills.css";

const skillGroups = [
  {
    number: "01",
    title: "Programming",
    description: "Languages for building applications and solving problems.",
    skills: [
      "Python",
      "JavaScript",
      "Java",
      "C",
      "R",
      "MATLAB",
    ],
  },
  {
  number: "02",
  title: "Data Analysis",
  description:
    "Data cleaning, statistical analysis, visualization, and extracting insights to support informed decisions.",
  skills: [
    "Python",
    "R",
    "MATLAB",
    "Power BI",
    "Microsoft Excel",
    "Statistics",
    "Data Visualization",
    "Predictive Modelling",
  ],
},
  {
    number: "03",
    title: "Web Development",
    description: "Frontend interfaces and server-side application development.",
    skills: [
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "Express",
      "Embedded JavaScript (EJS)",
    ],
  },
  {
    number: "04",
    title: "Data & Databases",
    description: "Working with structured data, analysis, and visualization.",
    skills: [
      "MySQL",
      "SQL Server",
      "MongoDB",
      "Power BI",
      "Microsoft Excel",
    ],
  },
  {
    number: "05",
    title: "Tools & Design",
    description: "Version control, containers, and visual communication.",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Canva",
    ],
  },
];

const tickerSkills = [
  "Python",
  "React",
  "Node.js",
  "SQL",
  "Power BI",
  "JavaScript",
  "Docker",
  "Data Analysis",
  "Git",
  "MongoDB",
];

export default function Techskills() {
  return (
    <section
      id="skills"
      className="techskills"
      aria-labelledby="techskills-title"
    >
      <div className="techskills__inner">
        <header className="techskills__header">
          <span className="techskills__eyebrow">
            03 / TOOLS OF THE TRADE
          </span>

          <div className="techskills__heading-row">
            <h2 id="techskills-title" className="techskills__title">
              Technical
              <br />
              <span>skills & tools.</span>
            </h2>

            <p className="techskills__intro">
              A growing toolkit for building software, working with data,
              and bringing ideas to life.
            </p>
          </div>
        </header>

        <div className="techskills__groups">
          {skillGroups.map((group) => (
            <article className="techskills__group" key={group.number}>
              <div className="techskills__group-heading">
                <span className="techskills__number">
                  {group.number}
                </span>

                <div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
              </div>

              <div className="techskills__list">
                {group.skills.map((skill) => (
                  <span className="techskills__tag" key={skill}>
                    {skill}
                    <span
                      className="techskills__tag-mark"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="techskills__ticker" aria-label="Selected technologies">
        <div className="techskills__ticker-track" aria-hidden="true">
          {[...tickerSkills, ...tickerSkills].map((skill, index) => (
            <span
              className="techskills__ticker-item"
              key={`${skill}-${index}`}
            >
              <span className="techskills__ticker-dot" />
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
