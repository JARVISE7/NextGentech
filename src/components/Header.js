"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Heart, User, ShoppingCart, Menu, X, Sun, Moon, Search,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import products from "../data/products";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("All");

  const { theme, toggleTheme } = useTheme();
  const userMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const categories = [...new Set(products.map((p) => p.category))];

  useEffect(() => {
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [searchQuery]);

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setFilteredProducts([]);
  };

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="Logo" width={180} height={60} style={{ width: "auto", height: "auto" }} />
        </Link>

        <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-gray-900 dark:text-gray-200">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
          <Link href="/product" className="hover:text-blue-600 dark:hover:text-blue-400">Products</Link>
          <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About Us</Link>
          <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact Us</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="text-gray-900 dark:text-gray-100">
            {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          <button onClick={() => setIsSearchOpen(true)} className="text-gray-900 dark:text-gray-200">
            <Search size={24} />
          </button>

          <div className="relative" ref={userMenuRef}>
            <button onClick={() => setIsUserMenuOpen((prev) => !prev)} className="text-gray-900 dark:text-gray-200">
              <User size={24} />
            </button>
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-2">
                <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Profile</Link>
                <Link href="/orders" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">My Orders</Link>
                <Link href="/signin" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Sign In / Sign Up</Link>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Logout</button>
              </div>
            )}
          </div>

          <Link href="/wishlist" className="text-gray-900 dark:text-gray-200"><Heart size={24} /></Link>
          <Link href="/cart" className="text-gray-900 dark:text-gray-200"><ShoppingCart size={24} /></Link>

          <div ref={mobileMenuRef}>
            <button className="md:hidden" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {isMobileMenuOpen && (
              <nav className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4">
                <Link href="/" className="block py-2">Home</Link>
                <Link href="/products" className="block py-2">Products</Link>
                <Link href="/about" className="block py-2">About Us</Link>
                <Link href="/contact" className="block py-2">Contact Us</Link>
              </nav>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-start pt-24 px-4"
          >
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              className="bg-white dark:bg-gray-900 w-full max-w-5xl rounded-lg p-6 relative"
            >
              <button
                onClick={handleCloseSearch}
                className="absolute top-4 right-4 text-gray-800 dark:text-white"
              >
                <X size={24} />
              </button>

              <div className="mb-4">
                <div className="flex gap-2 mb-2">
                  {["All", "Products", "Blogs"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-1 rounded-full text-sm border ${
                        activeTab === tab
                          ? "bg-blue-600 text-white"
                          : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type anything to search..."
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>

              <div className="max-h-64 overflow-y-auto mt-4 space-y-3">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                      onClick={handleCloseSearch}
                      className="flex items-center gap-4 p-3 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={50}
                        height={50}
                        className="rounded-md object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold">{product.name}</p>
                        <p className="text-xs text-gray-500">₹{product.price}</p>
                      </div>
                    </Link>
                  ))
                ) : (
                  searchQuery && (
                    <p className="text-gray-500 dark:text-gray-400">No results found.</p>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}











