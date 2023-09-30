import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {GoogleAuthProvider, createUserWithEmailAndPassword ,onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from './../firebase/firebase.config';

export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    const createUser = (email,password)=>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)   
    }

    const logOut = ()=>{
      setLoading(true)
       return signOut(auth)
    }

    const signINGoogle = ()=>{
      setLoading(true)
     return signInWithPopup(auth,provider)
    }

    // for the observe the auth state change
     
    useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth,currentUser=>{
        console.log('current value of current user',currentUser);
        setUser(currentUser)
        setLoading(false)
      })
      return ()=>{
        unSubscribe()
      }
    },[])
    
    const authInfo = {
      user,
      loading,
      createUser,
      signInUser,
      logOut,
      signINGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;

/***
 * 1. create context and export it
 * 2. set provider with value
 * 3. use the Auth Provider in the main.jsx file
 * 4. access children in the AuthProvider component as children and use it in the middle of the Provider
 * ****/