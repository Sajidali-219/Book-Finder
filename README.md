Book Search Web App
Overview

The Book Search Web App allows users to search for books using the Open Library API. Users can type any book title into the search bar and instantly see a list of results. Clicking a book opens a popup modal with detailed information including title, authors, publisher, year, and a cover image. The app is built with React, Tailwind CSS, and Framer Motion for animations.

Features

Search for books by title using the Open Library API

Display results in a responsive grid

Show book details in a popup modal with a blurred background

Loading spinner while fetching data

User-friendly messages for errors, warnings, or info

Modern UI with animations and hover effects

Fully responsive for desktop and mobile

Folder Structure
src/
├── components/
│   ├── AlertMessage.jsx   // Shows messages like errors or info
│   ├── BookCard.jsx       // Displays individual book in grid
│   ├── BookModal.jsx      // Popup modal with book details
│   ├── Loader.jsx         // Loading spinner animation
│   └── SearchBar.jsx      // Search input with buttons
├── App.jsx                // Main app logic, state, and API fetch
└── main.jsx               // React entry point

How the App Works

User Interface

Users type a book title into the SearchBar input.

Pressing Enter or clicking Search triggers a search.

Fetching Books

The App.jsx component uses fetch to call the Open Library API.

The first 20 results are taken and stored in the books state.

Displaying Results

Each book is displayed in a BookCard with image, title, and authors.

Cards have a hover animation using Framer Motion.

Book Details Modal

Clicking a book opens a BookModal, showing details and a larger cover.

The modal blurs the background to focus attention on the selected book.

Loading and Messages

While fetching, a Loader spinner is displayed.

AlertMessage shows feedback like errors, warnings, or no results found.

Clearing Search

Clicking Clear resets the search input and results.

Component Details
App.jsx

Manages the main state (query, books, loading, selectedBook, message)

Handles API requests, error handling, and loading state

Renders SearchBar, BookCard grid, Loader, AlertMessage, and BookModal

SearchBar.jsx

Input field and buttons for search and clear

Calls onSearch function from App.jsx

Animations with Framer Motion for smooth entry

BookCard.jsx

Displays book cover, title, and authors

Hover effect using Framer Motion

Clickable to open modal

BookModal.jsx

Shows detailed book information

Blurred background to focus attention

Smooth scale and fade animation

Close button to dismiss modal

Loader.jsx

Animated spinner using Framer Motion

Shows while fetching data

AlertMessage.jsx

Displays messages for errors, warnings, or info

Styled text based on message type

How to Run Locally

Clone the repository:

git clone <your-repo-url>
cd <repo-folder>


Install dependencies:

npm install


Start the development server:

npm run dev


Open your browser and go to http://localhost:5173 (or the port shown in your terminal)

Tech Stack

React – Frontend framework

Tailwind CSS – Styling and responsive design

Framer Motion – Animations and transitions

Open Library API – Fetch book data

Future Improvements

Add pagination or "load more" button for large results

Include a favorites list to save books

Show more detailed book descriptions if available

Add dark mode toggle for user preference