import React from "react";
import { motion } from "framer-motion";

function BookModal({ book, onClose, landingColor = "#E0F7FA" }) {
  const imageUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "https://via.placeholder.com/200x300?text=No+Cover";

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-md"
      style={{ backgroundColor: `${landingColor}80` }} // 80 = 50% opacity
    >
      <motion.div
        className="bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 text-gray-800 rounded-2xl shadow-xl p-6 w-11/12 max-w-3xl relative border border-gray-600"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-red-500 text-xl"
        >
          ✖
        </button>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={imageUrl}
            alt={book.title}
            className="w-48 h-72 object-cover rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold mb-3">{book.title}</h2>
            <p className="text-lg mb-2">
              <span className="font-semibold">Author:</span>{" "}
              {book.author_name ? book.author_name.join(", ") : "Unknown"}
            </p>
            <p className="text-lg mb-2">
              <span className="font-semibold">Published By:</span>{" "}
              {book.publisher ? book.publisher[0] : "Unknown"}
            </p>
            <p className="text-lg mb-2">
              <span className="font-semibold">First Published:</span>{" "}
              {book.first_publish_year || "N/A"}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default BookModal;
