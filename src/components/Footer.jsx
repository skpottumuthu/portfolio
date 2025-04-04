import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Santosh Kumar Pottumuthu</h3>
            <p className="text-gray-300">Software Developer</p>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a 
              href="https://www.linkedin.com/in/skpottumuthu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://github.com/skpottumuthu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="mailto:pottumuthusantosh@gmail.com"
              className="text-gray-300 hover:text-red-400 transition-colors duration-300"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Santosh Kumar Pottumuthu. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#home" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 