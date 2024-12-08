import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'General', 'Templates', 'Pricing', 'Support'];

  const faqData = [
    {
      category: 'General',
      question: 'What is PPT Markets?',
      answer:
        'PPT Markets is a platform providing a wide range of professionally designed PowerPoint templates and presentation tools across various categories such as Marketing, Technology, Business, and more.'
    },
    {
      category: 'Templates',
      question: 'Are templates customizable?',
      answer:
        'Yes, all templates are fully customizable. You can edit colors, text, graphics, and layouts using any compatible presentation software such as Microsoft PowerPoint or Google Slides.'
    },
    {
      category: 'Pricing',
      question: 'Is PPT Markets free to use?',
      answer:
        'We offer a range of free templates. Premium templates and advanced features are available through a subscription plan.'
    },
    {
      category: 'Support',
      question: 'How can I contact support?',
      answer:
        'You can reach out to our support team via the "Contact Us" page or email us directly at support@pptmarkets.com.'
    },
    {
      category: 'Templates',
      question: 'What categories of templates are available?',
      answer:
        'We offer templates across multiple categories including Technology, Business, Marketing, Education, Health, and more. Each category is designed to cater to specific professional needs.'
    },
    {
      category: 'General',
      question: 'How do I access templates?',
      answer:
        'You can browse templates by category, search for specific themes, or explore trending and top-rated templates. Simply click on a template to preview and download it.'
    }
  ];

  const filteredFAQs = faqData.filter((faq) => {
    const matchesCategory =
      selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesQuery =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-blue-100">
            Find answers to common questions about using PPT Markets and our services.
          </p>
        </div>
      </div>

      {/* Search and Categories */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          {/* Search Bar */}
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 pl-10 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Search for a question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute top-3 left-3 text-gray-400" size={24} />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap space-x-2 mt-4 md:mt-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-8">
        {filteredFAQs.length === 0 ? (
          <p className="text-gray-600 text-center">
            No FAQs match your search criteria. Please try a different query or category.
          </p>
        ) : (
          <div className="space-y-6">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 border hover:shadow-xl transition-all"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  {activeIndex === index ? (
                    <ChevronUp size={24} className="text-gray-600" />
                  ) : (
                    <ChevronDown size={24} className="text-gray-600" />
                  )}
                </div>
                {activeIndex === index && (
                  <p className="text-gray-600 mt-4">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
