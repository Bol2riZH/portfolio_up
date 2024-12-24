import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './layout/footer';
import ProjectPage from './pages/Project';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Services from './sections/services';
import Skills from './sections/Skills';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrollToSection={scrollToSection} />
              <Hero scrollToSection={scrollToSection} />
              <Services />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path='/projects/:id' element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
