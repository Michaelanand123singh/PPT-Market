import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ShoppingCartIcon, 
  FileTextIcon, 
  TagIcon, 
  DownloadIcon, 
  StarIcon, 
  CheckIcon 
} from 'lucide-react';

const PresentationDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const presentation = {
    id: 1,
    title: 'Marketing Strategy Presentation',
    description: 'A comprehensive, professionally designed marketing strategy presentation template that covers market analysis, competitive landscape, target audience segmentation, and strategic marketing initiatives. Perfect for startups, SMEs, and marketing professionals.',
    price: 20,
    category: 'Marketing',
    slides: 25,
    format: 'PowerPoint, Google Slides, Keynote',
    previewImages: [
      '/assets/images/marketing-strategy-preview-1.jpg',
      '/assets/images/marketing-strategy-preview-2.jpg',
      '/assets/images/marketing-strategy-preview-3.jpg'
    ],
    features: [
      'Fully editable design',
      'Multiple color schemes',
      'Easy to customize',
      'Professional layout',
      'High-resolution graphics'
    ]
  };

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${presentation.title} to cart`);
  };

  if (parseInt(id, 10) !== presentation.id) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Presentation Not Found</h2>
          <p className="text-gray-600 mb-6">The presentation you're looking for doesn't exist.</p>
          <Link 
            to="/" 
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Side - Image Gallery */}
        <div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
            <img 
              src={presentation.previewImages[0]} 
              alt={presentation.title} 
              className="w-full h-96 object-cover"
            />
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {presentation.previewImages.slice(1).map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`Preview ${index + 2}`}
                className="rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Right Side - Details */}
        <div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">{presentation.title}</h1>
            
            <div className="flex items-center mb-4 space-x-4">
              <div className="flex items-center text-yellow-500">
                {[...Array(4)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 fill-current" />
                ))}
                <span className="text-gray-600 ml-2">(4.5)</span>
              </div>
              <span className="text-green-600 font-semibold">In Stock</span>
            </div>

            <p className="text-gray-600 mb-6">{presentation.description}</p>

            <div className="mb-6 grid md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <TagIcon className="w-6 h-6 mr-2 text-blue-600" />
                <span>Category: {presentation.category}</span>
              </div>
              <div className="flex items-center">
                <FileTextIcon className="w-6 h-6 mr-2 text-green-600" />
                <span>Slides: {presentation.slides}</span>
              </div>
              <div className="flex items-center">
                <FileTextIcon className="w-6 h-6 mr-2 text-purple-600" />
                <span>Format: {presentation.format}</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {presentation.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-2 text-blue-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <span className="text-3xl font-bold text-green-600">${presentation.price}</span>
              <div className="flex items-center border rounded-full">
                <button 
                  onClick={() => handleQuantityChange(-1)}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-l-full"
                >
                  -
                </button>
                <span className="px-4">{quantity}</span>
                <button 
                  onClick={() => handleQuantityChange(1)}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-r-full"
                >
                  +
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <button 
                onClick={handleAddToCart}
                className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition flex items-center justify-center"
              >
                <ShoppingCartIcon className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
              <button 
                className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-full hover:bg-blue-50 transition flex items-center justify-center"
              >
                <DownloadIcon className="w-5 h-5 mr-2" />
                Download Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationDetails;