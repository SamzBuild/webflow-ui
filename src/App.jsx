import Navbar from "./components/layout/Navbar";
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
      <Pricing/>
    </div>
  );
};

export default App;
