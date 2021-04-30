import firebaseConfig from './firebase';
import firebase from 'firebase';

export const authMethods = {
    signin: (email,password, setErrors, setToken, setUserToken) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then( async userCredentials=>{
            const token = await userCredentials.user?.getIdToken();
            setToken(token)
            setUserToken(token)
        })
        .catch(err => {
            // setErrors(prev => ([...prev, err.message]))
            setErrors(prev => (err.message))
        })
    },
    signout: (setErrors, setToken, setInputs) => {
        console.log('signout');
        // signout is a no argument function
        firebase.auth().signOut().then(res => {
            console.log(res);
            // remove token
            // localStorage.removeItem('token');
            // set the token back to original state
            setToken(null);
            setInputs({email: '', password: ''});
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
        firebase.auth().sendPasswordResetEmail(email)        
        .then(()=>{
            console.log(`send email to: ${email}`);
        })
        .catch(err => {
            setErrors(err.message);
        })
    },
    authStateChanged: (async (user, setUser) => {
        const { displayName, email} = user;
        setUser({displayName, email})
    })
}