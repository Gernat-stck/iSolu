import React, { useState, useEffect } from 'react';
import './styles/App.css';
import PreviewSection from './components/PreviewSection';
import About from './components/About';
import Pricing from './components/Pricing.jsx';
import Contact from './components/Contact.jsx';

function App() {
  const [currentSection, setCurrentSection] = useState(null);
  console.log(currentSection); // Agrega esta línea para depurar

  useEffect(() => {
    const handleScroll = () => {
      const previewSection = document.querySelector('.previewProductsSection');
      const aboutSection = document.querySelector('.aboutUsSection');
      const pricingSection = document.querySelector('.pricingSection');
      const contactSection = document.querySelector('.contactUs');
      
      const scrollPosition = window.scrollY;

      if (
        scrollPosition >= previewSection.offsetTop &&
        scrollPosition < aboutSection.offsetTop
      ) {
        setCurrentSection('preview');
      } else if (
        scrollPosition >= aboutSection.offsetTop &&
        scrollPosition < pricingSection.offsetTop
      ) {
        setCurrentSection('about');
      } else if (
        scrollPosition >= pricingSection.offsetTop &&
        scrollPosition < contactSection.offsetTop
      ) {
        setCurrentSection('pricing');
      } else if (scrollPosition >= contactSection.offsetTop) {
        setCurrentSection('contact');
      } else {
        setCurrentSection(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`main-layout ${currentSection}`}>
      <div className='previewProductsSection'>
        <PreviewSection />
      </div>
      <div className='aboutUsSection' id='about'>
        <About />
      </div>
      <div className='pricingSection' id='pricing'>
        <Pricing />
      </div>
      <div className='contactUs' id='contact'>
        <Contact />
      </div>
    </div>
  );
}

export default App;
