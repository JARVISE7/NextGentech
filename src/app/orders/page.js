"use client";

import { useState } from "react";
import { CheckCircle, Clock, Package, Truck, XCircle } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

const orders = [
  {
    id: "ORD123456",
    date: "Feb 25, 2025",
    status: "Delivered",
    total: "₹3,499",
    items: [
      {
        name: "Classic Leather Jacket",
        image: "/images/jacket.png",
        price: "₹2,999",
        quantity: 1,
      },
      {
        name: "Vintage Sneakers",
        image: "/images/sneakers.png",
        price: "₹500",
        quantity: 1,
      },
    ],
  },
  {
    id: "ORD789012",
    date: "Feb 22, 2025",
    status: "Shipped",
    total: "₹1,299",
    items: [
      {
        name: "Smart Watch Pro",
        image: "/images/smartwatch.png",
        price: "₹1,299",
        quantity: 1,
      },
    ],
  },
  {
    id: "ORD345678",
    date: "Feb 20, 2025",
    status: "Pending",
    total: "₹999",
    items: [
      {
        name: "Noise Cancelling Headphones",
        image: "/images/headphones.png",
        price: "₹999",
        quantity: 1,
      },
    ],
  },
  {
    id: "ORD901234",
    date: "Feb 18, 2025",
    status: "Cancelled",
    total: "₹2,099",
    items: [
      {
        name: "Minimalist Backpack",
        image: "/images/backpack.png",
        price: "₹2,099",
        quantity: 1,
      },
    ],
  },
];

const statusIcons = {
  Delivered: <CheckCircle className="text-green-500" size={20} />, 
  Shipped: <Truck className="text-blue-500" size={20} />,
  Pending: <Clock className="text-yellow-500" size={20} />,
  Cancelled: <XCircle className="text-red-500" size={20} />,
};

export default function OrdersPage() {
  const [search, setSearch] = useState("");
  const { theme } = useTheme();

  const filteredOrders = orders.filter((order) =>
    order.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">My Orders</h2>
      
      <input
        type="text"
        placeholder="Search order by ID..."
        className="w-full p-2 border rounded-md mb-4 bg-white dark:bg-gray-800 dark:text-white"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 gap-6">
        {filteredOrders.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-center">No orders found.</p>
        ) : (
          filteredOrders.map((order) => (
            <div key={order.id} className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-5">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Order {order.id}</h3>
                <div className="flex items-center gap-2">
                  {statusIcons[order.status]}
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-full ${
                      order.status === "Delivered"
                        ? "bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300"
                        : order.status === "Shipped"
                        ? "bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300"
                        : order.status === "Pending"
                        ? "bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-300"
                        : "bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-300"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Placed on {order.date}</p>

              <div className="mt-4 space-y-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex gap-4 items-center border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0">
                    <Image src={item.image} alt={item.name} width={60} height={60} className="rounded-md" />
                    <div>
                      <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">{item.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Qty: {item.quantity}</p>
                    </div>
                    <span className="ml-auto text-lg font-semibold text-gray-900 dark:text-gray-100">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900 dark:text-gray-100">Total: {order.total}</span>
                <button className="px-4 py-2 text-white bg-blue-600 dark:bg-blue-700 rounded-md hover:bg-blue-700 dark:hover:bg-blue-800">
                  View Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
