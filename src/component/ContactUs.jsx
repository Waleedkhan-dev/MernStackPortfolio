import { Fragment } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { MdLocationPin } from "react-icons/md";

const ContactUs = () => {
 return (
  <Fragment>
   <div id="contact" className="flex flex-col items-center justify-center py-12 px-6 bg-gray-950 min-h-screen text-white">
    <h1 className="text-4xl font-extrabold text-white mb-8">Get In Touch</h1>
    <div className="flex flex-col md:flex-row bg-gray-800 shadow-2xl rounded-lg p-10 w-full max-w-5xl">
     {/* Form Section */}
     <form className="flex flex-col flex-1 space-y-6">
      <input
       type="text"
       placeholder="Enter your Name"
       className="border border-gray-600 bg-gray-900 text-white rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
       type="email"
       placeholder="Enter your Email"
       className="border border-gray-600 bg-gray-900 text-white rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
       type="tel"
       placeholder="Enter your Phone Number"
       className="border border-gray-600 bg-gray-900 text-white rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
       cols="30"
       rows="5"
       placeholder="Enter your Message"
       className="border border-gray-600 bg-gray-900 text-white rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
      <button className="bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md">
       Send Message
      </button>
     </form>

     {/* Contact Info Section */}
     <div className="flex flex-col flex-1 text-white mt-8 md:mt-0 md:ml-12">
      <h2 className="text-3xl font-semibold mb-6 text-white">Contact Us</h2>
      <div className="flex items-center space-x-3 text-gray-300">
       <MdLocationPin className="text-2xl text-red-400" />
       <p>Lodhran, Punjab, Pakistan</p>
      </div>
      <div className="flex items-center space-x-3 mt-5">
       <MdOutlineAlternateEmail className="text-2xl text-blue-400" />
       <a href="mailto:waledengineer786@gmail.com" className="text-white hover:underline text-lg">
        waledengineer786@gmail.com
       </a>
      </div>
      <div className="flex items-center space-x-3 mt-4">
       <FaPhoneAlt className="text-2xl text-green-400" />
       <a href="tel:+923267514362" className="text-text hover:underline text-lg">
        +92 326-7514362
       </a>
      </div>
      <div className="flex items-center space-x-3 mt-4">
       <CgWebsite className="text-2xl text-gray-400" />
       <a href="https://waleedkhan.netlify.app/" className="text-white hover:underline text-lg">
        waleedkhan.netlify.app
       </a>
      </div>
     </div>
    </div>
   </div>
  </Fragment>
 );
};

export default ContactUs;
