import React, { useState } from 'react';
import { MailIcon, UserIcon, MessageCircleIcon } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '',
    phone: ''
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
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Simulate message sending
        alert('Sending message...');
        setTimeout(() => {
          alert('Your message has been sent successfully!');
          setFormData({ name: '', email: '', message: '', phone: '' });
        }, 1500);
      } catch (error) {
        alert('Message sending failed. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <MessageCircleIcon className="w-12 h-12 text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2 flex items-center">
              <UserIcon className="w-5 h-5 mr-2 text-gray-500" />
              Name
            </label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 
                ${errors.name ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'}`}
              placeholder="Your Full Name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2 flex items-center">
              <MailIcon className="w-5 h-5 mr-2 text-gray-500" />
              Email
            </label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 
                ${errors.email ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'}`}
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2 flex items-center">
              <MessageCircleIcon className="w-5 h-5 mr-2 text-gray-500" />
              Phone (Optional)
            </label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="(123) 456-7890"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2 flex items-center">
              <MessageCircleIcon className="w-5 h-5 mr-2 text-gray-500" />
              Message
            </label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 h-32 
                ${errors.message ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'}`}
              placeholder="Write your message here..."
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-500">
          We'll get back to you within 24 hours
        </div>
      </div>
    </div>
  );
};

export default Contact;