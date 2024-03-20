import React from 'react'
import Logo from '../assets/icons/logoOrigi.png'
import './../App.css'
import { HeaderLogin } from '../components/HeaderLogin.jsx'


export const Registro = () => {

  return (
    <div className='fondo'>
        <HeaderLogin title="AGRO REGISTER" />

        <div className='flex items-center justify-center'>
            <div className='border border-solid border-[#008000] flex items-center justify-center p-8 w-4/11 m-9 rounded-lg'>
            <form action="#">
                    <div className='flex flex-col m-5'>
                        <label className='text-xl font-bold'> Nombres: </label>
                        <input className='border border-solid border-[#008000] p-2 rounded-lg w-80 h-12' type="text" value="" placeholder='Ingrese la Identificacion' />
                    </div>
                    <div className='flex flex-col m-5'  >
                        <label className='  text-xl font-bold'> Apellidos: </label>
                        <input className='border border-solid border-[#008000] p-2 rounded-lg w-80 h-12' type='text' value="" placeholder='Ingrese su nombre'/>
                    </div>
                    <div className='flex flex-col m-5'>
                        <label className='text-xl font-bold'> Correo: </label>
                        <input className='border border-solid border-[#008000] p-2 rounded-lg w-80 h-12' type='text' value="" placeholder='Ingrese su Telefono'/>
                    </div>
                    <div className='flex flex-col m-5'>
                        <label className='text-xl font-bold'> Contraseña: </label>
                        <input className='border border-solid border-[#008000] p-2 rounded-lg w-80 h-12' type="text" value="" placeholder='Ingrese el Correo' />
                    </div>
                   
                    <div className='flex flex-col m-5 '>
                        <label className='text-xl font-bold'> Rol: </label>
                        <select name="" id="" className='p-2 rounded-lg h-12 w-80 border border-solid border-[#008000]'>
                            <option value="catador">Administrador</option>
                            <option value="Caficultor"> Empleado</option>
                        </select>
                    </div>
                    <div className='flex flex-col m-5 justify-center items-center'>
                        <button className='bg-[#39A900] w-32 p-2 rounded-lg text-white font-bold text-xl' type="button">Registrar</button>
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

