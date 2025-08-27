import React from 'react';
import { FaUsers, FaCalendarAlt, FaHeart, FaLightbulb, FaCode } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Mother and Child Health Care - Community Service",
      duration: "August 2023",
      description: "A community service project focused on maternal and child health education and awareness.",
      achievements: [
        "Learned about community partnership in the process of working with different peoples in over 5 weeks.",
        "Educated how should be the pregnant ladies take precautions and take care their new born babies.",
        "We tried our best to give awareness to the pregnancy ladies for good health."
      ],
      icon: FaHeart,
      color: "from-pink-500 to-red-500"
    },
    {
      title: "MERN Full Stack Development Internship - Adhoc Network",
      duration: "Apr 16, 2025 - Jun 17, 2025",
      description: "Completed a short-term internship building end-to-end web applications using the MERN stack.",
      achievements: [
        "Built end-to-end web applications, enhancing front-end and back-end development skills.",
        "Developed problem-solving skills through project-based tasks."
      ],
      icon: FaCode,
      color: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section id="projects" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Projects & Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <project.icon className="text-white text-2xl" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                    <div className="flex items-center gap-2 text-purple-600">
                      <FaCalendarAlt />
                      <span className="font-medium">{project.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-purple-600 flex items-center gap-2">
                      <FaLightbulb />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-12 text-center">
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">Community Impact</h3>
              <div className="grid grid-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaUsers className="text-white text-2xl" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-800">Community Partnership</h4>
                  <p className="text-gray-600">Worked with diverse groups over 5 weeks</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaHeart className="text-white text-2xl" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-800">Health Education</h4>
                  <p className="text-gray-600">Educated pregnant women on health precautions</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaLightbulb className="text-white text-2xl" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-800">Awareness Campaign</h4>
                  <p className="text-gray-600">Raised awareness for maternal health</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

