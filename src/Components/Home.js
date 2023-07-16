import React, { useContext } from 'react';
import { AuthContex } from '../Contex/ClientContex';

const Home = () => {
    const { user } = useContext(AuthContex);
    return (
        <div>
            <h1>Welcome to {user?.email} </h1>
        </div>
    );
};

export default Home;