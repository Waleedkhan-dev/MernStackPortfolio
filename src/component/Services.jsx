import Aos from "aos";
import "aos/dist/aos.css";
import { Fragment, useEffect } from "react";
import { FaLaptopCode, FaCode, FaServer, FaPlug, FaMobileAlt, FaCloudUploadAlt } from "react-icons/fa";

const Services = () => {
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
 const myServices = [
  {
   icon: <FaLaptopCode className="text-3xl text-[#FF014F]" />,
   title: "Full Stack Web Development",
   descrp: "Develop high-performance, scalable web applications using the MERN stack, ensuring seamless integration of frontend and backend for optimal functionality."
  },
  {
   icon: <FaCode className="text-3xl text-[#FF014F]" />,
   title: "Frontend Development",
   descrp: "Create modern, responsive, and interactive user interfaces using React.js, Tailwind CSS, and Bootstrap with a focus on speed and engagement."
  },
  {
   icon: <FaServer className="text-3xl text-[#FF014F]" />,
   title: "Backend Development",
   descrp: "Build robust RESTful APIs with Node.js and Express.js, integrating MongoDB for efficient data management and secure backend functionality."
  },
  {
   icon: <FaPlug className="text-3xl text-[#FF014F]" />,
   title: "API Integration",
   descrp: "Seamlessly integrate third-party APIs, payment gateways, and authentication systems to enhance application features and connectivity."
  },
  {
   icon: <FaMobileAlt className="text-3xl text-[#FF014F]" />,
   title: "Responsive Design",
   descrp: "Ensure a smooth and consistent user experience across all devices with fully responsive, mobile-friendly web applications."
  },
  {
   icon: <FaCloudUploadAlt className="text-3xl text-[#FF014F]" />,
   title: "Deployment & Maintenance",
   descrp: "Deploy applications on Vercel, Netlify, and AWS, providing continuous updates, optimizations, and security maintenance."
  }
 ];

 return (
  <Fragment>
   <div id="services">

    <div className="flex justify-center items-center mt-3.5 p-6">
     <h1 className="text-white text-5xl font-bold">My Services</h1>
    </div>


    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
     {myServices.map((item, index) => (
      <div
       data-aos="fade-up"
       key={index}
       className="flex group cursor-pointer flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-all duration-700  hover:bg-gradient-to-r from-[#ff416c] to-[#ff4b2b]"
      >

       <div className="w-14 h-14 flex justify-center items-center rounded-full bg-gray-700 group-hover:bg-white transition-all duration-300">
        {item.icon}
       </div>


       <h1 className="text-white text-xl font-semibold mt-3">{item.title}</h1>
       <p className="text-gray-300 text-start mt-2">{item.descrp}</p>
      </div>
     ))}
    </div>
   </div>
  </Fragment>
 );
};

export default Services;
