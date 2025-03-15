import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Import the Home component

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Add the Home route */}
      </Routes>
     </Router>
    </div>
  );
}

export default App;
