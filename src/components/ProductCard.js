"use client";

import { useCart } from "../context/CartContext";
export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="group bg-gray-100 dark:bg-gray-800 p-4 rounded-lg hover:shadow-xl transition-all">
      {/* Product Image */}
      <div className="relative bg-white dark:bg-gray-700 rounded-lg overflow-hidden p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-contain transition-transform transform group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="text-center mt-4">
        <h3 className="font-semibold text-gray-900 dark:text-gray-200">{product.name}</h3>

        {/* Pricing */}
        <div className="flex justify-center items-center mt-2 space-x-2">
          <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
            ₹{product.discountPrice ?? product.price}
          </span>
          {product.discountPrice && (
            <span className="text-gray-500 dark:text-gray-400 line-through">
              ₹{product.price}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-all"
          onClick={() => addToCart(product)}
        >
         Add to Cart
        </button>
      </div>
    </div>
  );
}

  

  
  
  
  
  