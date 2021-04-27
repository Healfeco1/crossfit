import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './SidebarData'
import {firebaseAuth} from '../../provider/AuthProvider'
import './lateralPanel.css'

export const MenuContext = React.createContext();

export default function LateralPanel() {

  const [sidebar, setSidebar] = useState(false);
  const [select, setSelect] = useState(null);

  // Signout firebase
  const {handleSignout,} = useContext(firebaseAuth)
  
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  function showSelect(id) {
    // console.log(id);
    setSelect(id)
  }
  
  // Context Menu Provider
  <MenuContext.Provider value={{sidebar}}/>

  
  SidebarData.sort((a,b) => a.title.localeCompare(b.title));
  return (
    <>
      <div className="menu ">
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <button role="button" className="button-toggle" aria-expanded={select}>
            {sidebar ? <AiIcons.AiOutlineClose onClick={showSidebar} /> : <FaIcons.FaBars onClick={showSidebar} aria-expanded={sidebar} />}
          </button>
          <div className="sidenav-nav-micons">
            {SidebarData.map((item, index) => {
              return (
                <div key={index} onClick={(e) => showSelect(index)} className={`sidenav-item ${select == index ? 'highlighted' : ''}`}>
                  <Link to={item.path} className='nav-navitem mt-3'>
                    <div key={index} className="navicon" id={item.title}>
                      {item.icon}
                    </div>
                    <div className="navtext" title={item.title}>{item.title}</div>
                  </Link>
                </div>
              )
            })}
          </div>
          <div className="sidenav-nav-micons logout text-center">
            <hr/>
             <AiIcons.AiOutlinePoweroff className="nav-navitem" onClick={handleSignout} to="/"/>
          </div>

        </nav>
      </div>
    </>
  )
}