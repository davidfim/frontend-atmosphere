import create from "zustand";
import apiService from "./service.ts";

// Define your store
const useStore = create((set) => ({
  player: null,
  matches: [],

  setUser: (user) => set({ user }),
  setMatches: (matches) => set({ matches }),

  createPlayer: async (data) => {
    try {
      // Call the service function to fetch user data
      const response = await apiService.createPlayer(data);
      console.log(response);
    } catch (error) {
      console.error("Error creating user data:", error);
    }
  },
}));

export default useStore;
