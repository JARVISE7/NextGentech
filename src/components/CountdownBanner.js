"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date().getTime() + 6 * 24 * 60 * 60 * 1000;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-100 dark:bg-gray-900 flex flex-col lg:flex-row justify-between items-center p-8 gap-8 transition-colors duration-300">
      <div className="text-center lg:text-left">
        <h3 className="text-xl text-blue-600 dark:text-blue-400 font-semibold">Don’t Miss!!</h3>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Enhance Your Music Experience
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">True Wireless Noise Cancelling Headphone</p>
        
        {/* Countdown Timer */}
        <div className="flex gap-4 justify-center lg:justify-start mb-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {String(value).padStart(2, "0")}
              </p>
              <p className="text-gray-500 dark:text-gray-400 capitalize">{unit}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <button className="bg-blue-600 dark:bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-700 dark:hover:bg-blue-600 transition">
          Check it Out!
        </button>
      </div>

      {/* Headphone Image */}
      <div className="w-full lg:w-1/2">
        <Image
          src="/headphone.png"
          alt="Headphone"
          width={500}
          height={500}
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default CountdownBanner;

