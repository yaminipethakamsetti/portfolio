import React from 'react';
import { FaGraduationCap, FaUsers, FaLightbulb, FaHeart } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-2">
          <div className="card">
            <h3 className="text-2xl font-bold mb-4 text-purple-600 flex items-center gap-2">
              <FaGraduationCap />
              Objective
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To secure a challenging role as a Teaching partner and content creator in a reputed organization 
              that values students' Brighter Future and innovation, where I can utilize my technical knowledge 
              and Communication skills in Teaching and content creation to contribute to the growth of the company.
            </p>
          </div>

          <div className="card">
            <h3 className="text-2xl font-bold mb-4 text-purple-600 flex items-center gap-2">
              <FaUsers />
              Soft Skills
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="font-medium">Good Communication</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="font-medium">Time Management</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="font-medium">Teamwork</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-3 mt-8">
          <div className="card text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaLightbulb className="text-white text-2xl" />
            </div>
            <h4 className="text-xl font-bold mb-2 text-gray-800">Languages</h4>
            <p className="text-gray-600">Fluent in English, Telugu</p>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaHeart className="text-white text-2xl" />
            </div>
            <h4 className="text-xl font-bold mb-2 text-gray-800">Hobbies</h4>
            <div className="text-gray-600 space-y-1">
              <p>Cooking</p>
              <p>Reading Books</p>
              <p>Browsing</p>
            </div>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaGraduationCap className="text-white text-2xl" />
            </div>
            <h4 className="text-xl font-bold mb-2 text-gray-800">Current Status</h4>
            <p className="text-gray-600">Bachelor of Computer Applications Student</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Declaration</h3>
            <p className="text-gray-700 leading-relaxed">
              I do hereby declare that all the details mentioned above are correct to the best of my knowledge 
              and confidence. I bear the responsibility for any mistake in the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
