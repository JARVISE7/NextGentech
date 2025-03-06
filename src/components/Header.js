"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, User, ShoppingCart, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Dark mode toggle

  const userMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close dropdowns when clicking outside
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

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={180}
            height={60}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-gray-900 dark:text-gray-200">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Home
          </Link>
          <Link href="/products" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Products
          </Link>
          <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Contact Us
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="text-gray-900 dark:text-gray-100 transition-colors duration-300"
          >
            {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          {/* User Icon with Dropdown */}
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => setIsUserMenuOpen((prev) => !prev)}
              className="text-gray-900 dark:text-gray-200 hover:text-black dark:hover:text-gray-400"
            >
              <User size={24} />
            </button>
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-2">
                <Link href="/profile" className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Profile
                </Link>
                <Link href="/orders" className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  My Orders
                </Link>
                <Link href="/signin" className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Sign In / Sign Up
                </Link>
                <button className="block w-full text-left px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Wishlist Icon */}
          <Link href="/wishlist" className="text-gray-900 dark:text-gray-200 hover:text-black dark:hover:text-gray-400">
            <Heart size={24} />
          </Link>

          {/* Cart Icon */}
          <Link href="/cart" className="text-gray-900 dark:text-gray-200 hover:text-black dark:hover:text-gray-400">
            <ShoppingCart size={24} />
          </Link>

          {/* Mobile Menu Button */}
          <div ref={mobileMenuRef}>
            <button className="md:hidden" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <nav className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4">
                <Link href="/" className="block py-2 text-gray-900 dark:text-gray-200 hover:text-blue-600">
                  Home
                </Link>
                <Link href="/products" className="block py-2 text-gray-900 dark:text-gray-200 hover:text-blue-600">
                  Products
                </Link>
                <Link href="/about" className="block py-2 text-gray-900 dark:text-gray-200 hover:text-blue-600">
                  About Us
                </Link>
                <Link href="/contact" className="block py-2 text-gray-900 dark:text-gray-200 hover:text-blue-600">
                  Contact Us
                </Link>
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}






