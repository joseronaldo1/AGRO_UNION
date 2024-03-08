import React, { useState } from 'react';
import Header from './components/HeaderLogin';
import Menu from './components/Menu';
import Login from './pages/login'; // Importa el componente Login
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './App.css';

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

    </div>
  );
}

export default App;
