
import "./TechSkills.css";

const skillGroups = [
  {
    number: "01",
    title: "Programming",
    description:
      "Programming languages for software development, computation, and problem-solving.",
    skills: [
      "Python",
      "JavaScript",
      "Java",
      "C",
      "R",
      "MATLAB",
      "Stata",
    ],
  },
  {
    number: "02",
    title: "Data Analysis & Statistics",
    description:
      "Statistical analysis, mathematical modelling, data interpretation, and generating meaningful insights.",
    skills: [
      "Python",
      "R",
      "MATLAB",
      "Stata",
      "NVivo",
      "Microsoft Excel",
      "Statistical Analysis",
      "Predictive Modelling",
    ],
  },
  {
    number: "03",
    title: "Web Development",
    description:
      "Building responsive frontend interfaces and functional backend applications.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "Embedded JavaScript (EJS)",
    ],
  },
  {
    number: "04",
    title: "Databases",
    description:
      "Relational and NoSQL database management, data storage, and querying.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    number: "05",
    title: "Data Collection & GIS",
    description:
      "Digital field data collection, survey management, and geospatial analysis.",
    skills: [
      "KoboToolbox",
      "ODK",
      "QGIS",
      "Digital Data Collection",
      "Spatial Analysis",
      "Data Visualization",
    ],
  },
  {
    number: "06",
    title: "Tools & Systems",
    description:
      "Development tools, version control, operating systems, and networking fundamentals.",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Visual Studio Code",
      "Postman",
      "Linux",
      "Windows",
      "Networking",
    ],
  },
];

const tickerSkills = [
  "Python",
  "React.js",
  "Node.js",
  "PostgreSQL",
  "Stata",
  "JavaScript",
  "Docker",
  "Data Analysis",
  "Git",
  "MongoDB",
  "KoboToolbox",
  "QGIS",
  "ODK",
  "MATLAB",
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
              A growing toolkit for building software, analysing data,
              collecting information, and exploring spatial insights.
            </p>
          </div>
        </header>

        <div className="techskills__groups">
          {skillGroups.map((group) => (
            <article
              className="techskills__group"
              key={group.number}
            >
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

      <div
        className="techskills__ticker"
        aria-label="Selected technologies"
      >
        <div
          className="techskills__ticker-track"
          aria-hidden="true"
        >
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
