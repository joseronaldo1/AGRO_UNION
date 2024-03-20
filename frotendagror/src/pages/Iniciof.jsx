import React from 'react';
import { HeaderLogin } from '../components/HeaderLogin.jsx';
import Fondo from './../assets/icons/fondo.png';
import './../App.css';
import { Link } from 'react-router-dom';

export const Iniciof = () => {
    const fondoStyle = {
        backgroundImage: `url(${Fondo})`,
        backgroundSize: 'auto',
        backgroundPosition:'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Ajusta la altura según sea necesario
        width: '100%' // Ajusta el ancho según sea necesario
    };

    return (
        <div className='fondo' style={fondoStyle}>
            <HeaderLogin title="AGRO REGISTER" />
          
            <div className='w-39 flex mt-5' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button className='w-28 h-14 rounded-lg mx-2 bg-[#008000] text-white font-bold text-xl z-10'>
                <Link to='/login'>Login</Link>
                </button>
                <button className='w-28 h-14 rounded-lg mx-2 bg-[#008000] text-white font-bold text-xl z-10'>
                    <Link to='/registro'>Registro</Link>
                </button>
            </div>
        </div>
    );
    
};
