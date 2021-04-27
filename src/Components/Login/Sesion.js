import React, { useState, useContext } from 'react'
import atleta from '../../assets/images/atleta.png'
import { firebaseAuth } from "../../provider/AuthProvider"


export default function Sesion({ setShow }) {

    // Firebase
    const { handleSignin, inputs, setInputs, errors } = useContext(firebaseAuth)

    // Notifications toasts

    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async e => {
        e.preventDefault();
        console.log('handleSubmit');
        // const token = await loginUser({
        //     user,
        //     password
        // });
        // setToken(token);
        // if(password == "admin" && user == "admin"){
        //     const token = "true"
        // }
        setInputs({ user, password })
        handleSignin(inputs.name, inputs.password);
        // console.log(inputs);
    }
    const handleChange = e => {
        const { name, value } = e.target
        console.log(inputs);
        setInputs(prev => ({ ...prev, [name]: value }))
    }
    return (
        <form onSubmit={handleSubmit}>
            {errors.length > 0 ? errors.map(error => <span style={{ color: 'red' }}>{error}</span>) : null}
            <div className="input-group">
                <i className="atleta rounded-left"><img src={atleta} /></i>
                {/* <input className="form-control" type="text" name="username" id="username" placeholder="Username" onChange={e => setUser(e.target.value)} /> */}
                <input className="form-control" type="text" name="email" id="username" placeholder="Username" onChange={handleChange} />
            </div>
            <div className="input-group mt-4">
                <i className="fas fa-fingerprint rounded-left atleta"></i>
                {/* <input className="form-control" type="password" name="password" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)} /> */}
                <input className="form-control" type="password" name="password" id="password" placeholder="Password" onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-sm btn-outline-success btn-block mt-3" to="/dashboard">Log In</button>
            <span className="font-weight-lighter text-muted" onClick={() => setShow(false)}>Olvidaste tu contraseña?</span>
        </form>
    )
}
