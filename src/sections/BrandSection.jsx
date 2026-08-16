import "./BrandSection.css";

function BrandSection() {
  return (
    <section className="brand-section">
      <div className="brand-section__watermark" aria-hidden="true">
        10
      </div>

      <div className="brand-section__content container">
        <p className="label">THE STUDIO</p>

        <div className="brand-section__main">
          <h2 className="brand-section__title">
            10
          </h2>

          <div className="brand-section__statement">
            <p>
              WE CREATE VISUALS THAT
              <br />
              GET NOTICED.
            </p>

            <p className="brand-section__description">
              10 Graphics is an independent graphic design
              studio focused on creating bold, memorable
              visuals for brands, events, artists and ideas.
            </p>
          </div>
        </div>

        <div className="brand-section__bottom">
          <span>EST. 2026</span>
          <span>PORT ELIZABETH / SOUTH AFRICA</span>
          <span>DESIGN / DIRECTION / VISUALS</span>
        </div>
      </div>
    </section>
  );
}

export default BrandSection;