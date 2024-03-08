import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import logo from '../assets/img/logoOrigi.png';

function Header({ toggleMenu }) {
  return (
    <div className="header">
      <div className="menu" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="links">
        <a href="#">Inicio</a>
        <a href="#">Usuarios</a>
        <a href="#">Programar</a>
      </div>
      <img
        src={logo}
        alt="Logo"
        style={{ maxWidth: '70px', maxHeight: '70px', marginRight: '100px', marginTop: '20px' }}
      />
    </div>
  );
}

export default Header;
