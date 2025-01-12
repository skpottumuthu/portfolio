import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import homepageImage from "../../assets/homePageImage.png";
import resumePDF from "../../assets/SantoshResumeJan25.pdf";


function Home() {
  const fullName = "Santosh Kumar Pottumuthu!";

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-800 px-8 pt-20" >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl">
        {/* Left Text Content */}
        <motion.div
          className="md:w-2/3 text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Hi, I'm <span className="text-blue-500">{fullName}</span>
          </h1>
          <p className="text-lg sm:text-2xl max-w-3xl opacity-90 mb-8">
            A passionate <strong>Software Engineer</strong> and currently
            working as a <strong>Graduate Research Assistant</strong> at the{" "}
            <strong>University of Georgia</strong>. I specialize in building
            scalable software, optimizing performance, and exploring{" "}
            <span className="text-blue-500 font-semibold">Machine Learning</span>{" "}
            and{" "}
            <span className="text-blue-500 font-semibold">
              High-Performance Computing
            </span>
            .
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href={resumePDF} // Replace with the correct path
              download
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
  <FontAwesomeIcon icon={faDownload} className="w-5 h-5" /> {/* Font Awesome Icon */}
  Download Resume
</a>

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/skpottumuthu/" // Replace with your LinkedIn profile link
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
  src={homepageImage}
  alt="Tech Animation"
  className="w-full max-w-sm object-contain"
/>

          {/* <img
            src="homepageImage" // Replace with the correct path
            alt="Tech Animation"
            className="w-full max-w-lg h-auto md:h-[400px] object-contain"
          /> */}
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
