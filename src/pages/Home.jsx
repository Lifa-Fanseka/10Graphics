import Hero from "../sections/Hero";
import SelectedWork from "../sections/SelectedWork";
import BrandSection from "../sections/BrandSection";
import Services from "../sections/Services";
import About from "../sections/About";
import CTA from "../sections/CTA";
import Footer from "../sections/Footer";

function Home() {
  return (
    <main>
      <Hero />

      <SelectedWork />

      <BrandSection />

      <Services />

      <About />

      <CTA />

      <Footer />
    </main>
  );
}

export default Home;