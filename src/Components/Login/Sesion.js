import React, { useState, useContext, useEffect } from 'react'
import atleta from '../../assets/images/atleta.png'
import { firebaseAuth } from "../../provider/AuthProvider"
import { useToasts } from 'react-toast-notifications'


export default function Sesion({ setShow }) {

    // Notifications toasts
    const { addToast } = useToasts()

    // Firebase
    const { handleSignin, inputs, setInputs, errors, userToken, setErrors } = useContext(firebaseAuth)

    const [email, setUser] = useState();
    const [password, setPassword] = useState();


    useEffect(() => {
        if (errors) {
            addToast(errors, { appearance: 'error', autoDismiss: true });
        }
        setErrors('');
    }, [errors])
    
    const handleSubmit = async e => {
        e.preventDefault();
        handleSignin();
    }
    const handleChange = e => {
        const { name, value } = e.target
        setInputs(prev => ({ ...prev, [name]: value }))
    }
    return (
        <form onSubmit={handleSubmit}>
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
