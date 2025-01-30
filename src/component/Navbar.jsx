import { Fragment } from "react"

const Navbar = () => {
 return (
  <Fragment>
   <nav className="flex justify-between bg-gray-950 p-4 w-full">
    <div className="w-[20%]">
     <h1 className="text-white font-semibold">Waleed</h1>
    </div>
    <ul className="flex justify-evenly gap-10 items-center w-[80%]">
     <li className="font-medium cursor-pointer text-white">Home</li>
     <li className="font-medium cursor-pointer text-white">About</li>
     <li className="font-medium cursor-pointer text-white">Resume</li>
     <li className="font-medium cursor-pointer text-white">Services</li>
     <li className="font-medium cursor-pointer text-white">Portfolio</li>
     <li className="font-medium cursor-pointer text-white">Contact</li>
    </ul>
   </nav>
  </Fragment>
 )
}

export default Navbar
