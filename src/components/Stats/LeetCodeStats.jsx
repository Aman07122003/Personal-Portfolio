import React from 'react';

const LeetCodeStats = ({ username = 'Aman07122003' }) => {
  return (
    <div className="mx-auto p-5 bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white">LeetCode Stats</h2>
        <a
          href={`https://leetcode.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-amber-400 hover:underline"
        >
          View Profile →
        </a>
      </div>

      {/* Card Body with Flex */}
      <div className="flex gap-4">
        {/* Left: Stats iframe */}
        <div className="flex-1 overflow-hidden rounded-xl border border-white/10 shadow-inner">
          <iframe
            src={`https://leetcard.jacoblin.cool/${username}?theme=dark&font=baloo`}
            style={{
              width: '100%',
              height: '200px',
              border: 'none'
            }}
            title={`LeetCode Stats for ${username}`}
          />
        </div>

        {/* Right: Additional info */}
        <div className="flex-1 p-4 bg-white/5 rounded-xl border border-white/10">
          <h3 className="text-white text-md font-medium mb-2">Quick Summary</h3>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>✅ Solved: <span className="text-green-400">350+</span></li>
            <li>💡 Easy: <span className="text-blue-400">180</span></li>
            <li>⚡ Medium: <span className="text-yellow-400">120</span></li>
            <li>🔥 Hard: <span className="text-red-400">50</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeetCodeStats;
