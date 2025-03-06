'use client';

import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const faqs = [
  { category: 'Shopping & Gifting', question: 'What is NextGenTech Insider?', answer: 'NextGenTech Insider is a program that provides exclusive shopping insights and deals.' },
  { category: 'Searching for Items', question: 'How to Find the Best Items for You on NextGenTech', answer: 'Use search filters and read reviews to find the best items.' },
  { category: 'Searching for Items', question: 'How to Search for Items and Shops on NextGenTech', answer: 'Enter keywords in the search bar and refine results using filters.' },
  { category: 'After You Purchase', question: 'What’s the Status of My Order?', answer: 'Check your order history in your account for tracking updates.' },
  { category: 'Order Issues & Returns', question: 'How to Get Help with An Order', answer: 'Contact the seller directly or request assistance through NextGenTech.' },
  { category: 'After You Purchase', question: 'How Do I Change My Shipping Address?', answer: 'Go to your settings and update your shipping details before placing an order.' },
  { category: 'Shopping & Gifting', question: 'How to Contact a Shop', answer: 'Use the “Message Seller” button on the shop page to contact the seller.' },
  { category: 'Shopping & Gifting', question: 'How to Buy a NextGenTech Gift Card', answer: 'Go to the gift card section and follow the purchase instructions.' },
  { category: 'Shopping & Gifting', question: 'How to Purchase an Item On NextGenTech', answer: 'Add the item to your cart and proceed to checkout.' },
];

const trendingQuestions = [
  'What is NextGenTech Insider?',
  'How to Find the Best Items for You on NextGenTech',
  'What’s the Status of My Order?'
];

const categories = ['All', 'Shopping & Gifting', 'Searching for Items', 'After You Purchase', 'Order Issues & Returns'];

export default function FAQPage() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [helpfulVotes, setHelpfulVotes] = useState({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  const filteredFaqs = faqs.filter(faq =>
    (selectedCategory === 'All' || faq.category === selectedCategory) &&
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleVote = (question, isHelpful) => {
    setHelpfulVotes(prev => ({ ...prev, [question]: isHelpful }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-700 dark:via-purple-600 dark:to-pink-700"></div>
      
      <div className="max-w-4xl mx-auto py-16 relative z-10 px-4">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-md">{t('How can we help?')}</h1>
          <div className="mt-6 relative max-w-lg mx-auto">
            <input
              type="text"
              placeholder={t('Type your question')}
              className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-4 top-4 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="mb-9 text-center">
          <label className="text-gray-700 dark:text-gray-300 mr-3 font-medium">{t('Filter by category:')}</label>
          <select
            className="p-3 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>{t(category)}</option>
            ))}
          </select>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">{t('Trending Questions')}</h2>
        <ul className="mb-8 text-center">
          {trendingQuestions.map((question, index) => (
            <li key={index} className="text-blue-600 hover:underline cursor-pointer dark:text-blue-400">{t(question)}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">{t('Featured Articles')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredFaqs.map((faq, index) => (
            <div key={index} className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-indigo-500 dark:text-indigo-400">{t(faq.category)}</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{t(faq.question)}</p>
              <div className="mt-3 flex justify-between">
                <button onClick={() => handleVote(faq.question, true)} className="text-green-500">👍</button>
                <button onClick={() => handleVote(faq.question, false)} className="text-red-500">👎</button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200">{t('Still need help?')}</h3>
          <button
            className="mt-3 px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all shadow-md"
            onClick={() => window.location.href = '/contact'}
          >
            {t('Contact Support')}
          </button>
        </div>
      </div>
    </div>
  );
}








