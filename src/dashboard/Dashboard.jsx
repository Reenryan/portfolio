
import { useEffect, useState } from "react";
import "./Dashboard.css";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact Me", href: "#contact" },
];

function Dashboard() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem("portfolio-theme") === "dark";
    } catch {
      return false;
    }
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";

    try {
      localStorage.setItem(
        "portfolio-theme",
        darkMode ? "dark" : "light"
      );
    } catch {
      // The theme still works if browser storage is unavailable.
    }
  }, [darkMode]);

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="dashboard">
      <div className="dashboard__inner">
        <a
          href="#home"
          className="dashboard__brand"
          onClick={closeMenu}
          aria-label="Reen Ryan — home"
        >
          Ryan<span>.</span>
        </a>

        <button
          type="button"
          className="dashboard__menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="portfolio-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          id="portfolio-navigation"
          className={`dashboard__nav ${
            menuOpen ? "dashboard__nav--open" : ""
          }`}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="dashboard__link"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}

          <button
            type="button"
            className="dashboard__theme"
            onClick={() => setDarkMode((current) => !current)}
            aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
            aria-pressed={darkMode}
          >
            <span aria-hidden="true">
              {darkMode ? "☀" : "☾"}
            </span>
            <span>{darkMode ? "Light mode" : "Dark mode"}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Dashboard;
