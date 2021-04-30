import React, {useState,useContext} from 'react'
import './ResetPassword.css'
import { firebaseAuth } from "../../provider/AuthProvider"

export default function ResetPassword( { setShow }) {

    // Firebase
    const {handleResetPassword} = useContext(firebaseAuth)

    const [email, setEmail] = useState(null)

    const handleSubmit = e =>{
        e.preventDefault();
        handleResetPassword(email);
    }
    

    return (
        <div className="text-center ml-5">
            <label className="label label-success">Se envio el correo correctamente a healfeco@gmail.com. Sigue las instrucciones del correo</label>
            <form onSubmit={handleSubmit}>
            <div className="d-flex flex-column">
                <div className="input-group justify-content-center">
                    <i className="text-center rounded-left text-muted">@</i>
                    <input className="form-control rounded-right" type="mail" name="mail" id="mail" placeholder="Mail" onChange={e => setEmail(e.target.value)} />
                </div>
                    <button type="submit" className="btn btn-outline-danger btn-sm btn-outline-success mt-3 mb-1 align-self-lg-center">Reiniciar Contraseña</button>
                    <span className="font-weight-lighter text-muted text-center" onClick={()=>setShow(true)}>Iniciar Sesion</span>
            </div>
            </form>
        </div>
    )
}
