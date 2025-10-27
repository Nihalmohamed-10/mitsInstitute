// import { useEffect, useState } from "react";
// import { getGalleryImages } from "../contentful";

// export default function Gallery() {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const data = await getGalleryImages();
//       console.log("Contentful data:", data);
//       setImages(data);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
//       {images.map((item) => {
//         const imageUrl = item.fields.image?.fields.file.url;
//         const title = item.fields.title;
//         return (
//           <div key={item.sys.id} className="rounded-lg shadow-lg overflow-hidden">
//             <img
//               src={`https:${imageUrl}`}
//               alt={title}
//               className="w-full h-60 object-cover"
//             />
//             <p className="text-center py-2 text-gray-700">{title}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import { getGalleryImages } from "../contentful";

// export default function phto() {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//   async function fetchData() {
//     const data = await getGalleryImages();
//     console.log("Contentful data:", data); // 👈 add this
//     setImages(data);
//   }
//   fetchData();
// }, []);


//   return (
//     <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
//       {images.map((item) => {
//         const imageUrl = item.fields.image?.fields.file.url;
//         const title = item.fields.title;

//         return (
//           <div
//             key={item.sys.id}
//             className="rounded-lg shadow-lg overflow-hidden"
//           >
//             <img
//               src={`https:${imageUrl}`}
//               alt={title}
//               className="w-full h-60 object-cover"
//             />
//             <p className="text-center py-2 text-gray-700">{title}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
