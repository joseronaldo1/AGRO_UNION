import React, { useState } from 'react'
import Logo from '../assets/icons/logoOrigi.png'
import './../App.css'
import { Link } from 'react-router-dom'
import { HeaderLogin } from '../components/HeaderLogin.jsx'


export const Login = () => {

    const [login, setLogin] = useState(false)

    const showLogin = () => setLogin(!login)

  return (
    <div className='fondo '>
        <HeaderLogin title="AGRO REGISTER" />
        
        <div className={login ? 'formLogin active' : 'formLogin flex items-center justify-center'}>
            <div className='border border-solid border-[#008000] flex items-center justify-center  w-4/5 m-16 rounded-lg' onClick={showLogin}>
            <form action="#" onClick={showLogin}>
                    <div className='flex flex-col items-center justify-center m-5'>
                        <label className='text-2xl font-bold'>Iniciar Sesión</label>
                    </div>

                    <div className='flex flex-col m-5'>
                        <label className='text-xl font-bold'> Correo: </label>
                        <input className='p-2 rounded-lg w-80 h-12 border border-solid border-[#008000] ' type="text" value="" placeholder='Ingrese su Correo' />
                    </div>
                    <div className='flex flex-col m-5'>
                        <label className='text-xl font-bold'> Contraseña: </label>
                        <input className='p-2 rounded-lg w-80 h-12 border border-solid border-[#008000] ' type="password" value="" placeholder='Ingrese su Contraseña' />
                    </div>
                    <div>
                        <a href="olvidopassone">¿Olvidaste tu Contraseña?</a>
                    </div>
                    <div className='flex flex-col m-5 justify-center items-center'>
                        <button className='bg-[#39A900] w-36 p-2 rounded-lg text-white font-bold text-xl' type="button"><Link to='#'> Iniciar sesión </Link></button>
                    </div>
                </form>

                <div className='w-4/11'>
                    <img src={Logo} alt="" />
                    <label className='text-xl font-bold flex flex-col items-center justify-center m-5'>Agro Register facilita el control de actividades en fincas</label>
                </div>
                
            </div>
            
        </div>
        
    </div>
  )
}
