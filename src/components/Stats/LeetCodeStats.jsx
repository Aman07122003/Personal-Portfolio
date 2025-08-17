import React from 'react';

const LeetCodeStats = ({ username = 'Aman07122003' }) => {
  return (
    <div className="mx-auto p-3 w-full bg-black/40 md:w-2/3 lg:w-1/2 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm md:text-lg font-semibold text-white">LeetCode Stats</h2>
        <a
          href={`https://leetcode.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] md:text-sm text-amber-400 hover:underline"
        >
          View Profile →
        </a>
      </div>

      {/* Stats iframe */}
      <iframe
          src={`https://leetcard.jacoblin.cool/${username}?theme=dark`}
          className="w-full h-[180px] md:h-[200px] lg:h-[220px]"
          style={{ border: 'none' }}
          title={`LeetCode Stats for ${username}`}
        />
    </div>
  );
};

export default LeetCodeStats;
