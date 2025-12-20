import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },            // Spotlight
    { name: "About", id: "about" },
    { name: "Courses", id: "courses" },
    // { name: "Admissions", id: "admissions" },
    { name: "Contact", id: "contact" },      // Footer
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between transition-all duration-500">
        
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
          MITS Institute
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[1rem] font-medium">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="relative text-gray-800 hover:text-indigo-600 font-semibold transition duration-300 group"
            >
              {link.name}
              <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-indigo-600 to-pink-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </button>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-800 text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-md transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 font-medium text-lg">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 hover:text-indigo-600 transition"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}


// import React, { useState, useEffect } from "react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Courses", href: "#courses" },
//     { name: "Admissions", href: "#admissions" },
//     { name: "Contact", href: "#contact" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
//         scrolled
//           ? "bg-white/90 backdrop-blur-md shadow-md py-2"
//           : "bg-transparent py-4"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between transition-all duration-500">
//         {/* Logo */}
//         <div className="flex items-center gap-3">
//           {/* <img src="/logo.png" alt="logo" className="w-12 h-12" /> */}
//           <h1 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
//             MITS Institute
//           </h1>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-8 text-[1rem] font-medium">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="relative text-gray-800 hover:text-indigo-600 font-semibold transition duration-300 group"
//             >
//               {link.name}
//               <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-indigo-600 to-pink-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
//             </a>
//           ))}
//           <a
//             href="#apply"
//             className="ml-4 px-6 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 duration-300"
//           >
//             Apply Now
//           </a>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-800 text-3xl"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? "✕" : "☰"}
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       <div
//         className={`md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-md transition-all duration-500 overflow-hidden ${
//           isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <ul className="flex flex-col items-center gap-6 py-6 font-medium text-lg">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <a
//                 href={link.href}
//                 className="text-gray-700 hover:text-indigo-600 transition"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//           <li>
//             <a
//               href="#apply"
//               className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl hover:opacity-90 transition duration-300"
//               onClick={() => setIsOpen(false)}
//             >
//               Apply Now
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }


// import React, { useState } from "react";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Courses", href: "#courses" },
//     { name: "Gallery", href: "#gallery" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg shadow-lg z-50">
//       <div className="max-w-7xl mx-auto  py-4 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           {/* <img className="w-12 h-12 object-contain" src={logo} alt="logo" /> */}
//           <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             Mits Institute
//           </span>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-8 font-medium">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="relative text-gray-700 hover:text-blue-600 transition"
//             >
//               {link.name}
//               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-600 to-purple-600 transition-all group-hover:w-full"></span>
//             </a>
//           ))}
//           <a
//             href="#contact"
//             className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-md hover:shadow-lg transition"
//           >
//             Contact
//           </a>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? "✕" : "☰"}
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       {isOpen && (
//         <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
//           <ul className="flex flex-col items-center gap-4 py-6 font-medium">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <a
//                   href={link.href}
//                   className="text-gray-700 hover:text-blue-600 transition"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//             <li>
//               <a
//                 href="#contact"
//                 className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-md hover:shadow-lg transition"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;


// import React from "react";
// import logo from "../assets/images/ERTQA Logo.png"

// function Navbar() {
//   return (
    
//       <div className="p-10 flex justify-between">
//         <div className="w-[30px]">
//           <img className="w-full" src={logo} alt="logo" />
//         </div>
//         <div className="flex justify-evenly w-[516px]">
//           <a href="">Home</a>
//           <a href="">About</a>
//           <a href="">Courses</a>
//           <a href="">Gallery</a>
//           <a href="">Contact</a>
//         </div>
//       </div>
    
//   );
// }

// export default Navbar;
