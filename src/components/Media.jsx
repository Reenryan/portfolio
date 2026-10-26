import "./Media.css";

const mediaItems = [
  {
    number: "01",
    title: "Poster 1",
    type: "Poster",
    src: "/data/posters/poster1.jpeg",
    description: "Visual design",
  },
  {
    number: "02",
    title: "CV Video",
    type: "Video",
    src: "/data/posters/cv.mp4",
    description: "Personal introduction",
  },
  {
    number: "03",
    title: "Dashboard Mockup",
    type: "Poster",
    src: "/data/posters/poster2.jpeg",
    description: "Dashboard design",
  },
  {
    number: "04",
    title: "Data Analysis",
    type: "Video",
    src: "/data/posters/slide1.mp4",
    description: "Data presentation",
  },
  {
    number: "05",
    title: "Dashboard Mockup",
    type: "Poster",
    src: "/data/posters/poster3.jpeg",
    description: "Visual communication",
  },
];

function Media() {
  return (
    <section
      id="dashboards"
      className="media"
      aria-labelledby="media-title"
    >
      <div className="media__inner">
        <header className="media__header">
          <span className="media__eyebrow">06 / VISUAL WORK</span>

          <div className="media__heading-row">
            <h2 id="media-title" className="media__title">
              Beyond the
              <br />
              <span>screen.</span>
            </h2>

            <p className="media__intro">
              A collection of visual work, video presentations, and
              dashboard concepts that bring ideas and information to life.
            </p>
          </div>
        </header>

        <div className="media__grid">
          {mediaItems.map((item) => (
            <article className="media__item" key={item.number}>
              <div className="media__preview">
                {item.type === "Poster" ? (
                  <a
                    href={item.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="media__image-link"
                    aria-label={`Open ${item.title} image in a new tab`}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="media__image"
                      loading="lazy"
                    />
                    <span className="media__view-link">
                      View image <span aria-hidden="true">↗</span>
                    </span>
                  </a>
                ) : (
                  <video
                    className="media__video"
                    controls
                    preload="metadata"
                    playsInline
                    aria-label={item.title}
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support video playback.
                  </video>
                )}

                <span className="media__type">{item.type}</span>
              </div>

              <div className="media__details">
                <span className="media__number">{item.number}</span>

                <div className="media__text">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <span className="media__arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>

        <footer className="media__footer">
          <span>DESIGN & PRESENTATION</span>
          <span className="media__footer-line" aria-hidden="true" />
          <span>DATA & STORYTELLING</span>
        </footer>
      </div>
    </section>
  );
}

export default Media;