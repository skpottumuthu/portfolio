import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaBuilding, FaCode } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      title: "Graduate Research Assistant",
      organization: "Brain and Action Lab, University of Georgia, Athens, GA",
      duration: "February 2024 – Present",
      responsibilities: [
        "Engineered efficient code refactoring strategies for key neuroscience projects by reducing technical debt by 60% and enabling the team to implement new features 2x faster",
        "Architected high-performance task processing pipelines using Python, RESTful APIs, and a message-driven architecture, boosting data throughput by 45% and enhancing system stability",
        "Engineered scalable, cloud-ready backend services for neuroscience research platforms, resulting in a 60% reduction in technical debt and a 2x acceleration of feature delivery timelines",
        "Developed an automated resource management solution using SpringBoot, React and PostgreSQL and OpenAI APIs for reducing manual scheduling efforts by 60% through integration of dynamic task assignment algorithms and workflow automation",
        "Refactored and modularized backend codebases, cutting build and deployment times by 50%, improving cross-team collaboration, and streamlining CI/CD rollouts",
        "Orchestrated automation pipelines for machine learning model deployments using Python and Linux, reducing workflow execution time by 40% and eliminating manual intervention"
      ],
    },
    {
      title: "Software Development Engineer",
      organization: "MoveInSync Technologies, Bengaluru, India",
      duration: "April 2021 – July 2023",
      responsibilities: [
        "Engineered 3 microservices powering 50+ RESTful APIs with Spring Boot, ensuring high availability and seamless API integration in a cloud-native environment",
        "Optimized system performance with Redis caching, processing 1.5M+ database queries/week, cutting latency by 30%, and enabling horizontal scalability for high-traffic workloads",
        "Built reusable Java libraries using Maven, accelerating cross-service integration and supporting Agile development cycles",
        "Implemented event-driven architecture with Apache Kafka, driving real-time data streaming and asynchronous microservice communication for low-latency processing",
        "Led legacy modernization of a Tomcat Java app to Spring Boot, enhancing scalability, maintainability, and CI/CD deployment efficiency",
        "Redesigned database architecture, migrating JDBC to Spring JPA, reducing boilerplate code by 50% and boosting query performance by 40% in SQL/NoSQL systems",
        "Secured REST APIs with OAuth 2.0, OpenID Connect (OIDC), and JWT, implementing role-based access control (RBAC) for scalable authentication",
        "Developed real-time fleet monitoring and auto-allocation services, leveraging big data and algorithmic optimization to improve EV efficiency by 40%",
        "Enhanced observability with Prometheus and Grafana, integrating distributed logging and monitoring dashboards, reducing MTTR by 30%"
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="experience" className="relative py-20 bg-gradient-to-br from-blue-100 via-gray-100 to-blue-200">
      {/* Section Title */}
      <div className="max-w-5xl mx-auto text-center px-6">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: "-100px"}}
          transition={{duration: 0.6}}
        >
          <h2 className="text-5xl font-extrabold text-gray-800 mb-16">My Experience</h2>
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        <div className="absolute top-40 right-20 w-96 h-96 rounded-full bg-gradient-to-r from-blue-200 to-gray-200 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-r from-gray-200 to-blue-200 opacity-20 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="flex flex-col lg:flex-row gap-6 items-start relative">
                {/* Date badge - appears on left side */}
                <div className="absolute -left-4 top-0 hidden lg:block">
                  <motion.div 
                    className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-gray-600 text-white rounded-full shadow-lg"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <FaCalendarAlt className="mr-2" />
                    <span className="font-medium text-sm whitespace-nowrap">{exp.duration}</span>
                  </motion.div>
                </div>

                {/* Main card - takes full width */}
                <motion.div 
                  className="w-full bg-white rounded-xl shadow-lg p-6 relative overflow-hidden group"
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 } 
                  }}
                >
                  {/* Colored top strip */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-gray-500 to-blue-500"></div>
                  
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Left side - Job info */}
                    <div className="md:w-1/3">
                      <div className="flex items-center mb-3">
                        <div className="p-2 rounded-lg bg-blue-100 mr-3">
                          <FaBriefcase className="text-blue-600 text-xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                      </div>
                      
                      <div className="flex items-start mb-4">
                        <div className="p-2 rounded-lg bg-blue-100 mr-3 mt-1">
                          <FaBuilding className="text-blue-600" />
                        </div>
                        <p className="text-blue-600 font-medium">{exp.organization}</p>
                      </div>
                      
                      <div className="mb-6 md:hidden flex items-center">
                        <div className="p-2 rounded-lg bg-blue-100 mr-3">
                          <FaCalendarAlt className="text-blue-600" />
                        </div>
                        <p className="text-gray-900">{exp.duration}</p>
                      </div>
                      
                      <div className="hidden md:block">
                        <div className="p-2 rounded-lg bg-blue-100 inline-flex items-center">
                          <FaCode className="text-blue-600 mr-2" />
                          <span className="text-blue-600 font-medium">Key Contributions</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right side - Responsibilities */}
                    <div className="md:w-2/3">
                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp, idx) => (
                          <motion.li 
                            key={idx}
                            className="flex items-start group"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 * idx }}
                            viewport={{ once: true }}
                            whileHover={{ x: 5 }}
                          >
                            <span className="w-2 h-2 mt-1.5 mr-2 rounded-full bg-gradient-to-r from-blue-600 to-gray-600 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></span>
                            <span className="text-gray-900 leading-relaxed text-sm">
                              {resp.split(/\b(Spring Boot|Java|Redis|Maven|Apache Kafka|Tomcat|JDBC|Spring JPA|SQL|NoSQL|OAuth 2.0|OpenID Connect|OIDC|JWT|Prometheus|Grafana|RESTful APIs|Python|React|PostgreSQL|OpenAI|Linux|CI\/CD|microservices|event-driven architecture|cloud-native|role-based access control|RBAC)\b/).map((part, i) => {
                                const keywords = [
                                  "Spring Boot", "Java", "Redis", "Maven", "Apache Kafka", 
                                  "Tomcat", "JDBC", "Spring JPA", "SQL", "NoSQL", 
                                  "OAuth 2.0", "OpenID Connect", "OIDC", "JWT", 
                                  "Prometheus", "Grafana", "RESTful APIs", "Python", 
                                  "React", "PostgreSQL", "OpenAI", "Linux", "CI/CD",
                                  "microservices", "event-driven architecture", "cloud-native",
                                  "role-based access control", "RBAC"
                                ];
                                return keywords.includes(part) ? 
                                  <span key={i} className="font-extrabold text-black">{part}</span> : part;
                              })}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
