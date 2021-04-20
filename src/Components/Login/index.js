import React from 'react'
import ResetPassword from '../ResetPassword/ResetPassword'
import logo from '../../assets/images/logo.png'
import atleta from '../../assets/images/atleta.png'
import {BrowserRouter as Router,
    Link,
    useRouteMatch
} from "react-router-dom"
import './login.css'

export default function Login() {
        // let match = useRouteMatch();
        let show = false;
        return (
                <div className="container">
                <div className="row justify-content-center align-items-center minh-100">
                    <div className="col-12 col-lg-7 text-center">
                        <img src={logo} alt="logo" className="" />
                    </div>
                    <div className="col-12 col-lg-5 pt-4 d-flex justify-content-center">
                        {show?<ResetPassword show={show}/>:
                        <form>
                            <div className="input-group">
                                <i className="atleta rounded-left"><img src={atleta} /></i>
                                <input class="form-control" type="text" name="username" id="username" placeholder="Username" />
                            </div>
                            <div className="input-group mt-4">
                                <i class="fas fa-fingerprint rounded-left atleta"></i>
                                <input class="form-control" type="password" name="password" id="password" placeholder="Password" />
                            </div>
                            <button type="submit" class="btn btn-sm btn-outline-success btn-block mt-3">Log In</button>
                            <a className="font-weight-lighter text-muted">Olvidaste tu contraseña?</a>
                            {/* <Router><Link to=`${match.url}/`>Home</Link></Router> */}
                            {/* {match} */}
                        </form>
                        }
                    </div>
                </div>
            </div>
        )
}
