import React from 'react'
import Login from '../Login/index'
import './ResetPassword.css'

export default function ResetPassword({show}) {
    return (
        <div>
            <label className="label label-success">Se envio el correo correctamente a healfeco@gmail.com. Sigue las instrucciones del correo</label>
            <form>
            <div className="d-flex flex-column">
                <div className="input-group justify-content-center">
                    <i class="text-center rounded-left text-muted">@</i>
                    <input class="form-control rounded-right" type="mail" name="mail" id="mail" placeholder="Mail" />
                </div>
                    <button type="submit" class="btn btn-outline-danger btn-sm btn-outline-success mt-3 mb-1 align-self-lg-center" onClick={()=>show="false"}>Reiniciar Contraseña</button>
                    <a className="font-weight-lighter text-muted text-center">Iniciar Sesion</a>
            </div>
            </form>
        </div>
    )
}
