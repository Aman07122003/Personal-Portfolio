import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  getUserProfile,
  getUserRepos,
  getPopularRepos,
  getContributions,
  getUserFollowers,
  getUserFollowing,
  getRepoLanguages,
} from "./API/api";
import { FiGithub, FiUsers, FiStar, FiActivity, FiCalendar } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const Stats = () => {
  const username = "Aman07122003";
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [popular, setPopular] = useState([]);
  const [contributions, setContributions] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [languages, setLanguages] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        setError(null);

        const [
          profileData,
          reposData,
          popularData,
          contributionsData,
          followersData,
          followingData,
        ] = await Promise.all([
          getUserProfile(username),
          getUserRepos(username, 5),
          getPopularRepos(username, 5),
          getContributions(username),
          getUserFollowers(username, 5),
          getUserFollowing(username, 5),
        ]);

        // Get languages for the most popular repo
        const popularRepo = popularData[0];
        if (popularRepo) {
          const langs = await getRepoLanguages(username, popularRepo.name);
          setLanguages(langs);
        }

        setProfile(profileData);
        setRepos(reposData);
        setPopular(popularData);
        setContributions(contributionsData);
        setFollowers(followersData);
        setFollowing(followingData);
      } catch (err) {
        console.error("Error fetching stats:", err);
        setError("Failed to load GitHub stats. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-6 text-center text-red-400"
      >
        {error}
      </motion.div>
    );
  }

  // Calculate most used language
  const totalBytes = Object.values(languages).reduce((sum, val) => sum + val, 0);
  const languagesArray = Object.entries(languages)
    .map(([name, bytes]) => ({
      name,
      percentage: Math.round((bytes / totalBytes) * 100),
    }))
    .sort((a, b) => b.percentage - a.percentage);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-white max-w-6xl mx-auto"
    >
      {/* Profile Card */}
      <motion.div
        variants={cardVariants}
        className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl p-5 flex flex-col items-center text-center border border-white/20 backdrop-blur-sm"
      >
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          src={profile.avatar_url}
          alt="avatar"
          className="w-24 h-24 rounded-full border-2 border-white/40 mb-4"
        />
        <h2 className="text-xl font-bold">{profile.name}</h2>
        <p className="text-sm text-gray-300 mt-1">{profile.bio}</p>

        <div className="flex gap-4 mt-4">
          <motion.div variants={itemVariants} className="flex items-center">
            <FiUsers className="mr-1" />
            <span>{profile.followers}</span>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-center">
            <FiUsers className="mr-1" />
            <span>{profile.following}</span>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-center">
            <FiActivity className="mr-1" />
            <span>{profile.public_repos}</span>
          </motion.div>
        </div>

        <motion.a
          variants={itemVariants}
          href={profile.html_url}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-4 py-2 bg-white/10 rounded-lg flex items-center gap-2 hover:bg-white/20 transition-colors"
        >
          <FaGithub />
          View Profile
        </motion.a>
      </motion.div>


      {/* Language Breakdown */}
      {languagesArray.length > 0 && (
        <motion.div
          variants={cardVariants}
          className="bg-gradient-to-br from-pink-900/50 to-rose-900/50 rounded-xl p-5 border border-white/20 backdrop-blur-sm"
        >
          <h3 className="text-lg font-semibold mb-4">Language Breakdown</h3>
          <div className="h-2 bg-white/10 rounded-full mb-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1 }}
              className="h-full flex"
            >
              {languagesArray.slice(0, 4).map((lang, index) => (
                <div
                  key={lang.name}
                  style={{
                    width: `${lang.percentage}%`,
                    backgroundColor: getLanguageColor(lang.name),
                  }}
                />
              ))}
            </motion.div>
          </div>
          <ul className="space-y-2">
            {languagesArray.slice(0, 5).map((lang) => (
              <motion.li
                key={lang.name}
                variants={itemVariants}
                className="flex justify-between items-center"
              >
                <div className="flex items-center">
                  <span
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: getLanguageColor(lang.name) }}
                  />
                  <span>{lang.name}</span>
                </div>
                <span className="font-medium">{lang.percentage}%</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Latest Repositories */}
      <motion.div
        variants={cardVariants}
        className="bg-gradient-to-br from-rose-900/50 to-orange-900/50 rounded-xl p-5 border border-white/20 backdrop-blur-sm"
      >
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <FiActivity /> Latest Repositories
        </h3>
        <ul className="space-y-3">
          {repos.map((repo) => (
            <motion.li
              key={repo.id}
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="flex justify-between items-center hover:text-blue-300 transition-colors"
              >
                <span className="truncate">{repo.name}</span>
                <div className="flex items-center gap-2">
                  <span className="flex items-center text-sm">
                    <FiStar className="mr-1" />
                    {repo.stargazers_count}
                  </span>
                  <span className="text-xs px-2 py-1 bg-white/10 rounded">
                    {repo.language || "Other"}
                  </span>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>

    </motion.div>
  );
};

// Helper function to get language colors
function getLanguageColor(language) {
  const colors = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Python: "#3572A5",
    Java: "#b07219",
    CSS: "#563d7c",
    HTML: "#e34c26",
    PHP: "#4F5D95",
    Ruby: "#701516",
    Go: "#00ADD8",
    Rust: "#dea584",
    Shell: "#89e051",
    "C++": "#f34b7d",
    C: "#555555",
    "C#": "#178600",
    Swift: "#ffac45",
    Kotlin: "#F18E33",
    Dart: "#00B4AB",
    Elixir: "#6e4a7e",
    Clojure: "#db5855",
    default: "#586069",
  };

  return colors[language] || colors.default;
}

export default Stats;