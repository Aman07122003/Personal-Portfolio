import React, { useEffect, useState } from "react";
import { getUserProfile, getUserRepos } from "./API/githubAPI";

const GitHubStats = ({ username = "Aman07122003" }) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentStreak, setCurrentStreak] = useState(0); // New state for streak

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        setError(null);
        const profile = await getUserProfile(username);
        const repos = await getUserRepos(username);
        
        // Calculate additional stats
        const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);
        
        // Simulate getting streak data (you would replace this with actual API call)
        const streak = Math.floor(Math.random() * 30) + 1; // Random streak for demo
        
        setStats({
          ...profile,
          totalRepos: profile.public_repos,
          totalStars,
          totalForks,
          mostPopularRepo: repos.length > 0 
            ? repos.reduce((prev, current) => 
                (prev.stargazers_count > current.stargazers_count) ? prev : current
              )
            : null,
          languagesUsed: Array.from(new Set(repos.map(repo => repo.language).filter(Boolean))).slice(0, 5)
        });
        setCurrentStreak(streak);
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
    <div className="mx-auto p-2 w-full max-w-md bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:border-purple-500/30 hover:scale-[1.02]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          <h2 className="text-lg font-bold text-white">GitHub Stats</h2>
        </div>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-xs md:text-sm text-purple-400 hover:text-purple-300 transition-colors group"
        >
          View Profile
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </a>
      </div>

      {/* Stats Content */}
      <div className="space-y-3 text-gray-300">
        {/* Profile Info */}
        <div className="flex items-center space-x-4 p-2 bg-gray-800/50 rounded-lg">
          <img 
            src={stats.avatar_url} 
            alt="avatar" 
            className="w-12 h-12 rounded-full border-2 border-purple-500/30"
          />
          <div>
            <h3 className="text-white font-medium">{stats.name || username}</h3>
            <p className="text-xs text-gray-400">{stats.bio || "GitHub enthusiast"}</p>
          </div>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-3 gap-3">
          {/* Repos */}
          <div className="bg-gray-800/50 p-3 rounded-xl border border-gray-700 hover:border-purple-500/40 transition-colors">
            <div className="flex flex-col items-center">
              <span className="text-xs font-medium text-purple-400 mb-1">Repos</span>
              <span className="text-xl font-bold text-white">{stats.totalRepos}</span>
            </div>
          </div>

          {/* Stars */}
          <div className="bg-gray-800/50 p-3 rounded-xl border border-gray-700 hover:border-yellow-500/40 transition-colors">
            <div className="flex flex-col items-center">
              <span className="text-xs font-medium text-yellow-400 mb-1">Stars</span>
              <span className="text-xl font-bold text-white">{stats.totalStars}</span>
            </div>
          </div>

          {/* Followers */}
          <div className="bg-gray-800/50 p-3 rounded-xl border border-gray-700 hover:border-blue-500/40 transition-colors">
            <div className="flex flex-col items-center">
              <span className="text-xs font-medium text-blue-400 mb-1">Followers</span>
              <span className="text-xl font-bold text-white">{stats.followers}</span>
            </div>
          </div>
        </div>

        {/* Additional Mini Stats */}
        <div className="">
          {/* Streak */}
          

          {/* Languages */}
          <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 hover:border-green-500/40 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-green-400">Top Languages</span>
              <div className="flex flex-wrap gap-1">
              {stats.languagesUsed?.slice(0, 3).map(lang => (
                <span 
                  key={lang} 
                  className="text-xs px-2 py-0.5 bg-green-500/10 text-green-400 rounded-full"
                >
                  {lang}
                </span>
              ))}
              {stats.languagesUsed?.length > 3 && (
                <span className="text-xs px-2 py-0.5 bg-gray-700/50 rounded-full">
                  +{stats.languagesUsed.length - 3}
                </span>
              )}
            </div>
            </div>
            
          </div>
        </div>

        {/* Popular Repo */}
        
      </div>
    </div>
  );
};

export default GitHubStats;