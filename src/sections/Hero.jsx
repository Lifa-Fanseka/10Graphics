import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          <span>WE MAKE</span>
          <span>VISUALS</span>
          <span className="hero__loud">LOUD</span>
        </h1>
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