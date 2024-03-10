import React, { useState } from 'react';
import Header from './components/HeaderLogin';
import Menu from './components/Menu';
import Login from './pages/login'; // Importa el componente Login
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './App.css';
<<<<<<< HEAD

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Header toggleMenu={toggleMenu} />
      <Menu isOpen={menuOpen} toggleMenu={toggleMenu} />
      <div className="config">
        <h1>
          AYUDA Y CONFIGURACIÓN
          <FontAwesomeIcon icon={faCog} />
        </h1>
      </div>
      <p>¿En que te ayudo?</p>
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  /* const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }; */

  return (
    <div>
      <Header /* toggleMenu={toggleMenu}  */ />
      {/* <Menu isOpen={menuOpen} toggleMenu={toggleMenu} /> */}
      <div className="config">

      </div>

>>>>>>> 37a719dee3ea6a8c50409ea6d8e1de397721b6be
    </div>
  );
}

export default App;