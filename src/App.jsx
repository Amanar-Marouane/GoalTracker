import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Index';
import Show from './pages/Show';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/goal/:id" element={<Show />} />
      </Routes>
    </Router>
  )
}

export default App
