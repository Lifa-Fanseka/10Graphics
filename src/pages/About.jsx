import { Link } from "react-router-dom";
import "./About.css";

function AboutPage() {
  return (
    <main className="about-page">
      <div className="container">

        {/* HEADER */}

        <header className="about-page__header">
          <div>
            <p className="label">
              10 GRAPHICS / ABOUT
            </p>

            <h1>
              WE MAKE
              <br />
              IDEAS
              <br />
              <span>VISIBLE.</span>
            </h1>
          </div>

          <div className="about-page__intro">
            <p>
              10 GRAPHICS IS AN INDEPENDENT
              CREATIVE STUDIO BUILT AROUND
              ONE SIMPLE IDEA:
            </p>

            <strong>
              GREAT DESIGN SHOULD
              <br />
              GET NOTICED.
            </strong>
          </div>
        </header>

        {/* MANIFESTO */}

        <section className="about-page__manifesto">
          <div className="about-page__manifesto-number">
            01
          </div>

          <div className="about-page__manifesto-content">
            <p className="label">
              OUR APPROACH
            </p>

            <h2>
              DESIGN IS
              <br />
              MORE THAN
              <br />
              <em>DECORATION.</em>
            </h2>

            <div className="about-page__copy">
              <p>
                We believe design has a job to do.
                It needs to communicate, create a
                feeling and make people stop for a
                second longer.
              </p>

              <p>
                Whether it's a poster, social media
                campaign, event graphic or complete
                visual identity, every piece of work
                should have intention behind it.
              </p>
            </div>
          </div>
        </section>

        {/* VALUES */}

        <section className="about-page__values">
          <div className="about-page__values-heading">
            <p className="label">
              WHAT WE BELIEVE
            </p>

            <h2>
              THREE
              <br />
              THINGS.
            </h2>
          </div>

          <div className="about-page__values-list">

            <article className="about-value">
              <span>01</span>

              <div>
                <h3>
                  ATTENTION
                </h3>

                <p>
                  If people don't notice it,
                  the design isn't doing its job.
                  We create visuals designed to
                  command attention.
                </p>
              </div>
            </article>

            <article className="about-value">
              <span>02</span>

              <div>
                <h3>
                  INTENTION
                </h3>

                <p>
                  Every colour, typeface, image
                  and layout choice should have
                  a reason behind it.
                </p>
              </div>
            </article>

            <article className="about-value">
              <span>03</span>

              <div>
                <h3>
                  IDENTITY
                </h3>

                <p>
                  Good design should feel like
                  you. We create visuals that
                  help ideas develop their own
                  identity.
                </p>
              </div>
            </article>

          </div>
        </section>

        {/* 10 STATEMENT */}

        <section className="about-page__statement">

          <span className="about-page__ten">
            10
          </span>

          <div>
            <p className="label">
              THE 10 GRAPHICS WAY
            </p>

            <h2>
              BOLD
              <br />
              VISUALS.
              <br />
              <span>REAL</span>
              <br />
              IMPACT.
            </h2>
          </div>

        </section>

        {/* SERVICES */}

        <section className="about-page__services">

          <div>
            <p className="label">
              WHAT WE DO
            </p>

            <h2>
              FROM IDEA
              <br />
              TO VISUAL.
            </h2>
          </div>

          <div className="about-page__service-list">

            <div>
              <span>01</span>
              <p>POSTER DESIGN</p>
            </div>

            <div>
              <span>02</span>
              <p>SOCIAL MEDIA DESIGN</p>
            </div>

            <div>
              <span>03</span>
              <p>EVENT GRAPHICS</p>
            </div>

            <div>
              <span>04</span>
              <p>BRAND IDENTITY</p>
            </div>

            <div>
              <span>05</span>
              <p>CAMPAIGN DESIGN</p>
            </div>

            <div>
              <span>06</span>
              <p>CREATIVE DIRECTION</p>
            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="about-page__cta">

          <p className="label">
            READY TO CREATE?
          </p>

          <h2>
            LET'S MAKE
            <br />
            SOMETHING
            <br />
            <span>LOUD.</span>
          </h2>

          <Link to="/start-project">
            START A PROJECT →
          </Link>

        </section>

      </div>
    </main>
  );
}

export default AboutPage;