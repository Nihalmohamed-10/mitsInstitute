import { useParams, Link } from "react-router-dom";
import { data, categories } from "../data/Data";

export default function CategoryPage() {
  const { type } = useParams();
  const items = data[type] || [];

  // Get display name for heading
  const categoryName = categories.find(cat => cat.type === type)?.name || type;

  return (
    <div className="min-h-screen py-20 px-20 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-14 text-center text-gray-800 drop-shadow-lg">
        {categoryName}
      </h1>

      {/* Course / item grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {items.map(item => (
          <Link
            key={item.key}
            to={`/category/${type}/${item.key}`}
            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-80 transition"></div>
            <div className="p-4 text-center font-semibold text-lg text-gray-800 relative z-10">
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}


// import { useParams, Link } from "react-router-dom";
// import { data, categories } from "../data/Data";

// export default function CategoryPage() {
//   const { type } = useParams();
//   const items = data[type] || [];

//   // Get display name for heading
//   const categoryName = categories.find(cat => cat.type === type)?.name || type;

//   return (
//     <div className="min-h-screen p-10 bg-gray-50">
//       {/* Heading */}
//       <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-gray-800">
//         {categoryName}
//       </h1>

//       {/* Course / item grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {items.map(item => (
//           <Link
//             key={item.key}
//             to={`/category/${type}/${item.key}`}
//             className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition"
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="h-32 w-full object-cover"
//             />
//             <div className="p-4 text-center font-semibold">{item.name}</div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }


// import { useParams, Link } from "react-router-dom";
// import { data, categories } from "../data/Data";

// export default function CategoryPage() {
//   const { type } = useParams();
//   const items = data[type] || [];
//   const categoryName = categories.find((cat) => cat.type === type)?.name || type;

//   return (
//     <div className="min-h-screen p-10 bg-gray-50">
//       {/* <h1 className="text-3xl font-bold mb-6 capitalize">{type}</h1> */}
//        <h1 className="text-3xl font-bold mb-6">{categoryName}</h1>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {items.map((item) => (
//           <Link
//             key={item.key}
//             to={`/category/${type}/${item.key}`}
//             className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition"
//           >
//             <img src={item.image} alt={item.name} className="h-32 w-full object-cover" />
//             <div className="p-4 text-center font-semibold">{item.name}</div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
