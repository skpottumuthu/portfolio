import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "CKKS Encryption Toolkit",
    description:
      "A homomorphic encryption toolkit implemented in Rust as a crate. Allows secure operations on encrypted numeric and string data, particularly useful in sensitive industries like healthcare.",
    techStack: ["Rust", "Cryptography", "Homomorphic Encryption"],
    link: "https://github.com/Chandan-M-N/ckks-engine",
  },
  {
    title: "Schedule Ease",
    description:
      "An interactive application that enables team members to add their availabilities, while the admin can use AI to determine the optimal availability for all members within a given time frame. The system supports natural language queries for database interaction and provides an intuitive UI for managing schedules.",
    techStack: ["React", "SpringBoot","PostgreSQL", "AWS", "Vercel", "NeonDatabase","OpenAI API"],
    link: "https://github.com/skpottumuthu/schedule-ease-ui",
  },

  {
    title: "Twitter Sentimental  Analysis",
    description:
      "Developed a real-time application to analyze the sentiment of tweets using NLP techniques. It classifies tweets as positive, negative, or neutral and provides interactive visualizations for insights. Built with Python, NLP libraries, and Twitter API, it's ideal for tracking public opinion and monitoring trends. portfolio website built with React, TailwindCSS, and Framer Motion, showcasing my projects, experience, and skills.",
    techStack: ["Python", "Flask", "Plotly", "Twitter API"]
  },
  {
    title: "Fake News Detection",
    description: "A machine learning model that detects fake news with high accuracy. The model uses NLP techniques to analyze the text content and classify news articles as real or fake. It's built with Python, Scikit-learn, and NLTK, making it a reliable tool for identifying misinformation and promoting fact-checking.",
    techStack: ["Python", "Flask", "Scikit-learn", "NLTK", "Machine Learning"]
  },
  {
    title: "Red Teaming for LLMs in chemistry",
    description: "Developed an autonomous framework to identify vulnerabilities in LLM-powered chemistry agents. The framework helps developers detect logical flaws, biases, and safety issues during agent development, ensuring robust and reliable deployment in chemical research and applications.",  
    techStack: ["Python", "OpenAI APIs","Machine Learning", "Red Teaming"]
  }
  
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-100 via-gray-100 to-blue-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Projects</h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-900 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline font-semibold"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
