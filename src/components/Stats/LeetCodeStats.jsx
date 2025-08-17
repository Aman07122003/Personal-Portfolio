import React from 'react';

const LeetCodeStats = ({ username = 'Aman07122003' }) => {
  return (
    <div className="mx-auto p-3 w-full max-w-md bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02]">
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
      <div className="overflow-hidden rounded-xl border border-white/10 shadow-inner">
        <iframe
          src={`https://leetcard.jacoblin.cool/${username}?theme=dark`}
          className="w-full h-44 md:h-52"
          style={{ border: 'none' }}
          title={`LeetCode Stats for ${username}`}
        />
      </div>
    </div>
  );
};

export default LeetCodeStats;

