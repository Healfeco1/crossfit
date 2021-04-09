import React from 'react'
import logo from '../../assets/images/logo.png'
import atleta from '../../assets/images/atleta.png'
import './login.css'

export default function Login() {
    return (
        <div className="d-flex">
            <div className="col-md-8 row justify-content-center align-items-center minh-100" id="img">
                <img src={logo} alt="logo" className="" />
            </div>
            <div className="col-md-4 d-flex text-center align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <form>
                            {/* UserName */}
                            <div className="input-group">
                                <i className="atleta rounded-left"><img src={atleta} /></i>
                                <input class="form-control" type="text" name="username" id="username" placeholder="Username" />
                            </div>

                            {/* Password */}
                            <div className="input-group mt-5">
                                <i class="fas fa-fingerprint rounded-left"></i>
                                <input class="form-control" type="password" name="password" id="password" placeholder="Password" />
                            </div>
                                <input type="submit" value="Submit" className="btn btn-outline-success mt-3" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )
}
