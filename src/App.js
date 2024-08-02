import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import Proceed from './components/Proceed';
import Zipcode from './components/Zipcode';
import International from './components/International';
import National from './components/National';
import Atlanta from './components/Atlanta';
import Admin from './components/Admin';

function App() {
  return (
    <BrowserRouter>
    <div className="App">  
      <Routes>
        <Route path="/" element={<Landing />} />
          <Route path="/proceed" element={<Proceed />} />
          <Route path="/zipcode" element={<Zipcode />} />
          <Route path="/international" element={<International />} />
          <Route path="/national" element={<National />} />
          <Route path="/atlanta" element={<Atlanta />} />
          <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
