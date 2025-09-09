import React from "react";
import aboutImg from "../assets/images/institute.jpg"; // replace with your image path

const About = () => {
  return (
    <section className="py-16 px-20 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Image */}
        <div>
          <img
            src={aboutImg}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div>
          <h5 className="text-teal-500 font-semibold uppercase tracking-wide">
            About Us
          </h5>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Welcome to MITS Training Institute
          </h2>
          <p className="text-gray-600 mb-4">
            At <span className="font-semibold">MITS Training Institute</span>, we
            specialize in providing career-focused training programs designed to
            equip students with practical, industry-ready skills. From{" "}
            <span className="font-medium">Fashion Design</span> to{" "}
            <span className="font-medium">Corporate Accounting, HR Management,
            Mobile & Laptop Technician Training, Logistics</span> and more — our
            courses prepare you for real-world success.
          </p>
          <p className="text-gray-600 mb-6">
            Our mission is to bridge the gap between education and employment by
            offering hands-on training, expert instructors, and certifications
            that are valued by industries. Whether you’re starting your career
            or upgrading your skills, MITS is here to guide you every step of
            the way.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <p className="flex items-center text-gray-700">
              <span className="text-teal-500 mr-2">➤</span> Skilled Instructors
            </p>
            <p className="flex items-center text-gray-700">
              <span className="text-teal-500 mr-2">➤</span> Job-Oriented Courses
            </p>
            <p className="flex items-center text-gray-700">
              <span className="text-teal-500 mr-2">➤</span> Practical Training
            </p>
            <p className="flex items-center text-gray-700">
              <span className="text-teal-500 mr-2">➤</span> Industry Certificates
            </p>
            <p className="flex items-center text-gray-700">
              <span className="text-teal-500 mr-2">➤</span> Modern Facilities
            </p>
            <p className="flex items-center text-gray-700">
              <span className="text-teal-500 mr-2">➤</span> Career Support
            </p>
          </div>

          {/* Button */}
          <button className="bg-teal-500 text-white px-6 py-3 rounded-md shadow hover:bg-teal-600 transition">
            More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
