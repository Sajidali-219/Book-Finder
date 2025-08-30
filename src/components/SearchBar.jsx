import React, { useState } from "react";
import { motion } from "framer-motion";

/**
 * props:
 *  - onSearch(query) : function to call when searching. Pass an empty string to clear.
 */
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  const handleClear = () => {
    setQuery("");
    onSearch(""); // intentionally call with empty string -> App will clear results
  };

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="w-full max-w-xl"
    >
      <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md rounded-full p-2 shadow-lg border border-gray-200">
        <input
          className="flex-1 bg-transparent outline-none px-4 py-2 text-gray-800"
          placeholder="Search any book here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSearch();
            }
          }}
        />
        <button
          onClick={handleClear}
          className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 transition"
          aria-label="Clear search"
        >
          Clear
        </button>
        <button
          onClick={handleSearch}
          className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
          aria-label="Search"
        >
          Search
        </button>
      </div>
    </motion.div>
  );
};

export default SearchBar;
