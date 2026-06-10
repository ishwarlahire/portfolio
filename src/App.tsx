import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Freelance from './components/Freelance';
import Education from './components/Education';
import Certifications from './components/Certifications';
import GitHub from './components/GitHub';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  const { isDark, toggle } = useTheme();

  return (
    <>
      <Navbar isDark={isDark} toggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Freelance />
        <Education />
        <Certifications />
        <GitHub />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
