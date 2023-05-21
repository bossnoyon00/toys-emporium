import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const { signIn, googleSignIn, githubSignIn, } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const location = useLocation();
    useTitle('Login')
    const handleSignIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset()
                navigate(location.state?.from?.pathname || '/', { replace: true })
                setError('')
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='border border-purple-500'>
            <div className="hero min-h-screen p-6  bg-cyan-500">
                <div className="hero-content flex-col ">
                    <div className="text-center text-orange-700 lg:text-left">
                        <h1 className="text-5xl font-bold">Login Toy now!</h1>

                    </div>
                    <form onSubmit={handleSignIn} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body bg-amber-200 rounded">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p className='text-red-500 mb-5'>{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className='text-center'>
                                <button onClick={handleGoogleSignIn} className='flex text-2xl w-full btn btn-accent flex-row items-center'><span className='mr-3'>Sign In</span><FaGoogle className=''></FaGoogle></button><br />
                            </div>
                            <div>
                                <p><small>New to Toys Emporium? <Link className='text- font-bold' to="/signup">Create New Account</Link></small></p>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;