const mockData = {
  presentations: [
    { id: 1, title: 'Marketing Strategy', price: 25 },
    { id: 2, title: 'Business Plan', price: 30 },
    { id: 3, title: 'Technology Trends', price: 20 },
  ],
  user: {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
};

const api = {
  get: async (url) => {
    if (url === '/presentations') {
      return { data: mockData.presentations };
    }
    if (url === '/user') {
      return { data: mockData.user };
    }
    throw new Error('Unknown endpoint');
  },

  post: async (url, payload) => {
    if (url === '/auth/login') {
      if (payload.email === 'user@example.com' && payload.password === 'password') {
        return { data: { token: 'mock-token', user: mockData.user } };
      }
      throw new Error('Invalid credentials');
    }
    throw new Error('Unknown endpoint');
  },
};

export default api;
