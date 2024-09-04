import React, { useEffect, useState } from 'react'
import Navbar from '../HomePage/Navbar/Navbar'
import axios from 'axios'
import Footer from '../HomePage/Footer/Footer'
import { toast } from 'react-toastify'

const MyCollection = () => {

    const [myCollection, setMyCollection] = useState([])

    const handleRemoveButton = async (bookId) => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    authToken: `${token}`,
                },
            };

            const response = await axios.delete(`${import.meta.env.VITE_REAL_HOST_URL}/delete_book/${bookId}`, config);
            toast.success("Book deleted successfully!🤪")

            if (response.status === 200) {
                setMyCollection(prevCollection => prevCollection.filter(book => book._id !== bookId));
            }

        } catch (error) {
            console.log(error.response ? error.response.data : error.message);
        }
    };



    useEffect(() => {

        const fetchMyCollection = async () => {
            try {

                const token = localStorage.getItem('token');
                const config = {
                    headers: {
                        authToken: `${token}`,
                    },
                };

                const response = await axios.get(`${import.meta.env.VITE_REAL_HOST_URL}/get_book_collection`, config);
                setMyCollection(response.data.books);
            } catch (error) {
                console.log(error.message);
            }
        }

        fetchMyCollection();

    }, [])


    return (
        <>
            <Navbar />
            <div className="myCollectionController bg-white text-black dark:bg-base-100 dark:text-white flex flex-col justify-center items-center pt-[50px] ">
                <h1 className=' text-[30px] font-bold bg-white text-black dark:bg-base-100 dark:text-white'>MY BOOKS COLLECTION</h1>

                <div className="myCollectionController w-[90%]">

                    <div className="  grid grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] gap-x-5 gap-y-2 cardMainContainer w-[100%]  md:mx-auto md:text-left p-5 text-center bg-white text-black dark:bg-base-100 dark:text-white">
                        {myCollection.map(book => (
                            <div key={book._id} className='m-5 w-[100%] group bg-white text-black dark:bg-base-100 dark:text-white transition-all duration-400 hover:scale-105 hover:transition-all hover:duration-400'>
                                <div className="card shadow-heroShadow bg-base-100 md:w-80" >
                                    <figure>
                                        <img
                                            src={book.image}
                                            alt="books" />
                                    </figure>

                                    <div className="card-body relative rounded-b-box bg-white text-black dark:bg-base-100 dark:text-white">
                                        <div className='w-[100%] flex justify-between'>
                                            <div className="badge badge-outline text-[15px] font-bold bg-white text-black dark:bg-base-100 dark:text-white ">{book.price}$</div>
                                            <div className={`badge badge-secondary uppercase font-bold ${book.category === 'free' ? 'bg-green-500' : 'bg-red-500'} border-none`}>{book.category}</div>
                                        </div>
                                        <h2 className="card-title line-clamp-1 bg-white text-black dark:bg-base-100 dark:text-white ">
                                            {book.title}
                                        </h2>
                                        <p className='bg-white text-black dark:bg-base-100 dark:text-white'>{book.name}</p>
                                        <div className="card-actions flex items-center justify-between w-[95%]">

                                        </div>


                                        <div className="absolute group-hover/edit:h-[600px] bottom-0 left-0 removeButton w-[100%] flex justify-center items-center">
                                            <button onClick={() => handleRemoveButton(book._id)} className='w-[100%] hidden group/edit h-[30px] bg-red-400 hover:bg-red-500 tony rounded-b-box group-hover:block font-semibold'>REMOVE</button>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        ))
                        }

                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}


export default MyCollection
