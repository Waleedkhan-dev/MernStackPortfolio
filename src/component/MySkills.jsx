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
import { SiExpress, SiTailwindcss, SiTypescript, SiPostgresql, SiSupabase, SiMongodb, SiNextdotjs } from "react-icons/si";

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
  { name: "JavaScript", icon: <FaJs />, percentage: 85, color: "bg-yellow-500" },
  { name: "TypeScript", icon: <SiTypescript />, percentage: 80, color: "bg-blue-600" },
  { name: "React", icon: <FaReact />, percentage: 85, color: "bg-cyan-500" },
  { name: "Next.js", icon: <SiNextdotjs />, percentage: 80, color: "bg-gray-800" },
  { name: "Node.js", icon: <FaNodeJs />, percentage: 80, color: "bg-green-600" },
  { name: "Express.js", icon: <SiExpress />, percentage: 75, color: "bg-red-900" },
  { name: "MongoDB", icon: <SiMongodb />, percentage: 85, color: "bg-green-500" },
  // { name: "PostgreSQL", icon: <SiPostgresql />, percentage: 80, color: "bg-blue-400" }
  { name: "Supabase", icon: <SiSupabase />, percentage: 75, color: "bg-green-600" },
 ];

 return (
  <section id="skills" className="py-16 bg-[#030712]">
   <div className="container mx-auto px-4 md:px-8">
    <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
     My Skills
    </h2>

    <div className="max-w-4xl mx-auto">
     {skills.map((skill, index) => (
      <div
       data-aos="fade-up"
       key={index}
       className="mb-6"
      >
       <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
         <span className="text-2xl text-[#FF014F]">{skill.icon}</span>
         <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
        </div>
        <span className="text-white font-semibold">{skill.percentage}%</span>
       </div>
       <div className="w-full bg-gray-700 rounded-full h-2">
        <div
         className={`${skill.color} h-2 rounded-full transition-all duration-500`}
         style={{ width: `${skill.percentage}%` }}
        ></div>
       </div>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default MySkills;
