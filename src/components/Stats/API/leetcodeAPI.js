import axios from "axios";

const BASE_URL = "https://leetcode-api-faisalshohag.vercel.app";

// Create axios instance
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// Fetch single user profile & stats
export const getUserProfile = async (username) => {
  try {
    const { data } = await api.get(`/${username}`);
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch user profile: ${error.message}`);
  }
};
