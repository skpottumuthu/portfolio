
import React from "react";
import { motion } from "framer-motion";
import { AcademicCapIcon } from "@heroicons/react/outline";

function Education() {
  const educationData = [
    {
      title: "Master of Science in Computer Science",
      institution: "University of Georgia, Athens, GA",
      cgpa: "4.0/4.0",
      duration: "Fall 2023 – Spring 2025",
      coursework: "Algorithms, Machine Learning, Software Engineering",
    },
    {
      title: "Bachelor of Technology in Computer Science",
      institution: "Lovely Professional University, India",
      cgpa: "8.99/10",
      duration: "May 2022",
      coursework: "Java, Python, Data Structures, Operating Systems",
    },
  ];

  return (
    <section id="education" className="relative mt-16 p-8 bg-gray-50">
      {/* Decorative Background */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-300 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-yellow-200 opacity-30 rounded-full blur-3xl"></div>

      {/* Section Title */}
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-extrabold text-gray-800 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Education Journey
        </motion.h2>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2"></div>

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className={`relative flex items-center mb-16 ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Marker with Glow */}
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg ring-4 ring-blue-300 z-10">
              <span className="text-white font-bold">{index + 1}</span>
            </div>

            {/* Education Card */}
            <div
              className={`bg-white shadow-xl rounded-lg p-6 w-full sm:w-1/2 transition-transform transform hover:scale-105 hover:shadow-2xl ${
                index % 2 === 0 ? "mr-12" : "ml-12"
              }`}
            >
              {/* Title with Icon */}
              <div className="flex items-center mb-4">
                <AcademicCapIcon className="h-8 w-8 text-blue-500 mr-4" />
                <h3 className="text-3xl font-bold text-gray-800">
                  {edu.title}
                </h3>
              </div>

              {/* Institution */}
              <p className="text-lg text-blue-600 font-medium">
                {edu.institution}
              </p>

              {/* CGPA and Duration */}
              <p className="text-md text-gray-600 mt-2">
                <strong className="text-gray-700">CGPA:</strong> {edu.cgpa}
              </p>
              <p className="text-md text-gray-600">
                <strong className="text-gray-700">Duration:</strong>{" "}
                {edu.duration}
              </p>

              {/* Coursework */}
              <p className="text-md text-gray-600">
                <strong className="text-gray-700">Coursework:</strong>{" "}
                {edu.coursework}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;
