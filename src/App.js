import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router, Link, Route, Routes, Navigate,
} from 'react-router-dom';

import Calculator from './components/Calculator';
import RandomQuote from './components/RandomQuote';
import Home from './components/Home';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <nav className="nav-container">
        <h1>Math Magicians</h1>

        <div
          className="hamburger"
          onClick={toggleMenu}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              toggleMenu();
            }
          }}
        >
          <span className={`bar ${isMenuOpen ? 'open' : ''}`} />
          <span className={`bar ${isMenuOpen ? 'open' : ''}`} />
          <span className={`bar ${isMenuOpen ? 'open' : ''}`} />
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/Home" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/Calculator" onClick={() => setIsMenuOpen(false)}>Calculator</Link>
          </li>
          <li>
            <Link to="/RandomQuote" onClick={() => setIsMenuOpen(false)}>Quote</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/RandomQuote" element={<RandomQuote />} />
      </Routes>
    </Router>
  );
}

export default App;
