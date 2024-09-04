import express from 'express';
import connectToMongoDB from './db.js'
import Book_Router from './routes/Book_Router.js'
import Signup_Router from './routes/Signup-Router.js'
import Signin_Router from './routes/Signin-Router.js'
import My_Collection from './routes/My_Collection.js'
import Get_Collection from './routes/Get_Collection.js'
import Deleting_Book from './routes/Deleting_Book.js'
import cors from 'cors';



const port = process.env.PORT_NO;
const app = express();

app.use(express.json())
app.use(cors());

connectToMongoDB();

// All routes
app.use('/signUp', Signup_Router);
app.use('/signIn', Signin_Router);
app.use('/books', Book_Router);
app.use('/my_book_collection', My_Collection);
app.use('/get_book_collection', Get_Collection);
app.use('/delete_book', Deleting_Book);


app.listen(port, () => {
    console.log('Server is Connected Successfully');
});
