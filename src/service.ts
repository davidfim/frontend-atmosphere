import axios from "axios";

const BASE_URL = "http://localhost:8080";

const apiService = {
  createPlayer: async (data = {}) => {
    try {
      const response = await axios.post(`${BASE_URL}/player`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  get: async (url, params = {}) => {
    try {
      const response = await axios.get(`${BASE_URL}${url}`, { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  post: async (url, data = {}) => {
    try {
      const response = await axios.post(`${BASE_URL}${url}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Add other methods like put, delete, etc. as needed
};

export default apiService;
