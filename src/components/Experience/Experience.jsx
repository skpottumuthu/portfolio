// import React from "react";
// import { motion } from "framer-motion";

// function Experience() {
//   const experiences = [
//     {
//       title: "Graduate Research Assistant",
//       organization: "University of Georgia, Brain and Action Lab, Athens, GA",
//       duration: "February 2024 – Present",
//       responsibilities: [
//         "Reduced machine learning model training time by 40% through optimization using high-performance computing systems.",
//         "Migrated complex MATLAB scripts to Python, improving code maintainability and speeding up development processes.",
//         "Automated data analysis and processing for brain activity research, reducing manual intervention by 50%.",
//       ],
//     },
//     {
//       title: "Software Development Engineer",
//       organization: "MoveInSync Technologies, Bengaluru, India",
//       duration: "April 2021 – July 2023",
//       responsibilities: [
//         "Led critical migrations to microservices architecture for trip and vehicle management systems, enhancing scalability and flexibility.",
//         "Improved system performance and reliability by 30% by refactoring legacy code and optimizing database queries.",
//         "Developed key features for electric vehicle management, including real-time tracking and status monitoring.",
//       ],
//     },
//   ];

//   return (
//     <section id="experience" className="py-16 px-8 bg-gray-50 relative">
//       <div className="max-w-6xl mx-auto">
//         {/* Section Title */}
//         <motion.h2
//           className="text-5xl font-extrabold text-gray-800 mb-12 text-center"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Experience
//         </motion.h2>

//         {/* Experience Items */}
//         <div className="space-y-12">
//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               className="flex flex-col sm:flex-row items-center sm:items-start"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//             >
//               {/* Left Side */}
//               <div className="sm:w-1/3 text-center sm:text-left mb-6 sm:mb-0">
//                 <h3 className="text-2xl font-bold text-gray-800">
//                   {exp.title}
//                 </h3>
//                 <p className="text-lg text-blue-600 italic">
//                   {exp.organization}
//                 </p>
//                 <p className="text-md text-gray-500 mt-2">{exp.duration}</p>
//               </div>

//               {/* Right Side (Box) */}
//               <div className="sm:w-2/3 bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
//                 <ul className="list-disc list-inside text-gray-600 space-y-2">
//                   {exp.responsibilities.map((resp, idx) => (
//                     <li key={idx}>{resp}</li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Experience;
import React from "react";
import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      title: "Graduate Research Assistant",
      organization: "Brain and Action Lab, University of Georgia, Athens, GA",
      duration: "February 2024 – Present",
      responsibilities: [
        "Developed Python-based tools to preprocess, analyze, and visualize data for human motor control experiments.",
        "Set up and optimized machine learning environments (TensorFlow, PyTorch) to support predictive modeling of experimental data.",
        "Automated data collection and scheduling processes, reducing manual effort by 40%.",
        "Analyzed large datasets using pandas, NumPy, and SciPy to derive actionable insights for research publications.",
        "Collaborated with interdisciplinary teams to design and implement computational solutions for neuroscience experiments.",
        "Reduced machine learning model training time by 40% through optimization using high-performance computing systems.",
        "Migrated complex MATLAB scripts to Python, improving code maintainability and speeding up development processes.",
        "Automated data analysis and processing for brain activity research, reducing manual intervention by 50%.",
      ],
    },
    {
      title: "Software Development Engineer",
      organization: "MoveInSync Technologies, Bengaluru, India",
      duration: "April 2021 – July 2023",
      responsibilities: [
        "Led critical migrations to microservices architecture for trip and vehicle management systems, enhancing scalability and flexibility.",
        "Improved system performance and reliability by 30% by refactoring legacy code and optimizing database queries.",
        "Developed key features for electric vehicle management, including real-time tracking and status monitoring.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 px-8 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-5xl font-extrabold text-gray-800 mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>

        {/* Experience Items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Left Side */}
              <div className="sm:w-1/3 text-center sm:text-left mb-6 sm:mb-0">
                <h3 className="text-2xl font-bold text-gray-800">
                  {exp.title}
                </h3>
                <p className="text-lg text-blue-600 italic">
                  {exp.organization}
                </p>
                <p className="text-md text-gray-500 mt-2">{exp.duration}</p>
              </div>

              {/* Right Side (Box) */}
              <div className="sm:w-2/3 bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
