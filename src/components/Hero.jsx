
import "./Hero.css";

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      aria-labelledby="hero-title"
    >
      <div className="hero__content">
        <div className="hero__eyebrow">
          <span className="hero__status" aria-hidden="true" />
          <span>SOFTWARE DEVELOPER & DATA ANALYST</span>
        </div>

        <div className="hero__profile">
          <div className="hero__image-wrap">
            <img
              src="/data/a.jpeg"
              alt="Portrait of Mutwii Andrian Muia"
              className="hero__image"
            />
          </div>

          <span className="hero__image-caption">
            <span className="hero__caption-line" />
            Based in Kenya
          </span>
        </div>

        <h1 className="hero__title" id="hero-title">
          Hi, I'm
          <br />
          <span className="hero__name">
            Mutwii Andrian Muia.
          </span>
          <br />
          <span className="hero__title-last">
            I build things that matter.
          </span>
        </h1>

        <div className="hero__bottom">
          <p className="hero__description">
            I build reliable software, thoughtful digital experiences,
            and data-driven solutions to real-world problems.
          </p>

          <div className="hero__actions">
            <a
              href="/data/reen.pdf"
              download
              className="hero__button"
            >
              <span>Download resume</span>
              <span aria-hidden="true">↗</span>
            </a>

            <a href="#projects" className="hero__text-link">
              Explore my work
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero__index" aria-hidden="true">
          <span>PORTFOLIO — 2026</span>
          <span>01 / INTRODUCTION</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
