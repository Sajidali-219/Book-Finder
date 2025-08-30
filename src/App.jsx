import React, { useState } from "react";
import { motion } from "framer-motion";
import BookCard from "./components/BookCard";
import BookModal from "./components/BookModal";
import AlertMessage from "./components/AlertMessage";

function App() {
  // State variables
  const [query, setQuery] = useState("");          // Search input value
  const [books, setBooks] = useState([]);         // List of books from API
  const [loading, setLoading] = useState(false);  // Loader state
  const [selectedBook, setSelectedBook] = useState(null); // Book for modal
  const [message, setMessage] = useState("");     // Error/info messages
  const [messageType, setMessageType] = useState("error"); // Type of message

  // Function to fetch books from Open Library API
  const fetchBooks = async () => {
    if (!query.trim()) {
      setMessage("Please enter a search term.");
      setMessageType("warning");
      setBooks([]);
      return;
    }

    setLoading(true);   // Show loader
    setMessage("");     // Clear previous messages

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${query}`
      );

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      const results = data.docs.slice(0, 20); // Limit to 20 books

      if (results.length === 0) {
        setMessage(`No books found for "${query}". Try a different keyword.`);
        setMessageType("info");
      }

      setBooks(results); // Save results
    } catch (error) {
      if (!navigator.onLine) {
        setMessage("You're offline. Please check your internet connection.");
        setMessageType("warning");
      } else {
        setMessage("Something went wrong while fetching books.");
        setMessageType("error");
      }
      setBooks([]);
    } finally {
      setLoading(false); // Hide loader
    }
  };

  // Clear search input and results
  const handleClear = () => {
    setQuery("");
    setBooks([]);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 text-gray-800">
      {/* Hero section */}
      <div className="text-center py-16">
        {/* Title */}
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Find Your Next Favorite Book 📚
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Search millions of books instantly with Book Finder
        </motion.p>

        {/* Search input and buttons */}
        <div className="flex justify-center space-x-2">
          <input
            type="text"
            placeholder="Search any book..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-4 py-2 rounded-2xl w-96 shadow-lg backdrop-blur-lg border border-gray-300 focus:outline-none"
          />
          <button
            onClick={fetchBooks}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-md transition"
          >
            Search
          </button>
          <button
            onClick={handleClear}
            className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-xl shadow-md transition"
          >
            Clear
          </button>
        </div>

        {/* Alert message */}
        {message && <AlertMessage message={message} type={messageType} />}
      </div>

      {/* Loader */}
      {loading && (
        <div className="flex justify-center mt-10">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      )}

      {/* Books grid */}
      {!loading && books.length > 0 && (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {books.map((book, idx) => (
            <BookCard key={idx} book={book} onClick={() => setSelectedBook(book)} />
          ))}
        </motion.div>
      )}

      {/* Book modal */}
      {selectedBook && (
        <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
  );
}

export default App;
