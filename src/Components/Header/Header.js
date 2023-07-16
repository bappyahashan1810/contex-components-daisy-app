import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../Contex/ClientContex';

const Header = () => {
    const { user, logOut } = useContext(AuthContex);

    const handlerLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Ahashan IT</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                {
                    user?.email ? <button onClick={handlerLogOut} className="btn btn-sm m-2">LogOut</button>
                        :
                        <div>
                            <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log In</Link>
                            <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                        </div>
                }
                {
                    user?.email && <p>Welcome {user.email}</p>
                }

            </div>
        </div>
    );
};

export default Header;