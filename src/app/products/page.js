'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Heart, Eye, ShoppingCart, X, CheckCircle} from 'lucide-react';
import { Dialog } from '@headlessui/react';
import { useWishlist } from '../../context/WishlistContext';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';


const products = [
  { id: 1, name: 'iPhone 16 Pro', price: 99999, discountPrice: 89999, image: '/images/product1.png', rating: 4, description: 'The latest iPhone with A17 Bionic chip, ProMotion display, and improved battery life.' },
  { id: 2, name: 'MacBook Air M4 chip', price: 149999, discountPrice: 134999, image: '/images/product2.png', rating: 5, description: 'Lightweight and powerful, featuring the new M4 chip for better performance.' },
  { id: 3, name: 'Wireless Earbuds', price: 1999, discountPrice: 1799, image: '/images/product3.png', rating: 5, description: 'High-quality wireless earbuds with noise cancellation and long battery life.' },
  { id: 4, name: 'Apple Watch Ultra', price: 29999, discountPrice: 26999, image: '/images/product4.png', rating: 4.8, description: 'A rugged smartwatch designed for adventurers, with enhanced durability and GPS features.' },
  { id: 5, name: 'Rangs 43 Inch Frameless FHD Double Glass Android TV', price: 99999, discountPrice: 89999, image: '/images/product5.png', rating: 4.1, description: 'A high-quality Android TV with a frameless design and excellent display quality.' },
  { id: 6, name: 'True Wireless Noise Cancelling Headphone', price: 1499, discountPrice: 1349, image: '/images/product6.png', rating: 4.6, description: 'Experience pure sound with noise-cancelling technology and a comfortable fit.' },
  { id: 7, name: 'Portable Electric Grinder Maker', price: 1999, discountPrice: 1799, image: '/images/product7.png', rating: 4.3, description: 'A compact and efficient grinder for all your kitchen needs.' },
  { id: 8, name: 'Havit HV-G69 USB Gamepad', price: 2999, discountPrice: 2699, image: '/images/product8.png', rating: 3.5, description: 'A reliable USB gamepad for an immersive gaming experience.' },
  { id: 9, name: 'iPhone 14', price: 99999, discountPrice: 89999, image: '/images/product9.png', rating: 4, description: 'The latest iPhone with A17 Bionic chip, ProMotion display, and improved battery life.' },
  { id: 10, name: 'IPad Air M4 chip', price: 149999, discountPrice: 134999, image: '/images/product10.png', rating: 5, description: 'Lightweight and powerful, featuring the new M4 chip for better performance.' },
  { id: 11, name: 'Apple iMac M4 24-inch 2025', price: 199999, discountPrice: 179999, image: '/images/product11.png', rating: 5, description: 'Experience next-level performance with the M4 chip, stunning 24-inch Retina display, and ultra-sleek design. Ideal for work and creativity.' },
  { id: 12, name: 'Indoor Steel Adjustable Silent Treadmill Home Fitness', price: 2999, discountPrice: 2699, image: '/images/product12.png', rating: 4.8, description: 'Stay fit at home with this sturdy, noise-free treadmill. Adjustable speed settings and a sleek design make it perfect for any space.' },
  { id: 13, name: 'Fujifilm Instax Mini 8 Instant Camera', price: 7999, discountPrice: 5999, image: '/images/product13.png', rating: 4.1, description: 'Wireless earbuds with high-quality audio, automatic device pairing, and a compact charging case.' },
  { id: 14, name: 'Logitech K380 Bluetooth Keyboard', price: 1499, discountPrice: 1349, image: '/images/product14.png', rating: 4.6, description: 'High-performance digital camera with Zeiss lens, ideal for travel and content creation.' },
  { id: 15, name: 'Sony Compact Digital Camera', price: 19999, discountPrice: 17999, image: '/images/product15.png', rating: 4.3, description: 'High-performance digital camera with Zeiss lens, ideal for travel and content creation.' },
  { id: 16, name: 'Apple AirPods with Charging Case', price: 4999, discountPrice: 3699, image: '/images/product16.png', rating: 3.5, description: 'Wireless earbuds with high-quality audio, automatic device pairing, and a compact charging case.' },
];

export default function ProductsPage() {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { cart, addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [notification, setNotification] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleWishlistToggle = (product) => {
    const isWishlisted = wishlist.some((item) => item.id === product.id);
    if (isWishlisted) {
      removeFromWishlist(product.id);
      setNotification("Product removed from wishlist");
    } else {
      addToWishlist(product);
      setNotification("Product added to wishlist");
    }
    setTimeout(() => setNotification(null), 2000);
  };

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity });
    setNotification("Product added to cart");
    setTimeout(() => setNotification(null), 2000);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto relative">
      {notification && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 z-50">
          <CheckCircle size={18} /> {notification}
        </div>
      )}

      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-semibold">Products</h2>
        <div className="flex gap-4">
          <Link href="/wishlist" className="text-blue-600 hover:underline">
            View Wishlist ({wishlist.length})
          </Link>
          <Link href="/cart" className="text-blue-600 hover:underline">
            View Cart ({cart.length})
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => {
          const isWishlisted = wishlist.some((item) => item.id === product.id);

          return (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow-md bg-white relative group overflow-hidden"
            >
              <div className="relative w-full h-48 flex justify-center items-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-md transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart size={16} /> Add to Cart
                  </button>
                </div>
              </div>

              <button
                className="absolute top-2 left-2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
                onClick={() => handleWishlistToggle(product)}
              >
                <Heart
                  size={18}
                  className={isWishlisted ? "text-red-500 fill-red-500" : "text-gray-500"}
                />
              </button>

              <button
                className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
                onClick={() => {
                  setSelectedProduct(product);
                  setQuantity(1);
                }}
              >
                <Eye size={18} className="text-gray-500" />
              </button>

              <h3 className="text-lg font-semibold mt-2 text-gray-900 dark:text-black-200">
                {product.name}
              </h3>
              <div className="flex items-center mt-1">
                <span className="text-xl font-bold text-blue-600">
                  ₹{product.discountPrice ?? product.price}
                </span>
                {product.discountPrice && (
                  <span className="text-gray-400 line-through ml-2">
                    ₹{product.price}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Popup */}
      <Dialog
        open={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      >
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl w-full relative">
          {selectedProduct && (
            <>
              <button
                className="absolute top-2 right-2 text-gray-500 dark:text-gray-300 hover:text-gray-800"
                onClick={() => setSelectedProduct(null)}
              >
                <X size={24} />
              </button>
              <div className="flex gap-6">
                <div className="w-1/2">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    width={300}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <div className="w-1/2 flex flex-col">
                  <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-200">
                    {selectedProduct.name}
                  </h2>
                  <div className="text-yellow-500 text-sm">
                    {"★".repeat(selectedProduct.rating)}
                    {"☆".repeat(5 - Math.round(selectedProduct.rating))}
                    <span className="text-gray-400 dark:text-gray-300 ml-2">
                      ({selectedProduct.rating})
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mt-4">
                    {selectedProduct.description}
                  </p>
                  <div className="mt-4">
                    <span className="text-xl font-bold text-blue-600">
                      ₹{selectedProduct.discountPrice ?? selectedProduct.price}
                    </span>
                    {selectedProduct.discountPrice && (
                      <span className="text-gray-400 dark:text-gray-300 line-through ml-2">
                        ₹{selectedProduct.price}
                      </span>
                    )}
                  </div>

                  {/* Quantity Selector */}
                  <div className="flex items-center gap-4 mt-4">
                    <button
                      className="px-3 py-1 bg-gray-300 text-black rounded"
                      onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    >
                      −
                    </button>
                    <span className="text-lg font-semibold">{quantity}</span>
                    <button
                      className="px-3 py-1 bg-gray-300 text-black rounded"
                      onClick={() => setQuantity((prev) => prev + 1)}
                    >
                      +
                    </button>
                  </div>

                  <div className="flex gap-4 mt-4">
                    <button
                      className="px-4 py-2 bg-blue-600 text-white rounded flex items-center gap-2"
                      onClick={() => handleAddToCart(selectedProduct)}
                    >
                      <ShoppingCart size={16} /> Add to Cart
                    </button>
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded flex items-center gap-2"
                      onClick={() => handleWishlistToggle(selectedProduct)}
                    >
                      <Heart size={16} className="text-white" /> Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </Dialog>
    </div>
  );
}

