import React, { useState } from 'react'
import ResetPassword from '../ResetPassword/ResetPassword'
import logo from '../../assets/images/logo.png'
import atleta from '../../assets/images/atleta.png'
import Sesion from './Sesion.js'
import './login.css'


export default function Login({ setToken }) {
    const [show, setShow] = useState(true);
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center minh-100">
                <div className="col-12 col-lg-7 text-center">
                    <img src={logo} alt="logo" className="img-fluid"/>
                </div>
                <div className="col-12 col-lg-5 pt-4 d-flex justify-content-center text-center">
                    {show ? <Sesion setShow= {setShow} setToken = {setToken}/> : <ResetPassword setShow = {setShow}/>}
                </div>
            </div>
        </div>
    )
}


