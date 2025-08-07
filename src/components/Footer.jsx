import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Yamini Pethakamsetti
            </span>
          </h3>
          
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Teaching Partner & Content Creator passionate about students' brighter future and innovation. 
            Let's connect and create something amazing together!
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:yaminipethakamsetti0911@gmail.com"
              className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              title="Email"
            >
              <FaEnvelope className="text-white" />
            </a>
            
            <a 
              href="tel:+917997575606"
              className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              title="Phone"
            >
              <FaPhone className="text-white" />
            </a>
            
            <a 
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              title="LinkedIn"
            >
              <FaLinkedin className="text-white" />
            </a>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              © {currentYear} Yamini Pethakamsetti. Made with 
              <FaHeart className="text-red-500" /> 
              for students' brighter future.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
