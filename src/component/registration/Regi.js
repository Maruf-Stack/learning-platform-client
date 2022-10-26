import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthProvider';

const Regi = () => {
    const [error, setError] = useState('')
    const { emailPass } = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        console.log(name, email, password, photoURL)
        emailPass(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setError('')
                form.reset()
            })
            .catch(error => {
                setError(Swal.fire({
                    title: 'Error!',
                    text: `Something went wrong
                    ${error.message}`,
                    icon: 'error',
                    confirmButtonText: 'OK'
                }))
            })
    }
    return (
        <div>
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto">

                    <form onSubmit={handleSubmit} className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
                        <p className="text-lg font-medium">Sign up</p>

                        <div>
                            <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                            <input
                                type="text"
                                name='name'
                                id="name"
                                className="w-full p-4 pr-12 text-sm border border-gray-200 rounded-lg shadow-sm"
                                placeholder="Enter your name"
                            />
                            <label htmlFor="name" className="text-sm font-medium">Photo URL</label>
                            <input
                                type="text"
                                name='photoURL'
                                id="photoURL"
                                className="w-full p-4 pr-12 text-sm border border-gray-200 rounded-lg shadow-sm"
                                placeholder="PhotoURL"
                            />
                            <label htmlFor="email" className="text-sm font-medium">Email</label>

                            <div className="relative mt-1">
                                <input
                                    type="email"
                                    name='email'
                                    id="email"
                                    className="w-full p-4 pr-12 text-sm border border-gray-200 rounded-lg shadow-sm"
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
                                    className="w-full p-4 pr-12 text-sm border border-gray-200 rounded-lg shadow-sm"
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

                        <p className="text-sm text-center text-gray-500">
                            Already have account?
                            <Link className="underline" to='/login'>Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Regi;