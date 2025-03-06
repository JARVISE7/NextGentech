

import React from "react";
import { Truck, ShieldCheck, RefreshCcw, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "FREE US DELIVERY",
    description: "For US customers (including Alaska and Hawaii) or orders over $200.",
  },
  {
    icon: ShieldCheck,
    title: "SECURE PAYMENT",
    description: "We accept Visa, American Express, PayPal, Payoneer, Mastercard, and more.",
  },
  {
    icon: RefreshCcw,
    title: "30 DAYS FREE RETURNS",
    description: "All of our products are made with care and covered for one year against defects.",
  },
  {
    icon: Headphones,
    title: "SUPPORT 24/7",
    description: "Contact us 24 hours a day, 7 days a week. Call Us: 0123-456-789.",
  },
];

export default function FeatureSection() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <IconComponent className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-white-900">{feature.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}





  
  