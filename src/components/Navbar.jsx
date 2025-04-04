import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Handle navigation
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Add scroll event listener to change navbar style on scroll
  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Set active section based on scroll position
    const handleScrollSpy = () => {
      const sections = ['home', 'experience', 'skills', 'projects', 'education', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollEvent);
    window.addEventListener('scroll', handleScrollSpy);
    
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, []);

  return (
    <motion.nav 
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md shadow-lg py-3' 
          : 'bg-black backdrop-blur-md py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <a 
            href="#home" 
            className="text-xl font-bold text-white transition-colors duration-300"
          >
            Santosh Kumar Pottumuthu
          </a>
        </motion.div>

        {/* Navigation links */}
        <div className="hidden md:flex space-x-8">
          <NavLink 
            title="Home" 
            sectionId="home" 
            onClick={handleScroll} 
            isActive={activeSection === 'home'} 
            scrolled={scrolled} 
          />
          <NavLink 
            title="Experience" 
            sectionId="experience" 
            onClick={handleScroll} 
            isActive={activeSection === 'experience'} 
            scrolled={scrolled} 
          />
          <NavLink 
            title="Skills" 
            sectionId="skills" 
            onClick={handleScroll} 
            isActive={activeSection === 'skills'} 
            scrolled={scrolled} 
          />
          <NavLink 
            title="Projects" 
            sectionId="projects" 
            onClick={handleScroll} 
            isActive={activeSection === 'projects'} 
            scrolled={scrolled} 
          />
          <NavLink 
            title="Education" 
            sectionId="education" 
            onClick={handleScroll} 
            isActive={activeSection === 'education'} 
            scrolled={scrolled} 
          />
          <NavLink 
            title="Contact" 
            sectionId="contact" 
            onClick={handleScroll} 
            isActive={activeSection === 'contact'} 
            scrolled={scrolled} 
          />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

// Enhanced navigation link component with hover and active states
function NavLink({ title, sectionId, onClick, isActive, scrolled }) {
  return (
    <motion.button
      onClick={() => onClick(sectionId)}
      className={`relative font-medium transition-colors duration-300 ${
        isActive
          ? 'text-blue-400 font-semibold'
          : 'text-gray-300 hover:text-white'
      }`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {title}
      <motion.div
        className={`absolute bottom-0 left-0 h-0.5 ${
          isActive
            ? 'bg-blue-400'
            : 'bg-blue-400'
        }`}
        initial={{ width: isActive ? '100%' : '0%' }}
        animate={{ width: isActive ? '100%' : '0%' }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
}

export default Navbar;
