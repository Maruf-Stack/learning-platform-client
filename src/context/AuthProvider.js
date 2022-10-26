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
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const singOut = () => {
        return signOut(auth)
    }
    const emailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const singIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo = { user, providerLogin, singOut, emailPass, singIn }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;