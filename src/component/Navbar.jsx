import { Fragment, useState } from "react";
// import pic from "../Images/waleedlogo.jpeg";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { SiWebpack } from "react-icons/si";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Fragment>
      <nav className="flex items-center justify-between fixed shadow-2xl bg-gray-900 px-4 w-full top-0 z-50">

        {/* Left section: Profile Image */}
        <div className="w-1/3 sm:w-1/4 md:w-1/5 flex justify-center items-center bg-yellow-500">
          <div className="h-12 w-12 md:h-16 md:w-16 cursor-pointer rounded-full ">
            <SiWebpack className="text-white bg-red-600" onClick={() => window.location.href = "#home"} />
          </div>
        </div>

        {/* Right section: Hamburger for small screens */}
        <div className="lg:hidden flex justify-end items-center w-1/3">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <IoCloseSharp size={28} /> : <IoMdMenu size={28} />}
          </button>
        </div>

        {/* Center menu for large screens */}
        <ul className="hidden lg:flex justify-evenly items-center w-2/3 gap-6">
          {["Home", "About", "Skills", "Resume", "Services", "Projects"].map((item, index) => (
            <li
              onClick={() => setIsMenuOpen(false)}
              key={index}
              className="font-medium cursor-pointer text-white relative group"
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition duration-300"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => window.location.href = "#contact"}
              className="text-white bg-pink-700 px-4 py-2 rounded-2xl cursor-pointer"
            >
              Contact Us
            </button>
          </li>
        </ul>

        {/* Mobile/Tablet Dropdown Menu */}
        <div
          className={`lg:hidden absolute top-16 left-0 w-full bg-gray-950 p-4 transition-all duration-300 ${isMenuOpen ? "block" : "hidden"
            }`}
        >
          <ul className="flex flex-col gap-4">
            {["Home", "About", "Skills", "Resume", "Services", "Projects", "Contact"].map(
              (item, index) => (
                <li
                  key={index}
                  className="font-medium cursor-pointer text-white relative group"
                >
                  <a
                    onClick={() => setIsMenuOpen(false)}
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-white transition duration-300"
                  >
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
