import { Fragment, useState } from "react";
import pic from "../Images/waleedlogo.jpeg";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Fragment>
      <nav className="flex fixed justify-between shadow-2xl bg-gray-900 p-4 w-full top-0 z-50">

        <div className="w-[20%] flex justify-evenly items-center">
          <div className=" h-16  cursor-pointer lg:block w-16 rounded-full overflow-hidden">
            <img src={pic} onClick={() => window.location.href = "#home"} alt="Profile" className="w-full h-full rounded-full object-contain" />
          </div>

        </div>


        <div className="lg:hidden flex justify-center items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <IoCloseSharp size={24} /> : <IoMdMenu size={24} />}
          </button>
        </div>


        <ul className="hidden lg:flex justify-evenly gap-10 items-center w-[70%]">
          {["Home", "About", "Skills", "Resume", "Services", "Projects"].map(
            (item, index) => (
              <li onClick={() => setIsMenuOpen(false)} key={index} className="font-medium cursor-pointer text-white relative group">
                <a href={`#${item.toLowerCase()}`} className="hover:text-white transition duration-300">
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            )
          )}
          <li>
            <button onClick={() => window.location.href = '#contact'} className="text-white bg-pink-700 px-4 py-2 rounded-2xl cursor-pointer ">Contact Us</button>
          </li>
        </ul>


        <div
          className={`lg:hidden absolute top-16 left-0 w-full bg-gray-950 p-4 transition-all duration-300 ${isMenuOpen ? "block" : "hidden"
            }`}
        >
          <ul className="flex flex-col gap-4">
            {["Home", "About", "Skills", "Resume", "Services", "My Projects", "Contact"].map(
              (item, index) => (
                <li key={index} className="font-medium cursor-pointer text-white relative group">
                  <a onClick={() => setIsMenuOpen(false)} href={`#${item.toLowerCase()}`} className="hover:text-white transition duration-300">
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
