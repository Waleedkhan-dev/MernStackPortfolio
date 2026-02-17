import { Fragment, useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";


import img1 from "../Images/bevvybullet.png";
import img2 from "../Images/botbytesai.png";
import img3 from "../Images/system.jpg";
import img4 from "../Images/unifimed.png";
import img5 from "../Images/pro.png"
import img6 from "../Images/lms.png"
import Aos from "aos";
import "aos/dist/aos.css";
const Projects = () => {
 useEffect(() => {
  Aos.init({
   offset: 200,
   duration: 1200,
   easing: 'ease-out-back',
   delay: 100,
   once: false,
   mirror: true,
  });
 }, []);

 const myProjects = [
  {
   pic: img1,
   title: "BevvyBullet",
   link: "https://www.bevvybullet.com"
  },
  {
   pic: img2,
   title: "BotBytesAI",
   link: "https://botbytesai.com"
  },
  {
   pic: img3,
   title: "System Demo",
   link: "https://system-demo-green.vercel.app/profile/overview"
  },
  {
   pic: img4,
   title: "Unifimed Insight Nexus",
   link: "https://unifimed-insight-nexus.vercel.app/consultation"
  },
  {
   pic: img5,
   title: "E-commerce Products",
   link: "https://redux-thunk-e-commerce.netlify.app/"
  },
  {
   pic: img6,
   title: "Learning Management System",
   link: "https://fyp-lms-frontend.vercel.app"

  }
 ];

 const [hoveredProject, setHoveredProject] = useState(null);

 return (
  <Fragment >
   {/* Title */}
   <div id="projects">
    <div className="flex justify-center items-center py-6">
     <h1 className="text-white text-5xl font-bold"> My Projects</h1>
    </div>


    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
     {myProjects.map((item, index) => (
      <div
       data-aos="zoom-in-up"
       key={index}
       className="relative group flex flex-col items-center text-center p-4 bg-gray-800 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-500"
       onMouseEnter={() => setHoveredProject(index)}
       onMouseLeave={() => setHoveredProject(null)}
       onClick={() => window.open(item.link, "_blank")}
      >

       <div className="w-full h-60 overflow-hidden rounded-lg relative">
        <img
         src={item.pic}
         alt={item.title}
         className={`w-full h-full object-cover transition-opacity duration-300 ${hoveredProject === index ? "opacity-30" : "opacity-100"}`}
        />


        {hoveredProject === index && (
         <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-[#FF014F]  to-[#FF6A3D] text-white opacity-70 text-lg font-semibold transition-opacity duration-300 rounded-lg">
          <p className="flex items-center gap-2">
           Live Preview <MdArrowOutward className="" />
          </p>
         </div>
        )}
       </div>

       {/* Project Title */}
       <h1 className="text-white text-xl font-semibold mt-3">{item.title}</h1>
      </div>
     ))}
    </div>
   </div>
  </Fragment>
 );
};

export default Projects;
