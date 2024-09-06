import React from 'react';

function Home() {
  const name = "Santosh Kumar Pottumuthu";

  return (
    <section id="home" className="text-center mt-16 p-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-800 transform -skew-x-12 mb-6">
          {name.split("").map((char, index) => (
            <span
              key={index}
              className={`inline-block opacity-0 animate-fade-in ${
                char === " " ? "w-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          I am currently pursuing my <strong>Master of Science in Computer Science</strong> at the University of Georgia, with a perfect 4.0 GPA, focusing on <strong>Data Structures & Algorithms</strong>, <strong>Machine Learning</strong>, and <strong>Software Engineering</strong>. My educational journey began with a Bachelor of Technology in Computer Science from Lovely Professional University, India, where I graduated with distinction.
        </p>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          In addition to my academic achievements, I bring extensive software development experience from my time as a Software Development Engineer at MoveInSync Technologies, Bengaluru, India. During this period, I enhanced system performance, led critical migrations to microservices, and improved vehicle and trip management systems for electric vehicles, boosting overall efficiency and user satisfaction.
        </p>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          Currently, I work as a Graduate Research Assistant at UGA’s Brain and Action Lab, where I have significantly reduced machine learning model training time by leveraging high-performance computing systems. I also migrated complex MATLAB scripts to Python, accelerating development and improving maintainability.
        </p>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          I am proficient in a variety of languages and frameworks, including <strong>Java</strong>, <strong>Python</strong>, <strong>JavaScript</strong>, <strong>React</strong>, <strong>Spring Boot</strong>, and <strong>Tailwind CSS</strong>, with a strong foundation in data structures and algorithms. I am passionate about learning new technologies, tackling complex problems, and delivering innovative solutions.
        </p>
      </div>
    </section>
  );
}

export default Home;
