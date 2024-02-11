import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// pages
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';

// styles
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<Navigate to="/" replace/>}/>
        <Route path="/users/:id" element={<UserDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;