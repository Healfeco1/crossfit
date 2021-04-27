import firebaseConfig from './firebase';
import firebase from 'firebase';

export const authMethods = {
    signin: (email,password, setErrors, setToken) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async res => {
            const token = await Object.entries(res.user)[5][1].b
            // Set token to localStorange
            // await localStorage.setItem('token', token)
            // setToken(window.localStorage.token)
            setToken(token)
            console.log(res);
        })
        .catch(err => {
            setErrors(prev => ([...prev, err.message]))
        })
    },
    signout: (setErrors, setToken) => {
        console.log('signout');
        // signout is a no argument function
        firebase.auth().signOut().then(res => {
            console.log(res);
            // remove token
            // localStorage.removeItem('token');
            // set the token back to original state
            setToken(null)
            // generate a new token to next session
        })
        .catch(err=>{
            // there shouldn't everu be an error from firebase but just in case
            setErrors(prev => ([...prev, err.message]))
            // whether firebase does the trick or not I want my user to do there thing
            // localStorage.removeItem('token')
            setToken(null)
            console.error('autMethos.js errors:', err.message);
        })
    },
    resetpassword: (setErrors, email) => {
        console.log('resetpassword');
    },
}