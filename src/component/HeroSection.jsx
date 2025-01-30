// import { Fragment } from "react";
// import { motion } from "framer-motion";

// const textData = [
//  { text: "MERN Stack Developer", color: "text-blue-500" },
//  { text: "Freelancer", color: "text-green-500" },
//  { text: "Software Engineer", color: "text-yellow-500" },
// ];

// const HeroSection = () => {
//  return (
//   <Fragment>
//    <div className="text-center py-16">
//     {/* Animated Header */}
//     <motion.h1
//      className="text-4xl md:text-5xl font-semibold text-gray-900"
//      initial={{ opacity: 0, y: -20 }}
//      animate={{ opacity: 1, y: 0 }}
//      transition={{ duration: 1.2 }}
//     >
//      Hi, I'm Waleed Khan, a{" "}
//      {textData.map((item, index) => (
//       <span key={index} className={item.color}>
//        {item.text.split("").map((char, charIndex) => (
//         <motion.span
//          key={charIndex}
//          className="inline-block"
//          initial={{ opacity: 0 }}
//          animate={{ opacity: 1 }}
//          transition={{
//           opacity: { duration: 0.1 },
//           delay: index * 0.5 + charIndex * 0.1, // Staggered animation for each letter
//          }}
//         >
//          {char}
//         </motion.span>
//        ))}
//        {index < textData.length - 1 && ", "}
//       </span>
//      ))}
//     </motion.h1>

//     {/* Animated Description */}
//     <motion.p
//      className="text-gray-400 text-lg font-light max-w-4xl mx-auto mt-6"
//      initial={{ opacity: 0 }}
//      animate={{ opacity: 1 }}
//      transition={{ duration: 1.5, delay: 0.5 }}
//     >
//      As a MERN Stack Developer, I thrive on building seamless and high-performance web applications. With a deep proficiency in React, Node.js, Express, and MongoDB, I create applications that not only look good but also function flawlessly. I’m driven by crafting responsive, intuitive user interfaces and integrating secure, scalable backend systems. Whether it's designing a modern UI/UX or ensuring smooth API interactions, I deliver optimized solutions that elevate user experience. Let's bring your vision to life with innovation and precision!
//     </motion.p>
//    </div>
//   </Fragment>
//  );
// };

// export default HeroSection;
