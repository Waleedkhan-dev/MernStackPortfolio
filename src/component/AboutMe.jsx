import { Fragment } from "react"
import pic1 from "../Images/about.avif"

const AboutMe = () => {
 return (
  <Fragment>
   <div className="flex justify-evenly items-center">
    <div>
     <img src={pic1} alt="" className="w-full h-full" />
    </div>
    <div className="w-[40%] flex flex-col items-start justify-center text-start gap-2 ">
     <h1 className="font-bold text-white  text-3xl">About Me</h1>
     <p className="text-gray-300">Hi, I’m Waleed, a passionate MERN Stack Developer specializing in building dynamic and scalable web applications. With expertise in MongoDB, Express.js, React.js, and Node.js, I love turning ideas into functional, user-friendly digital experiences. I’m all about clean code, seamless UI/UX, and robust back-end systems. Let’s create something amazing together!

     </p>
     <div className="mt-5">
      <button className="border-4 rounded-3xl  border-[#FF014F] text-[#FF014F] px-5 py-2">
       Download CV
      </button>
     </div>
    </div>
   </div>
  </Fragment>
 )
}
export default AboutMe