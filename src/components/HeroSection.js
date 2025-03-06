export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-center text-white px-6"
      style={{ backgroundImage: "url(/image.png)" }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl mb-4 animate__animated animate__fadeIn animate__delay-1s bg-gradient-to-r from-blue-700 via-blue-500 to-white bg-clip-text text-transparent">
          Discover the Best Electronics
        </h1>
        <p className="text-lg sm:text-2xl mb-6 animate__animated animate__fadeIn animate__delay-2s bg-gradient-to-r from-blue-500 via-white to-blue-300 bg-clip-text text-transparent">
          Get the latest gadgets at unbeatable prices!
        </p>
        <a
          href="#products"
          className="inline-block bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}
