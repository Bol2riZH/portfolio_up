import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../layout/footer';
import Contact from '../sections/Contact';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import Services from '../sections/services';
import Skills from '../sections/Skills';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
