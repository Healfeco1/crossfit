import React from 'react'
import logo from '../../assets/images/logo.png'
import atleta from '../../assets/images/atleta.png'
import './login.css'

export default function Login() {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center minh-100">
                <div className="col-12 col-lg-6 text-center">
                    <img src={logo} alt="logo" className="" />
                </div>
                <div className="col-12 col-lg-6 pt-4 d-flex justify-content-center">
                    <form>
                        <div className="input-group">
                            <i className="atleta rounded-left"><img src={atleta} /></i>
                            <input class="form-control" type="text" name="username" id="username" placeholder="Username" />
                        </div>
                        <div className="input-group mt-4">
                            <i class="fas fa-fingerprint rounded-left atleta"></i>
                            <input class="form-control" type="password" name="password" id="password" placeholder="Password" />
                        </div>
                        <button type="submit" class="btn btn-outline-success btn-block mt-3">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
