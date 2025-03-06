'use client';

import { useWishlist } from '../../context/WishlistContext';
import Image from 'next/image';
import { XCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Your Wishlist</h2>
        <Link href="/products" className="text-blue-600 dark:text-blue-400 hover:underline">
          Continue Shopping →
        </Link>
      </div>

      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 text-gray-500 dark:text-gray-400">
          <p className="text-lg">Your wishlist is empty.</p>
          <Link
            href="/products"
            className="mt-4 px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg shadow hover:bg-blue-700 dark:hover:bg-blue-600 transition"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100 dark:bg-gray-700 border-b">
              <tr>
                <th className="p-4"> </th>
                <th className="p-4 text-center text-gray-900 dark:text-gray-200">Product</th>
                <th className="p-4 text-center text-gray-900 dark:text-gray-200">Unit Price</th>
                <th className="p-4 text-center text-gray-900 dark:text-gray-200">Stock Status</th>
                <th className="p-4 text-center text-gray-900 dark:text-gray-200">Action</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((product) => (
                <tr key={product.id} className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 text-center">
                    <button onClick={() => removeFromWishlist(product.id)}>
                      <XCircle className="w-6 h-6 text-gray-500 dark:text-gray-400 hover:text-red-500 transition" />
                    </button>
                  </td>
                  <td className="p-4 flex items-center space-x-4">
                    <div className="w-16 h-16 relative">
                      <Image src={product.image} alt={product.name} width={64} height={64} className="rounded-lg" />
                    </div>
                    <span className="text-gray-900 dark:text-gray-200 font-medium">{product.name}</span>
                  </td>
                  <td className="p-4 text-center font-medium text-gray-700 dark:text-gray-300">₹{product.price.toLocaleString()}</td>
                  <td className="p-4 text-center">
                    <div className="inline-flex items-center space-x-1 text-green-600 dark:text-green-400 font-medium">
                      <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400" />
                      <span>In Stock</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <button className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg shadow hover:bg-blue-700 dark:hover:bg-blue-600 transition">
                      Add to Cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}



