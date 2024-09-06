import React from 'react';

function Navbar({ setActiveSection }) {
  return (
    <nav className="bg-black p-4 fixed w-full top-0 left-0 z-10 border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold tracking-wide hover:text-blue-500 transition duration-500">
          Santosh Kumar
        </h1>

        <ul className="flex space-x-12 text-white">
        <li>
            <button onClick={() => setActiveSection('home')} className="hover:text-blue-500">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => setActiveSection('education')} className="hover:text-blue-500">
              Education
            </button>
          </li>
          <li>
            <button onClick={() => setActiveSection('experience')} className="hover:text-blue-500">
              Experience
            </button>
          </li>
          <li>
            <button onClick={() => setActiveSection('projects')} className="hover:text-blue-500">
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => setActiveSection('contact')} className="hover:text-blue-500">
              Contact Me
            </button>
          </li>
         
          {/* Resume link */}
          <li>
            <a 
              href={"https://outlookuga-my.sharepoint.com/:b:/g/personal/sp98289_uga_edu/EVL42EsvG-pNgSqZSilcfi0BR--0zkrh3FHi5Ged7zQ4xQ?e=d9bd8g"} 
              download="Santosh_Resume_Fall24.pdf"
              target="_blank" 
              className="hover:text-blue-500 transition duration-300 text-lg"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
