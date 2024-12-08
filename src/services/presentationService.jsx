import api from './api';

export const fetchPresentations = async () => {
  try {
    const response = await api.get('/presentations');
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to fetch presentations';
  }
};

export const fetchPresentationById = async (id) => {
  try {
    const response = await api.get(`/presentations/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to fetch presentation details';
  }
};

export const uploadPresentation = async (data) => {
  try {
    const response = await api.post('/presentations', data);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to upload presentation';
  }
};
