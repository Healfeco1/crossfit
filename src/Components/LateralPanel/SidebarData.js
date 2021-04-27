import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/login',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text',
    },
    {
        title: 'Clases',
        path: '/resetpassword',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text',
    },
    {
        title: 'Clientes',
        path: '/atletas',
        icon: <FaIcons.FaCartPlus/>,
        cName: 'nav-text',
    },
    {
        title: 'Personal',
        path: '/',
        icon: <AiIcons.AiOutlinePoweroff/>,
        cName: 'nav-text',
    },
    {
        title: 'Inventario',
        path: '/',
        icon: <AiIcons.AiOutlinePoweroff/>,
        cName: 'nav-text',
    },
    {
        title: 'Gastos',
        path: '/',
        icon: <AiIcons.AiOutlinePoweroff/>,
        cName: 'nav-text',
    },
]