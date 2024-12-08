import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileTextIcon, 
  SearchIcon, 
  StarIcon, 
  ShoppingCartIcon, 
  CheckIcon, 
  LightbulbIcon, 
  PresentationIcon,
  LayoutGridIcon,
  CodeIcon,
  ZapIcon,
  AwardIcon,
  UsersIcon,
  BookOpenIcon
} from 'lucide-react';

const PresentationCard = ({ title, price, thumbnail, category, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white/90 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-3xl relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-blue-600 bg-opacity-80 flex items-center justify-center animate-fade-in">
            <button 
              onClick={onClick}
              className="bg-white text-blue-700 px-6 py-3 rounded-full flex items-center hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              <ShoppingCartIcon className="w-6 h-6 mr-2" />
              Quick View
            </button>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-2xl font-bold text-blue-900">{title}</h3>
          <span className="text-emerald-600 font-bold text-xl">${price}</span>
        </div>
        <div className="flex items-center text-blue-600">
          <FileTextIcon className="w-5 h-5 mr-2" />
          <span className="font-medium">{category}</span>
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ name, role, quote, avatar }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-500 hover:scale-105">
    <p className="italic text-gray-600 mb-4">"{quote}"</p>
    <div className="flex items-center">
      <img 
        src={avatar} 
        alt={name} 
        className="w-12 h-12 rounded-full mr-4 object-cover"
      />
      <div>
        <h4 className="font-bold text-blue-900">{name}</h4>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  </div>
);

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  
  const featuredPresentations = [
    { 
      id: 1, 
      title: 'Marketing Mastery', 
      price: 29, 
      thumbnail: '/assets/images/marketing-strategy.jpg',
      category: 'Business Strategy',
      description: 'Advanced marketing strategy blueprint for innovative businesses.'
    },
    { 
      id: 2, 
      title: 'Startup Launchpad', 
      price: 39, 
      thumbnail: '/assets/images/business-plan.jpg',
      category: 'Entrepreneurship',
      description: 'Comprehensive startup framework for visionary founders.'
    },
    { 
      id: 3, 
      title: 'Pitch Perfect', 
      price: 45, 
      thumbnail: '/assets/images/sales-pitch.jpg',
      category: 'Sales Excellence',
      description: 'Transformative pitch deck that captivates investors.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director, Tech Innovations',
      quote: 'These presentation templates transformed our pitch deck and helped us secure $2M in funding!',
      avatar: '/assets/images/avatar-1.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Startup Founder, DataSync',
      quote: 'Incredibly professional designs that speak directly to our target investors.',
      avatar: '/assets/images/avatar-2.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Sales Manager, Global Solutions',
      quote: 'Our sales conversions increased by 40% after using these presentation templates.',
      avatar: '/assets/images/avatar-3.jpg'
    }
  ];

  const filteredPresentations = featuredPresentations.filter(presentation => 
    presentation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    presentation.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const animationTimer = setTimeout(() => setIsAnimating(true), 500);
    return () => clearTimeout(animationTimer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-16 py-20 relative z-10 text-center">
          <h1 className={`text-5xl md:text-6xl font-extrabold mb-6 transform transition-all duration-1000 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Elevate Your Presentations
          </h1>
          <p className={`text-xl mb-10 max-w-2xl mx-auto opacity-80 transform transition-all duration-1000 delay-300 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Unlock professional-grade presentation templates that transform ideas into compelling visual stories
          </p>
          
          {/* Search Bar */}
          <div className={`max-w-xl mx-auto relative transform transition-all duration-1000 delay-500 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <input 
              type="text"
              placeholder="Search by title or category"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
            />
            <SearchIcon className="absolute right-6 top-1/2 transform -translate-y-1/2 text-blue-500" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 lg:px-16 py-20">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { 
              Icon: StarIcon, 
              color: "text-blue-600", 
              title: "Premium Quality", 
              description: "Meticulously crafted templates by industry-leading designers" 
            },
            { 
              Icon: CheckIcon, 
              color: "text-green-600", 
              title: "Seamless Customization", 
              description: "Fully adaptive templates that reflect your unique brand identity" 
            },
            { 
              Icon: LightbulbIcon, 
              color: "text-purple-600", 
              title: "Creative Insights", 
              description: "Built-in design tips to elevate your presentation game" 
            }
          ].map(({ Icon, color, title, description }, index) => (
            <div 
              key={title} 
              className={`text-center p-6 bg-white rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${color}`}
            >
              <Icon className={`mx-auto mb-4 w-16 h-16 ${color}`} />
              <h3 className="text-2xl font-bold mb-3 text-blue-900">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Presentations */}
      <div className="container mx-auto px-4 lg:px-16 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Featured Presentations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPresentations.length > 0 ? (
            filteredPresentations.map((presentation) => (
              <PresentationCard
                key={presentation.id}
                title={presentation.title}
                price={presentation.price}
                thumbnail={presentation.thumbnail}
                category={presentation.category}
                onClick={() => alert(`View details for ${presentation.title}`)}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-blue-500 bg-blue-50 p-10 rounded-xl">
              No presentations found matching your search
            </div>
          )}
        </div>
      </div>

      {/* Unique Selling Points */}
      <div className="container mx-auto px-4 lg:px-16 py-20 bg-blue-50">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Why Choose Our Templates?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { 
              Icon: LayoutGridIcon, 
              title: "Versatile Designs", 
              description: "Templates that work across industries and presentation styles" 
            },
            { 
              Icon: ZapIcon, 
              title: "Quick Customization", 
              description: "Easily modify colors, fonts, and layouts in minutes" 
            },
            { 
              Icon: CodeIcon, 
              title: "Modern Aesthetics", 
              description: "Cutting-edge design principles built into every template" 
            }
          ].map(({ Icon, title, description }) => (
            <div 
              key={title} 
              className="text-center p-6 bg-white rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105"
            >
              <Icon className="mx-auto mb-4 w-16 h-16 text-blue-600" />
              <h3 className="text-2xl font-bold mb-3 text-blue-900">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 lg:px-16 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>

      {/* Resources and Support */}
      <div className="container mx-auto px-4 lg:px-16 py-20 bg-blue-50">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Resources & Support</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { 
              Icon: BookOpenIcon, 
              title: "Free Guides", 
              description: "Comprehensive guides to improve your presentation skills" 
            },
            { 
              Icon: UsersIcon, 
              title: "Community Support", 
              description: "24/7 support and a vibrant community of professionals" 
            },
            { 
              Icon: AwardIcon, 
              title: "Quality Guarantee", 
              description: "100% satisfaction guarantee on all our templates" 
            }
          ].map(({ Icon, title, description }) => (
            <div 
              key={title} 
              className="text-center p-6 bg-white rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105"
            >
              <Icon className="mx-auto mb-4 w-16 h-16 text-blue-600" />
              <h3 className="text-2xl font-bold mb-3 text-blue-900">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Revolutionize Your Presentations?</h2>
            <p className="text-xl mb-10 opacity-80">
              Discover a world of professional, eye-catching presentation templates that tell your story with impact
            </p>
            <Link 
              to="/catalog" 
              className="bg-white text-blue-700 px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-all transform hover:scale-105 inline-block shadow-lg"
            >
              Explore Templates
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;