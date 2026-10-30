
import About from "../components/About";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Media from "../components/Media";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Techskills from "../components/Techskills";
import Training from "../components/Training";
import Dashboard from "../dashboard/Dashboard";

function PortfolioLayout() {
  return (
    <>
      <Dashboard />

      <main>
        <Hero />
         <About />
         <Techskills />
         <Skills/>
         <Training/>
         <Certifications/>
        <Projects />
        <Media />
        <Contact />  
      </main>

       <Footer /> 
    </>
  );
}

export default PortfolioLayout;
