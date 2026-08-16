import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <main className="about">
      <div className="container">

        {/* ================================
            HERO
            ================================= */}

        <header className="about__header">
          <div>
            <p className="label">
              10 GRAPHICS / ABOUT
            </p>

            <h1>
              WE MAKE
              <br />
              VISUALS
              <br />
              <em>MATTER.</em>
            </h1>
          </div>

          <div className="about__intro">
            <p>
              10 GRAPHICS IS A CREATIVE
              <br />
              DESIGN STUDIO FOCUSED ON
              <br />
              MAKING VISUALS THAT GET
              <br />
              NOTICED.
            </p>
          </div>
        </header>

        {/* ================================
            STATEMENT
            ================================= */}

        <section className="about__statement">
          <span>10G</span>

          <div>
            <h2>
              GOOD DESIGN
              <br />
              SHOULD NOT
              <br />
              <em>BLEND IN.</em>
            </h2>
          </div>
        </section>

        {/* ================================
            STORY
            ================================= */}

        <section className="about__story">
          <div className="about__story-label">
            <p className="label">
              WHAT WE DO
            </p>
          </div>

          <div className="about__story-content">
            <p className="about__story-lead">
              WE CREATE VISUAL IDENTITIES,
              POSTERS, CAMPAIGNS AND DIGITAL
              GRAPHICS THAT HELP PEOPLE AND
              BRANDS SHOW UP WITH PURPOSE.
            </p>

            <p>
              From a single poster to an entire
              visual campaign, every project starts
              with an idea. Our job is to turn that
              idea into something clear, memorable
              and impossible to ignore.
            </p>

            <p>
              We believe design should have
              personality. It should communicate
              quickly, feel intentional and leave
              something behind after people have
              looked away.
            </p>
          </div>
        </section>

        {/* ================================
            APPROACH
            ================================= */}

        <section className="about__approach">
          <div className="about__approach-heading">
            <p className="label">
              OUR APPROACH
            </p>

            <h2>
              SIMPLE
              <br />
              IDEAS.
              <br />
              <em>STRONG</em>
              <br />
              EXECUTION.
            </h2>
          </div>

          <div className="about__principles">

            <article>
              <span>01</span>

              <h3>
                PURPOSE
              </h3>

              <p>
                Every design has a reason to exist.
                We focus on what the visual needs
                to communicate before worrying
                about how it looks.
              </p>
            </article>

            <article>
              <span>02</span>

              <h3>
                PERSONALITY
              </h3>

              <p>
                Your work should feel like yours.
                We create visuals with character
                instead of relying on designs that
                look like everyone else's.
              </p>
            </article>

            <article>
              <span>03</span>

              <h3>
                IMPACT
              </h3>

              <p>
                The goal is simple: get noticed.
                Whether it is a poster, campaign
                or social graphic, the design needs
                to make people stop and look.
              </p>
            </article>

          </div>
        </section>

        {/* ================================
            CTA
            ================================= */}

        <section className="about__cta">
          <p className="label">
            READY TO MAKE SOMETHING?
          </p>

          <h2>
            LET'S
            <br />
            CREATE
            <br />
            <em>TOGETHER.</em>
          </h2>

          <Link
            to="/start-project"
            className="about__cta-button"
          >
            START A PROJECT
            <span>→</span>
          </Link>
        </section>

      </div>
    </main>
  );
}

export default About;