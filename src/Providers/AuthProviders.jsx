import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { getRole } from '../Api/auth';


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
            console.log(data)
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

    // User Log Out
    const logOut = () => {
          setLoading(true)
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
        setRole
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;