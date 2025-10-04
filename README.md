🎬 Movie Hub

A modern React movie search application with Redux state management and Material-UI (MUI) styling.
Users can search for movies, view results in a responsive movie grid, and see recent search terms.

🛠 Features

🔍 Search Movies: Type a movie name and get instant results from the API.

📝 Recent Searches: Stores and displays recent search terms using Redux.

🖼 Movie Grid: Shows movies in a responsive grid using MUI Grid and Cards.

✨ Material-UI Styling: Beautiful UI with hover effects and modern design.

⚡ Load More: Load more movies dynamically.

🖱 Interactive Search: Search icon inside the input field for better UX.

📂 Tech Stack

React – Frontend library for building UI.

Redux Toolkit – State management for search and recent searches.

Material-UI (MUI) – UI components and responsive layouts.

Axios – Fetch data from movie API.

IMDb API – Source of movie data.

🏗 Installation

Clone the repo

git clone https://github.com/amittssaini/movies-dashboard
cd movies-dashboard


Install dependencies

npm install


Start the development server

npm start


Your app will run on http://localhost:3000.

🧩 Project Structure
src/
├─ components/
|- |-Login.jsx            # Login page 
|- |-MovieDetail.jsx      # Individual MOive detail page 
│  ├─ MovieCard.jsx       # Individual movie card with hover zoom
│  └─ Movies.jsx          # Main movies grid and search
├─ redux/
│  └─ searchSlice.js     # Redux slice for recent searches
├─ assets/
│  └─ login.png          # Login background image
├─ App.jsx
└─ index.js

🎨 UI Highlights

Centered Search Bar with MUI TextField + Button inside a Stack

Search Icon inside the input field (endAdornment)

Recent Search Chips displayed using MUI Chip component

Movie Cards with hover zoom effect using transform: scale(1.05)

Load More Button centered below the grid

⚡ Redux for Recent Searches

Added a searchSlice to store recentSearches in Redux state.

Clicking a recent search updates the query and fetches movies automatically.

Example usage:

dispatch(addSearchTerm(query));
