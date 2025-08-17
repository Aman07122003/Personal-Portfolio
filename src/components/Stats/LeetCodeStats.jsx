import React, { useEffect, useState } from "react";
import { getUserProfile } from "../Stats/API/leetcodeAPI";

const LeetCodeStats = ({ username = "Aman07122003" }) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getUserProfile(username);
        setStats(data);
      } catch (error) {
        console.error("Error fetching stats:", error);
        setError("Failed to load stats. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [username]);

  if (loading) {
    return (
      <div className="mx-auto p-4 w-full max-w-md bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl shadow-lg animate-pulse">
        <div className="flex justify-between items-center mb-4">
          <div className="h-6 w-32 bg-gray-700 rounded"></div>
          <div className="h-4 w-20 bg-gray-700 rounded"></div>
        </div>
        <div className="space-y-4">
          <div className="h-4 w-full bg-gray-700 rounded"></div>
          <div className="h-4 w-3/4 bg-gray-700 rounded"></div>
          <div className="grid grid-cols-3 gap-3 mt-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 bg-gray-700 rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="mx-auto p-4 w-full max-w-md bg-gradient-to-br from-gray-900 to-gray-800 border border-red-500/30 rounded-2xl shadow-lg">
        <p className="text-red-400 text-center py-8">{error || "Failed to load stats."}</p>
        <button 
          onClick={() => window.location.reload()}
          className="w-full py-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto p-4 w-full max-w-md bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:border-amber-500/30 hover:scale-[1.02]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.67 1.67 0 0 0-.463 1.176l1.156 9.842a1.682 1.682 0 0 0 1.464 1.466l9.842 1.156a1.665 1.665 0 0 0 1.175-.461l4.127-3.854 5.789-5.483a1.374 1.374 0 0 0 0-1.942L14.446.438A1.374 1.374 0 0 0 13.483 0zM9.57 8.367a1.284 1.284 0 0 1 1.82 0l.94.94 3.85-3.85a1.284 1.284 0 0 1 1.82 1.82l-3.85 3.85.94.94a1.284 1.284 0 0 1 0 1.82l-.94.94-3.85 3.85a1.284 1.284 0 0 1-1.82-1.82l3.85-3.85-.94-.94a1.284 1.284 0 0 1 0-1.82z"/>
          </svg>
          <h2 className="text-lg font-bold text-white">LeetCode Stats</h2>
        </div>
        <a
          href={`https://leetcode.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-xs md:text-sm text-amber-400 hover:text-amber-300 transition-colors group"
        >
          View Profile
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </a>
      </div>

      {/* Stats Content */}
      <div className="space-y-4 text-gray-300">
        {/* Ranking */}
        <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"/>
            </svg>
            <span className="text-sm">Global Ranking</span>
          </div>
          <span className="text-white font-bold">{stats.ranking.toLocaleString()}</span>
        </div>

        {/* Total Solved */}
        <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
            </svg>
            <span className="text-sm">Total Solved</span>
          </div>
          <span className="text-white font-bold">{stats.totalSolved}</span>
        </div>

        {/* Difficulty Breakdown */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          {/* Easy */}
          <div className="bg-green-500/10 p-3 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-colors">
            <div className="flex flex-col items-center">
              <span className="text-xs font-medium text-green-400 mb-1">Easy</span>
              <span className="text-xl font-bold text-white">{stats.easySolved}</span>
            </div>
          </div>

          {/* Medium */}
          <div className="bg-yellow-500/10 p-3 rounded-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
            <div className="flex flex-col items-center">
              <span className="text-xs font-medium text-yellow-400 mb-1">Medium</span>
              <span className="text-xl font-bold text-white">{stats.mediumSolved}</span>
            </div>
          </div>

          {/* Hard */}
          <div className="bg-red-500/10 p-3 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-colors">
            <div className="flex flex-col items-center">
              <span className="text-xs font-medium text-red-400 mb-1">Hard</span>
              <span className="text-xl font-bold text-white">{stats.hardSolved}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeetCodeStats;