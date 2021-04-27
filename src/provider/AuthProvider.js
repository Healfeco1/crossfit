import React, {useState} from 'react'
import {authMethods} from '../firebase/authMethods'

const AuthProvider = (props) => {
    const [inputs, setInputs] = useState({email: '', password: ''})
    const [errors, setErrors] = useState([])
    const [token, setToken] = useState(null);
    
    // if(!token){
    //     if(localStorage.getItem('token') != '' && localStorage.getItem('token') != null){
    //       setToken(localStorage.getItem('token'));
    //       console.log(token);
    //     }
    // }
    const handleSignin = () => {
        console.log('Handle Signin!!!');
        console.log(inputs);
        authMethods.signin(inputs.email, inputs.password, setErrors, setToken)
    }
    const handleSignout = () =>{
        console.log('Autprovider: handleSingout');
        authMethods.signout(setErrors,setToken);
    }
    const handleResetPassword = () =>{
        console.log("Reset password", inputs.email);
        // authMethods.resetpassword();
    }
    return (
        <firebaseAuth.Provider
        value={{
            handleSignin,
            handleSignout,
            token,
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
