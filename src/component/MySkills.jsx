import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaBootstrap } from 'react-icons/fa';
import { SiExpress, SiTailwindcss } from "react-icons/si";


const MySkills = () => {
 // List of skills
 const skills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <FaDatabase /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
 ];

 return (
  <section className="py-12 bg-gray-50">
   <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">My Skills</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
     {skills.map((skill, index) => (
      <div
       key={index}
       className="bg-[] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
      >
       <div className="text-4xl mb-4">{skill.icon}</div>
       <h3 className="text-xl font-semibold text-gray-700">{skill.name}</h3>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default MySkills;