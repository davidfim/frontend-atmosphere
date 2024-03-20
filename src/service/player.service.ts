import axios from "axios";

const BASE_URL = "http://localhost:8080";

class PlayerService {
  async createPlayer(data = {}) {
    try {
      const response = await axios.post(`${BASE_URL}/player`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

const playerService = new PlayerService();

export default playerService;
