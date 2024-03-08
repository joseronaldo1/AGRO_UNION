import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faUser, faHome, faMap, faRunning, faTools, faClipboard, faCogs, faUsers, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Menu.css';

function Menu({ isOpen, toggleMenu }) {
  return (
    isOpen && (
      <div className="dropdown-menu">
        <FontAwesomeIcon icon={faTimes} onClick={toggleMenu} className="close-icon" />
        <a href="#" className="iconos"><FontAwesomeIcon icon={faUser} /> Perfil</a>
        <a href="#" className="iconos"><FontAwesomeIcon icon={faHome} /> Finca</a>
        <a href="#" className="iconos"><FontAwesomeIcon icon={faMap} /> Lote</a>
        <a href="#" className="iconos"><FontAwesomeIcon icon={faRunning} /> Actividad</a>
        <a href="#" className="iconos"><FontAwesomeIcon icon={faTools} /> Recursos</a>
        <a href="#" className="iconos"><FontAwesomeIcon icon={faClipboard} /> Reportes</a>
        <a href="#" className="iconos"><FontAwesomeIcon icon={faCogs} /> Ayuda y configuración</a>
        <a href="#" className="iconos"><FontAwesomeIcon icon={faUsers} /> Nosotros</a>
        <a href="#" className="cerrarSesion"><FontAwesomeIcon icon={faSignOutAlt} /> Cerrar Sesión</a>
      </div>
    )
  );
}

export default Menu;
