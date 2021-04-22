import React from 'react'
import Login from '../Login/index'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './ResetPassword.css'

export default function ResetPassword() {
    return (
        <div className="text-center ml-5">
            <label className="label label-success">Se envio el correo correctamente a healfeco@gmail.com. Sigue las instrucciones del correo</label>
            <form>
            <div className="d-flex flex-column">
                <div className="input-group justify-content-center">
                    <i class="text-center rounded-left text-muted">@</i>
                    <input class="form-control rounded-right" type="mail" name="mail" id="mail" placeholder="Mail" />
                </div>
                    <button type="submit" class="btn btn-outline-danger btn-sm btn-outline-success mt-3 mb-1 align-self-lg-center">Reiniciar Contraseña</button>
                    <Link className="font-weight-lighter text-muted text-center" to="/atletas">Iniciar Sesion</Link>
            </div>
            </form>
        </div>
    )
}
