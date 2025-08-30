# Book Finder

A simple and responsive web app to search for books using the Open Library API. Built with **React**, **Tailwind CSS**, and **Framer Motion** for smooth animations.

---

## Overview
Book Finder lets users search for books by title and view results instantly. Clicking a book opens a popup modal showing detailed information like title, authors, publisher, year, and cover image.  

---

## Features
- Search for books by title using the Open Library API  
- Display results in a responsive grid  
- Popup modal with detailed book information  
- Loading spinner while fetching data  
- User-friendly messages for errors or no results  
- Smooth animations and hover effects  
- Fully responsive for desktop and mobile  

---

## Folder Structure

```
src/
├── components/
│   ├── AlertMessage.jsx   // Shows messages like errors or info
│   ├── BookCard.jsx       // Displays individual book in grid
│   ├── BookModal.jsx      // Popup modal with book details
│   ├── Loader.jsx         // Loading spinner animation
│   └── SearchBar.jsx      // Search input with buttons
├── App.jsx                // Main app logic, state, and API fetch
└── main.jsx               // React entry point



---

## How It Works

1. **Search:** Type a book title in the search bar and press Enter or click Search.  
2. **Fetch:** App.jsx calls the Open Library API and stores the first 20 results.  
3. **Display:** Each book is shown in a BookCard with title, authors, and cover.  
4. **Details Modal:** Clicking a book opens a modal with detailed info and a larger cover.  
5. **Feedback:** Loader shows while fetching; AlertMessage shows errors or warnings.  
6. **Clear Search:** Clicking Clear resets input and results.  

---

## How to Run Locally

```bash
git clone <your-repo-url>
cd <repo-folder>
npm install
npm run dev

Open your browser at http://localhost:5173

Tech Stack

React – Frontend framework

Tailwind CSS – Styling and responsive design

Framer Motion – Animations and transitions

Open Library API – Fetch book data

Future Improvements

Pagination or "load more" button for large results

Favorites list to save books

More detailed book descriptions if available

Dark mode toggle for user preference
