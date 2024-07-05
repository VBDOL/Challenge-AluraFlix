import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import NewVideo from './pages/NewVideo/NewVideo';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novo-video" element={<NewVideo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;