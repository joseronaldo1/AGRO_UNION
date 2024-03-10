import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
  <div className="container">
    <h1>Inicio Sesion</h1>
    <form action="">
        <input type="text" placeholder='nombres'/>
        <input type="text" placeholder='apellidos'/>
        <input type="text" placeholder='correo'/>
        <input type="text" placeholder='contraseña'/>
        <input type="text" placeholder='Rol'/>
    </form>
    <div className='olvido'>
    <a href="#">Olvido Su Contraseña?</a>
    </div>
    <div className="member">
  <button><Link to={'/Login'}>Iniciar</Link></button>
  </div>
  <div className="member2">
  <button><Link to={'/Registro'}>Registrarse</Link></button>
  </div>
  </div>
  )
}

export default Login
