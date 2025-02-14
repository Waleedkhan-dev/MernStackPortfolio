import { Fragment } from "react";

const Navbar = () => {
 console.log("hello we are looking");

 return (
  <Fragment>
   <nav className="flex justify-between bg-gray-950 p-4 w-full  top-0 z-50">
    <div className="w-[20%]">
     <h1 className="text-white font-semibold text-xl">Waleed</h1>
    </div>
    <ul className="flex justify-evenly gap-10 items-center w-[80%]">
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
      <a href="#portfolio" className="hover:text-white transition duration-300">
       Portfolio
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
   </nav>
  </Fragment>
 );
};

export default Navbar;