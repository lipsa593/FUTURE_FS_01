import React from 'react';
import Header from './components/Header'; // Ensure this path is correct
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='bg-gradient-to-b'>
      <div className='hero-container container mx-auto px-30 flex flex-col'>
        <Header />
        <Hero />
      </div>
      <div id="about" className='about-container container mx-auto px-30 flex flex-col'>
        <About />
      </div>
      <div id="experience" className='experience-container container mx-auto px-30 flex flex-col'>
        <Experience />
      </div>
      <div id="project" className='project-container container mx-auto px-30 flex flex-col'>
        <Project />
      </div>
      <div id="contact" className='contact-container container mx-auto px-30 flex flex-col'>
        <Contact />
      </div>
    </div>
  );
};

export default App;

