
import { useContext } from 'react';
import it from '../images/it.jpg';
import { Link } from 'react-router-dom';
import { AuthContex } from '../Contex/ClientContex';



const Register = () => {
    const { createUser, googleSignIn } = useContext(AuthContex);
    const handlerSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => console.error(error))
    }

    const handlerGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .then(error => console.error(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={it} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handlerSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>

                        <label className="label">
                            <button onClick={handlerGoogleSignIn} className="btn btn-outline btn-success">Google</button>
                        </label>
                        <label className="label">
                            <p><small>Have an account? Please<button className="btn btn-active btn-link"><Link to='/login'>Login</Link></button></small></p>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;