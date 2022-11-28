import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [data, setData] = useState("");
    const [signUpError, setSignUPError] = useState('')
    const navigate = useNavigate();

    const handleRegister = data => {
        console.log(data);
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully')
                const userInfo = {
                    displayName: data.fullname
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.fullname, data.email, data.account_type)

                    })
                    .catch(err => console.log(err));

            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }

    const saveUser = (name, email, user_role) => {
        const user = { name, email, user_role };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                navigate('/');
            })
    }
    return (

        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>

                    <form action="" onSubmit={handleSubmit(handleRegister)}>
                        <div>
                            <input {...register("fullname", { required: "Fullname is required" })}
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="fullname"
                                placeholder="Full Name" />
                            {errors.fullname && <p className='text-red-600'>{errors.fullname?.message}</p>}
                        </div>


                        <input {...register("email", { required: "Email Address is required" })}
                            type="email"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}

                        <input {...register("password", { required: "Password is required" })}
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

                        <select {...register("account_type", { required: "Account type is required" })} className="block border border-grey-light w-full p-3 rounded mb-4">
                            <option value="">Account Type</option>
                            <option value="Buyer">Buyer</option>
                            <option value="Seller">Seller</option>
                        </select>
                        {errors.account_type && <p className='text-red-600'>{errors.account_type?.message}</p>}


                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green focus:outline-none my-1"
                        >Create Account
                        </button>
                    </form>
                    {signUpError && <p className='text-red-500'>{signUpError}</p>}

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account?
                    <Link className="no-underline border-b border-blue text-blue" to="/login">
                        Log in
                    </Link>.
                </div>
            </div>
        </div>
    );
};

export default Register;