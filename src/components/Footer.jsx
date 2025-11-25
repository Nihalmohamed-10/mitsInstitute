import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logo from "../assets/images/ERTQA Logo.png"; // 👈 replace with your own logo

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-gray-900 to-black text-gray-300 pt-16 pb-8 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">

        {/* Logo & Description */}
        <div>
          <img src={logo} alt="MITS Logo" className="w-28 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-white mb-2">MITS Training Institute</h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Empowering students through professional and technical training programs designed
            to meet global industry standards. Learn, grow, and achieve your dreams with MITS.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-700"></div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#courses" className="hover:text-blue-400 transition">Courses</a>
          <a href="#gallery" className="hover:text-blue-400 transition">Gallery</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-700"></div>

        {/* Contact Info */}
        <div className="text-sm space-y-2">
          <p><span className="font-medium">Address:</span> Shyzi's Plaza, Mannarkkad, Palakkad</p>
          <p><span className="font-medium">Phone:</span> +91 98474 872970</p>
          <p><span className="font-medium">Email:</span> mitsmkdofficial@gmail.com</p>
        </div>

        {/* Social Media */}
        {/* <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition">
            <FaFacebookF className="text-white text-lg" />
          </a>
          <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition">
            <FaInstagram className="text-white text-lg" />
          </a>
          <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-sky-500 transition">
            <FaTwitter className="text-white text-lg" />
          </a>
          <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 transition">
            <FaLinkedinIn className="text-white text-lg" />
          </a>
        </div> */}

        {/* Copyright */}
        <div className="border-t border-gray-700 w-full mt-8 pt-6 text-gray-500 text-sm">
          © {new Date().getFullYear()} MITS Training Institute. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
