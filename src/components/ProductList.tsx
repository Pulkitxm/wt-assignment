import { Link } from "react-router-dom";
import { PRODUCT } from "../types/product";

export default function ProductList({ products }: { products: PRODUCT[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product,index) => (
        <div
          key={index}
          className="border rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">{product.title}</h3>
            <p className="text-gray-700 mb-2">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500 mb-4">{product.category}</p>
            {product.rating && (
              <p className="text-sm text-yellow-500 mb-4">
                Rating: {product.rating}/5
              </p>
            )}
            <Link
              to={product.link}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
