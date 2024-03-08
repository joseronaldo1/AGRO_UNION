import React from 'react'

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
    <div className="member">
  <button>Iniciar <a href="#"></a></button>
  </div>
  </div>
  )
}

export default Login
