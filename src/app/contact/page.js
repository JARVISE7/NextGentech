"use client";

import { useState } from "react";

export default function ContactPage() {
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-0">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
            Contact & Support
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Have questions about pricing, plans, or our products? Fill out the
            form and our friendly team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition">
            <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-200">
              Contact our sales team
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full border dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full border dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full border dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Message"
                className="w-full border dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-300 w-full"
              >
                Send message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            {[
              {
                title: "Chat to Sales",
                description: "Interested in switching? Speak to our friendly team.",
                email: "sales@NextGentech.com",
              },
              {
                title: "Email Support",
                description: "Email us and we'll get back to you within 24 hours.",
                email: "support@NextGentech.com",
              },
              {
                title: "Call Us",
                description: "Mon - Fri, 9:00 AM - 5:00 PM (UTC/GMT +10:00)",
                phone: "9282 82 82 28",
              },
            ].map((item, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                {item.email && (
                  <a
                    href={`mailto:${item.email}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {item.email}
                  </a>
                )}
                {item.phone && (
                  <a
                    href={`tel:${item.phone}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline block mt-2"
                  >
                    {item.phone}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Message Popup */}
      {showMessage && (
        <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg text-center z-50 animate-slideIn">
          ✅ Your message has been received successfully!
        </div>
      )}
    </section>
  );
}

