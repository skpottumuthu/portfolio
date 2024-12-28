import React from 'react';

function Experience() {
  return (
    <section id="experience" className="mt-16 p-8 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Experience</h2>

        {/* Latest Experience - Graduate Research Assistant */}
        <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
          <h3 className="text-2xl font-semibold text-gray-700">
            Graduate Research Assistant
          </h3>
          <p className="text-lg text-gray-600 mt-2">
            University of Georgia, Brain and Action Lab, Athens, GA
          </p>
          <p className="text-md text-gray-500 mt-2">
            <strong>Duration:</strong> February 2024 – Present
          </p>
          <ul className="list-disc text-left text-md text-gray-500 mt-4 ml-6">
            <li>
              Reduced machine learning model training time by 40% through optimization using high-performance computing systems.
            </li>
            <li>
              Migrated complex MATLAB scripts to Python, improving code maintainability and speeding up development processes.
            </li>
            <li>
              Automated data analysis and processing for brain activity research, reducing manual intervention by 50%.
            </li>
          </ul>
        </div>

        {/* Previous Experience - Software Development Engineer */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-700">
            Software Development Engineer
          </h3>
          <p className="text-lg text-gray-600 mt-2">
            MoveInSync Technologies, Bengaluru, India
          </p>
          <p className="text-md text-gray-500 mt-2">
            <strong>Duration:</strong> April 2021 – July 2023
          </p>
          <ul className="list-disc text-left text-md text-gray-500 mt-4 ml-6">
            <li>
              Led critical migrations to microservices architecture for trip and vehicle management systems, enhancing scalability and flexibility.
            </li>
            <li>
              Improved system performance and reliability by 30% by refactoring legacy code and optimizing database queries.
            </li>
            <li>
              Developed key features for electric vehicle management, including real-time tracking and status monitoring.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
