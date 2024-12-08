import React, { useState } from 'react';
import { 
  Briefcase, 
  TrendingUp, 
  Monitor, 
  Book, 
  Activity, 
  Globe, 
  Users, 
  Trello,
  X,
  ArrowRight,
  CheckCircle 
} from 'lucide-react';

// Custom Dialog Component
const Dialog = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg shadow-xl z-60 relative max-w-2xl w-full mx-4">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
};

// Custom Button Component
const Button = ({ children, variant = 'default', onClick, className = '' }) => {
  const baseStyles = "px-4 py-2 rounded-md transition-all duration-300 flex items-center justify-center";
  const variantStyles = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100"
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categoriesData = [
    {
      name: 'Marketing',
      icon: TrendingUp,
      description: 'Sales strategies, market analysis, and growth techniques',
      presentations: 42,
      color: 'bg-blue-50',
      backgroundGradient: 'from-blue-100 to-blue-200',
      subdomain: [
        'Digital Marketing',
        'Brand Strategy',
        'Market Research',
        'Growth Hacking'
      ],
      topPresentations: [
        'Global Marketing Trends 2024',
        'Social Media Strategy Masterclass',
        'Customer Acquisition Techniques'
      ]
    },
    {
      name: 'Finance',
      icon: Briefcase,
      description: 'Investment plans, financial reports, and economic insights',
      presentations: 35,
      color: 'bg-green-50',
      backgroundGradient: 'from-green-100 to-green-200',
      subdomain: [
        'Investment Strategies',
        'Corporate Finance',
        'Economic Analysis',
        'Risk Management'
      ],
      topPresentations: [
        'Emerging Market Investments',
        'Sustainable Finance Guide',
        'Financial Forecasting Techniques'
      ]
    },
    {
      name: 'Education',
      icon: Book,
      description: 'Lecture materials, training modules, and learning resources',
      presentations: 28,
      color: 'bg-purple-50',
      backgroundGradient: 'from-purple-100 to-purple-200',
      subdomain: [
        'Online Learning',
        'Curriculum Design',
        'Educational Technology',
        'Professional Development'
      ],
      topPresentations: [
        'Future of Online Education',
        'Effective Teaching Strategies',
        'Learning Design Principles'
      ]
    },
    {
      name: 'Technology',
      icon: Monitor,
      description: 'Tech trends, product launches, and innovation showcases',
      presentations: 50,
      color: 'bg-indigo-50',
      backgroundGradient: 'from-indigo-100 to-indigo-200',
      subdomain: [
        'AI & Machine Learning',
        'Cloud Computing',
        'Cybersecurity',
        'Software Development'
      ],
      topPresentations: [
        'AI Revolution in 2024',
        'Cloud Strategy Insights',
        'Emerging Tech Innovations'
      ]
    },
    {
      name: 'Health',
      icon: Activity,
      description: 'Medical research, wellness strategies, and healthcare insights',
      presentations: 22,
      color: 'bg-red-50',
      backgroundGradient: 'from-red-100 to-red-200',
      subdomain: [
        'Telemedicine',
        'Mental Health',
        'Preventive Care',
        'Medical Technology'
      ],
      topPresentations: [
        'Future of Healthcare',
        'Mental Wellness Strategies',
        'Innovative Medical Technologies'
      ]
    },
    {
      name: 'Business',
      icon: Trello,
      description: 'Leadership, strategy, and organizational development',
      presentations: 38,
      color: 'bg-yellow-50',
      backgroundGradient: 'from-yellow-100 to-yellow-200',
      subdomain: [
        'Leadership',
        'Strategic Planning',
        'Organizational Culture',
        'Business Innovation'
      ],
      topPresentations: [
        'Leadership in Digital Age',
        'Organizational Transformation',
        'Innovation Strategy Playbook'
      ]
    },
    {
      name: 'Global Trends',
      icon: Globe,
      description: 'International markets, cultural insights, and global strategies',
      presentations: 25,
      color: 'bg-teal-50',
      backgroundGradient: 'from-teal-100 to-teal-200',
      subdomain: [
        'Global Markets',
        'Cultural Intelligence',
        'International Business',
        'Geopolitical Trends'
      ],
      topPresentations: [
        'Global Economic Outlook',
        'Cross-Cultural Business Strategies',
        'Emerging Market Opportunities'
      ]
    },
    {
      name: 'People & HR',
      icon: Users,
      description: 'Talent management, workplace dynamics, and HR innovations',
      presentations: 30,
      color: 'bg-pink-50',
      backgroundGradient: 'from-pink-100 to-pink-200',
      subdomain: [
        'Talent Acquisition',
        'Employee Experience',
        'HR Technology',
        'Diversity & Inclusion'
      ],
      topPresentations: [
        'Future of Work',
        'Remote Team Management',
        'Employee Engagement Strategies'
      ]
    }
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Transform Your Ideas into 
              <span className="block text-yellow-300">Stunning Presentations</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Unlock professional-grade presentation templates across 8 key domains. Elevate your storytelling and make every slide count.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-yellow-300" size={24} />
                <span>8+ Professionally Designed Categories</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-yellow-300" size={24} />
                <span>Ready-to-Use Templates</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-yellow-300" size={24} />
                <span>Customizable Designs</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button>
                Explore Categories <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-2 gap-4">
            {categoriesData.slice(0, 4).map((category) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={category.name}
                  className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all"
                >
                  <div className="flex items-center mb-3">
                    <IconComponent className="text-yellow-300 mr-3" size={32} />
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>
                  <p className="text-blue-100 text-sm">
                    {category.presentations} Presentations
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg 
            viewBox="0 0 1440 320" 
            preserveAspectRatio="none" 
            className="relative w-full h-24 text-white"
          >
            <path 
              fill="currentColor" 
              d="M0,192L48,208C96,224,192,256,288,261.3C384,267,480,245,576,224C672,203,768,181,864,186.7C960,192,1056,224,1152,229.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Explore Our Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover presentation templates tailored to your professional needs across diverse domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesData.map((category) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.name} 
                className={`rounded-lg border bg-white shadow-sm hover:shadow-lg transition-all duration-300 ${category.color} cursor-pointer`}
                onClick={() => handleCategoryClick(category)}
              >
                <div className={`p-6 bg-gradient-to-r ${category.backgroundGradient} relative`}>
                  <div className="absolute top-4 right-4 text-gray-600">
                    <IconComponent size={32} />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {category.name}
                  </h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {category.presentations} Presentations
                    </span>
                    <Button variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Category Details Dialog */}
      <Dialog 
        open={!!selectedCategory} 
        onClose={() => setSelectedCategory(null)}
      >
        {selectedCategory && (
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {selectedCategory.name} Category
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Subdomains</h3>
                <ul className="space-y-2">
                  {selectedCategory.subdomain.map((domain) => (
                    <li 
                      key={domain} 
                      className="bg-gray-100 px-4 py-2 rounded-md text-gray-700"
                    >
                      {domain}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Top Presentations</h3>
                <ul className="space-y-2">
                  {selectedCategory.topPresentations.map((presentation) => (
                    <li 
                      key={presentation} 
                      className="bg-gray-100 px-4 py-2 rounded-md text-gray-700"
                    >
                      {presentation}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </Dialog>
    </div>
  );
};

export default Categories;