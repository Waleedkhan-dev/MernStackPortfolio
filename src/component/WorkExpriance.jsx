import Aos from "aos";
import "aos/dist/aos.css";
import { Fragment, useEffect } from "react";

const WorkExperience = () => {
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
 return (
  <Fragment>
   <div id="resume">
    <h1 className="text-4xl font-bold text-center mb-8 text-white">
     Education & Work Experience
    </h1>
    <div className="flex justify-center text-start gap-2 p-2 md:p-2 lg:p-4 items-start">
     {/* Education Section */}
     <div data-aos="fade-right" className="px-2">
      <h1 className="text-2xl font-semibold mb-4 text-white">Education</h1>
      <div className="mb-6">
       <h1 className="text-xl font-medium text-white">Matric</h1>
       <h2 className="text-lg text-gray-300">2019-2020</h2>
       <p className="text-gray-300">Govt Higher Secondary School Lodhran</p>
      </div>
      <div className="mb-6">
       <h1 className="text-xl font-medium text-white">Intermediate</h1>
       <h2 className="text-lg text-gray-300">2020-2022</h2>
       <p className="text-gray-300">Punjab College Lodhran</p>
      </div>
      <div className="mb-6">
       <h1 className="text-xl font-medium text-white">Bachelor In Software Engineering</h1>
       <h2 className="text-lg text-gray-300">2023-2027</h2>
       <p className="text-gray-300">The Islamia University Of Bahawalpur</p>
      </div>
     </div>


     <div data-aos="fade-up" className="w-1 h-[65vh] md:h-[37vh] rounded lg:h-[57vh] text-white bg-gradient-to-b from-[#FF014F] to-[#FF5733] mx-4"></div>


     <div data-aos="fade-left" className="">
      <h1 className="text-2xl font-semibold mb-4 text-white"> Experience</h1>
      <div className="mb-2 lg:mb-6 md:mb-4">
       <h1 className="text-xl font-medium text-white">React Frontend Developer</h1>
       <h2 className="text-lg text-gray-300">2023-2024</h2>
       <p className="text-gray-300">Codes Thinker Software House (Onsite)</p>
      </div>
      <div className="mb-2 lg:mb-6 md:mb-4">
       <h1 className="text-xl font-medium text-white">Frontend Developer</h1>
       <h2 className="text-lg text-gray-300">2025-January</h2>
       <p className="text-gray-300">Unique Softwares Agency (Remote)</p>
      </div>
      <div className="mb-2 lg:mb-6 md:mb-4">
       <h1 className="text-xl font-medium text-white">MERN Stack Developer </h1>
       <h2 className="text-lg text-gray-300">2025-Present</h2>
       <p className="text-gray-300">Coding First Software House(Onsite)</p>
      </div>
     </div>
    </div>
   </div>
  </Fragment>
 );
};

export default WorkExperience;