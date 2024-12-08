import React, { useState } from 'react';
import { CreditCard, Lock } from 'lucide-react';

const Checkout = () => {
  const [formData, setFormData] = useState({ 
    cardNumber: '', 
    expiry: '', 
    cvv: '',
    name: '',
    email: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    
    // Basic validation
    if (value) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
    if (!formData.expiry) newErrors.expiry = 'Expiry date is required';
    if (!formData.cvv) newErrors.cvv = 'CVV is required';
    if (!formData.name) newErrors.name = 'Cardholder name is required';
    if (!formData.email) newErrors.email = 'Email is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Simulate payment processing
        alert('Payment Processing...');
        // Here you would typically integrate with a payment gateway
        setTimeout(() => {
          alert('Payment Successful! Thank you for your purchase.');
          setFormData({ cardNumber: '', expiry: '', cvv: '', name: '', email: '' });
        }, 1500);
      } catch (error) {
        alert('Payment failed. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <CreditCard className="w-12 h-12 text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-800">Secure Checkout</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Cardholder Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 
                ${errors.name ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'}`}
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 
                ${errors.email ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'}`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Card Number</label>
            <input 
              type="text" 
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 
                ${errors.cardNumber ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'}`}
              placeholder="1234 5678 9012 3456"
            />
            {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Expiry Date</label>
              <input 
                type="text" 
                name="expiry"
                value={formData.expiry}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 
                  ${errors.expiry ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'}`}
                placeholder="MM/YY"
              />
              {errors.expiry && <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">CVV</label>
              <input 
                type="text" 
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 
                  ${errors.cvv ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'}`}
                placeholder="123"
              />
              {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
          >
            <Lock className="w-5 h-5 mr-2" />
            Pay Now
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-500 flex items-center justify-center">
          <Lock className="w-4 h-4 mr-2 text-green-500" />
          Your payment is secure and encrypted
        </div>
      </div>
    </div>
  );
};

export default Checkout;