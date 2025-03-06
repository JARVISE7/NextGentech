'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NewsletterSection() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <section className="py-12 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* ✅ Background Image Applied Here */}
        <div 
          className="relative bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-8 flex flex-col md:flex-row md:items-center md:justify-between text-white overflow-hidden"
          style={{
            backgroundImage: "url('/images/newsletter-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          

          <div className="relative z-10 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-2">
              Don't Miss Out Latest <br /> Trends & Offers
            </h2>
            <p className="text-md opacity-90">
              Register to receive news about the latest offers & discount codes
            </p>
          </div>
          
          <form className="relative z-10 flex flex-col sm:flex-row items-center gap-4" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* ✅ Success Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          >
            <div className="bg-white bg-opacity-80 backdrop-blur-lg shadow-lg px-6 py-5 rounded-2xl text-center flex flex-col items-center relative">
              <span className="text-green-500 text-4xl mb-2">✅</span>
              <p className="text-lg font-semibold text-gray-800">Subscribed Successfully!</p>
              <p className="text-sm text-gray-600 mt-1">Thank you for subscribing 🎉</p>
              
              {/* Close Button */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-lg"
              >
                ✖
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


  
  
  
  