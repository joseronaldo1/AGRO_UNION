import React from 'react'
import { HeaderLogin } from '../components/HeaderLogin.jsx'
import Logo from '../assets/icons/logoOrigi.png'

export const Olvidopsstwo = () => {
  return (
    <div>
        <HeaderLogin title='AGRO REGISTER'/>
        <div className='flex  items-center justify-center'>
            <div className='border border-solid border-[#008000] flex items-center justify-center p-8 w-4/12 m-16 rounded-lg'>
            <form action="#">
                <label className="text-xl font-bold flex justify-center items-center p-10">Código de Recuperación</label>
                    <div className='flex flex-col m-5'>
                        <input className='border border-solid border-[#008000] p-2 rounded-lg w-80 h-12' type="text" value="" placeholder='Correo Electrónico' />
                    </div>
                  
                    <div className='flex flex-col m-5 justify-center items-center'>
                        <button className='bg-[#008000] w-32 p-2 rounded-lg text-white font-bold text-xl' type="button">
                        <a to='#'>Enviar</a>

                        </button>
                    </div>
                </form>
                
            </div>
            <div className='w-2/6 ml-10 p-20'>
            <label className="text-xl font-bold justify-center items-center p-10">En caso de que se le olvide la contraseña puede recuperala desde el correo que haya registrado anteriormente en el registro de su cuenta</label>

                <img src={Logo} alt="" />
            </div>
        </div>
    </div>
  )
}
