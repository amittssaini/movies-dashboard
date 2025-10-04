import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movies from './components/Movies';
import MovieDetail from './components/MovieDetail';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/movieDetail" element={<MovieDetail />} />
        <Route path="/" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
