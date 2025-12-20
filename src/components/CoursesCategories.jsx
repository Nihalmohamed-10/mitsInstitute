import { Link } from "react-router-dom";
import { categories } from "../data/Data";

export default function CategoriesSection() {
  return (
    <section
      id="courses"
      className="py-16 md:py-24 px-5 sm:px-10 lg:px-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="container mx-auto">
        
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-10 md:mb-14 text-gray-800">
          Courses
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {categories.map((cat) => (
            <Link
              key={cat.type}
              to={`/category/${cat.type}`}
              className="
                group relative rounded-2xl overflow-hidden 
                shadow-md hover:shadow-2xl 
                transition-transform duration-300 
                md:hover:-translate-y-2
              "
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="
                  w-full 
                  h-56 sm:h-64 md:h-72 lg:h-80
                  object-cover 
                  transition-transform duration-500 
                  md:group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* Text */}
              <div className="absolute inset-x-0 bottom-5 text-center px-3">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


// import { Link } from "react-router-dom";
// import { categories } from "../data/Data";

// export default function CategoriesSection() {
//   return (
//     <section className="py-20 px-20 bg-gradient-to-br from-gray-50 to-gray-100">
//       <div className="container mx-auto">
//         <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-800">
//          Courses 
//          {/* <span className="text-blue-600">Categories</span> */}
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {categories.map((cat) => (
//             <Link
//               key={cat.type}
//               to={`/category/${cat.type}`}
//               className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
//             >
//               {/* Image */}
//               <img
//                 src={cat.image}
//                 alt={cat.name}
//                 className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-80 transition"></div>

//               {/* Text */}
//               <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
//                 <h3 className="text-2xl font-bold text-white drop-shadow-lg">
//                   {cat.name}
//                 </h3>
//                 {/* <span className="mt-2 inline-block bg-blue-600 text-white text-sm px-4 py-1 rounded-full shadow-md">
//                   Click to explore
//                 </span> */}
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// import React from "react";
// import fashionDesign from "../assets/images/fashionDesign.avif"; // replace with your images
// import graphicDesign from "../assets/images/graphicDesign.avif";
// import accounting from "../assets/images/accounting.avif";
// import marketing from "../assets/images/marketing.avif";
// import hr from "../assets/images/Hr.avif";
// import LapTech from "../assets/images/lapTechnician.jpg";
// import MobileTech from "../assets/images/mobileTech.avif";
// import securityTech from "../assets/images/securityTech.avif";
// import teachers from "../assets/images/teachers.jpg";
// import logistics from "../assets/images/logistic.jpg"

// const courses = [
//   {
//     id: 1,
//     title: "Professional courses",
//     count: "49 Courses",
//     img: fashionDesign,
//   },
//   {
//     id: 2,
//     title: "short courses",
//     count: "35 Courses",
//     img: graphicDesign,
//   },
//   {
//     id: 3,
//     title: "Diploma in corporate Accounts management with sap",
//     count: "28 Courses",
//     img: accounting,
//   }
// ];

// // const courses = [
// //   {
// //     id: 1,
// //     title: "Certified in Fashion Designing and Garment Technology",
// //     count: "49 Courses",
// //     img: fashionDesign,
// //   },
// //   {
// //     id: 2,
// //     title: "Certified in Graphics and Creative Designing",
// //     count: "35 Courses",
// //     img: graphicDesign,
// //   },
// //   {
// //     id: 3,
// //     title: "Diploma in corporate Accounts management with sap",
// //     count: "28 Courses",
// //     img: accounting,
// //   },
// //   {
// //     id: 4,
// //     title: "Advanced Online Marketing Strategies and Analytics",
// //     count: "41 Courses",
// //     img: marketing,
// //   },
// //   {
// //     id: 5,
// //     title: "Diploma in logistics and supply chain management with sap",
// //     count: "32 Courses",
// //     img: logistics,
// //   },
// //   {
// //     id: 6,
// //     title: "Diploma in HR management with sap",
// //     count: "22 Courses",
// //     img: hr,
// //   },
// //   {
// //     id: 7,
// //     title: "Certified in Laptop Chip Level Technician",
// //     count: "54 Courses",
// //     img: LapTech,
// //   },
// //   {
// //     id: 8,
// //     title: "Certified in Mobile Phone Technician",
// //     count: "17 Courses",
// //     img: MobileTech,
// //   },
// //   {
// //     id: 9,
// //     title: "Certified in Security Systems and Automation Technician",
// //     count: "20 Courses",
// //     img: securityTech,
// //   },
// // ];

// const CoursesCategories = () => {
//   return (
//     <section className="py-16 px-20 bg-white">
//       <div className="container mx-auto text-center">
//         {/* Heading */}
//         <h5 className="text-teal-500 font-semibold uppercase tracking-wide">
//           Categories
//         </h5>
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
//           Courses Categories
//         </h2>

//         {/* 3x3 Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses.map((course) => (
//             <div
//               key={course.id}
//               className="relative group overflow-hidden rounded-lg shadow-lg"
//             >
//               <img
//                 src={course.img}
//                 alt={course.title}
//                 className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
//               />
//               <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded shadow max-w-[90%] text-center">
//   <h3
//     className="text-lg font-semibold text-gray-900 truncate"
//     title={course.title}
//   >
//     {course.title}
//   </h3>
// </div>

//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoursesCategories;

// // import React from "react";
// // import fashionDesign from "../assets/images/fashionDesign.avif"; // replace with your images
// // import graphicDesign from "../assets/images/graphicDesign.avif";
// // import accounting from "../assets/images/accounting.avif";
// // import marketing from "../assets/images/marketing.avif";

// // const courses = [
// //   {
// //     id: 1,
// //     title: " Fashion Designing ",

// //     img: fashionDesign,
// //   },
// //   {
// //     id: 2,
// //     title: "Graphic Design",

// //     img: graphicDesign,
// //   },
// //   {
// //     id: 3,
// //     title: "Accounting",

// //     img: accounting,
// //   },
// //   {
// //     id: 4,
// //     title: "Online Marketing",

// //     img: marketing,
// //   },
// // ];

// // const CoursesCategories = () => {
// //   return (
// //     <section className="py-16 px-16 bg-white">
// //       <div className="container mx-auto text-center">
// //         {/* Heading */}
// //         <h5 className="text-teal-500 font-semibold uppercase tracking-wide">
// //           Categories
// //         </h5>
// //         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
// //           Courses Categories
// //         </h2>

// //         {/* Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //           {/* Left column (2 stacked) */}
// //           <div className="grid grid-rows-2 gap-6">
// //             {courses.slice(0, 2).map((course) => (
// //               <div
// //                 key={course.id}
// //                 className="relative group overflow-hidden rounded-lg shadow-lg"
// //               >
// //                 <img
// //                   src={course.img}
// //                   alt={course.title}
// //                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
// //                 />
// //                 <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded shadow">
// //                   <h3 className="text-lg font-semibold text-gray-900">
// //                     {course.title}
// //                   </h3>
// //                   {/* <p className="text-teal-500 text-sm">{course.count}</p> */}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Middle column (single big image) */}
// //           <div className="relative group overflow-hidden rounded-lg shadow-lg">
// //             <img
// //               src={courses[0].img}
// //               alt="Web Design"
// //               className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
// //             />
// //             <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded shadow">
// //               <h3 className="text-lg font-semibold text-gray-900">
// //                 {courses[0].title}
// //               </h3>
// //               <p className="text-teal-500 text-sm">{courses[0].count}</p>
// //             </div>
// //           </div>

// //           {/* Right column (2 stacked) */}
// //           <div className="grid grid-rows-2 gap-6">
// //             {courses.slice(2, 4).map((course) => (
// //               <div
// //                 key={course.id}
// //                 className="relative group overflow-hidden rounded-lg shadow-lg"
// //               >
// //                 <img
// //                   src={course.img}
// //                   alt={course.title}
// //                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
// //                 />
// //                 <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded shadow">
// //                   <h3 className="text-lg font-semibold text-gray-900">
// //                     {course.title}
// //                   </h3>
// //                   <p className="text-teal-500 text-sm">{course.count}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default CoursesCategories;
