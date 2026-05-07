import React, { useState, useEffect } from "react";
import axios from "axios";

const categories = ["All","Entertainment", "Business", "Technology", "Politics", "Health"];

const Leaderboard = () => {
  const [category, setCategory] = useState(categories[0]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:3000/api/leaderboard?category=${category}`);
        console.log("LEADERBOARD RESPONSE:", res.data);
        setLeaderboard(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, [category]);

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl">
      
      {/* 🟣 Title */}
      <h2 className="text-3xl font-extrabold mb-5 text-center bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
        Leaderboard
      </h2>

      {/* 🟣 Category Dropdown */}
      <div className="flex justify-center mb-5">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border border-indigo-300 rounded-lg text-indigo-700 font-medium focus:ring-2 focus:ring-indigo-400 focus:outline-none"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* 🟣 Loading State */}
      {loading && <p className="text-center text-gray-500 animate-pulse">Loading...</p>}

      {/* 🟣 Empty State */}
      {!loading && leaderboard.length === 0 && (
        <p className="text-center text-gray-500 italic">
          No blogs in this category yet.
        </p>
      )}

      {/* 🟣 Leaderboard List */}
      {!loading && leaderboard.length > 0 && (
        <ul className="divide-y divide-gray-200">
          {leaderboard.map((user, index) => (
            <li
              key={user._id}
              className="flex justify-between items-center py-3 px-2 hover:bg-indigo-50 transition-colors duration-200 rounded-md"
            >
              <span className="font-semibold text-gray-800">
                {index + 1}. {user.name}
              </span>
              <span className="text-indigo-600 font-medium">
                {user.blogCount} blog{user.blogCount > 1 ? "s" : ""}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Leaderboard;
