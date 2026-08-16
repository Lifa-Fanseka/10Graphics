import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${
        menuOpen ? "navbar--menu-open" : ""
      }`}
    >
      <div className="navbar__inner">

        {/* LOGO */}
        <Link
          to="/"
          className="navbar__logo"
          onClick={closeMenu}
        >
          10 GRAPHICS
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          className="navbar__links"
          aria-label="Main navigation"
        >
          <Link to="/work">
            WORK
          </Link>

          <Link to="/about">
            ABOUT
          </Link>

          <Link to="/services">
            SERVICES
          </Link>

          <Link to="/start-project">
            START A PROJECT
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="navbar__menu-button"
          type="button"
          aria-label={
            menuOpen ? "Close menu" : "Open menu"
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        className={`navbar__mobile-menu ${
          menuOpen ? "is-open" : ""
        }`}
      >
        <nav aria-label="Mobile navigation">

          <Link
            to="/work"
            onClick={closeMenu}
          >
            WORK
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
          >
            ABOUT
          </Link>

          <Link
            to="/services"
            onClick={closeMenu}
          >
            SERVICES
          </Link>

          <Link
            to="/start-project"
            onClick={closeMenu}
          >
            START A PROJECT
          </Link>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;