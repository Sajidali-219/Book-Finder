import React from "react";
import { motion } from "framer-motion";

function BookCard({ book, onClick }) {
  const imageUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  return (
    <motion.div
      onClick={onClick}
      className="cursor-pointer bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition"
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={imageUrl}
        alt={book.title}
        className="w-full h-60 object-cover rounded-lg"
      />
      <h3 className="mt-2 font-semibold">{book.title}</h3>
      <p className="text-sm text-gray-600">
        {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
      </p>
    </motion.div>
  );
}

export default BookCard;
