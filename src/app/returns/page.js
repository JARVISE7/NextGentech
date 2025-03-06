import { FaUndo, FaDollarSign, FaExchangeAlt, FaTruck } from "react-icons/fa";

export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center">
      {/* Header Section */}
      <header className="w-full py-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gray-700 dark:to-gray-900 text-white text-center rounded-b-3xl shadow-lg">
        <h1 className="text-5xl font-extrabold tracking-wide">Return & Refund Policy</h1>
        <p className="mt-2 text-lg opacity-90">Hassle-free returns and secure refunds</p>
      </header>

      {/* Content Section */}
      <main className="w-full max-w-4xl px-6 py-12 space-y-8">
        {/** Card Component */}
        {[
          {
            icon: <FaUndo className="text-5xl text-blue-500" />,
            title: "Easy Returns",
            description:
              "Return any unused product within 30 days for a full refund. Items must be in their original condition with tags attached.",
            bgColor: "bg-white/70 dark:bg-gray-800/80 backdrop-blur-md shadow-lg border border-white dark:border-gray-700",
          },
          {
            icon: <FaDollarSign className="text-5xl text-green-500" />,
            title: "Fast Refunds",
            description:
              "Once your return is approved, refunds will be processed within 5-7 business days. Shipping fees are non-refundable.",
            bgColor: "bg-white/70 dark:bg-gray-800/80 backdrop-blur-md shadow-lg border border-white dark:border-gray-700",
          },
          {
            icon: <FaExchangeAlt className="text-5xl text-purple-500" />,
            title: "Exchanges",
            description:
              "Defective or damaged items are eligible for exchanges. Contact us for assistance.",
            bgColor: "bg-white/70 dark:bg-gray-800/80 backdrop-blur-md shadow-lg border border-white dark:border-gray-700",
          },
          {
            icon: <FaTruck className="text-5xl text-red-500" />,
            title: "Return Process",
            description:
              "1. Contact support at support@nextgentech.com. 2. Pack the item securely. 3. Ship to the return address provided.",
            bgColor: "bg-white/70 dark:bg-gray-800/80 backdrop-blur-md shadow-lg border border-white dark:border-gray-700",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl transition-transform transform hover:scale-105 ${item.bgColor}`}
          >
            <div className="flex items-center space-x-4">
              {item.icon}
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{item.title}</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-4">{item.description}</p>
          </div>
        ))}
      </main>

      {/* Footer Section */}
      <footer className="py-8 text-gray-600 dark:text-gray-400 text-center">
        <p>Need help? Contact us at <a href="mailto:support@nextgentech.com" className="text-blue-600 dark:text-blue-400 font-medium">support@nextgentech.com</a></p>
      </footer>
    </div>
  );
}


