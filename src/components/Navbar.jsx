import React, { useState } from "react";
import logo from "../assets/images/ERTQA Logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg shadow-lg z-50">
      <div className="max-w-7xl mx-auto  py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* <img className="w-12 h-12 object-contain" src={logo} alt="logo" /> */}
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Mits Institute
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-gray-700 hover:text-blue-600 transition"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-600 to-purple-600 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-md hover:shadow-lg transition"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <ul className="flex flex-col items-center gap-4 py-6 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-md hover:shadow-lg transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;


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
