import { useState } from "react";
import "./Contact.css";

const emailAddress = "andrianmutwii@gmail.com";
const whatsappUrl = "https://wa.me/254114134699";

function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${emailAddress}`;
    }
  }

  return (
    <section
      id="contact"
      className="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact__inner">
        <span className="contact__eyebrow">07 / LET'S CONNECT</span>

        <div className="contact__main">
          <div className="contact__heading">
            <h2 id="contact-title" className="contact__title">
              Have an idea?
              <br />
              <span>Let's talk.</span>
            </h2>

            <p className="contact__intro">
              Whether you have a project in mind, want to collaborate,
              or simply want to connect, I'd be happy to hear from you.
            </p>
          </div>

          <div className="contact__actions">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link contact__link--primary"
            >
              <span className="contact__link-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.52 3.48A11.92 11.92 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.56 4.2 1.62 6.03L0 24l6.14-1.61A11.96 11.96 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.24-6.2-3.48-8.52ZM12 22a9.94 9.94 0 0 1-5.06-1.38l-.36-.21-3.65.96.97-3.56-.24-.37A9.95 9.95 0 0 1 2 12C2 6.49 6.49 2 12 2s10 4.49 10 10-4.49 10-10 10Zm5.47-7.46c-.3-.15-1.73-.85-2-.95-.27-.1-.46-.15-.65.15-.2.3-.75.95-.92 1.14-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.5.15-.17.2-.3.3-.49.1-.19.05-.36-.02-.5-.08-.15-.66-1.58-.9-2.16-.23-.57-.47-.49-.64-.5h-.55c-.2 0-.5.07-.76.36-.27.29-1 1-1 2.43s1.02 2.82 1.16 3.02c.15.2 2 3.06 4.84 4.29.68.29 1.21.47 1.63.6.69.22 1.32.19 1.82.11.56-.08 1.73-.71 1.97-1.4.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.56-.34Z" />
                </svg>
              </span>

              <span>
                <strong>Chat on WhatsApp</strong>
                <small>Let's start a conversation</small>
              </span>

              <span className="contact__arrow" aria-hidden="true">↗</span>
            </a>

            <a
              href={`mailto:${emailAddress}`}
              className="contact__link"
            >
              <span className="contact__link-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
                  <path d="m3 6 9 7 9-7" />
                </svg>
              </span>

              <span>
                <strong>Send me an email</strong>
                <small>{emailAddress}</small>
              </span>

              <span className="contact__arrow" aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="contact__email-copy">
            <span className="contact__email-label">PREFER TO COPY MY EMAIL?</span>

            <button
              type="button"
              onClick={copyEmail}
              className="contact__copy-button"
            >
              {copied ? "Email copied ✓" : "Copy email address ↗"}
            </button>
          </div>
        </div>

        <footer className="contact__footer">
          <span>OPEN TO INTERESTING OPPORTUNITIES</span>
          <span className="contact__footer-line" aria-hidden="true" />
          <a href="#about">BACK TO TOP ↑</a>
        </footer>
      </div>
    </section>
  );
}

export default Contact;