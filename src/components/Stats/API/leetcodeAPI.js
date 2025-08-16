import axios from 'axios';

const BASE_URL = 'https://leetcode-api-faisalshohag.vercel.app'; // Base URL for the API
const RATE_LIMIT_DELAY = 1000; // 1 second delay between requests to prevent rate limiting

// Create axios instance with rate limiting
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// Request interceptor for rate limiting
let lastRequestTime = 0;
api.interceptors.request.use(async (config) => {
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;
  
  if (timeSinceLastRequest < RATE_LIMIT_DELAY) {
    await new Promise(resolve => setTimeout(resolve, RATE_LIMIT_DELAY - timeSinceLastRequest));
  }
  
  lastRequestTime = Date.now();
  return config;
});

/**
 * USER PROFILE ENDPOINTS
 */

// Get basic user profile
export const getUserProfile = async (username) => {
  try {
    const { data } = await api.get(`/${username}`);
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch user profile: ${error.message}`);
  }
};

// Get user badges
export const getUserBadges = async (username) => {
  try {
    const { data } = await api.get(`/${username}/badges`);
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch user badges: ${error.message}`);
  }
};

// Get solved problems count
export const getSolvedProblems = async (username) => {
  try {
    const { data } = await api.get(`/${username}/solved`);
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch solved problems: ${error.message}`);
  }
};

// Get contest details
export const getContestDetails = async (username) => {
  try {
    const { data } = await api.get(`/${username}/contest`);
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch contest details: ${error.message}`);
  }
};

// Get contest history
export const getContestHistory = async (username) => {
  try {
    const { data } = await api.get(`/${username}/contest/history`);
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch contest history: ${error.message}`);
  }
};

// Get user submissions (default 20)
export const getUserSubmissions = async (username, limit = 20) => {
  try {
    const { data } = await api.get(`/${username}/submission?limit=${limit}`);
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch user submissions: ${error.message}`);
  }
};

// Get accepted submissions (default 20)
export const getAcceptedSubmissions = async (username, limit = 20) => {
  try {
    const { data } = await api.get(`/${username}/acSubmission?limit=${limit}`);
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch accepted submissions: ${error.message}`);
  }
};

// Get submission calendar
export const getSubmissionCalendar = async (username) => {
  try {
    const { data } = await api.get(`/${username}/calendar`);
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch submission calendar: ${error.message}`);
  }
};

/**
 * NEW ENDPOINTS
 */

// Get full profile details
export const getFullProfile = async (username) => {
  try {
    const { data } = await api.get(`/userProfile/${username}`);
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch full profile: ${error.message}`);
  }
};

// Get yearly calendar
export const getYearlyCalendar = async (username, year = new Date().getFullYear()) => {
  try {
    const { data } = await api.get(`/userProfileCalendar?username=${username}&year=${year}`);
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch yearly calendar: ${error.message}`);
  }
};

// Get language stats
export const getLanguageStats = async (username) => {
  try {
    const { data } = await api.get(`/languageStats?username=${username}`);
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch language stats: ${error.message}`);
  }
};

// Get question progress
export const getQuestionProgress = async (userSlug) => {
  try {
    const { data } = await api.get(`/userProfileUserQuestionProgressV2/${userSlug}`);
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch question progress: ${error.message}`);
  }
};

// Get skill stats
export const getSkillStats = async (username) => {
  try {
    const { data } = await api.get(`/skillStats/${username}`);
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch skill stats: ${error.message}`);
  }
};

// Get user contest ranking
export const getUserContestRanking = async (username) => {
  try {
    const { data } = await api.get(`/userContestRankingInfo/${username}`);
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch contest ranking: ${error.message}`);
  }
};

/**
 * DISCUSSION ENDPOINTS
 */

// Get trending discussions
export const getTrendingDiscussions = async (limit = 20) => {
  try {
    const { data } = await api.get(`/trendingDiscuss?first=${limit}`);
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch trending discussions: ${error.message}`);
  }
};

// Get discussion topic
export const getDiscussionTopic = async (topicId) => {
  try {
    const { data } = await api.get(`/discussTopic/${topicId}`);
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch discussion topic: ${error.message}`);
  }
};

// Get discussion comments
export const getDiscussionComments = async (topicId) => {
  try {
    const { data } = await api.get(`/discussComments/${topicId}`);
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch discussion comments: ${error.message}`);
  }
};

/**
 * PROBLEM ENDPOINTS
 */

// Get daily problem
export const getDailyProblem = async () => {
  try {
    const { data } = await api.get('/dailyQuestion');
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch daily problem: ${error.message}`);
  }
};

/**
 * UTILITY FUNCTIONS
 */

// Batch multiple requests with rate limiting
export const getBatchUserData = async (username) => {
  try {
    const [
      profile,
      badges,
      solved,
      contests,
      submissions,
      calendar,
      fullProfile,
      languageStats,
      contestRanking
    ] = await Promise.all([
      getUserProfile(username),
      getUserBadges(username),
      getSolvedProblems(username),
      getContestDetails(username),
      getAcceptedSubmissions(username, 5),
      getSubmissionCalendar(username),
      getFullProfile(username),
      getLanguageStats(username),
      getUserContestRanking(username)
    ]);

    return {
      profile,
      badges,
      solved,
      contests,
      submissions,
      calendar,
      fullProfile,
      languageStats,
      contestRanking
    };
  } catch (error) {
    throw new Error(`Failed to fetch batch data: ${error.message}`);
  }
};