import { Fragment } from "react"
import { Typewriter } from 'react-simple-typewriter'
import pic1 from "../Images/about.avif"
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom"

const HeroSection = () => {
  const openLinkedin = () => { window.open("https://www.linkedin.com/in/waleed-ahmed-9b4b2a1b0/") };
  const openGithub = () => {
    window.open("https://github.com/waleedkhan69")
  }
  return (
    <Fragment>
      <div>
        <div >
          <div className="flex justify-center items-center gap-12">
            <div className="w-[43%]">
              <h1 className="text-white text-4xl font-semibold">Hi, I’m <span className="text-[#FF014F]">waleed</span> <span>a</span> <br />
                <span className="text-white gap-2">

                  <Typewriter
                    words={["Full Stack Developer", "MERN Stack Developer", "DevOps Engineer"]}
                    loop={0}
                    cursor
                    cursorStyle='|'
                    typeSpeed={20}
                    deleteSpeed={20}
                    delaySpeed={1000}
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
                <div className="flex justify-start items-center gap-10">
                  <button className="text-white flex  justify-center bg-[#1E2125] h-10 w-10 rounded cursor-pointer  items-center text-center"><FaFacebookF className="h-7 w-7 " /></button>
                  <button onClick={openLinkedin} className="text-white flex  justify-center bg-[#1E2125] h-10 w-10 rounded cursor-pointer  items-center text-center"><FaLinkedinIn className="h-7 w-7 " /></button>
                  <button onClick={openGithub} className="text-white flex  justify-center bg-[#1E2125] h-10 w-10 rounded cursor-pointer  items-center text-center"><FaGithub className="h-7 w-7 " /></button>
                </div>
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