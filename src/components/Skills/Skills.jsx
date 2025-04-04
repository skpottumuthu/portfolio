import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaTools, FaShieldAlt, FaCloud, FaLayerGroup } from "react-icons/fa";

const skills = [
  {
    category: "Programming Languages",
    items: ["Java", "Python", "JavaScript", "Rust"],
    icon: <FaCode className="text-3xl text-blue-500" />,
    color: "from-blue-400 to-indigo-500",
  },
  {
    category: "Backend Development",
    items: ["Spring Boot", "Node.js", "Flask", "Django", "RESTful APIs", "GraphQL", "gRPC"],
    icon: <FaServer className="text-3xl text-green-500" />,
    color: "from-green-400 to-teal-500",
  },
  {
    category: "Frontend Development",
    items: ["React.js", "Angular", "Vue.js", "Next.js", "Tailwind CSS", "HTML", "CSS", "JSP"],
    icon: <FaLayerGroup className="text-3xl text-purple-500" />,
    color: "from-purple-400 to-pink-500",
  },
  {
    category: "Cloud & Infrastructure",
    items: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD"],
    icon: <FaCloud className="text-3xl text-orange-500" />,
    color: "from-orange-400 to-red-500",
  },
  {
    category: "Databases & Messaging",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Neo4j", "Apache Kafka"],
    icon: <FaDatabase className="text-3xl text-red-500" />,
    color: "from-red-400 to-pink-500",
  },
  {
    category: "Security & Authentication",
    items: ["OWASP", "Secure Coding", "OAuth2", "OpenID Connect", "JWT"],
    icon: <FaShieldAlt className="text-3xl text-yellow-500" />,
    color: "from-yellow-400 to-amber-500",
  },
  {
    category: "DevOps & Monitoring",
    items: ["Jenkins", "Git", "Prometheus", "Grafana", "Kibana", "Maven"],
    icon: <FaTools className="text-3xl text-indigo-500" />,
    color: "from-indigo-400 to-violet-500",
  },
  {
    category: "Software Engineering",
    items: ["Microservices", "Event-driven Architecture", "Design Patterns", "Agile/Scrum", "SDLC"],
    icon: <FaCode className="text-3xl text-teal-500" />,
    color: "from-teal-400 to-cyan-500",
  },
];

function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-100 via-gray-100 to-blue-200">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Skills & Technologies</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              className="glassmorphism rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl card-hover"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={`h-2 bg-gradient-to-r ${skillGroup.color}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-white rounded-lg shadow-md mr-3">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 ml-1">
                    {skillGroup.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {skillGroup.items.map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="text-gray-900 hover:text-blue-700 transition-colors duration-200 flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
