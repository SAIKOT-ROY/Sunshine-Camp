import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { getRole } from '../Api/auth';
import axiosSecure from '../Hooks/useAxioxSecure';


export const AuthContext = createContext(null);
const auth = getAuth(app)


const AuthProviders = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [role, setRole] = useState(null)

    const provider = new GoogleAuthProvider();
    
    // Observer
    useEffect(() => {
         const unsubscribe = onAuthStateChanged(auth, currentUser => {
               setUser(currentUser);
               if(currentUser?.email){
                  axiosSecure.post('/jwt', {
                        email: currentUser?.email
                  })
                  .then(data => {
                        localStorage.setItem('access-token', data.data.token)
                        setLoading(false)
                        console.log(data.data.token)
                  })
               }else{
                  localStorage.removeItem('access-token')
                  setLoading(false)
               }


               console.log('current User', currentUser);
               setLoading(false)
         })
         return () => {
            return unsubscribe();
         }
    },[])

    // Set Role
    useEffect(() => {
      if(user){
      getRole(user.email)
      .then(data => {
            // console.log(data)
            setRole(data)})
      }
    },[user])

    // Google login
    const googleLogin = () => {
          return signInWithPopup(auth, provider)
    }

    // Create User with email
    const newUser = (email, password) => {
          setLoading(true)
          return createUserWithEmailAndPassword(auth, email, password)
    }

    // Email Login
    const logIn = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password)
    }

    // update photo from email
    const update = (name, photo) => {
         setLoading(true)
         return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
         })
    }

    // User Log Out
    const logOut = () => {
          setLoading(true)
          localStorage.removeItem('access-token')
          return signOut(auth)
    }


    const authInfo = {
        user,
        loading,
        logIn,
        newUser,
        googleLogin,
        logOut,
        role,
        setRole,
        update
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;