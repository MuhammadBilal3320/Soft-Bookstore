import React, { useContext } from 'react';
import BookContext from '../../../useContext/BookContext';
import { Link } from 'react-router-dom';


const HeroPage = ({isAuthenticated}) => {

const { logout } = useContext(BookContext);

    return (
        <div className='container md:shadow-heroShadow md:my-9 md:rounded-box md:justify-between mx-auto md:flex md:flex-row flex gap-10 flex-col-reverse items-center bg-white dark:bg-base-100'>
            <div className="leftContainer md:flex flex-col md:gap-16 gap-8 md:w-[50%]">
                <div className="heroText md:relative md:px-10 overflow-hidden md:z-10 w-[100%] flex flex-col gap-[50px] md:text-left text-center">
                    <div className="absolute hidden md:block right-[370px] top-[0px] shadow w-[800px] h-[160px] z-0 rounded-xl dark:bg-white bg-black"></div>
                    <h1 className='relative z-10 text-[40px] leading-10 md:text-[100px] font-extrabold md:leading-[80px] uppercase'>
                        <b className='text-green-400'>Learn</b> and <b className='text-green-400'>Grow</b> with Every Book
                    </h1>
                    <p className='md:text-[20px] text-[18px]'>
                        Explore a world of stories, knowledge, and imagination. Whether you're seeking the latest bestsellers, timeless classics, or hidden gems, our curated collection has something for every reader. Start your journey today.
                    </p>
                </div>
                <div className={`heroButtons ${isAuthenticated ? "hidden" : "flex md:flex"} md:px-10  md:gap-5 md:justify-start justify-center items-center md:mt-1 mt-10 gap-5`}>
                    <Link to={"/sign_in"} ><button className='btn w-[140px] md:w-[200px] rounded-full bg-green-500 text-[18px] font-bold text-white'>SIGN IN</button></Link>
                    <Link to={"/sign_up"}><button className='btn w-[140px] md:w-[200px] rounded-full bg-green-500 text-[18px] font-bold text-white'>SIGN UP</button></Link>
                </div>
                    <h1 className={`${isAuthenticated ? "block" : "hidden"}  uppercase text-[20px] text-center text-green-500 mt-5 md:text-[40px] font-bold` }>Welcome to Soft Bookstore</h1>
            </div>

            <div className="rightContainer md:flex md:justify-center md:items-center overflow-hidden w-[80%] md:w-[50%]">
                <div className="container md:w-[80%]">
                    <img src="/images/herobook.png" alt="This is an image" height={"700px"} width={"600px"} />
                </div>
            </div>
        </div>
    )
}

export default HeroPage;
