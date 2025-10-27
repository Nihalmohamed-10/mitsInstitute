import React, { useState, useEffect } from "react";
import wall1 from "../assets/images/wallp1.jpg"
import wall2 from "../assets/images/wallp2.jpg"
import wall3 from "../assets/images/wallp3.jpg"


const images = [
  wall1, wall2, wall3
];

function Spotlight() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt="Spotlight"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-8 md:px-20">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Learn With <span className="text-blue-400">Mits Institute</span>
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            Empowering students with world-class training in technology, skills,
            and innovation. Start your journey today!
          </p>
          <button className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition">
            Contact Us
          </button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Spotlight;

