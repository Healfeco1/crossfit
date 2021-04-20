import React, {useState} from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SidebarData} from './SidebarData'
import './lateralPanel.css'


export default function LateralPanel() {
  const [sidebar, setSidebar] = useState(false);
  const [select, setSelect] = useState(null);

  const showSidebar = () => setSidebar(!sidebar);
  // const showSelect = () => setSelect(!select);
  // const showSelect = () => {
  //   // e.currentTarget.className="addClass"
  //   setSelect(0)
  // };

  function showSelect(id){
    // console.log(id);
    setSelect(id)
  }
    return (
      <>  
        <nav className={sidebar ? 'nav-menu active':'nav-menu'}>
          <button role="button" class="button-toggle" aria-expanded={select}>
            {sidebar ? <AiIcons.AiOutlineClose onClick={showSidebar}/>:<FaIcons.FaBars onClick={showSidebar} aria-expanded={sidebar}/>}
          </button>
          <div className="sidenav-nav-micons">
                {SidebarData.map((item, index) => {
                  return (
                          /* <div key={index} className={sidebar ? 'sidenav-item-active':'sidenav-item'}> */
                          <div key={index} onClick={(e)=>showSelect(index)} className={`sidenav-item ${select==index?'highlighted':''}`}>
                          {/* <div onClick={(e)=>showSelect(index)} className={`nav-navitem${select==index?'-selected':''}`}> */}
                            <div className='nav-navitem mt-3'>
                              <div key={index} className="navicon" id={item.title}>
                                {item.icon}
                              </div>
                              <div className="navtext" title={item.title}>{item.title}</div>
                            </div>
                          </div>
                        )
                })}
            </div>
        </nav>
      </>    
    )
}