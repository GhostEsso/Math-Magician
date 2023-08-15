import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import RandomQuote from './components/RandomQuote';
import Home from './components/Home';

const App = () => (
  <>
    <nav>
      <h1>Math Magicians</h1>
      <ul>
        <li><Link exact to="/Home">Home</Link></li>
        <li><Link exact to="/Calculator">Calculator</Link></li>
        <li><Link exact to="/RandomQuote">Quote</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route exact path="/Home" element={<Home />} />
      <Route exact path="/Calculator" element={<Calculator />} />
      <Route exact path="/RandomQuote" element={<RandomQuote />} />
    </Routes>
  </>
);

export default App;
