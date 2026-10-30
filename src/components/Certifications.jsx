
import "./Certifications.css";

const certifications = [
  {
    number: "01",
    title: "Certificate in Cybersecurity",
    issuer: "KCFSA / JKUAT",
    category: "CYBERSECURITY",
    type: "Certificate",
    description:
      "Recognition of cybersecurity training and practical learning in cybersecurity concepts, network security, and threat awareness.",
  },
  {
    number: "02",
    title: "Certificate in Data Analysis",
    issuer: "AMREC",
    category: "DATA ANALYSIS",
    type: "Certificate",
    description:
      "Recognition of training and practical experience in qualitative and quantitative data analysis and interpretation.",
  },
  {
    number: "03",
    title: "Certificate in Data Collection Tools",
    issuer: "AMREC",
    category: "DATA COLLECTION",
    type: "Certificate",
    description:
      "Recognition of practical learning in digital data collection using tools such as KoboToolbox and ODK.",
  },
  {
    number: "04",
    title: "Cisco Cybersecurity Badge",
    issuer: "Cisco",
    category: "CYBERSECURITY",
    type: "Digital Badge",
    description:
      "A digital credential recognizing cybersecurity-related learning and achievement.",
  },
];

function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="certifications__inner">
        <header className="certifications__header">
          <span className="certifications__eyebrow">
            CREDENTIALS & ACHIEVEMENTS
          </span>

          <div className="certifications__heading-row">
            <h2 className="certifications__title">
              Certifications<span>.</span>
            </h2>

            <p className="certifications__intro">
              Professional credentials and digital badges reflecting
              continuous learning and the development of my technical skills.
            </p>
          </div>
        </header>

        <div className="certifications__grid">
          {certifications.map((certification) => (
            <article
              className="certifications__card"
              key={certification.number}
            >
              <div className="certifications__card-top">
                <span className="certifications__number">
                  {certification.number}
                </span>

                <span className="certifications__type">
                  {certification.type}
                </span>
              </div>

              <div className="certifications__card-content">
                <span className="certifications__category">
                  {certification.category}
                </span>

                <h3 className="certifications__name">
                  {certification.title}
                </h3>

                <p className="certifications__issuer">
                  Issued by {certification.issuer}
                </p>

                <p className="certifications__description">
                  {certification.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <footer className="certifications__footer">
          <span>LEARNING NEVER STOPS</span>
          <span className="certifications__footer-line" />
          <span>PROFESSIONAL CREDENTIALS</span>
        </footer>
      </div>
    </section>
  );
}

export default Certifications;
