import { Link } from "react-router-dom";
import "./CTA.css";

function CTA() {
  return (
    <section className="cta">
      <div className="cta__watermark" aria-hidden="true">
        10
      </div>

      <div className="container cta__container">
        <div className="cta__top">
          <p className="label">HAVE A PROJECT IN MIND?</p>

          <span className="cta__number">10G / 01</span>
        </div>

        <div className="cta__main">
          <h2>
            LET'S MAKE
            <br />
            SOMETHING
            <br />
            <span>LOUD.</span>
          </h2>

          <div className="cta__content">
            <p>
              HAVE AN IDEA, AN EVENT, A BRAND OR
              JUST SOMETHING YOU WANT PEOPLE TO
              NOTICE?
            </p>

            <p className="cta__description">
              Tell us what you're working on and give us
              a little context. We'll take it from there.
            </p>

            <Link
              to="/start-project"
              className="cta__button"
            >
              START A PROJECT
              <span>→</span>
            </Link>
          </div>
        </div>

        <div className="cta__bottom">
          <span>DESIGN / DIRECTION / VISUALS</span>
          <span>10 GRAPHICS © 2026</span>
        </div>
      </div>
    </section>
  );
}

export default CTA;