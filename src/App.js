import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
// import Projects from './components/Projects';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router } from 'react-router-dom';
import Contact from './components/Contact';
  
function App() {
  const [activeSection, setActiveSection] = useState('home'); // Default is home

  return (

    <Router>
            <ScrollToTop />
            <div className="min-h-screen bg-blue-50">
      <Navbar  setActiveSection={setActiveSection}/>
      <div className="pt-20">
        {/* Conditional rendering based on activeSection */}
        {activeSection === 'home' && <Home />}
        {activeSection === 'education' && <Education />}
        {activeSection === 'experience' && <Experience />}
        {activeSection === 'contact' && <Contact />}
      </div>
    </div>

    </Router>
    
  );
}

export default App;
