import React, { useState } from 'react'
import BookContext from './BookContext'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const BookStates = ({ children, isAuthenticated, setIsAuthenticated }) => {

    const navigate = useNavigate();

    const addBookToMyCollection = async (book) => {

        if (!localStorage.getItem('token')) {
            toast.error("You must be login Firstly!")
            setTimeout(() => {
                navigate('/sign_in');
                return;
            }, 2000);

        }

        try {

            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    authToken: `${token}`,
                    'Content-Type': 'application/json',
                }
            };

            const response = await axios.post(`${import.meta.env.VITE_REAL_HOST_URL}/my_book_collection`,
                {
                    userId: book.userId,
                    name: book.name,
                    title: book.title,
                    price: book.price,
                    category: book.category,
                    image: book.image
                }
                , config);

            toast.success("BOOK ADDED SUCCESSFULLY!")

        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    return (
        <BookContext.Provider value={{ isAuthenticated, setIsAuthenticated, addBookToMyCollection }}>
            {children}
        </BookContext.Provider>
    )
}

export default BookStates
