import React from 'react';
import { Link } from 'react-router-dom';

;



const RegisterSuccessful = () => {

    return (
        <div className="relative overflow-clip w-full h-screen bg-base-100 flex justify-center items-center">
            <div className="shadow absolute left-0 top-1/2 rotate-45 z-0 md:top-1/4 md:left-0 md:-rotate-45 w-[150%] h-[130vh] bg-white"></div>

            <div className="sign_in_Container w-[90%] md:w-[720px] relative z-10 p-4 rounded-box shadow-heroShadow bg-slate-100">
                <div className="textArea relative flex flex-col justify-center items-center md:p-8">
                    <div className="shadow absolute z-0 bg-[#1d232a] md:w-[365px] w-[200px] h-[25px] md:h-[50px] left-[-19px] top-[4px] rounded-r-lg md:top-[42px]"></div>
                    <h1 className='md:text-[40px] relative z-10 text-[20px] text-white font-extrabold leading-relaxed uppercase'>Successfully <b className='text-base-200'>Registration</b></h1>
                    <p className='md:text-[16px] w-[60%] mt-5 text-center text-[13px]'>Hurray! You have successfully created your account. Login and Enter the Website to explore.</p>
                </div>

                <div className='w-[100%] flex justify-center items-center'>
                    <Link to={"/sign_in"}>
                    <button className="w-[300px] bg-[#1d232a] text-[20px] font-bold h-[40px] flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#000000] before:to-[rgb(0,0,0)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
                        LOG IN
                    </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default RegisterSuccessful;
