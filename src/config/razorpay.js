// config/razorpay.js
export const RAZORPAY_CONFIG = {
    key_id: process.env.REACT_APP_RAZORPAY_KEY_ID || 'rzp_test_6Akbw5MLpCe24o',
    key_secret: process.env.REACT_APP_RAZORPAY_KEY_SECRET || 'tqqQfDFhh0KxI50JpEvaRt0k',
    currency: 'INR',
    name: 'Your Company Name',
    description: 'Template Purchase',
    theme: {
      color: '#3399cc'
    }
  };