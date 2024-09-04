import React, { useContext, useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookContext from '../../../useContext/BookContext';

const BookCollectionContainer = () => {

    const [books, setBooks] = useState([]);
    const {addBookToMyCollection} = useContext(BookContext);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = await axios.get(`${import.meta.env.VITE_REAL_HOST_URL}/books`);
                setBooks(data.data);
            } catch (error) {
                console.log(error.message);
            }
        }

        fetchData();

    }, [])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    dots: false
                }
            }
        ]
    }


    return (
        <div className=" md:container cardMainContainer w-[100%] md:w-[95%] md:mx-auto md:text-left p-5 text-center bg-white text-black dark:bg-base-100 dark:text-white">
            <h1 className='text-[30px] font-bold '>BOOK COLLECTION</h1>
            <p>Discover a wide range of books for every interest. From exciting stories and classic reads to helpful guides and insightful non-fiction, there's something here for everyone. Find your next great book in our collection.</p>
            <div className="slider-container ">
                <div className=' mt-8 w-[100%] flex justify-center items-center'><p className='btn btn-sm text-[15px] bg-slate-500 rounded-full  text-white md:w-[300px] transition-all md:duration-500 md:hover:w-[500px] md:hover:transition-all md:hover:duration-500 text-center'><Link to={"/books"} >See All Collection</Link></p></div>
                <Slider {...settings}>

                    {books.map(book => (
                        <div key={book._id} className='p-5 w-[100%] md:p-10 bg-white text-black dark:bg-base-100 dark:text-white transition-all duration-400 hover:scale-105 hover:transition-all hover:duration-400'>

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

                </Slider>
            </div>
        </div>
    )
}

export default BookCollectionContainer
