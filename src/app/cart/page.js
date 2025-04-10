"use client";

import { useCart } from "../../context/CartContext";
import Image from "next/image";
import { Trash, Minus, Plus, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountedTotal = total - discount;

  const applyCoupon = () => {
    if (coupon === "SAVE10") {
      setDiscount(total * 0.1);
    } else {
      setDiscount(0);
      alert("Invalid coupon code");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
        Your Cart
      </h2>
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-full mb-4">
            <ShoppingCart size={48} className="text-gray-400 dark:text-gray-500" />
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-6">Your cart is empty!</p>
          <Link
            href="/product"
            className="bg-blue-900 dark:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 dark:hover:bg-blue-600"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items Section */}
          <div className="lg:col-span-2 bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="flex justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Shopping Cart
              </h3>
              <button
                onClick={clearCart}
                className="text-red-600 dark:text-red-400 hover:underline"
              >
                Clear All
              </button>
            </div>
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                  <th className="p-4">Product</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Quantity</th>
                  <th className="p-4">Subtotal</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="p-4 flex items-center gap-4">
                      <Image src={item.image} alt={item.name} width={50} height={50} className="rounded-md" />
                      <span className="text-gray-900 dark:text-gray-100">{item.name}</span>
                    </td>
                    <td className="p-4 font-semibold text-gray-900 dark:text-gray-100">₹{item.price}</td>
                    <td className="p-4 flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, "decrease")}
                        className="p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-3 text-gray-900 dark:text-gray-100">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, "increase")}
                        className="p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                      >
                        <Plus size={14} />
                      </button>
                    </td>
                    <td className="p-4 font-semibold text-gray-900 dark:text-gray-100">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 bg-red-500 dark:bg-red-600 text-white rounded hover:bg-red-600 dark:hover:bg-red-700"
                      >
                        <Trash size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Order Summary Section */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Order Summary</h3>
            <ul className="mb-4">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between py-2 border-b border-gray-300 dark:border-gray-700">
                  <span className="text-gray-900 dark:text-gray-100">{item.name}</span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between text-lg font-semibold py-2 text-gray-900 dark:text-gray-100">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-lg font-semibold py-2 text-green-600 dark:text-green-400">
                <span>Discount</span>
                <span>-₹{discount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between text-lg font-semibold py-2 border-t border-gray-300 dark:border-gray-700 mt-2 text-gray-900 dark:text-gray-100">
              <span>Final Total</span>
              <span>₹{discountedTotal.toFixed(2)}</span>
            </div>
            <div className="mt-4">
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="w-full p-2 border rounded mb-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                placeholder="Enter coupon code"
              />
              <button
                onClick={applyCoupon}
                className="w-full bg-green-600 dark:bg-green-700 text-white py-2 rounded-lg hover:bg-green-700 dark:hover:bg-green-600"
              >
                Apply Coupon
              </button>
            </div>
            <button className="w-full bg-blue-600 dark:bg-blue-700 text-white py-3 rounded-lg mt-4 hover:bg-blue-700 dark:hover:bg-blue-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}



