import { Fragment } from "react"
import { Typewriter } from 'react-simple-typewriter'
import pic1 from "../Images/about.avif"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom"

const HeroSection = () => {
 return (
  <Fragment>
   <div>
    <div className="bg-[#090003] ">
     <div className="flex justify-center items-center gap-12">
      <div className="w-[43%]">
       <h1 className="text-white text-4xl font-semibold">Hi, I’m <span className="text-[#FF014F]">waleed</span>  <br /> <span>a</span>
        <span className="text-white gap-2">

         <Typewriter
          words={["Full Stack Developer", "MERN Stack Developer", "DevOps Engineer"]}
          loop={0}
          cursor
          cursorStyle='|'
          typeSpeed={50}
          deleteSpeed={50}
          delaySpeed={500}
         >

         </Typewriter>
        </span>
       </h1>
       <div className="mt-2">
        <p className="text-white">
         I am a MERN Stack Developer specializing in responsive web apps with React, Node.js, Express, and MongoDB. I build modern frontends, scalable backends, and seamless APIs for a smooth user experience. Let’s create something amazing! </p>
       </div>
       <div>
        <h1>find with me</h1>
        <Link className="flex justify-start items-center gap-10">
         <Link className="text-white flex  justify-center bg-[#1E2125] h-11 w-11 items-center text-center"><FaFacebookF /></Link>
         <p className="text-white flex  justify-center bg-[#1E2125] h-11 w-11 items-center text-center"><FaLinkedinIn /></p>
         <Link className="text-white flex  justify-center bg-[#1E2125] h-11 w-11 items-center text-center"><FaInstagram /></Link>
        </Link>
       </div>
      </div>

      <div>
       <img src={pic1} alt="" />
      </div>
     </div>
    </div>
   </div>
  </Fragment >
 )
}
export default HeroSection