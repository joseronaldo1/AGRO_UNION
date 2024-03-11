import React, { useState } from 'react';
import './login.css';
import imagen from '../assets/img/logoOrigi.png'; // Importa la imagen
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <div className="login-container">
            <div className="formulario-container">
                <h2 className="Titulo">Iniciar Sesión</h2>
                <FontAwesomeIcon icon={faUserCircle} size="3x" className="user-icon" />
                {/* Agrega el icono de usuario */}

                <form className="login-form">
                    <input type="text" placeholder="Correo" />
                    <div className="password-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Contraseña"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="toggle-password-button"
                        >
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </button>
                    </div>
                    <p className="forgot-password">¿Olvidaste tu contraseña?</p>
                    <button className="boton" type="submit">Iniciar Sesión</button>
                </form>
            </div>
            {/* Cierro el contenedor del formulario aquí */}
            <div className="imagen-container">
                <img src={imagen} alt="Imagen" className="imagen" />
                <p className="imagen-texto">Agro Register facilita el control de actividades en fincas</p>
            </div>
        </div>
    );
}

export default Login;
