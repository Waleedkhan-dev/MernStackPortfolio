import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import {
 FaHtml5,
 FaCss3Alt,
 FaJs,
 FaReact,
 FaNodeJs,
 FaDatabase,
 FaBootstrap,
} from "react-icons/fa";
import { SiExpress, SiTailwindcss } from "react-icons/si";

const MySkills = () => {
 useEffect(() => {
  Aos.init({
   offset: 150,
   duration: 1000,
   easing: "ease-out-back",
   delay: 100,
   once: false,
   mirror: true,
  });
 }, []);

 const skills = [
  { name: "HTML", icon: <FaHtml5 />, percentage: 90, color: "bg-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, percentage: 85, color: "bg-blue-500" },
  { name: "Bootstrap", icon: <FaBootstrap />, percentage: 80, color: "bg-purple-600" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, percentage: 90, color: "bg-teal-500" },
  { name: "JavaScript", icon: <FaJs />, percentage: 75, color: "bg-yellow-500" },
  { name: "React", icon: <FaReact />, percentage: 80, color: "bg-cyan-500" },
  { name: "Node.js", icon: <FaNodeJs />, percentage: 70, color: "bg-green-600" },
  { name: "Express.js", icon: <SiExpress />, percentage: 65, color: "bg-red-900" },
  { name: "MongoDB", icon: <FaDatabase />, percentage: 80, color: "bg-green-500" },
 ];

 return (
  <section id="skills" className="py-12 bg-[#030712]">
   <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-50 mb-8">
     My Skills
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
     {skills.map((skill, index) => (
      <div
       data-aos="fade-up"

       key={index}
       className="bg-[#1E2939] cursor-pointer group flex flex-col items-center justify-center p-6 w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center hover:bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] max-w-sm mx-auto"
      >
       <div className="text-4xl mb-4 w-16 h-16 group-hover:bg-white flex items-center justify-center rounded-full text-[#FF014F] bg-gray-800">
        {skill.icon}
       </div>
       <h3 className="text-xl font-semibold text-white">{skill.name}</h3>

       {/* Responsive Progress Bar */}
       <div className="w-full bg-gray-700 rounded-full h-3 mt-2 relative">
        <div
         className={`${skill.color} h-3 rounded-full transition-all duration-500 flex items-center justify-end`}
         style={{ width: `${skill.percentage}%` }}
        >
         <span className="text-white text-xs font-bold pr-2">{skill.percentage}%</span>
        </div>
       </div>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default MySkills;
