import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-white dark:from-gray-900 dark:to-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-[url('/images/about-bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center py-32">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">About Us</h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl drop-shadow-md">
           We create cutting-edge tech products with innovation and precision.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 drop-shadow-md">Our Story</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              Founded in 2010, our journey began with a simple vision—to make technology accessible,
              reliable, and innovative for everyone. Over the years, we have grown into a leading tech e-commerce brand,
              known for our commitment to quality, seamless shopping experiences, and customer satisfaction.
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              With a global presence and a passion for the latest advancements, we continue to redefine online tech
              shopping by offering cutting-edge products, secure transactions, and exceptional service—all while staying true to our core values of trust,
              innovation, and excellence.
            </p>
          </div>
          <div>
            <Image
              src="/images/story.png"
              alt="Our Story"
              width={500}
              height={350}
              className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 drop-shadow-lg">
            Our Mission & Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {[
              { title: "Sustainability", description: "We are committed to reducing our environmental footprint by sourcing eco-friendly materials, optimizing energy-efficient operations, and promoting responsible e-waste management." },
              { title: "Quality", description: "Every product we offer is carefully selected and rigorously tested to ensure durability, performance, and reliability for our customers." },
              { title: "Innovation", description: "We stay ahead of the curve by integrating the latest technological advancements, offering cutting-edge products, and enhancing the online shopping experience with seamless, user-friendly solutions." },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md text-center transition transform hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{item.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 drop-shadow-lg">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-10 mt-10">
          {[
            { name: 'Jay Patel', role: 'CEO & Founder', img: '/images/team1.png' },
            { name: 'Michael Johnson', role: 'AI Solutions Architect', img: '/images/team2.png' },
            { name: 'Devid Jhon', role: 'Cloud Security Engineer', img: '/images/team3.png' },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <Image
                src={member.img}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full mx-auto shadow-xl transform hover:scale-105 transition-transform duration-300"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-100">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}





