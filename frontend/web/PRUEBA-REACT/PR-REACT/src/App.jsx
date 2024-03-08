import React, { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
function App() {

  return (
  
    <BrowserRouter>
    <Routes>
      <Route path='/login/' element={<Login/>}/>
      <Route path='registro' element={<Regsitro/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
