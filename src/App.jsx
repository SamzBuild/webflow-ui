import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Contact from "./components/sections/Contact";
import FAQ from "./components/sections/FAQ";

import Hero from "./components/sections/Hero";
import Pricing from "./components/sections/Pricing";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Trusted from "./components/ui/Trusted";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Trusted />
      <Pricing />
      <FAQ />
      <hr className="text-neutral-400" />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
