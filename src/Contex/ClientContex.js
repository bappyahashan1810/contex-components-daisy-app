
import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.init';




export const AuthContex = createContext();
const auth = getAuth(app);


const ClientContex = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const logOut = () => {
        return signOut(auth)

    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }


    const authInfo = { loading, googleSignIn, createUser, loginUser, user, logOut };


    return (
        <div>
            <AuthContex.Provider value={authInfo}>

                {children}
            </AuthContex.Provider>
        </div>
    );
};

export default ClientContex;