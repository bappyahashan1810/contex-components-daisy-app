import React, { useContext } from 'react';
import { AuthContex } from '../Contex/ClientContex';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContex);
    if (loading) {
        return <div>Loading....</div>
    }
    if (user && user.uid) {
        return children;
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;