import React from 'react';
import './App.css';
import Home from './pages/home';
import Bookreviews from './pages/bookreviews';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/books" element={<Bookreviews/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;