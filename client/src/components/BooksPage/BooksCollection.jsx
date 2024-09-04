import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import BookContext from '../../useContext/BookContext';


const BooksCollection = ({books, setBooks, setOldCollection}) => {

const {addBookToMyCollection} = useContext(BookContext);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = await axios.get(`${import.meta.env.VITE_REAL_HOST_URL}/books`);
                setBooks(data.data);
                setOldCollection(data.data);

            } catch (error) {
                console.log(error.message);
            }
        }

        fetchData();

    }, [])  

    return (
        <main>
            <div className=" grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-x-5 gap-y-2 cardMainContainer w-[100%]  md:mx-auto md:text-left p-5 text-center bg-white text-black dark:bg-base-100 dark:text-white">
                        {books.map(book => (
                            <div key={book._id} className='p-5 w-[100%]  bg-white text-black dark:bg-base-100 dark:text-white transition-all duration-400 hover:scale-105 hover:transition-all hover:duration-400'>
                                <div className="card shadow-heroShadow bg-base-100 md:w-80" >
                                    <figure>
                                        <img
                                            src={book.image}
                                            alt="books" />
                                    </figure>

                                    <div className="card-body rounded-b-box bg-white text-black dark:bg-base-100 dark:text-white">
                                        <div className='w-[100%] flex justify-end'><div className={`badge badge-secondary uppercase font-bold ${book.category === 'free' ? 'bg-green-500' : 'bg-red-500'} border-none`}>{book.category}</div></div>
                                        <h2 className="card-title line-clamp-1 bg-white text-black dark:bg-base-100 dark:text-white ">
                                            {book.title}
                                        </h2>
                                        <p className='bg-white text-black dark:bg-base-100 dark:text-white'>{book.name}</p>
                                        <div className="card-actions flex items-center justify-between w-[95%]">
                                            <div className="badge badge-outline text-[15px] font-bold bg-white text-black dark:bg-base-100 dark:text-white ">{book.price}$</div>
                                            <button onClick={()=>addBookToMyCollection(book)} className="btn-sm font-bold  leading-loose bg-red-400 rounded-full hover:bg-red-500">BUY NOW</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        }

                </div>
        </main>
    )
}

export default BooksCollection
