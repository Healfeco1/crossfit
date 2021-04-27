import React from 'react'
import './ResetPassword.css'

export default function ResetPassword( { setShow }) {
    return (
        <div className="text-center ml-5">
            <label className="label label-success">Se envio el correo correctamente a healfeco@gmail.com. Sigue las instrucciones del correo</label>
            <form>
            <div className="d-flex flex-column">
                <div className="input-group justify-content-center">
                    <i className="text-center rounded-left text-muted">@</i>
                    <input className="form-control rounded-right" type="mail" name="mail" id="mail" placeholder="Mail" />
                </div>
                    <button type="submit" className="btn btn-outline-danger btn-sm btn-outline-success mt-3 mb-1 align-self-lg-center">Reiniciar Contraseña</button>
                    <span className="font-weight-lighter text-muted text-center" onClick={()=>setShow(true)}>Iniciar Sesion</span>
            </div>
            </form>
        </div>
    )
}
