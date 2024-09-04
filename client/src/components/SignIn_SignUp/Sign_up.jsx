import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import BookContext from '../../useContext/BookContext';

const Sign_up = () => {

    const navigate = useNavigate();

    // Separate state variables for focus
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [isUserNameFocused, setIsUserNameFocused] = useState(false);
    const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);

    const handleSubmit = (values) => {
        // Make API request to register user
        axios.post(`${import.meta.env.VITE_REAL_HOST_URL}/signUp`, values)
            .then((response) => {

                navigate('/register_successful');
            })
            .catch((error) => {
                console.log(error);
                // Handle registration errors
            });
    };

    const initialValues = {
        userName: "",
        email: "",
        password: "",
    };

    // Yup validation schema
    const validationSchema = Yup.object({
        userName: Yup.string()
            .required('Username is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    return (
        <div className="relative overflow-clip w-full h-screen bg-base-100 flex justify-center items-center">
            <div className="shadow absolute left-0 top-1/2 rotate-45 z-0 md:top-1/4 md:left-0 md:-rotate-45 w-[150%] h-[130vh] bg-white"></div>

            <div className="sign_in_Container md:w-[500px] relative z-10 p-4 rounded-box shadow-heroShadow bg-slate-100">
                <div className="textArea relative flex flex-col justify-center items-center md:p-8">
                    <div className="shadow absolute z-0 bg-[#1d232a] md:w-[370px] w-[280px] h-[40px] md:h-[60px] left-[-16px] top-[8px] rounded-r-lg md:top-[42px]"></div>
                    <h1 className='md:text-[50px] relative z-10 text-[35px] text-white font-extrabold leading-relaxed '>SIGN UP</h1>
                    <p className='md:text-[16px] text-[13px]'>Create your account to get started.</p>
                </div>

                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    {({ errors, touched }) => (
                        <Form className='mt-6'>

                            <div className="flex flex-col justify-center items-center gap-4">
                                {/* UserName Field */}
                                <div className="w-[100%] flex flex-col justify-start items-center">
                                    <div className={`relative border-[3px] ${isUserNameFocused ? 'border-black' : 'border-[#516276]'} rounded-box p-1 bg-slate-100 md:w-[80%]`}>
                                        <label
                                            htmlFor="userName"
                                            className={`z-10 p-1 text-[#516276] font-semibold absolute left-[13px] top-[2px] transition-all duration-300 ease-in-out ${isUserNameFocused ? 'bg-slate-100 -translate-y-5 text-[16px]' : 'top-2 text-[22px]'}`}
                                        >
                                            USERNAME
                                        </label>
                                        <Field
                                            className="bg-transparent text-black font-semibold relative mx-3 z-20 md:w-full md:h-[40px] text-[22px] focus:outline-none"
                                            name="userName"
                                            type="text"
                                            onFocus={() => setIsUserNameFocused(true)}
                                            onBlur={(e) => setIsUserNameFocused(e.target.value !== '')}
                                        />
                                    </div>
                                    <div className='w-[80%]'>
                                        {errors.userName && touched.userName && (
                                            <p className="text-red-600 ml-6 text-lg">
                                                {errors.userName}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div className="w-[100%] flex flex-col justify-start items-center">
                                    <div className={`relative border-[3px] ${isEmailFocused ? 'border-black' : 'border-[#516276]'} rounded-box p-1 bg-slate-100 md:w-[80%]`}>
                                        <label
                                            htmlFor="email"
                                            className={`z-10 p-1 text-[#516276] font-semibold absolute left-[13px] top-[2px] transition-all duration-300 ease-in-out ${isEmailFocused ? 'bg-slate-100 -translate-y-5 text-[16px]' : 'top-2 text-[22px]'}`}
                                        >
                                            EMAIL
                                        </label>
                                        <Field
                                            className="bg-transparent text-black font-semibold relative mx-3 z-20 md:w-full md:h-[40px] text-[22px] focus:outline-none"
                                            name="email"
                                            type="text"
                                            onFocus={() => setIsEmailFocused(true)}
                                            onBlur={(e) => setIsEmailFocused(e.target.value !== '')}
                                        />
                                    </div>
                                    <div className='w-[80%]'>
                                        {errors.email && touched.email && (
                                            <p className="text-red-600 ml-6 text-lg">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Password Field */}
                                <div className="w-[100%] flex flex-col justify-start items-center">
                                    <div className={`relative border-[3px] ${isPasswordFocused ? 'border-black' : 'border-[#516276]'} rounded-box p-1 bg-slate-100 md:w-[80%]`}>
                                        <label
                                            htmlFor="password"
                                            className={`z-10 p-1 text-[#516276] font-semibold absolute left-[13px] top-[2px] transition-all duration-300 ease-in-out ${isPasswordFocused ? 'bg-slate-100 -translate-y-5 text-[16px]' : 'top-2 text-[22px]'}`}
                                        >
                                            PASSWORD
                                        </label>
                                        <Field
                                            className="bg-transparent text-black font-semibold relative mx-3 z-20 md:w-full md:h-[40px] text-[22px] focus:outline-none"
                                            name="password"
                                            type="password"
                                            onFocus={() => setIsPasswordFocused(true)}
                                            onBlur={(e) => setIsPasswordFocused(e.target.value !== '')}
                                        />
                                    </div>
                                    <div className='w-[80%]'>
                                        {errors.password && touched.password && (
                                            <p className="text-red-600 ml-6 text-lg">
                                                {errors.password}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Confirm Password Field */}
                                <div className="w-[100%] flex flex-col justify-start items-center">
                                    <div className={`relative border-[3px] ${isConfirmPasswordFocused ? 'border-black' : 'border-[#516276]'} rounded-box p-1 bg-slate-100 md:w-[80%]`}>
                                        <label
                                            htmlFor="confirmPassword"
                                            className={`z-10 p-1 text-[#516276] font-semibold absolute left-[13px] top-[2px] transition-all duration-300 ease-in-out ${isConfirmPasswordFocused ? 'bg-slate-100 -translate-y-5 text-[16px]' : 'top-2 text-[22px]'}`}
                                        >
                                            CONFIRM PASSWORD
                                        </label>
                                        <Field
                                            className="bg-transparent text-black font-semibold relative mx-3 z-20 md:w-full md:h-[40px] text-[22px] focus:outline-none"
                                            name="confirmPassword"
                                            type="password"
                                            onFocus={() => setIsConfirmPasswordFocused(true)}
                                            onBlur={(e) => setIsConfirmPasswordFocused(e.target.value !== '')}
                                        />
                                    </div>
                                    <div className='w-[80%]'>
                                        {errors.confirmPassword && touched.confirmPassword && (
                                            <p className="text-red-600 ml-6 text-lg">
                                                {errors.confirmPassword}
                                            </p>
                                        )}
                                    </div>
                                </div>

                            </div>

                            <div className="buttons flex flex-col justify-center items-center p-3 mt-5 space-y-3">
                                <button
                                
                                    type='submit'
                                    className="w-[300px] bg-[#1d232a] text-[20px] font-bold h-[40px] flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#000000] before:to-[rgb(0,0,0)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
                                >
                                    SIGN UP
                                </button>
                                <div className="flex gap-1.5 font-bold w-full">
                                    Already have an account?{' '}
                                    <Link to="/sign_in">
                                        <span className="font-extrabold text-purple-500">Log In</span>
                                    </Link>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Sign_up;
