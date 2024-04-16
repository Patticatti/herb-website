// import "./App.css";
import { Box } from "@chakra-ui/react";
import Hero from "./components/Hero.js";
import Logos from "./components/Logos.js";
import About from "./components/About.js";
import Works from "./components/Works.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <Box width="100%" bgColor="#020C12">
      <Hero />
      <Logos />
      <About />
      <Works />
      <Footer />
    </Box>
  );
}

export default App;
