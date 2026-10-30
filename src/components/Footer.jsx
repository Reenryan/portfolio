import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <a href="#about" className="footer__brand">
            <span className="footer__brand-mark">R.</span>
            <span className="footer__brand-name">Ryan</span>
          </a>

          <p className="footer__message">
            Building, learning, and improving — one project at a time.
          </p>

          <a href="#about" className="footer__back-top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} <strong>Mutwii Ryan</strong>. All rights reserved.
          </p>

          <nav className="footer__socials" aria-label="Social links">
            <a
              href="https://wa.me/254114134699"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp <span aria-hidden="true">↗</span>
            </a>

            <a href="mailto:andrianmutwii@gmail.com">
              Email <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://github.com/Reenryan"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;