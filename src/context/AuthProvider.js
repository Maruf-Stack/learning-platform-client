import React from 'react';
import { createContext } from 'react';
import { useContext } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { useState } from 'react';
import { useEffect } from 'react';
export const AuthContext = createContext();

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const providerLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)

    }
    const singInwithGithub = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const singOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const emailPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const singIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo = { user, loading, providerLogin, singOut, emailPass, singIn, singInwithGithub }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;