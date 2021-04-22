import React,{useState} from 'react'
import ResetPassword from '../ResetPassword/ResetPassword'
import logo from '../../assets/images/logo.png'
import atleta from '../../assets/images/atleta.png'
import {BrowserRouter as Router,
    Link,
    useRouteMatch
} from "react-router-dom"
import './login.css'


export default function Login({setToken}) {
        // let match = useRouteMatch();
        let show = false;
        const [password, setPassword] = useState();
        const [user, setUser] = useState();
        const handleClick = (e) => {
            e.preventDefault();
            if(password == "admin" && user == "admin"){
                setToken(true)
            }
        }
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
                                <input className="form-control" type="text" name="username" id="username" placeholder="Username" onChange={e => setUser(e.target.value)} />
                            </div>
                            <div className="input-group mt-4">
                                <i className="fas fa-fingerprint rounded-left atleta"></i>
                                <input className="form-control" type="password" name="password" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-sm btn-outline-success btn-block mt-3"  onClick={handleClick}>Log In</button>
                            <Link className="font-weight-lighter text-muted" to="/resetpassword">Olvidaste tu contraseña?</Link>
                        </form>
                        }
                    </div>
                </div>
            </div>
        )
}
