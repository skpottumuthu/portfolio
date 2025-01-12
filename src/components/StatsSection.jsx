import React from "react";
import { motion } from "framer-motion";

function StatsSection() {
  const stats = [
    { title: "3+ Years", subtitle: "Professional Experience" },
    { title: "10+ Projects", subtitle: "In Web & AI Development" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-4xl font-bold text-blue-500">{stat.title}</h2>
          <p className="mt-2 text-sm text-gray-600">{stat.subtitle}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default StatsSection;
