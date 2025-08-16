import axios from "axios";

const BASE_URL = "https://api.github.com";
// api.js
const API_KEY = process.env.REACT_APP_API_KEY;


// Axios instance with authentication
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `token ${API_KEY}`,
    Accept: "application/vnd.github.v3+json",
  },
});

/**
 * USER ENDPOINTS
 */

// Get user profile
export const getUserProfile = async (username) => {
  try {
    const { data } = await api.get(`/users/${username}`);
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch user profile: ${error.message}`);
  }
};

// Get user repositories
export const getUserRepos = async (username, perPage = 10, page = 1) => {
  try {
    const { data } = await api.get(
      `/users/${username}/repos?sort=updated&per_page=${perPage}&page=${page}`
    );
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch user repositories: ${error.message}`);
  }
};

// Get user organizations
export const getUserOrgs = async (username) => {
  try {
    const { data } = await api.get(`/users/${username}/orgs`);
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch user organizations: ${error.message}`);
  }
};

// Get user followers
export const getUserFollowers = async (username, perPage = 10) => {
  try {
    const { data } = await api.get(
      `/users/${username}/followers?per_page=${perPage}`
    );
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch user followers: ${error.message}`);
  }
};

// Get user following
export const getUserFollowing = async (username, perPage = 10) => {
  try {
    const { data } = await api.get(
      `/users/${username}/following?per_page=${perPage}`
    );
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch user following: ${error.message}`);
  }
};

// Get user events (recent activity)
export const getUserEvents = async (username, perPage = 10) => {
  try {
    const { data } = await api.get(
      `/users/${username}/events?per_page=${perPage}`
    );
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch user events: ${error.message}`);
  }
};

// Get user's starred repositories
export const getUserStarredRepos = async (username, perPage = 10) => {
  try {
    const { data } = await api.get(
      `/users/${username}/starred?per_page=${perPage}`
    );
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch starred repositories: ${error.message}`);
  }
};

// Get user's gists
export const getUserGists = async (username, perPage = 10) => {
  try {
    const { data } = await api.get(
      `/users/${username}/gists?per_page=${perPage}`
    );
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch user gists: ${error.message}`);
  }
};

// Check if a user follows another user
export const checkIfUserFollows = async (username, targetUser) => {
  try {
    await api.get(`/users/${username}/following/${targetUser}`);
    return true;
  } catch (error) {
    if (error.response?.status === 404) return false;
    throw new Error(`Failed to check follow status: ${error.message}`);
  }
};

/**
 * REPOSITORY ENDPOINTS
 */

// Get repository details
export const getRepoDetails = async (owner, repo) => {
  try {
    const { data } = await api.get(`/repos/${owner}/${repo}`);
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch repository details: ${error.message}`);
  }
};

// Get repository languages
export const getRepoLanguages = async (owner, repo) => {
  try {
    const { data } = await api.get(`/repos/${owner}/${repo}/languages`);
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch repository languages: ${error.message}`);
  }
};

// Get repository contributors
export const getRepoContributors = async (owner, repo, perPage = 10) => {
  try {
    const { data } = await api.get(
      `/repos/${owner}/${repo}/contributors?per_page=${perPage}`
    );
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch repository contributors: ${error.message}`);
  }
};

// Get repository commits
export const getRepoCommits = async (owner, repo, perPage = 10) => {
  try {
    const { data } = await api.get(
      `/repos/${owner}/${repo}/commits?per_page=${perPage}`
    );
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch repository commits: ${error.message}`);
  }
};

// Get repository issues
export const getRepoIssues = async (owner, repo, state = "open", perPage = 10) => {
  try {
    const { data } = await api.get(
      `/repos/${owner}/${repo}/issues?state=${state}&per_page=${perPage}`
    );
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch repository issues: ${error.message}`);
  }
};

// Get repository pull requests
export const getRepoPulls = async (owner, repo, state = "open", perPage = 10) => {
  try {
    const { data } = await api.get(
      `/repos/${owner}/${repo}/pulls?state=${state}&per_page=${perPage}`
    );
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch pull requests: ${error.message}`);
  }
};

// Get repository stargazers
export const getRepoStargazers = async (owner, repo, perPage = 10) => {
  try {
    const { data } = await api.get(
      `/repos/${owner}/${repo}/stargazers?per_page=${perPage}`
    );
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch stargazers: ${error.message}`);
  }
};

// Get repository forks
export const getRepoForks = async (owner, repo, perPage = 10) => {
  try {
    const { data } = await api.get(
      `/repos/${owner}/${repo}/forks?per_page=${perPage}`
    );
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch repository forks: ${error.message}`);
  }
};

// Get repository README
export const getRepoReadme = async (owner, repo) => {
  try {
    const { data } = await api.get(`/repos/${owner}/${repo}/readme`);
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch README: ${error.message}`);
  }
};

// Get repository topics
export const getRepoTopics = async (owner, repo) => {
  try {
    const { data } = await api.get(`/repos/${owner}/${repo}/topics`, {
      headers: {
        Accept: "application/vnd.github.mercy-preview+json",
      },
    });
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch repository topics: ${error.message}`);
  }
};

// Get repository releases
export const getRepoReleases = async (owner, repo, perPage = 10) => {
  try {
    const { data } = await api.get(
      `/repos/${owner}/${repo}/releases?per_page=${perPage}`
    );
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch repository releases: ${error.message}`);
  }
};

/**
 * SEARCH ENDPOINTS
 */

// Search repositories (global search)
export const searchRepos = async (
  query,
  sort = "stars",
  order = "desc",
  perPage = 10
) => {
  try {
    const { data } = await api.get(
      `/search/repositories?q=${query}&sort=${sort}&order=${order}&per_page=${perPage}`
    );
    return data.items;
  } catch (error) {
    throw new Error(`Failed to search repositories: ${error.message}`);
  }
};

// Get most popular repos by stars for a user
export const getPopularRepos = async (username, perPage = 10) => {
  try {
    const { data } = await api.get(
      `/search/repositories?q=user:${username}&sort=stars&order=desc&per_page=${perPage}`
    );
    return data.items;
  } catch (error) {
    throw new Error(`Failed to fetch popular repositories: ${error.message}`);
  }
};

/**
 * MISC ENDPOINTS
 */

// Get rate limit status
export const getRateLimit = async () => {
  try {
    const { data } = await api.get("/rate_limit");
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch rate limit: ${error.message}`);
  }
};

/**
 * THIRD-PARTY API INTEGRATIONS
 */

// Get contributions graph
export const getContributions = async (username) => {
  try {
    const { data } = await axios.get(
      `https://github-contributions-api.jogruber.de/v4/${username}`
    );
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch contributions: ${error.message}`);
  }
};

// Get trending repositories (unofficial API)
export const getTrendingRepos = async (language = "", since = "daily") => {
  try {
    const { data } = await axios.get(
      `https://gh-trending-api.herokuapp.com/repositories?language=${language}&since=${since}`
    );
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch trending repositories: ${error.message}`);
  }
};

// Get user activity feed (unofficial API)
export const getUserActivityFeed = async (username) => {
  try {
    const { data } = await axios.get(
      `https://api.github-stats.com/user/activity/${username}`
    );
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch user activity: ${error.message}`);
  }
};