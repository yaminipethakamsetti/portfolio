import React from 'react';
import { FaGraduationCap, FaCertificate, FaUniversity, FaCalendarAlt } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Computer Applications",
      institution: "Aditya Degree College",
      university: "ADIKAVI NANNAYA UNIVERSITY",
      duration: "Jul 2023 - Mar 2026",
      details: "Cumulative GPA: 8.5"
    },
    {
      degree: "INTERMEDIATE",
      institution: "",
      university: "",
      duration: "Jul 2021 - May 2023",
      details: "MPC with an aggregate of 70%"
    }
  ];

  const certifications = [
    "Me Pro Pearson from the makers of PTE and Global Scale of English. (GSE)",
    "Certification on competitive coding training on C & C++ programming language by Criativo e-learning.",
    "Certification in Basic Python programming language provided by KAGGLE.",
    "Certification by a DigiSaksham program, a joint Digital skills initiative by Microsoft focused on essentials of Generative AI."
  ];

  return (
    <section id="education" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="grid grid-2">
          {/* Education */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-purple-600 flex items-center gap-2">
              <FaGraduationCap />
              Education
            </h3>
            
            {educationData.map((edu, index) => (
              <div key={index} className="card mb-6">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-bold text-gray-800">{edu.degree}</h4>
                  <div className="flex items-center gap-2 text-purple-600">
                    <FaCalendarAlt />
                    <span className="text-sm font-medium">{edu.duration}</span>
                  </div>
                </div>
                
                {edu.institution && (
                  <p className="text-gray-600 mb-1 flex items-center gap-2">
                    <FaUniversity className="text-purple-500" />
                    {edu.institution}
                  </p>
                )}
                
                {edu.university && (
                  <p className="text-gray-600 mb-2 font-medium">{edu.university}</p>
                )}
                
                <p className="text-purple-600 font-semibold">{edu.details}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-purple-600 flex items-center gap-2">
              <FaCertificate />
              Certifications
            </h3>
            
            <div className="card">
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
