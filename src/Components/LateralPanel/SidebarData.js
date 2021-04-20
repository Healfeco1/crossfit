import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text',
        id: 0
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text',
        id: 1
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus/>,
        cName: 'nav-text',
        id: 2
    },
]