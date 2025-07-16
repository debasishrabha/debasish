import Navbar from './components/NavBar/navbar';
import HeroSection from './components/HeroSection/herosection';
import AboutMe from './components/AboutMe/about';
import Projects from './components/Projects/project';
import ContactPage from './components/contact/contact';

function App() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <ContactPage />
      </section>
    </div>
  );
}

export default App;
