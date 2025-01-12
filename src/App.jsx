// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Education from './components/Education';
// import Experience from './components/Experience';
// // import Projects from './components/Projects';
// import ScrollToTop from './components/ScrollToTop';
// import Contact from './components/Contact';

// function App() {
//   const [activeSection, setActiveSection] = useState('home'); // Default is home

//   return (
//     <>
//       {/* Scroll-to-top component */}
//       <ScrollToTop />
//       <div className="min-h-screen bg-blue-50">
//         <Navbar setActiveSection={setActiveSection} />
//         <div className="pt-20">
//           {/* Conditional rendering based on activeSection */}
//           {activeSection === 'home' && <Home />}
//           {activeSection === 'education' && <Education />}
//           {activeSection === 'experience' && <Experience />}
//           {activeSection === 'contact' && <Contact />}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
      {/* Scroll-to-top component */}
      {/* <ScrollToTop /> */}
      <div className="min-h-screen bg-blue-50">
        <Navbar />
        <div className="pt-20">
          {/* Render all sections */}
          <Home />

          <Experience />
          <Skills />

          <Education />
          
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
