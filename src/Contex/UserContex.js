import React, { createContext } from 'react';
import { getAuth } from 'firebase/auth';
import app from '../firebase/firebase.init';


const AuthContex = createContext();
const auth = getAuth(app);
const UserContex = ({ children }) => {
    const authInfo = {};
    return (
        <div>
            <AuthContex.Provider value={authInfo}>

                {children}
            </AuthContex.Provider>

        </div>
    );
};

export default UserContex;