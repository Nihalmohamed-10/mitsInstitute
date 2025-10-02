
import React from "react";
import fashionDesign from "../assets/images/fashionDesign.avif"; // replace with your images
import graphicDesign from "../assets/images/graphicDesign.avif";
import accounting from "../assets/images/accounting.avif";
import marketing from "../assets/images/marketing.avif";
import hr from "../assets/images/Hr.avif";
import LapTech from "../assets/images/lapTechnician.jpg";
import MobileTech from "../assets/images/mobileTech.avif";
import securityTech from "../assets/images/securityTech.avif";
import teachers from "../assets/images/teachers.jpg";
import logistics from "../assets/images/logistic.jpg"

const courses = [
  {
    id: 1,
    title: "Professional courses",
    count: "49 Courses",
    img: fashionDesign,
  },
  {
    id: 2,
    title: "short courses",
    count: "35 Courses",
    img: graphicDesign,
  },
  {
    id: 3,
    title: "Diploma in corporate Accounts management with sap",
    count: "28 Courses",
    img: accounting,
  }
];

// const courses = [
//   {
//     id: 1,
//     title: "Certified in Fashion Designing and Garment Technology",
//     count: "49 Courses",
//     img: fashionDesign,
//   },
//   {
//     id: 2,
//     title: "Certified in Graphics and Creative Designing",
//     count: "35 Courses",
//     img: graphicDesign,
//   },
//   {
//     id: 3,
//     title: "Diploma in corporate Accounts management with sap",
//     count: "28 Courses",
//     img: accounting,
//   },
//   {
//     id: 4,
//     title: "Advanced Online Marketing Strategies and Analytics",
//     count: "41 Courses",
//     img: marketing,
//   },
//   {
//     id: 5,
//     title: "Diploma in logistics and supply chain management with sap",
//     count: "32 Courses",
//     img: logistics,
//   },
//   {
//     id: 6,
//     title: "Diploma in HR management with sap",
//     count: "22 Courses",
//     img: hr,
//   },
//   {
//     id: 7,
//     title: "Certified in Laptop Chip Level Technician",
//     count: "54 Courses",
//     img: LapTech,
//   },
//   {
//     id: 8,
//     title: "Certified in Mobile Phone Technician",
//     count: "17 Courses",
//     img: MobileTech,
//   },
//   {
//     id: 9,
//     title: "Certified in Security Systems and Automation Technician",
//     count: "20 Courses",
//     img: securityTech,
//   },
// ];

const PrimaryCourses = () => {
  return (
    <section className="py-16 px-20 bg-white">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h5 className="text-teal-500 font-semibold uppercase tracking-wide">
          Categories
        </h5>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Courses Categories
        </h2>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded shadow max-w-[90%] text-center">
  <h3
    className="text-lg font-semibold text-gray-900 truncate"
    title={course.title}
  >
    {course.title}
  </h3>
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrimaryCourses;