import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const mainImage = product.images?.[0] || product.image;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 group hover:shadow-lg transition cursor-pointer flex flex-col items-center">
      <img
        loading="lazy"
        src={mainImage}
        alt={product.name}
        className="h-32 w-32 object-cover mb-3 rounded transition-transform duration-300 hover:scale-105"
      />
      <div className="font-bold text-lg mb-1 text-black">{product.name}</div>
      <div className="text-sm text-gray-500 mb-1">{product.category}</div>
      <div className="text-rose-500 font-semibold mb-3">₹{product.price}</div>
      <Link
        to={`/product/${product.id}`}
        className="bg-rose-600 text-white py-1.5 px-4 rounded transition transform hover:scale-105"
      >
        View Details
      </Link>
    </div>
  );
}
