import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        {/* TOP */}

        <div className="footer__top">
          <div className="footer__brand">
            <p className="label">10 GRAPHICS / CREATIVE STUDIO</p>

            <h2>
              LET'S MAKE
              <br />
              SOMETHING
              <br />
              <em>STAND OUT.</em>
            </h2>
          </div>

          <Link
            to="/start-project"
            className="footer__cta"
          >
            START A PROJECT
            <span>→</span>
          </Link>
        </div>

        {/* MIDDLE */}

        <div className="footer__middle">

          <div className="footer__column">
            <p className="label">NAVIGATE</p>

            <nav>
              <Link to="/">HOME</Link>
              <Link to="/work">WORK</Link>
              <Link to="/about">ABOUT</Link>
              <Link to="/services">SERVICES</Link>
              <Link to="/start-project">
                START A PROJECT
              </Link>
            </nav>
          </div>

          <div className="footer__column">
            <p className="label">SERVICES</p>

            <div className="footer__list">
              <span>POSTER DESIGN</span>
              <span>SOCIAL MEDIA</span>
              <span>EVENT GRAPHICS</span>
              <span>CAMPAIGN DESIGN</span>
              <span>BRAND IDENTITY</span>
            </div>
          </div>

          <div className="footer__column">
            <p className="label">CONTACT</p>

            <a
              href="mailto:hello@10graphics.co.za"
              className="footer__email"
            >
              hello@10graphics.co.za
            </a>

            <div className="footer__socials">
              <a
                href="#instagram"
                aria-label="Instagram"
              >
                INSTAGRAM
              </a>

              <a
                href="#facebook"
                aria-label="Facebook"
              >
                FACEBOOK
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM */}

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} 10 GRAPHICS
          </span>

          <span>
            DESIGNED &amp; BUILT BY 10 GRAPHICS
          </span>

          <span>10G / CREATIVE STUDIO</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;