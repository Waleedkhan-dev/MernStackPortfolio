import { Fragment } from "react";
import pic from "../Images/portfoliofic.png";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
 };

 return (
  <Fragment>
   <nav className="flex fixed justify-between bg-gray-950 p-4 w-full top-0 z-50">
    <div className="w-[20%] flex items-center">
     <div className="h-12 w-16 items-center rounded-full overflow-hidden">
      <img src={pic} alt="Profile" className="w-full h-full object-contain" />
     </div>
     <h1 className="text-white font-semibold text-xl">Waleed</h1>
    </div>

    {/* Hamburger Icon for Mobile */}
    <div className="md:hidden flex justify-center items-center">
     <button onClick={toggleMenu} className="text-white focus:outline-none">
      {isMenuOpen ? <IoCloseSharp size={24} /> : <IoMdMenu size={24} />}
     </button>
    </div>

    {/* Desktop Menu */}
    <ul className="hidden md:flex justify-evenly gap-10 items-center w-[70%]">
     <li className="font-medium cursor-pointer text-white relative group">
      <a href="#home" className="hover:text-white transition duration-300">
       Home
       <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>
     </li>
     <li className="font-medium cursor-pointer text-white relative group">
      <a href="#about" className="hover:text-white transition duration-300">
       About
       <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>
     </li>
     <li className="font-medium cursor-pointer text-white relative group">
      <a href="#skills" className="hover:text-white transition duration-300">
       Skills
       <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>
     </li>
     <li className="font-medium cursor-pointer text-white relative group">
      <a href="#resume" className="hover:text-white transition duration-300">
       Resume
       <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>
     </li>
     <li className="font-medium cursor-pointer text-white relative group">
      <a href="#services" className="hover:text-white transition duration-300">
       Services
       <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>
     </li>
     <li className="font-medium cursor-pointer text-white relative group">
      <a href="#projects" className="hover:text-white transition duration-300">
       My Projects
       <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>
     </li>
     <li className="font-medium cursor-pointer text-white relative group">
      <a href="#contact" className="hover:text-white transition duration-300">
       Contact
       <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>
     </li>
    </ul>

    {/* Mobile Menu */}
    {isMenuOpen && (
     <div className="md:hidden absolute top-16 left-0 w-full bg-gray-950 p-4">
      <ul className="flex flex-col gap-4">
       <li className="font-medium cursor-pointer text-white relative group">
        <a href="#home" className="hover:text-white transition duration-300">
         Home
         <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
       </li>
       <li className="font-medium cursor-pointer text-white relative group">
        <a href="#about" className="hover:text-white transition duration-300">
         About
         <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
       </li>
       <li className="font-medium cursor-pointer text-white relative group">
        <a href="#skills" className="hover:text-white transition duration-300">
         Skills
         <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
       </li>
       <li className="font-medium cursor-pointer text-white relative group">
        <a href="#resume" className="hover:text-white transition duration-300">
         Resume
         <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
       </li>
       <li className="font-medium cursor-pointer text-white relative group">
        <a href="#services" className="hover:text-white transition duration-300">
         Services
         <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
       </li>
       <li className="font-medium cursor-pointer text-white relative group">
        <a href="#projects" className="hover:text-white transition duration-300">
         My Projects
         <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
       </li>
       <li className="font-medium cursor-pointer text-white relative group">
        <a href="#contact" className="hover:text-white transition duration-300">
         Contact
         <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
       </li>
      </ul>
     </div>
    )}
   </nav>
  </Fragment>
 );
};

export default Navbar;