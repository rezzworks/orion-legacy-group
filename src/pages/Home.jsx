import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";

import MissionVision from "../components/MissionVision";
import WhyChooseUs from "../components/WhyChooseUs";

function App() {
  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      <Hero />

      <About />

      <MissionVision />

      <WhyChooseUs />

      <Services />

      <Contact />
    </div>
  );
}

export default App;
