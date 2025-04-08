import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
