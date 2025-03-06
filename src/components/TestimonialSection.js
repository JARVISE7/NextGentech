'use client'

import { useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Davis Dorwart",
    image: "https://picsum.photos/100?random=1",
    feedback:
      "Well-balanced planning and execution lead to a seamless and graceful experience, combining practicality with elegance.",
    role: "Serial Entrepreneur",
  },
  {
    id: 2,
    name: "Wilson Dias",
    image: "https://picsum.photos/100?random=2",
    feedback:
      "A well-structured design enhances both functionality and aesthetics, ensuring seamless movement and elegant presentation.",
    role: "Backend Developer",
  },
  {
    id: 3,
    name: "Davis Dorwart",
    image: "https://picsum.photos/100?random=3",
    feedback:
      "Proper execution and thoughtful design create a smooth and visually appealing experience, blending efficiency with beauty.",
    role: "Serial Entrepreneur",
  },
  {
    id: 4,
    name: "Davis Dorwart",
    image: "https://picsum.photos/100?random=1",
    feedback:
      "Well-balanced planning and execution lead to a seamless and graceful experience, combining practicality with elegance.",
    role: "Serial Entrepreneur",
  },
  {
    id: 5,
    name: "Wilson Dias",
    image: "https://picsum.photos/100?random=2",
    feedback:
      "A well-structured design enhances both functionality and aesthetics, ensuring seamless movement and elegant presentation.",
    role: "Backend Developer",
  },
  {
    id: 6,
    name: "Davis Dorwart",
    image: "https://picsum.photos/100?random=3",
    feedback:
      "Proper execution and thoughtful design create a smooth and visually appealing experience, blending efficiency with beauty.",
    role: "Serial Entrepreneur",
  },
  {
    id: 7,
    name: "Davis Dorwart",
    image: "https://picsum.photos/100?random=1",
    feedback:
      "Well-balanced planning and execution lead to a seamless and graceful experience, combining practicality with elegance.",
    role: "Serial Entrepreneur",
  },
  {
    id: 8,
    name: "Wilson Dias",
    image: "https://picsum.photos/100?random=2",
    feedback:
      "A well-structured design enhances both functionality and aesthetics, ensuring seamless movement and elegant presentation.",
    role: "Backend Developer",
  },
  {
    id: 9,
    name: "Davis Dorwart",
    image: "https://picsum.photos/100?random=3",
    feedback:
      "Proper execution and thoughtful design create a smooth and visually appealing experience, blending efficiency with beauty.",
    role: "Serial Entrepreneur",
  },
  {
    id: 10,
    name: "Davis Dorwart",
    image: "https://picsum.photos/100?random=1",
    feedback:
      "Well-balanced planning and execution lead to a seamless and graceful experience, combining practicality with elegance.",
    role: "Serial Entrepreneur",
  },
  {
    id: 11,
    name: "Wilson Dias",
    image: "https://picsum.photos/100?random=2",
    feedback:
      "A well-structured design enhances both functionality and aesthetics, ensuring seamless movement and elegant presentation.",
    role: "Backend Developer",
  },
  {
    id: 12,
    name: "Davis Dorwart",
    image: "https://picsum.photos/100?random=3",
    feedback:
      "Proper execution and thoughtful design create a smooth and visually appealing experience, blending efficiency with beauty.",
    role: "Serial Entrepreneur",
  },
];

const StarRating = () => (
  <div className="flex justify-center mb-2 text-yellow-400">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M12 17.27l5.18 3.03-1.64-5.73L20.82 9.9l-5.78-.04L12 4.5l-2.04 5.36-5.78.04 4.28 4.67-1.64 5.73L12 17.27z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ image, feedback, name, role }) => (
  <div className="min-w-[300px] p-4">
    <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
      <StarRating />
      <p className="text-md text-gray-600 dark:text-gray-300 mb-2">{feedback}</p>
      <div className="flex items-center gap-2">
        <img
          src={image}
          alt={`${name}'s photo`}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="text-left">
          <p className="font-semibold text-gray-800 dark:text-gray-100">{name}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  </div>
);

export default function TestimonialSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollBy({ left: 1, behavior: "smooth" });
      }
    }, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 w-full">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4">
        User Feedbacks
      </h2>
      <h3 className="text-lg text-center text-gray-600 dark:text-gray-300 mb-6">What our users say about us</h3>
      <div className="relative flex items-center w-full overflow-hidden">
        <div
          ref={containerRef}
          className="flex overflow-x-auto scroll-smooth gap-4 w-full px-10 no-scrollbar"
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

  
  