import React, { useState } from 'react'
import { FaAlignJustify } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaX } from "react-icons/fa6";
import { IconContext } from 'react-icons';
import { FaCircleUser } from "react-icons/fa6";
import { FaMountainSun } from "react-icons/fa6";
import { MdSettings } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { FaFileContract } from "react-icons/fa6";
import { FaTractor } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineExitToApp } from "react-icons/md";
import { MdOutlineGpsFixed } from "react-icons/md";
import './../App.css'



export const Sidebar = ({ children }) => {

    const [sidebar, setSiderBar] = useState(false)

    const showSideBar = () => setSiderBar(!sidebar)

    const menuItem = [
        {
            path: '/dashboard',
            name: "Perfil",
            icon: <FaCircleUser />
        },
        {
            path: '/usuarios',
            name: "Finca",
            icon: <FaMountainSun />
        },
        {
            path: '/fincas',
            name: 'Lote',
            icon: <MdOutlineGpsFixed />
        },
        {
            path: '/variedades',
            name: 'Actividades',
            icon: <FaListCheck />
        },
        {
            path: '/lotes',
            name: 'Recursos',
            icon: <FaTractor />
        },
        {
            path: '/muestras',
            name: 'Reporte',
            icon: <FaFileContract />
        },
        {
            path: '/analisis',
            name: "Soporte",
            icon: <MdSettings />
        },
        {
            path: '/variables',
            name: 'Nosotros',
            icon: <FaUserGroup />
        },
        {
            path: '/resultados',
            name: 'Cerrar Sesion',
            icon: <MdOutlineExitToApp />
        }

    ]
    return (
        <div>

            <div className='bg-[#008000] h-20 flex justify-start items-center'>
                <Link to='#'>
                    <FaAlignJustify size={25} className="ml-5 cursor-pointer text-white" onClick={showSideBar} />
                </Link>
            </div>
            <IconContext.Provider value={{ color: '#ffff' }}>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='w-full' onClick={showSideBar}>
                        <li className='ml-4 text-3xl bg-none'>
                        <Link to='#' className="flex justify-end mr-7 items-center cursor-pointer">
                            <FaX size={25} className="hover:text-black active:text-black mb-10" />
                        </Link>
                        </li>
                        {menuItem.map((item, index) => {
                            return (
                                <li className='flex justify-start align-center mr-7 ml-7 mt-5 list-none h-14 hover:bg-[#008000] rounded-full' key={index}>
                                    <Link className='flex text-white text-xl w-full h-full items-center px-4 rounded-lg' to={item.path}>
                                    <span className="ml-9" style={{fontSize: '25px'}}>
                                        {item.icon}
                                    </span>
                                        <span className="ml-9" style={{fontSize: '25px', color: '#ffff'}}>
                                            {item.name}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </div>
    )
}
