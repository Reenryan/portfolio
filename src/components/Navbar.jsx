
import { useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Dashboards", href: "#dashboards" },
  { label: "Contact Me", href: "#contact" },
];

function getInitialTheme() {
  try {
    return localStorage.getItem("portfolio-theme") === "dark";
  } catch {
    return false;
  }
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";

    try {
      localStorage.setItem(
        "portfolio-theme",
        darkMode ? "dark" : "light"
      );
    } catch {
      // Theme switching still works if browser storage is unavailable.
    }
  }, [darkMode]);

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  function toggleTheme() {
    setDarkMode((current) => !current);
  }

  return (
    <header className="navbar">
      <nav className="navbar__inner" aria-label="Main navigation">
        <a
          href="#home"
          className="navbar__brand"
          onClick={closeMenu}
          aria-label="Reen Ryan — home"
        >
          reen<span>.</span>
        </a>

        <button
          type="button"
          className="navbar__menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="navbar-links"
        >
          {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>

        <div
          id="navbar-links"
          className={`navbar__menu ${
            menuOpen ? "navbar__menu--open" : ""
          }`}
        >
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="navbar__link"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="navbar__theme-button"
            onClick={toggleTheme}
            aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
            aria-pressed={darkMode}
          >
            {darkMode ? (
              <FaSun aria-hidden="true" />
            ) : (
              <FaMoon aria-hidden="true" />
            )}
            <span>{darkMode ? "Light mode" : "Dark mode"}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
