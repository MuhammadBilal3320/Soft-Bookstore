import React, { useEffect, useState } from 'react'
import HomePage from './components/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BooksPage from './components/BooksPage/BooksPage'
import Sign_in from './components/SignIn_SignUp/Sign_in'
import Sign_up from './components/SignIn_SignUp/Sign_up'
import BookStates from './useContext/BookStates.jsx'
import RegisterSuccessful from './components/SignIn_SignUp/RegisterSuccessful'
import Contact from './components/ContactPage/Contact'
import MyCollection from './components/MyCollectionPage/MyCollection.jsx'





const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {

    const token = localStorage.getItem('token');
    try {
      if (token) {
        setIsAuthenticated(true);
      }
      else{
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log(error)
    }

  }, []);

  return (

    <BrowserRouter>
      <BookStates setIsAuthenticated={setIsAuthenticated}>

        <Routes>

          <Route exact path='/' element={<HomePage />} ></Route>
          <Route exact path='/home' element={<HomePage setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />} ></Route>
          <Route exact path='/books' element={<BooksPage />} ></Route>
          <Route exact path='/my_collection' element={<MyCollection />} ></Route>
          <Route exact path='/contact' element={<Contact />} ></Route>
          <Route exact path='/sign_in' element={<Sign_in />} ></Route>
          <Route exact path='/sign_up' element={<Sign_up />} ></Route>
          <Route exact path='/register_successful' element={<RegisterSuccessful />} ></Route>

        </Routes>

      </BookStates>
    </BrowserRouter >
  )
}

export default App
