import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Charities API
export const charitiesAPI = {
  // Get all charities
  getAll: async (language = 'en') => {
    const response = await api.get(`/api/charities?language=${language}`);
    return response.data;
  },

  // Get charity by ID
  getById: async (id, language = 'en') => {
    const response = await api.get(`/api/charities/${id}?language=${language}`);
    return response.data;
  },

  // Track charity click
  trackClick: async (id, referrer = '') => {
    const response = await api.post(`/api/charities/${id}/click`, { referrer });
    return response.data;
  },

  // Get charity stats
  getStats: async (id) => {
    const response = await api.get(`/api/charities/${id}/stats`);
    return response.data;
  },
};

// Stories API
export const storiesAPI = {
  // Get all stories
  getAll: async (language = 'en') => {
    const response = await api.get(`/api/stories?language=${language}`);
    return response.data;
  },

  // Get story by ID
  getById: async (id, language = 'en') => {
    const response = await api.get(`/api/stories/${id}?language=${language}`);
    return response.data;
  },
};

// Error handler
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;