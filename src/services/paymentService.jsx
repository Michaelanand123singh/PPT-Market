import api from './api';

export const processPayment = async (paymentData) => {
  try {
    const response = await api.post('/payments', paymentData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Payment processing failed';
  }
};

export const fetchTransactionHistory = async () => {
  try {
    const response = await api.get('/transactions');
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to fetch transaction history';
  }
};
