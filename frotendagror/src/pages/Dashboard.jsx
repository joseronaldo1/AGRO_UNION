import React, { useState } from 'react'
import { Sidebar } from '../components/Sidebar.jsx';
import LogoHeader from '../assets/icons/logoOrigi.png'
import { Link } from 'react-router-dom';


export const Dashboard = () => {
  return (
<div>
    <div className="bg-[#008000] w-full h-55 flex items-center justify-between">
        <Sidebar />
        <div className="flex justify-center space-x-400">
            <h2 className="text-white text-2xl font-bold">
                Inicio
                <Link to={'#'}>{props.title} </Link>
            </h2>
            <h2 className="text-white text-2xl font-bold">
                Usuarios
                <Link to={'#'}>{props.title} </Link>
            </h2>
            <h2 className="text-white text-2xl font-bold">
                Programar
                <Link to={'#'}>{props.title} </Link>
            </h2>
        </div>
        <img src={LogoHeader} alt="" className='w-40 h-30 mr-20 ' />
    </div>
</div>
  )
  }
