import React, { useState } from 'react'

const TopTextSection = ({ books, setBooks, oldCollection }) => {

    const searchHandler = (event) => {
        const value = event.target.value.toLowerCase();

        if (!value.trim()) {
            setBooks(oldCollection);
            return;
        }

        const filterData = oldCollection.filter(({ title, name }) =>
            title.toLowerCase().includes(value) ||
            name.toLowerCase().includes(value)
        );

        setBooks(filterData);
    };


    return (
        <>

            <header className='flex flex-col justify-center items-center'>
                <div className='text-center md:p-[20px] mt-12 '>
                    <h1 className='uppercase md:font-bold md:text-[30px] text-[25px] font-bold'>Thank you for exploring our book collection!🥰</h1>
                    <div className='md:w-[100%] md:flex md:justify-center mt-8 '><p className='md:w-[50%] md:text-[20px]' >We hope you found some great reads and discovered new favorites. Your visit means a lot to us, and we look forward to helping you find more amazing books in the future.</p></div>
                </div>

                <div className="searchBar m-6">

                    <div
                        className="p-5 overflow-hidden w-[60px] h-[50px] hover:md:w-[500px] hover:w-[300px] focus-within:w-[600px] bg-[#f44040] shadow-heroShadow rounded-full flex group items-center hover:duration-300 duration-300"
                    >
                        <div className="flex items-center justify-center fill-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="Isolation_Mode"
                                data-name="Isolation Mode"
                                viewBox="0 0 24 24"
                                width="22"
                                height="22"
                            >
                                <path
                                    d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"
                                ></path>
                            </svg>
                        </div>
                        <input
                            onChange={searchHandler}
                            type="text"
                            className="outline-none text-[20px] bg-transparent w-full text-white font-normal px-4"
                        />
                    </div>


                </div>
            </header>

        </>
    )
}

export default TopTextSection
