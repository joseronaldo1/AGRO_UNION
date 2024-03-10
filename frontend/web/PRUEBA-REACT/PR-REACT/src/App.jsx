import React, { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import './App.css';

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
    </div>
  );
}

export default App;