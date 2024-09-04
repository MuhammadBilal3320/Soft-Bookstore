import React from 'react'
import Navbar from './Navbar/Navbar'
import HeroPage from './HeroPage/HeroPage'
import Footer from './Footer/Footer'
import BookCollectionContainer from './BookCollectionContainer/BookCollectionContainer'


const HomePage = ({isAuthenticated,setIsAuthenticated}) => {
    return (

            <div className='bg-white dark:bg-base-100'>
                <Navbar setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
                <HeroPage isAuthenticated={isAuthenticated} />
                <BookCollectionContainer />
                <Footer />
            </div>

    )
}

export default HomePage
