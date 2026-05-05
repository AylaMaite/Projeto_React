import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import NavbarComponent from './components/NavbarComponent';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className="bg-dark min-vh-100 text-white">
       
        <NavbarComponent onSearch={setSearchQuery} />
        
        <Routes>
         
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          
        
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;