import HeroSection from '@components/HeroSection';
import ProductCard from '@components/ProductCard';
import TestimonialSection from '@components/TestimonialSection';
import NewsletterForm from '@components/NewsletterForm';
import CountdownBanner from '@components/CountdownBanner';
import FeatureSection from '@components/FeatureSection';
import Categories from '@components/Categories';

const products = [
  { id: 1, name: 'iPhone 16 Pro', price: 99999, discountPrice: 89999, image: '/images/product1.png' },
  { id: 2, name: 'MacBook Air M4 chip', price: 149999, discountPrice: 134999, image: '/images/product2.png' },
  { id: 3, name: 'Wireless Earbuds', price: 1999, discountPrice: 1799, image: '/images/product3.png' },
  { id: 4, name: 'Apple Watch Ultra', price: 29999, discountPrice: 26999, image: '/images/product4.png' },
  { id: 5, name: 'Rangs 43 Inch Frameless FHD Double Glass Android TV', price: 99999, discountPrice: 89999, image: '/images/product5.png' },
  { id: 6, name: 'True Wireless Noise Cancelling Headphone', price: 1499, discountPrice: 1349, image: '/images/product6.png' },
  { id: 7, name: 'Portable Electric Grinder Maker', price: 1999, discountPrice: 1799, image: '/images/product7.png' },
  { id: 8, name: 'Havit HV-G69 USB Gamepad', price: 2999, discountPrice: 2699, image: '/images/product8.png' },
];

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <HeroSection />
      
      {/* Featured Products */}
      <section id="products" className="container mx-auto py-16 px-4 md:px-0">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8 font-cormorant">
          Featured Products
        </h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Other Sections */}
      <FeatureSection />
      <Categories />
      <CountdownBanner />
      <TestimonialSection />
      <NewsletterForm />
    </div>
  );
}





