"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Heart, ShoppingCart, CheckCircle } from "lucide-react";
import { useWishlist } from "src/context/WishlistContext";
import { useCart } from "src/context/CartContext";


const products = [
  { id: 1, name: 'iPhone 16 Pro', price: 99999, discountPrice: 89999, image: '/images/product1.png', rating: 4, stock: 20, description: 'The latest iPhone with A17 Bionic chip, ProMotion display, and improved battery life.' },
  { id: 2, name: 'MacBook Air M4 chip', price: 149999, discountPrice: 134999, image: '/images/product2.png', rating: 5, stock: 0, description: 'Lightweight and powerful, featuring the new M4 chip for better performance.' },
  { id: 3, name: 'Wireless Earbuds', price: 1999, discountPrice: 1799, image: '/images/product3.png', rating: 5, stock: 0, description: 'High-quality wireless earbuds with noise cancellation and long battery life.' },
  { id: 4, name: 'Apple Watch Ultra', price: 29999, discountPrice: 26999, image: '/images/product4.png', rating: 4.8, stock: 20, description: 'A rugged smartwatch designed for adventurers, with enhanced durability and GPS features.' },
  { id: 5, name: 'Rangs 43 Inch Frameless FHD Double Glass Android TV', price: 99999, discountPrice: 89999, image: '/images/product5.png', rating: 4.1, stock: 20, description: 'A high-quality Android TV with a frameless design and excellent display quality.' },
  { id: 6, name: 'True Wireless Noise Cancelling Headphone', price: 1499, discountPrice: 1349, image: '/images/product6.png', rating: 4.6, stock: 20, description: 'Experience pure sound with noise-cancelling technology and a comfortable fit.' },
  { id: 7, name: 'Portable Electric Grinder Maker', price: 1999, discountPrice: 1799, image: '/images/product7.png', rating: 4.3, stock: 5, description: 'A compact and efficient grinder for all your kitchen needs.' },
  { id: 8, name: 'Havit HV-G69 USB Gamepad', price: 2999, discountPrice: 2699, image: '/images/product8.png', rating: 3.5, stock: 0, description: 'A reliable USB gamepad for an immersive gaming experience.' },
  { id: 9, name: 'iPhone 14', price: 99999, discountPrice: 89999, image: '/images/product9.png', rating: 4, stock: 20, description: 'The latest iPhone with A17 Bionic chip, ProMotion display, and improved battery life.' },
  { id: 10, name: 'IPad Air M4 chip', price: 149999, discountPrice: 134999, image: '/images/product10.png', rating: 5, stock: 20, description: 'Lightweight and powerful, featuring the new M4 chip for better performance.' },
  { id: 11, name: 'Apple iMac M4 24-inch 2025', price: 199999, discountPrice: 179999, image: '/images/product11.png', rating: 5, stock: 0, description: 'Experience next-level performance with the M4 chip, stunning 24-inch Retina display, and ultra-sleek design. Ideal for work and creativity.' },
  { id: 12, name: 'Indoor Steel Adjustable Silent Treadmill Home Fitness', price: 2999, discountPrice: 2699, image: '/images/product12.png', rating: 4.8, stock: 20, description: 'Stay fit at home with this sturdy, noise-free treadmill. Adjustable speed settings and a sleek design make it perfect for any space.' },
  { id: 13, name: 'Fujifilm Instax Mini 8 Instant Camera', price: 7999, discountPrice: 5999, image: '/images/product13.png', rating: 4.1, stock: 20, description: 'Capture and print memories instantly with the Fujifilm Instax Mini 8. Featuring a sleek, lightweight design and easy-to-use controls, this camera delivers bright, high-quality instant photos with automatic exposure adjustment—perfect for parties, travel, and creative photography.' },
  { id: 14, name: 'Logitech K380 Bluetooth Keyboard', price: 1499, discountPrice: 1349, image: '/images/product14.png', rating: 4.6, stock: 0, description: 'A compact and versatile multi-device Bluetooth keyboard designed for seamless typing on Windows, macOS, iOS, Android, and more. Its ergonomic design, quiet keys, and long battery life make it perfect for work, travel, and everyday use.' },
  { id: 15, name: 'Sony Compact Digital Camera', price: 19999, discountPrice: 17999, image: '/images/product15.png', rating: 4.3, stock: 20, description: 'High-performance digital camera with Zeiss lens, ideal for travel and content creation.' },
  { id: 16, name: 'Apple AirPods with Charging Case', price: 4999, discountPrice: 3699, image: '/images/product16.png', rating: 3.5, stock: 0, description: 'Wireless earbuds with high-quality audio, automatic device pairing, and a compact charging case.' },
];

export default function ProductDetailsPage() {
  const { id } = useParams();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [notification, setNotification] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [zipCode, setZipCode] = useState("");
  const [estimatedDelivery, setEstimatedDelivery] = useState(null);
  const [stockAvailability, setStockAvailability] = useState(null);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      comment: "Amazing product! Highly recommend.",
    },
  ]);
  const [newReview, setNewReview] = useState({ name: "", rating: 5, comment: "" });
  const product = products.find((p) => p.id === Number(id));

  useEffect(() => {
    if (!product) {
      setNotification("Product not found");
    } else {
      setStockAvailability(product.stock > 0 ? "In Stock" : "Out of Stock");
    }
  }, [product]);

  if (!product) {
    return (
      <div className="text-center text-red-500 dark:text-red-400 mt-10">
        Product not found
      </div>
    );
  }

  const handleWishlistToggle = () => {
    if (wishlist.some((item) => item.id === product.id)) {
      removeFromWishlist(product.id);
      setNotification("Removed from wishlist");
    } else {
      addToWishlist(product);
      setNotification("Added to wishlist");
    }
    setTimeout(() => setNotification(null), 2000);
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setNotification("Added to cart");
    setTimeout(() => setNotification(null), 2000);
  };

  const checkEstimatedDelivery = () => {
    if (zipCode.length === 6) {
      setEstimatedDelivery("Delivery in 3-5 business days");
    } else {
      setEstimatedDelivery(null);
    }
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.comment) {
      setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
      setNewReview({ name: "", rating: 5, comment: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 max-w-5xl mx-auto shadow-lg rounded-xl">
      {notification && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 dark:bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 z-50">
          <CheckCircle size={18} /> {notification}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8 items-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <div className="relative w-full h-80">
          <Image src={product.image} alt={product.name} layout="fill" objectFit="contain" className="rounded-lg shadow-md" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="mt-2">{product.description}</p>
          <div className="mt-4 text-xl font-bold text-blue-600 dark:text-blue-400">
            ₹{product.discountPrice ?? product.price}
            {product.discountPrice && <span className="text-gray-400 dark:text-gray-500 line-through ml-2">₹{product.price}</span>}
          </div>
          <div className="mt-2 text-lg font-semibold text-green-600 dark:text-green-400">{stockAvailability}</div>
          <div className="mt-4 flex gap-4">
            <input
              type="text"
              placeholder="Enter Zip Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="p-2 border dark:border-gray-600 rounded-md w-40 bg-gray-100 dark:bg-gray-700"
            />
            <button onClick={checkEstimatedDelivery} className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md shadow-md">
              Check Delivery
            </button>
          </div>
          {estimatedDelivery && <p className="mt-2">{estimatedDelivery}</p>}

          <div className="mt-6 flex gap-4">
            <button
              onClick={handleAddToCart}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg shadow-md"
            >
              <ShoppingCart size={18} /> Add to Cart
            </button>
            <button
              onClick={handleWishlistToggle}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-md ${wishlist.some((item) => item.id === product.id) ? 'bg-red-500 dark:bg-red-400 text-white' : 'bg-gray-300 dark:bg-gray-700 text-black dark:text-white'}`}
            >
              <Heart size={18} /> {wishlist.some((item) => item.id === product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold">Reviews</h3>
        {reviews.map((review) => (
          <div key={review.id} className="mt-4 p-4 border dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-900">
            <p className="font-semibold">{review.name}</p>
            <p className="text-yellow-500">{"★".repeat(review.rating)}</p>
            <p>{review.comment}</p>
          </div>
        ))}
        <form onSubmit={handleReviewSubmit} className="mt-4 p-4 border dark:border-gray-600 rounded-lg">
          <input type="text" placeholder="Your Name" value={newReview.name} onChange={(e) => setNewReview({ ...newReview, name: e.target.value })} className="w-full p-2 border dark:border-gray-600 rounded bg-gray-100 dark:bg-gray-700 mb-2" required />
          <textarea placeholder="Your Review" value={newReview.comment} onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })} className="w-full p-2 border dark:border-gray-600 rounded bg-gray-100 dark:bg-gray-700 mb-2" required />
          <button type="submit" className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg w-full shadow-md">Submit Review</button>
        </form>
      </div>
    </div>
  );
}




