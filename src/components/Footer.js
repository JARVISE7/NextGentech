

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Logo and About */}
          <div>
            <img src="/images/logo1.png" alt="Logo" className="h-12 mb-4" />
            <p className="text-sm">
              NextGentech - Your one-stop shop for the latest and greatest tech products. Innovate your lifestyle!
            </p>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-white font-semibold mb-3">Categories</h4>
            <ul className="space-y-2">
              <li><Link href="/category/smartphones" className="hover:text-white transition duration-300">Smartphones</Link></li>
              <li><Link href="/category/laptops" className="hover:text-white transition duration-300">Laptops</Link></li>
              <li><Link href="/category/accessories" className="hover:text-white transition duration-300">Accessories</Link></li>
              <li><Link href="category/gadgets" className="hover:text-white transition duration-300">Gadgets</Link></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-white font-semibold mb-3">Customer Support</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:text-white transition duration-300">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-white transition duration-300">FAQs</Link></li>
              <li><Link href="/support" className="hover:text-white transition duration-300">Help & Support</Link></li>
              <li><Link href="/returns" className="hover:text-white transition duration-300">Returns & Refunds</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-white font-semibold mb-3">Information</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white transition duration-300">About Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition duration-300">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="hover:text-white transition duration-300">Terms & Conditions</Link></li>
              <li><Link href="/shipping-policy" className="hover:text-white transition duration-300">Shipping Policy</Link></li>
            </ul>
          </div>

          {/* Account Section */}
          <div>
            <h4 className="text-white font-semibold mb-3">Account</h4>
            <ul className="space-y-2">
              <li><Link href="/signin" className="hover:text-white transition duration-300">Login / Register</Link></li>
              <li><Link href="/cart" className="hover:text-white transition duration-300">Cart</Link></li>
              <li><Link href="/wishlist" className="hover:text-white transition duration-300">Wishlist</Link></li>
              <li><Link href="/products" className="hover:text-white transition duration-300">Products</Link></li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Links */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="https://facebook.com/nextgentech" className="hover:text-white transition duration-300" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
            <a href="https://twitter.com/nextgentech" className="hover:text-white transition duration-300" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
            <a href="https://instagram.com/nextgentech" className="hover:text-white transition duration-300" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
            <a href="https://linkedin.com/company/nextgentech" className="hover:text-white transition duration-300" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
          </div>

          {/* Payment Methods */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <FaCcVisa size={30} />
            <FaCcMastercard size={30} />
            <FaCcPaypal size={30} />
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} NextGentech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}



  
