
import "./Skills.css";

const softSkills = [
  {
    number: "01",
    name: "Problem Solving",
    description: "Breaking complex challenges into practical solutions.",
  },
  {
    number: "02",
    name: "System Design Thinking",
    description: "Understanding how components work together as a system.",
  },
  {
    number: "03",
    name: "Cross-functional Collaboration",
    description: "Working across different disciplines to achieve shared goals.",
  },
  {
    number: "04",
    name: "Adaptability",
    description: "Adjusting to new tools, requirements, and challenges.",
  },
  {
    number: "05",
    name: "Clear Communication",
    description: "Explaining ideas and technical concepts effectively.",
  },
  {
    number: "06",
    name: "Critical Thinking",
    description: "Evaluating information and making reasoned decisions.",
  },
  {
    number: "07",
    name: "Time Management",
    description: "Prioritizing tasks and managing deadlines responsibly.",
  },
  {
    number: "08",
    name: "Continuous Learning",
    description: "Building knowledge through practice and exploration.",
  },
  {
    number: "09",
    name: "Team Collaboration",
    description: "Contributing ideas and working constructively with others.",
  },
  {
    number: "10",
    name: "Emotional Intelligence",
    description: "Recognizing perspectives and responding thoughtfully.",
  },
  {
    number: "11",
    name: "Leadership",
    description: "Taking initiative and helping teams move toward their goals.",
  },
  {
    number: "12",
    name: "Creativity",
    description: "Exploring fresh approaches to problems and ideas.",
  },
];

function Skills() {
  return (
    <section
      id="soft-skills"
      className="soft-skills"
      aria-labelledby="soft-skills-title"
    >
      <div className="soft-skills__inner">
        <header className="soft-skills__header">
          <span className="soft-skills__eyebrow">
            04 / HOW I WORK
          </span>

          <div className="soft-skills__heading-row">
            <h2 id="soft-skills-title" className="soft-skills__title">
              Beyond the
              <br />
              <span>code.</span>
            </h2>

            <p className="soft-skills__intro">
              Good work takes more than technical knowledge. These are the
              habits and approaches I value when solving problems and working
              with others.
            </p>
          </div>
        </header>

        <div className="soft-skills__list">
          {softSkills.map((skill) => (
            <article className="soft-skills__item" key={skill.number}>
              <span className="soft-skills__number">
                {skill.number}
              </span>

              <h3 className="soft-skills__name">
                {skill.name}
              </h3>

              <p className="soft-skills__description">
                {skill.description}
              </p>

              <span className="soft-skills__arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>

        <div className="soft-skills__footer">
          <span>TECHNICAL THINKING</span>
          <span aria-hidden="true" className="soft-skills__footer-line" />
          <span>PEOPLE & COLLABORATION</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
