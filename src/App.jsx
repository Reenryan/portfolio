import About from './components/About';
import Contact from './components/Contact';
import Footer from "./components/Footer";
import Hero from './components/Hero';
import Media from "./components/Media";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Techskills from "./components/Techskills";


function App() {
  return (
    <>
      <Navbar />
      <Hero id="hero" />
      <About id="about" />
      <Techskills id="skills" />
      <Skills />
      <Projects id="projects" />
      <Media id="dashboards" />
      <Contact id="contact" />
      <Footer />
    </>

  )
}

export default App