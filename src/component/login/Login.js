import React, { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc/';
import { VscGithub } from 'react-icons/vsc/';
import { useContext } from 'react';
import AuthProvider, { AuthContext } from '../../context/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import Swal from 'sweetalert2';



const Login = () => {
    const nevigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const [error, setError] = useState('');
    const { user, singIn, singInwithGithub } = useContext(AuthContext);
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handlegooglesignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'successfully login',
                    showConfirmButton: false,
                    timer: 3000
                })
                nevigate('/')
            })
            .catch(error => console.log(error))
    }
    const handleGithubLogin = () => {
        singInwithGithub(githubProvider)
            .then(result => {
                const use = result.user;
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'successfully login',
                    showConfirmButton: false,
                    timer: 1500
                })
                nevigate('/')
            })
            .catch(error => {
                setError(Swal.fire({
                    title: 'Error!',
                    text: 'No github account',
                    icon: 'error',
                    confirmButtonText: 'OK'
                }))
            })
    }

    const emailandpass = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        singIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset()
                setError('')
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'successfully login',
                    showConfirmButton: false,
                    timer: 1500
                })
                nevigate(from, { replace: true })

            })
            .catch(error => {
                setError(Swal.fire({
                    title: 'Error!',
                    text: 'You entered wrong password',
                    icon: 'error',
                    confirmButtonText: 'OK'
                }))
            })
    }
    return (
        <div>
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto">

                    <form onSubmit={emailandpass} className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
                        <p className="text-lg font-medium">Sign in to your account</p>

                        <div>
                            <label htmlFor="email" className="text-sm font-medium">Email</label>

                            <div className="relative mt-1">
                                <input
                                    type="email"
                                    name='email'
                                    id="email"
                                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                    placeholder="Enter email"
                                    required
                                />

                                <span className="absolute inset-y-0 inline-flex items-center right-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="text-sm font-medium">Password</label>

                            <div className="relative mt-1">
                                <input
                                    type="password"
                                    name='password'
                                    id="password"
                                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                    placeholder="Enter password"
                                    required
                                />

                                <span className="absolute inset-y-0 inline-flex items-center right-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>


                        <button

                            type="submit"
                            className="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg"
                        >
                            Sign in
                        </button>
                        <button onClick={handlegooglesignIn} className='w-full px-5 py-3 font-medium rounded-lg btn btn-outline btn-primary'> <FcGoogle className='mr-2 text-xl'></FcGoogle> Sign in with google</button>
                        <button onClick={handleGithubLogin} className='w-full px-5 py-3 font-medium rounded-lg btn btn-outline btn-primary'>    <VscGithub className='mr-2 text-xl'></VscGithub> Sign in with github</button>

                        <p className="text-sm text-center text-gray-500">
                            No account?
                            <Link className="underline" to='/regi'>Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;