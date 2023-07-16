import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../firebase/firebase.init';


export const AuthContex = createContext();
const auth = getAuth(app);
const UserContex = ({ children }) => {
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const authInfo = { createUser };
    return (
        <div>
            <AuthContex.Provider value={authInfo}>

                {children}
            </AuthContex.Provider>

        </div>
    );
};

// export default UserContex;