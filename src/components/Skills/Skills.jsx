import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "JavaScript", "C++", "Rust", "Java"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Node.js", "Express.js", "TailwindCSS", "Flask"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Docker", "Kubernetes", "AWS", "Jenkins"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    category: "Other Skills",
    items: ["Machine Learning", "NLP", "Data Visualization", "Cryptography"],
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h2>

        {/* Skills Grid */}
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
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-gray-600 bg-blue-50 text-blue-700 px-3 py-1 rounded-lg inline-block"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
