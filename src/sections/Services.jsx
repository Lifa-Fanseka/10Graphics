import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    number: "01",
    title: "POSTER DESIGN",
    description:
      "Bold, attention-grabbing posters designed to make your event, announcement or idea impossible to miss.",
  },
  {
    number: "02",
    title: "SOCIAL MEDIA",
    description:
      "Scroll-stopping graphics created to give your social media presence a consistent and memorable visual identity.",
  },
  {
    number: "03",
    title: "EVENT GRAPHICS",
    description:
      "Visuals for events that create excitement before the first person even walks through the door.",
  },
  {
    number: "04",
    title: "CAMPAIGN DESIGN",
    description:
      "Connected visual campaigns that turn a single idea into a complete and recognisable visual story.",
  },
  {
    number: "05",
    title: "BRAND IDENTITY",
    description:
      "Visual identities that give brands personality, consistency and a look people can remember.",
  },
];

function Services() {
  return (
    <main className="services">
      <div className="container">

        {/* HEADER */}

        <header className="services__header">
          <div>
            <p className="label">
              10 GRAPHICS / SERVICES
            </p>

            <h1>
              WHAT
              <br />
              WE
              <br />
              <em>DO.</em>
            </h1>
          </div>

          <div className="services__intro">
            <p>
              VISUAL DESIGN FOR PEOPLE,
              <br />
              EVENTS AND BRANDS THAT
              <br />
              WANT TO STAND OUT.
            </p>
          </div>
        </header>

        {/* SERVICES LIST */}

        <section className="services__list">
          {services.map((service) => (
            <article
              className="service"
              key={service.number}
            >
              <span className="service__number">
                {service.number}
              </span>

              <h2>
                {service.title}
              </h2>

              <div className="service__details">
                <p>
                  {service.description}
                </p>

                <span className="service__arrow">
                  ↗
                </span>
              </div>
            </article>
          ))}
        </section>

        {/* STATEMENT */}

        <section className="services__statement">
          <span>10G</span>

          <h2>
            YOUR IDEA.
            <br />
            OUR
            <br />
            <em>VISUALS.</em>
          </h2>
        </section>

        {/* CTA */}

        <section className="services__cta">
          <div>
            <p className="label">
              HAVE SOMETHING IN MIND?
            </p>

            <h2>
              LET'S
              <br />
              MAKE IT
              <br />
              <em>HAPPEN.</em>
            </h2>
          </div>

          <Link
            to="/start-project"
            className="services__cta-button"
          >
            START A PROJECT
            <span>→</span>
          </Link>
        </section>

      </div>
    </main>
  );
}

export default Services;