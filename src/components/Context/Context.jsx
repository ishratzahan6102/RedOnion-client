import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, } from "firebase/auth";


export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const Context = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setAuthError] = useState('')


    const registerWithEmailAndPassword = async (userName, email, password, navigate) => {
        try {
            // register user
            await createUserWithEmailAndPassword(auth, email, password, navigate)
            // update user profile
            await updateProfile(auth.currentUser, {
                displayName: userName
            })

            // redirect ot homepage
            // navigate
            navigate('/')
        } catch (error) {
            setAuthError(error.message)
        } finally {
            setLoading(false)
        }
    }

    const googleSignIn = async(navigate) => {
        try {
            await signInWithPopup(auth, googleProvider);
             // redirect ot homepage
            // navigate
            navigate('/')
        } catch (error) {
            setAuthError(error.message)
        } finally {
            setLoading(false)
        } 
    }


    const loginUser = async(email, password, navigate) => {
        try {
            // register user
            await signInWithEmailAndPassword(auth, email, password, navigate)
            // update user profile

            // redirect ot homepage
            // navigate
            navigate('/')
        } catch (error) {
            setAuthError(error.message)
        } finally {
            setLoading(false)
        }
    }


    const logOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe()
    }, [])


    const authInfo = {
        registerWithEmailAndPassword,
        loginUser,
        logOut,
        user,
        googleSignIn,
        loading,


    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;