"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const posts = [
  {
    id: 1,
    title: "Top 5 Must-Have Gadgets for Tech Enthusiasts in 2025",
    date: "Nov 30 2023",
    views: "100K",
    image: "/images/blog1.png",
    tags: ["Tech", "Gadgets"],
  },
  {
    id: 2,
    title: "Emerging Tech Trends That Will Define the Next Decade",
    date: "Nov 30 2023",
    views: "100K",
    image: "/images/blog2.png",
    tags: ["Tech", "Trend"],
  },
  {
    id: 3,
    title: "A Deep Dive into Smart Home Devices & How They Work",
    date: "Nov 30 2023",
    views: "100K",
    image: "/images/blog3.png",
    tags: ["Tech", "Home"],
  },
  {
    id: 4,
    title: "Eco-Friendly Tech: 7 Sustainable Gadgets for 2025",
    date: "Nov 30 2023",
    views: "100K",
    image: "/images/blog4.png",
    tags: ["Tech", "Lifestyle"],
  },
  {
    id: 5,
    title: "Wearables & Health Tech: The Future of Fitness",
    date: "Nov 30 2023",
    views: "100K",
    image: "/images/blog5.png",
    tags: ["Tech", "Health"],
  },
  {
    id: 6,
    title: "Budget Tech Buys: High Performance Without Breaking the Bank",
    date: "Nov 30 2023",
    views: "100K",
    image: "/images/blog6.png",
    tags: ["Tech", "Budget"],
  },
  {
    id: 7,
    title: "The Psychology Behind Tech: Why We Love New Gadgets",
    date: "Nov 30 2023",
    views: "100K",
    image: "/images/blog7.png",
    tags: ["Tech", "Lifestyle"],
  },
  {
    id: 8,
    title: "How to Launch Your Own Online Tech Store in 2025",
    date: "Nov 29 2023",
    views: "100K",
    image: "/images/blog8.png",
    tags: ["Business", "Startup"],
  },
];

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = useState(null);

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  return (
    <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Left: Blog Grid */}
      <div className="md:col-span-2 grid gap-6 sm:grid-cols-2">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={400}
              className="rounded-md w-full object-cover"
            />
            <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {post.date} | {post.views} Views
            </div>
            <h2 className="mt-2 font-semibold text-lg text-gray-900 dark:text-white">
              {post.title}
            </h2>
            <Link href="#" className="text-blue-600 mt-2 inline-block">
              Read More →
            </Link>
          </div>
        ))}
      </div>

      {/* Right: Sidebar */}
      <aside className="space-y-6">
        {/* Search */}
        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Search</h3>
          <input
            type="text"
            placeholder="Search here..."
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-sm"
          />
        </div>

        {/* Recent Posts */}
        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
          {posts.slice(0, 3).map((post) => (
            <div key={post.id} className="flex items-center mb-3">
              <Image
                src={post.image}
                alt={post.title}
                width={50}
                height={50}
                className="rounded-md object-cover"
              />
              <div className="ml-3 text-sm">
                <p className="font-medium">{post.title.slice(0, 35)}...</p>
                <p className="text-xs text-gray-500">
                  {post.date} | {post.views} Views
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Latest Products */}
        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Latest Products</h3>
          <ul className="text-sm space-y-2">
            <li>Portable Electric Grinder Maker – ₹7777</li>
            <li>Silent Treadmill Home Fitness – ₹888</li>
            <li>Frameless Android TV – ₹70000</li>
          </ul>
        </div>

        {/* Popular Categories */}
        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Popular Category</h3>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li><Link href="#">Lifestyle (5)</Link></li>
            <li><Link href="#">Business (3)</Link></li>
            <li><Link href="#">Tech (4)</Link></li>
            <li><Link href="#">Art (2)</Link></li>
          </ul>
        </div>

        {/* Tags with Filter */}
        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Tags</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            {[
              "Lifestyle",
              "Tech",
              "Trend",
              "Health",
              "Business",
              "Startup",
              "Budget",
              "Home",
              "Gadgets",
            ].map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-2 py-1 rounded ${
                  selectedTag === tag
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                }`}
              >
                {tag}
              </button>
            ))}
            {selectedTag && (
              <button
                onClick={() => setSelectedTag(null)}
                className="ml-2 text-red-500 text-sm underline"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}

