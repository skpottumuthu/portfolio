import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import resumePDF from "../../assets/SantoshResumeJan25.pdf";
import profileImage from "../../assets/profilePhoto2.jpg";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-blue-100 via-gray-100 to-blue-200 px-6 pt-20"
    >
      <div className="max-w-7xl w-full mx-auto py-16 md:py-24">
        {/* Main content */}
        <div className="flex flex-col md:flex-row md:items-center gap-12">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7,
                type: "spring",
                stiffness: 100
              }}
            >
              Software Developer
            </motion.h1>
            
            <motion.p
              className="text-xl text-gray-900 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.3,
                type: "spring",
                stiffness: 50
              }}
            >
              Software Engineer with 2 years of experience, specializing in backend development and cloud-based solutions to drive business growth and software scalability. Highly skilled in Java, Spring Boot, and software engineering principles, with a track record of optimizing system performance, automating workflows, and crafting scalable solutions. Over the next 5 years, I aim to blend software engineering with AI to streamline and accelerate development processes, and to excel in leadership skills to guide teams and deliver impactful business outcomes
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.6,
                type: "spring"
              }}
            >
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.a>
              
              <motion.a
                href="#projects"
                className="px-8 py-4 bg-white border border-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Work
              </motion.a>
            </motion.div>
          </div>
          
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              type: "spring",
              stiffness: 100 
            }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.2)",
                rotate: 1
              }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={profileImage} 
                alt="Profile" 
                className="rounded-lg shadow-xl"
                style={{ 
                  width: '340px',
                  height: '340px',
                  objectFit: 'cover',
                  objectPosition: '50% 25%',
                  borderRadius: '12px',
                  background: 'rgba(180, 180, 180, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Home;
