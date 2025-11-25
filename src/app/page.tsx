// pages/index.js
import Navbar from '../app/components/nav';
import Hero from '../app/components/hero';
import Skills from '../app/components/skills';
import Projects from '../app/components/projects';
import About from '../app/components/about';
import Contact from '../app/components/contact';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
