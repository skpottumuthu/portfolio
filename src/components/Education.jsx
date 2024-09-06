import React from 'react';

function Education() {
  return (
    <section id="education" className="mt-16 p-8 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Education</h2>

        {/* Master's Degree */}
        <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
          <h3 className="text-2xl font-semibold text-gray-700">
            Master of Science in Computer Science
          </h3>
          <p className="text-lg text-gray-600 mt-2">
            University of Georgia, Athens, GA | <strong>CGPA: 4.0/4.0</strong>
          </p>
          <p className="text-md text-gray-500 mt-2">
            <strong>Coursework:</strong> Algorithms, Database Management, Computer Networks, Machine Learning, Software Engineering
          </p>
          <p className="text-md text-gray-500 mt-2">
            <strong>Duration:</strong> Fall 2023 – Spring 2025
          </p>
        </div>

        {/* Bachelor's Degree */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-700">
            Bachelor of Technology in Computer Science
          </h3>
          <p className="text-lg text-gray-600 mt-2">
            Lovely Professional University, India | <strong>CGPA: 8.99/10</strong>
          </p>
          <p className="text-md text-gray-500 mt-2">
            <strong>Coursework:</strong> Programming in Java, Python, C++, Data Structures, Operating Systems, Database Management, Big Data
          </p>
          <p className="text-md text-gray-500 mt-2">
            <strong>Graduation:</strong> May 2022
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
