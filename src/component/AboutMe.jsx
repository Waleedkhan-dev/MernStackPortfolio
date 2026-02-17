import { Fragment, useEffect } from "react";
import pic1 from "../Images/portfoliofic.png";
import resume from "../Images/Waleed_Resume.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
 useEffect(() => {
  if (window.innerWidth >= 768) {
   AOS.init({
    offset: 200,
    duration: 1200,
    easing: 'ease-out-back',
    delay: 100,
    once: false,
    mirror: true,
   });
  }
 }, []);

 const handleDownload = () => {
  const link = document.createElement("a");
  link.href = resume;
  link.download = "Mwaleed.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
 };

 return (
  <Fragment>
   <div id="about" className="flex flex-col md:flex-row justify-evenly items-center p-4">
    <div data-aos={window.innerWidth >= 768 ? "fade-up" : ""} className="w-full md:w-1/2 lg:w-1/3 p-4">
     <img src={pic1} alt="About Me" className="w-full h-auto rounded-lg" />
    </div>
    <div
     data-aos={window.innerWidth >= 768 ? "fade-left" : ""}
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     className="w-full md:w-1/2 lg:w-2/5 flex flex-col items-start justify-center text-start gap-2 p-4"
    >
     <h1 className="font-bold text-white text-3xl">About Me</h1>
     <p className="text-gray-300 text-justify">
      Hi, I'm Muhammad Waleed, a Full Stack Developer with 2 years of professional experience specializing in the MERN Stack and building modern, scalable, and AI-powered web applications. I work with React, Next.js, TypeScript, Tailwind CSS, Node.js, Express, MongoDB, and Supabase to create clean, efficient, and reliable full-stack solutions. I also develop AI chatbots and automation systems using OpenAI and LangChain. My focus is on building fast, secure, and intuitive applications that combine strong frontend development with powerful backend logic.
     </p>
     <div className="mt-5">
      <button
       onClick={handleDownload}
       className="border-4 cursor-pointer rounded-3xl border-[#FF014F] text-[#FF014F] px-5 py-2 hover:bg-[#FF014F] hover:text-white transition-colors duration-300"
      >
       Download CV
      </button>
     </div>
    </div>
   </div>
  </Fragment>
 );
};

export default AboutMe;
