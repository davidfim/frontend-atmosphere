import { create } from "zustand";
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

  getMatches: async () => {
    try {
      // Call the service function to fetch user data
      const response = await apiService.getMatches();
      console.log(response);

      const data = response.map((match) => {
        return {
          ...match,
          title: `${
            match.type === "pre-season"
              ? "Pre Season"
              : "Atmosphere Champion League"
          } - Sabtu 30 Maret (${match.start_time} - ${match.end_time})`,
        };
      });

      set(() => ({ matches: data }));
    } catch (error) {
      console.error("Error creating user data:", error);
    }
  },
}));

export default useStore;
