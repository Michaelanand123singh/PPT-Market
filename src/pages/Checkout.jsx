// pages/Checkout.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { paymentService } from '../services/paymentService';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Spinner from '../components/common/Spinner';

const Checkout = ({ template }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [paymentLink, setPaymentLink] = useState('');
  const dispatch = useDispatch();

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await paymentService.initiatePayment(
        template.id,
        email,
        template.price
      );
      
      setPaymentLink(response.paymentLink);
      
      // Start polling for payment status
      pollPaymentStatus(response.orderId);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const pollPaymentStatus = async (orderId) => {
    const pollInterval = setInterval(async () => {
      try {
        const { success, downloadUrl } = await paymentService.verifyPayment(orderId);
        if (success) {
          clearInterval(pollInterval);
          handlePaymentSuccess(downloadUrl);
        }
      } catch (err) {
        console.error('Payment status check failed:', err);
      }
    }, 5000); // Poll every 5 seconds
    
    // Stop polling after 5 minutes
    setTimeout(() => clearInterval(pollInterval), 300000);
  };

  const handlePaymentSuccess = (downloadUrl) => {
    dispatch({
      type: 'PAYMENT_SUCCESS',
      payload: { downloadUrl }
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      
      <div className="mb-6">
        <h3 className="font-semibold">Template Details:</h3>
        <p>{template.name}</p>
        <p className="text-lg font-bold">₹{template.price}</p>
      </div>

      <form onSubmit={handlePayment}>
        <Input
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
        />

        {error && (
          <div className="text-red-500 mb-4">{error}</div>
        )}

        {paymentLink ? (
          <div className="mb-4">
            <p className="mb-2">Complete payment using UPI:</p>
            <a
              href={paymentLink}
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open UPI Payment
            </a>
          </div>
        ) : (
          <Button
            type="submit"
            disabled={loading}
            className="w-full"
          >
            {loading ? <Spinner /> : 'Proceed to Payment'}
          </Button>
        )}
      </form>
    </div>
  );
};

export default Checkout;