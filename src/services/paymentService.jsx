// services/paymentService.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const RAZORPAY_KEY_ID = process.env.REACT_APP_RAZORPAY_KEY_ID || 'rzp_test_6Akbw5MLpCe24o';

/**
 * @typedef {Object} PaymentResponse
 * @property {boolean} success - Whether the operation was successful
 * @property {string} orderId - The ID of the created order
 * @property {string} [paymentLink] - The UPI payment link (for UPI payments)
 */

/**
 * @typedef {Object} VerificationResponse
 * @property {boolean} success - Whether the payment was successful
 * @property {string} [downloadUrl] - URL to download the template (present if success is true)
 * @property {string} [message] - Error message (present if success is false)
 */

export const paymentService = {
  /**
   * Loads the Razorpay SDK
   * @returns {Promise<void>}
   */
  async loadRazorpaySDK() {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      document.body.appendChild(script);
      script.onload = resolve;
    });
  },

  /**
   * Initiates a payment for a template
   * @param {string} templateId - ID of the template being purchased
   * @param {string} email - Customer's email address
   * @param {number} amount - Price of the template
   * @returns {Promise<PaymentResponse>}
   */
  async initiatePayment(templateId, email, amount) {
    try {
      // Create order on backend
      const response = await axios.post(
        `${API_URL}/api/payment/initiate`,
        {
          templateId,
          email,
          amount
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (!response.data.success) {
        throw new Error(response.data.message || 'Payment initiation failed');
      }

      // Load Razorpay SDK
      await this.loadRazorpaySDK();

      // Create Razorpay payment instance
      return new Promise((resolve, reject) => {
        const options = {
          key: RAZORPAY_KEY_ID,
          amount: amount * 100, // Convert to paise
          currency: 'INR',
          name: 'Template Purchase',
          description: `Template ID: ${templateId}`,
          order_id: response.data.orderId,
          prefill: {
            email: email
          },
          handler: async (paymentResponse) => {
            try {
              const verificationResponse = await this.verifyPayment({
                razorpay_payment_id: paymentResponse.razorpay_payment_id,
                razorpay_order_id: paymentResponse.razorpay_order_id,
                razorpay_signature: paymentResponse.razorpay_signature,
                templateId,
                email
              });
              resolve(verificationResponse);
            } catch (error) {
              reject(new Error('Payment verification failed'));
            }
          },
          modal: {
            ondismiss: () => {
              reject(new Error('Payment cancelled by user'));
            }
          },
          theme: {
            color: '#3399cc'
          }
        };

        const razorpayInstance = new window.Razorpay(options);
        razorpayInstance.open();
      });
    } catch (error) {
      if (error.response?.status === 429) {
        throw new Error('Too many payment attempts. Please try again later.');
      }
      throw new Error(
        error.response?.data?.message || 
        error.message || 
        'Payment initiation failed'
      );
    }
  },

  /**
   * Verifies the status of a payment
   * @param {Object} paymentDetails - Payment verification details
   * @param {string} paymentDetails.razorpay_payment_id - Razorpay payment ID
   * @param {string} paymentDetails.razorpay_order_id - Razorpay order ID
   * @param {string} paymentDetails.razorpay_signature - Razorpay signature
   * @param {string} paymentDetails.templateId - Template ID
   * @param {string} paymentDetails.email - Customer email
   * @returns {Promise<VerificationResponse>}
   */
  async verifyPayment(paymentDetails) {
    try {
      const response = await axios.post(
        `${API_URL}/api/payment/verify`,
        paymentDetails,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (!response.data.success && !response.data.downloadUrl) {
        throw new Error(response.data.message || 'Payment verification failed');
      }

      return response.data;
    } catch (error) {
      if (error.response?.status === 401) {
        throw new Error('Session expired. Please refresh and try again.');
      }

      throw new Error(
        error.response?.data?.message || 
        error.message || 
        'Payment verification failed'
      );
    }
  },

  /**
   * Checks if a payment has expired
   * @param {string} orderId - ID of the order to check
   * @returns {Promise<boolean>}
   */
  async isPaymentExpired(orderId) {
    try {
      const response = await axios.get(
        `${API_URL}/api/payment/status/${orderId}`,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      return response.data.expired || false;
    } catch (error) {
      console.error('Error checking payment expiration:', error);
      return true; // Assume expired on error for safety
    }
  },

  /**
   * Cancels a pending payment
   * @param {string} orderId - ID of the order to cancel
   * @returns {Promise<{ success: boolean, message?: string }>}
   */
  async cancelPayment(orderId) {
    try {
      const response = await axios.post(
        `${API_URL}/api/payment/cancel`,
        { orderId },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 
        error.message || 
        'Failed to cancel payment'
      );
    }
  }
};