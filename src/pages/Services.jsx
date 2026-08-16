import { Link } from "react-router-dom";
import "./Services.css";

function Services() {
  const services = [
    {
      number: "01",
      title: "POSTER DESIGN",
      description:
        "Bold, attention-grabbing posters designed to make your event, announcement or campaign impossible to ignore.",
      tags: ["EVENTS", "PROMOTIONS", "CAMPAIGNS"],
    },
    {
      number: "02",
      title: "SOCIAL MEDIA",
      description:
        "Creative social media visuals built to keep your brand looking consistent, professional and memorable across every platform.",
      tags: ["INSTAGRAM", "FACEBOOK", "DIGITAL"],
    },
    {
      number: "03",
      title: "EVENT GRAPHICS",
      description:
        "Visual assets that bring your event to life, from promotional artwork to digital announcements and supporting graphics.",
      tags: ["EVENTS", "PROMOTION", "DIGITAL"],
    },
    {
      number: "04",
      title: "CAMPAIGN DESIGN",
      description:
        "A complete visual direction for campaigns that need more than one graphic. Consistent, recognisable and built around your message.",
      tags: ["CAMPAIGNS", "DIRECTION", "VISUALS"],
    },
    {
      number: "05",
      title: "BRAND IDENTITY",
      description:
        "Visual identities that give businesses and creative projects a distinctive look, feel and personality.",
      tags: ["LOGOS", "IDENTITY", "BRANDING"],
    },
    {
      number: "06",
      title: "CUSTOM DESIGN",
      description:
        "Have something different in mind? Tell us what you're working on and we'll create a visual solution around your idea.",
      tags: ["CREATIVE", "CUSTOM", "10 GRAPHICS"],
    },
  ];

  return (
    <main className="services">
      <div className="container">

        {/* HEADER */}

        <header className="services__header">
          <div>
            <p className="label">
              10 GRAPHICS / WHAT WE DO
            </p>

            <h1>
              DESIGN
              <br />
              THAT
              <br />
              <em>MOVES.</em>
            </h1>
          </div>

          <div className="services__intro">
            <p>
              VISUALS WITH PURPOSE.
              <br />
              DESIGNED TO GET
              <br />
              YOU NOTICED.
            </p>

            <span>
              FROM ONE POSTER TO A
              <br />
              COMPLETE VISUAL CAMPAIGN.
            </span>
          </div>
        </header>

        {/* SERVICES */}

        <section className="services__list">
          {services.map((service) => (
            <article
              className="service"
              key={service.number}
            >
              <div className="service__number">
                {service.number}
              </div>

              <div className="service__main">
                <div className="service__heading">
                  <h2>{service.title}</h2>

                  <span className="service__arrow">
                    ↗
                  </span>
                </div>

                <div className="service__details">
                  <p>{service.description}</p>

                  <div className="service__tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* APPROACH */}

        <section className="services__approach">
          <div className="services__approach-label">
            <p className="label">
              10 GRAPHICS / APPROACH
            </p>
          </div>

          <div className="services__approach-content">
            <h2>
              GOOD DESIGN
              <br />
              <em>GETS NOTICED.</em>
            </h2>

            <p>
              We believe great visuals should do more
              than look good. They should communicate,
              create attention and leave an impression.
              Every project starts with your idea and
              ends with something built to stand out.
            </p>
          </div>
        </section>

        {/* CTA */}

        <section className="services__cta">
          <div>
            <p className="label">
              HAVE SOMETHING IN MIND?
            </p>

            <h2>
              LET'S MAKE
              <br />
              SOMETHING.
            </h2>
          </div>

          <Link to="/start-project">
            START A PROJECT
            <span>→</span>
          </Link>
        </section>

      </div>
    </main>
  );
}

export default Services;