import React, {useState, createContext} from 'react'
import {authMethods} from '../firebase/authMethods'

const AuthProvider = (props) => {
    const [inputs, setInputs] = useState({email: '', password: ''})
    const [errors, setErrors] = useState('')
    const [token, setToken] = useState(null);
    const [userToken, setUserToken] = useState(null);
    
    const handleSignin = () => {
        authMethods.signin(inputs.email, inputs.password, setErrors, setToken, setUserToken)
    }
    const handleSignout = () =>{
        authMethods.signout(setErrors,setToken, setInputs);
    }
    const handleResetPassword = email =>{
        authMethods.resetpassword(setErrors, email);
    }
    
    return (
        <firebaseAuth.Provider
        value={{
            handleSignin,
            handleSignout,
            handleResetPassword,
            setErrors,
            token,
            userToken,
            inputs,
            setInputs,
            errors,
        }}
        >
            {props.children}
        </firebaseAuth.Provider>
    )
}

export default AuthProvider;
export const firebaseAuth = React.createContext()
export const UserContext = createContext({userToken: null})
