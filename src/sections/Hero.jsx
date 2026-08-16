import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__top">
          <p className="label">INDEPENDENT CREATIVE STUDIO</p>

          <span className="hero__year">EST. 2026</span>
        </div>

        <div className="hero__main">
          <h1 className="hero__title">
            WE MAKE
            <br />
            <span>VISUALS</span>
            
            <em>LOUD.</em>
          </h1>

          <div className="hero__side">
            <p>
              GRAPHIC DESIGN FOR
              <br />
              BRANDS, EVENTS &
              <br />
              IDEAS THAT MATTER.
            </p>

            <Link
              to="/work"
              className="hero__link"
            >
              EXPLORE OUR WORK →
            </Link>
          </div>
        </div>

        <div className="hero__bottom">
          <span>10 GRAPHICS</span>

          <span>DESIGN / DIRECTION / VISUALS</span>

          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </div>

      <div
        className="hero__watermark"
        aria-hidden="true"
      >
        10
      </div>
    </section>
  );
}

export default Hero;