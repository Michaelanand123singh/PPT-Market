// services/emailService.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

/**
 * @typedef {Object} EmailTemplate
 * @property {string} type - Type of email template ('payment_success' | 'payment_failed' | 'download_link')
 * @property {Object} data - Data to be inserted into the template
 */

export const emailService = {
  /**
   * Sends a payment confirmation email
   * @param {string} email - Recipient email address
   * @param {string} orderId - Order ID
   * @param {string} downloadUrl - URL to download the template
   * @returns {Promise<{ success: boolean, message: string }>}
   */
  async sendPaymentConfirmation(email, orderId, downloadUrl) {
    try {
      const response = await axios.post(`${API_URL}/api/email/send`, {
        to: email,
        template: {
          type: 'payment_success',
          data: {
            orderId,
            downloadUrl
          }
        }
      });
      return response.data;
    } catch (error) {
      console.error('Failed to send payment confirmation:', error);
      throw new Error(error.response?.data?.message || 'Failed to send email');
    }
  },

  /**
   * Sends a payment failure notification
   * @param {string} email - Recipient email address
   * @param {string} orderId - Order ID
   * @param {string} reason - Reason for payment failure
   * @returns {Promise<{ success: boolean, message: string }>}
   */
  async sendPaymentFailureNotification(email, orderId, reason) {
    try {
      const response = await axios.post(`${API_URL}/api/email/send`, {
        to: email,
        template: {
          type: 'payment_failed',
          data: {
            orderId,
            reason
          }
        }
      });
      return response.data;
    } catch (error) {
      console.error('Failed to send failure notification:', error);
      throw new Error(error.response?.data?.message || 'Failed to send email');
    }
  },

  /**
   * Resends the download link email
   * @param {string} email - Recipient email address
   * @param {string} downloadUrl - URL to download the template
   * @returns {Promise<{ success: boolean, message: string }>}
   */
  async resendDownloadLink(email, downloadUrl) {
    try {
      const response = await axios.post(`${API_URL}/api/email/send`, {
        to: email,
        template: {
          type: 'download_link',
          data: {
            downloadUrl
          }
        }
      });
      return response.data;
    } catch (error) {
      console.error('Failed to resend download link:', error);
      throw new Error(error.response?.data?.message || 'Failed to send email');
    }
  },

  /**
   * Validates an email address
   * @param {string} email - Email address to validate
   * @returns {boolean}
   */
  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
};