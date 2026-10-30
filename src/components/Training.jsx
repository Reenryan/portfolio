
import "./Training.css";

const trainingExperiences = [
  {
    number: "01",
    category: "CYBERSECURITY",
    title: "Cybersecurity Training",
    organization: "KCFSA Team · JKUAT",
    period: "20 January 2025 – 15 November 2025",
    description:
      "Participated in practical cybersecurity training focused on understanding cyber threats, identifying vulnerabilities, and applying security practices.",
    highlights: [
      "Port scanning and network security concepts.",
      "Understanding network protocols and common attack techniques.",
      "Incident handling, attack documentation, and analysis.",
      "Cybersecurity prevention, mitigation, and best practices.",
      "Participated in both on-campus and remote training sessions.",
    ],
  },
  {
    number: "02",
    category: "DATA ANALYSIS & GIS",
    title: "Data Analysis & GIS Attachment",
    organization: "AMREC",
    period: "8 June 2026 – 30 August 2026",
    description:
      "Gained practical experience in qualitative and quantitative data analysis, spatial data management, GIS applications, and digital field data collection.",
    highlights: [
      "Qualitative and quantitative data analysis and interpretation.",
      "Spatial analysis, mapping, and visualization using QGIS.",
      "Digital data collection and questionnaire/form design.",
      "Field data management using KoboToolbox and ODK.",
      "Preparation and interpretation of analytical findings.",
    ],
  },
];

function Training() {
  return (
    <section className="training" id="training">
      <div className="training__inner">
        <header className="training__header">
          <span className="training__eyebrow">
            LEARNING & PROFESSIONAL GROWTH
          </span>

          <div className="training__heading-row">
            <h2 className="training__title">
              Training & <span>Development.</span>
            </h2>

            <p className="training__intro">
              Practical learning experiences that have strengthened my
              technical knowledge, analytical abilities, and professional
              development.
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
                <div className="training__main">
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
                </div>

                <div className="training__details">
                  <span className="training__details-label">
                    KEY AREAS
                  </span>

                  <ul className="training__highlights">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <span className="training__arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>

        <footer className="training__footer">
          <span>CONTINUOUS LEARNING</span>
          <span className="training__footer-line" />
          <span>TECHNICAL & PROFESSIONAL GROWTH</span>
        </footer>
      </div>
    </section>
  );
}

export default Training;
