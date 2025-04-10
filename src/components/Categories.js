import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Smartphones",
    description: "Starting at ₹49,999",
    image: "/images/smartphone.png",
    link: "/category/smartphones",
  },
  {
    name: "Laptops",
    description: "Starting at ₹29,999",
    image: "/images/laptop.png",
    link: "/category/laptops",
  },
  {
    name: "Accessories",
    description: "Starting at ₹199",
    image: "/images/accessories.png",
    link: "/category/accessories",
  },
];

const Categories = () => {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-8 text-center">
          Explore Our Categories
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link href={category.link} key={index} className="group">
              <div className="relative rounded-xl shadow-lg overflow-hidden h-64 flex items-center justify-center">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20 dark:bg-opacity-50 group-hover:bg-opacity-60 transition duration-300" />

                {/* Text Content */}
                <div className="relative z-10 text-center px-6">
                  <h3 className="text-2xl font-bold text-black group-hover:text-blue-300 transition">
                    {category.name}
                  </h3>
                  <p className="mt-1 text-black-200">{category.description}</p>
                  <span className="text-blue-400 font-semibold mt-2 inline-block">
                    Shop now →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;



