
import "./Skills.css";

const softSkills = [
  {
    number: "01",
    name: "Problem Solving",
    description: "Breaking complex challenges into practical solutions.",
  },
  {
    number: "02",
    name: "Critical Thinking",
    description: "Evaluating information and making informed decisions.",
  },
  {
    number: "03",
    name: "Communication",
    description: "Expressing ideas clearly and effectively.",
  },
  {
    number: "04",
    name: "Team Collaboration",
    description: "Working constructively with others toward shared goals.",
  },
  {
    number: "05",
    name: "Adaptability",
    description: "Adjusting to new technologies, requirements, and challenges.",
  },
  {
    number: "06",
    name: "Time Management",
    description: "Prioritizing responsibilities and meeting deadlines.",
  },
];

const trainingExperiences = [
  {
    number: "01",
    title: "Cybersecurity Training",
    organization: "KCFSA Team · JKUAT",
    period: "20 January 2025 – 15 November 2025",
    category: "CYBERSECURITY",
    description:
      "Participated in practical cybersecurity sessions exploring common cyber threats, attack techniques, prevention, and mitigation.",
    highlights: [
      "Port scanning and network security fundamentals.",
      "Cybersecurity incident handling and response.",
      "Attack documentation, analysis, and review.",
      "Networking, network protocols, and cybersecurity terminology.",
      "Security practices through on-campus and remote sessions.",
    ],
  },
  {
    number: "02",
    title: "Data Analysis & GIS Attachment",
    organization: "AMREC",
    period: "8 June 2026 – 30 August 2026",
    category: "DATA ANALYSIS & GIS",
    description:
      "Gained practical exposure to data analysis, geospatial technologies, and digital data collection.",
    highlights: [
      "Qualitative and quantitative data analysis, interpretation, and reporting.",
      "QGIS for spatial data analysis, mapping, and visualization.",
      "Digital data collection and questionnaire design.",
      "Field data management using KoboToolbox and ODK.",
    ],
  },
];

function Skills() {
  return (
    <>
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
                Good work takes more than technical knowledge. These
                are the habits and approaches I value when solving
                problems and working with others.
              </p>
            </div>
          </header>

          <div className="soft-skills__list">
            {softSkills.map((skill) => (
              <span
                className="soft-skills__item"
                key={skill.number}
              >
                <span className="soft-skills__number">
                  {skill.number}
                </span>

                <span className="soft-skills__name">
                  {skill.name}
                </span>
              </span>
            ))}
          </div>

          <div className="soft-skills__footer">
            <span>TECHNICAL THINKING</span>
            <span
              aria-hidden="true"
              className="soft-skills__footer-line"
            />
            <span>PEOPLE & COLLABORATION</span>
          </div>
        </div>
      </section>

      <section
        id="training"
        className="training"
        aria-labelledby="training-title"
      >
        <div className="training__inner">
          <header className="training__header">
            <span className="training__eyebrow">
              05 / CONTINUOUS LEARNING
            </span>

            <div className="training__heading-row">
              <h2 id="training-title" className="training__title">
                Training &
                <br />
                <span>professional development.</span>
              </h2>

              <p className="training__intro">
                Practical learning experiences that have expanded
                my knowledge in cybersecurity, data analytics,
                digital data collection, and geospatial analysis.
              </p>
            </div>
          </header>

          <div className="training__list">
            {trainingExperiences.map((experience) => (
              <article
                className="training__card"
                key={experience.number}
              >
                <div className="training__card-top">
                  <span className="training__number">
                    {experience.number}
                  </span>

                  <span className="training__category">
                    {experience.category}
                  </span>
                </div>

                <div className="training__card-content">
                  <span className="training__period">
                    {experience.period}
                  </span>

                  <h3 className="training__name">
                    {experience.title}
                  </h3>

                  <p className="training__organization">
                    {experience.organization}
                  </p>

                  <p className="training__description">
                    {experience.description}
                  </p>

                  <ul className="training__highlights">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <span
                  className="training__arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
