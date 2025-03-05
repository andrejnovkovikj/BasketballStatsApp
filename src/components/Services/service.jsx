// src/services/teamService.js
import { BalldontlieAPI } from "@balldontlie/sdk";

// Initialize the API client with your API key
const api = new BalldontlieAPI({ apiKey: "c77b5e0f-8ef9-4400-b07d-2e54dbe5b379" });

const service = {
    // Fetch all teams
    getAllTeams: async () => {
        try {
            const response = await api.nba.getTeams();
            return response.data;  // The teams data comes inside 'data'
        } catch (error) {
            console.error('Error fetching teams:', error);
            throw error; // Propagate the error for handling in the component
        }
    },
    getAllPlayers: async () => {
        try {
            const response = await api.nba.getPlayers();
            return response.data;  // The teams data comes inside 'data'
        } catch (error) {
            console.error('Error fetching players:', error);
            throw error; // Propagate the error for handling in the component
        }
    },

    // Fetch a specific team by ID (if needed)
    getTeamById: async (id) => {
        try {
            const response = await api.nba.getTeam(id);
            return response.data;
        } catch (error) {
            console.error('Error fetching team:', error);
            throw error;
        }
    }
};

export default service;
