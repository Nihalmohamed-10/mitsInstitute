

import { useParams } from "react-router-dom";
import { data } from "../data/Data";

export default function DetailPage() {
  const { type, item } = useParams();
  const found = data[type]?.find(i => i.key === item);

  if (!found) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Item Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-10 bg-white shadow-lg rounded-2xl max-w-lg text-center">
        <img src={found.image} alt={found.name} className="h-48 mx-auto mb-6 rounded-lg object-cover" />
        <h1 className="text-4xl font-bold mb-4">{found.name}</h1>
        <p className="text-gray-600">{found.description}</p>
        <p className="text-gray-600">{found.duration}</p>
        <p className="text-gray-600">{found.fees}</p>
      </div>
    </div>
  );
}
