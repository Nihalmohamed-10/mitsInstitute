import { useEffect, useState } from "react";
import { getWebImages } from "../contentful";

export default function WebImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getWebImages();
      console.log("Contentful data:", data);
      setImages(data);
    }
    fetchData();
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">Web Image Gallery</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((item) => (
          <div
            key={item.sys.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            {/* Multiple images as a small slider */}
            <div className="relative w-full overflow-hidden">
              <div className="flex space-x-2 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                {item.fields.gallery.map((img, id) => {
                  const imageUrl = img?.fields?.file?.url;
                  return (
                    <img
                      key={id}
                      src={`https:${imageUrl}`}
                      alt={item.fields.title}
                      className="h-64 w-full object-cover flex-shrink-0 rounded snap-center"
                    />
                  );
                })}
              </div>
            </div>

            {/* Title and info */}
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {item.fields.title}
              </h2>
              {/* <p className="text-gray-500 text-sm">
                {item.fields.gallery.length} image
                {item.fields.gallery.length > 1 ? "s" : ""}
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// import { useEffect, useState } from "react";
// import { getWebImages } from "../contentful";

// export default function WebImageGallery() {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const data = await getWebImages();
//       console.log("Contentful data:", data);
//       setImages(data);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
//       {images.map((item) => {
//         const imageUrl = item.fields.gallery[0]?.fields.file.url;
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
