import { Fragment, useEffect } from "react";
import pic1 from "../Images/portfoliofic.png";
import resume from "../Images/fullStackResume.pdf";
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
  link.download = "fullStackResume.pdf";
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
      Hi, I’m Waleed, a passionate MERN Stack Developer specializing in building dynamic and scalable web applications. With expertise in MongoDB, Express.js, React.js, and Node.js, I love turning ideas into functional, user-friendly digital experiences. I’m all about clean code, seamless UI/UX, and robust back-end systems. Let’s create something amazing together!
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
