import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
 return (
  <footer className="bg-gray-900 text-white py-8">
   <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
     {/* About Section */}
     <div className="text-center md:text-left">
      <h3 className="text-xl font-bold mb-4">About Me</h3>
      <p className="text-gray-400">
       I'm a passionate developer who loves building amazing web applications and solving real-world problems.
      </p>
     </div>

     {/* Quick Links */}
     <div className="text-center">
      <h3 className="text-xl font-bold mb-4">Quick Links</h3>
      <ul className="text-gray-400">
       <li className="mb-2">
        <a href="#home" className="hover:text-white transition duration-300">Home</a>
       </li>
       <li className="mb-2">
        <a href="#projects" className="hover:text-white transition duration-300">Projects</a>
       </li>
       <li className="mb-2">
        <a href="#skills" className="hover:text-white transition duration-300">Skills</a>
       </li>
       <li className="mb-2">
        <a href="#contact" className="hover:text-white transition duration-300">Contact</a>
       </li>
      </ul>
     </div>

     {/* Social Media Links */}
     <div className="text-center md:text-right">
      <h3 className="text-xl font-bold mb-4">Connect with Me</h3>
      <div className="flex justify-center md:justify-end space-x-4">
       <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition duration-300"
       >
        <FaGithub className="w-6 h-6" />
       </a>
       <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition duration-300"
       >
        <FaLinkedin className="w-6 h-6" />
       </a>
       <a
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition duration-300"
       >
        <FaTwitter className="w-6 h-6" />
       </a>
       <a
        href="mailto:youremail@example.com"
        className="text-gray-400 hover:text-white transition duration-300"
       >
        <FaEnvelope className="w-6 h-6" />
       </a>
      </div>
     </div>
    </div>

    {/* Copyright Section */}
    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
     <p className="text-gray-400">
      &copy; {new Date().getFullYear()} Your Name. All rights reserved.
     </p>
    </div>
   </div>
  </footer>
 );
};

export default Footer;