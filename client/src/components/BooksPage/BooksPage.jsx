import React, { useContext, useState } from 'react'
import Navbar from '../HomePage/Navbar/Navbar'
import TopTextSection from './TopTextSection'
import BooksCollection from './BooksCollection'
import Footer from '../HomePage/Footer/Footer'

const BooksPage = () => {

    const [books, setBooks] = useState([]);
    const [oldCollection, setOldCollection] = useState([])


    return (
        <div className=' bg-white dark:bg-base-100'>
            
            <Navbar/>
            
            <div className="container mx-auto md:w-[80%]">
                <TopTextSection oldCollection={oldCollection} books={books} setBooks={setBooks} />
            </div>
                <BooksCollection setOldCollection={setOldCollection} books={books} setBooks={setBooks} />
                <Footer />

        </div>
    )
}

export default BooksPage
