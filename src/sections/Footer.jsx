import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              10
            </Link>

            <p>
              VISUALS THAT
              <br />
              SPEAK.
            </p>
          </div>

          <div className="footer__columns">
            <div className="footer__column">
              <p className="footer__heading">NAVIGATE</p>

              <Link to="/">HOME</Link>
              <Link to="/work">WORK</Link>
              <a href="#about">ABOUT</a>
              <a href="#services">SERVICES</a>
            </div>

            <div className="footer__column">
              <p className="footer__heading">CONNECT</p>

              <a href="mailto:hello@10graphics.co.za">
                EMAIL
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                INSTAGRAM
              </a>

              <a
                href="https://www.behance.net/"
                target="_blank"
                rel="noreferrer"
              >
                BEHANCE
              </a>
            </div>

            <div className="footer__column">
              <p className="footer__heading">START</p>

              <Link
                to="/start-project"
                className="footer__project-link"
              >
                START A PROJECT →
              </Link>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 10 GRAPHICS</span>

          <span>DESIGN / DIRECTION / VISUALS</span>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer__top"
          >
            BACK TO TOP ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;