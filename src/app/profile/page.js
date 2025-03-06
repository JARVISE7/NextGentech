"use client";

import { useState } from "react";
import Image from "next/image";
import { Edit, X } from "lucide-react";

export default function Profile() {
  const [tab, setTab] = useState("details");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    {
      id: "1001",
      date: "Feb 12, 2025",
      total: "₹12000.00",
      status: "Delivered",
      items: [
        { name: "Classic T-Shirt", price: "₹4000.00", qty: 1 },
        { name: "Slim Fit Jeans", price: "₹8000.00", qty: 1 },
      ],
    },
    {
      id: "1002",
      date: "Jan 28, 2025",
      total: "₹16000.00",
      status: "Shipped",
      items: [
        { name: "Leather Jacket", price: "₹15000.00", qty: 1 },
        { name: "Sneakers", price: "₹1000.00", qty: 1 },
      ],
    },
    {
      id: "1003",
      date: "Jan 10, 2025",
      total: "₹7500.00",
      status: "Processing",
      items: [{ name: "Cotton Hoodie", price: "₹7500.00", qty: 1 }],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      {/* Profile Header */}
      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Profile Image */}
        <div className="relative">
          <Image
            src="/images/user-avatar.png" // Change this to dynamic user image
            alt="User Avatar"
            width={120}
            height={120}
            className="rounded-full border-4 border-gray-200"
          />
          <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-1 rounded-full shadow-lg">
            <Edit size={18} />
          </button>
        </div>
        {/* User Info */}
        <div className="text-center font-['Playfair_Display']">
          <h2 className="text-3xl font-bold text-gray-900 tracking-wide">
            Jay Patel
          </h2>
          <p className="text-xl text-gray-700 tracking-wide">
            jaypatel@gmail.com
          </p>
          <p className="text-xl text-gray-700 tracking-wide">
            Joined: January 2024
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-around mt-8 border-b pb-2">
        {[
          { id: "details", label: "Profile Details" },
          { id: "orders", label: "Order History" },
          { id: "wishlist", label: "Wishlist" },
          { id: "settings", label: "Settings" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setTab(item.id)}
            className={`px-4 py-2 text-sm font-medium ${
              tab === item.id
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500"
            } transition-all`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6 bg-white shadow-md rounded-lg p-6">
        {tab === "details" && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Profile Information</h3>
            <p className="text-gray-600">
              <strong>Email:</strong> jaypatel@gmail.com
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> +91 6434 567 890
            </p>
            <p className="text-gray-600">
              <strong>Address:</strong> 789 Heritage Avenue, Ahmedabad, India.
            </p>
          </div>
        )}

        {tab === "orders" && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Order History</h3>
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="border p-4 rounded-lg flex justify-between items-center"
                >
                  <div>
                    <p className="text-gray-600">
                      <strong>Order #{order.id}</strong>
                    </p>
                    <p className="text-sm text-gray-500">Date: {order.date}</p>
                    <p className="text-sm text-gray-500">
                      Status: {order.status}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedOrder(order)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "wishlist" && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Wishlist</h3>
            <p className="text-gray-500">Your saved items will appear here.</p>
          </div>
        )}

        {tab === "settings" && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Account Settings
            </h3>
            <p className="text-gray-600 mb-6">
              Manage your personal information and account settings here.
            </p>

            {/* Name */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Jay Patel"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="jaypatel@gmail.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Password Update */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                New Password
              </label>
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 234 567 890"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Address */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                Address
              </label>
              <textarea
                placeholder="Enter your address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            {/* Save Changes Button */}
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-all">
              Save Changes
            </button>
          </div>
        )}
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">
                Order #{selectedOrder.id} Details
              </h3>
              <button onClick={() => setSelectedOrder(null)}>
                <X size={20} />
              </button>
            </div>
            <p className="text-gray-600">Date: {selectedOrder.date}</p>
            <p className="text-gray-600">Status: {selectedOrder.status}</p>
            <p className="text-gray-600">Total: {selectedOrder.total}</p>

            <h4 className="text-lg font-semibold mt-4">Items:</h4>
            <ul className="mt-2 space-y-2">
              {selectedOrder.items.map((item, index) => (
                <li key={index} className="text-gray-600">
                  {item.qty}x {item.name} - {item.price}
                </li>
              ))}
            </ul>

            <button
              onClick={() => setSelectedOrder(null)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
