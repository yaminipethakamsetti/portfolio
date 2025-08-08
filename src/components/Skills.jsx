import React from 'react';
import { FaCode, FaDatabase, FaJava, FaPython } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';

const Skills = () => {
  const technicalSkills = [
    { name: "C Programming Language", icon: FaCode, level: 85 },
    { name: "Java Programming Language", icon: FaJava, level: 70 },
    { name: "Python Programming Language", icon: FaPython, level: 75 },
    { name: "C++ Programming Language", icon: SiCplusplus, level: 80 },
    { name: "Database Management System", icon: FaDatabase, level: 65 }
  ];

  return (
    <section id="skills" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-1 gap-6">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="card">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <skill.icon className="text-white text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{skill.name}</h3>
                  </div>
                  <span className="text-purple-600 font-bold">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">Skill Level Legend</h3>
              <div className="grid grid-3 gap-4">
                <div className="text-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm text-gray-600">Advanced (80-100%)</p>
                </div>
                <div className="text-center">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm text-gray-600">Intermediate (70-79%)</p>
                </div>
                <div className="text-center">
                  <div className="w-4 h-4 bg-orange-500 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm text-gray-600">Basic (60-69%)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

