import './App.css';
import React from 'react';
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';

import Calculator from './components/Calculator';
import RandomQuote from './components/RandomQuote';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <nav>
        <h1>Math Magicians</h1>
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Calculator">Calculator</Link></li>
          <li><Link to="/RandomQuote">Quote</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/RandomQuote" element={<RandomQuote />} />
      </Routes>
    </Router>
  );
}

export default App;
