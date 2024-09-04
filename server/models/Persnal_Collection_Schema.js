import mongoose, {Schema} from "mongoose";

const My_Book = new Schema({

    userId:{type: mongoose.Schema.Types.ObjectId, ref:  'User', required: true},
    name: {type: String},
    title: {type: String},
    price: {type: Number},
    category: {type: String},
    image:{type: String},
    date:{type: Date,default: Date.now}
});

const My_Book_Schema = mongoose.model('My_Book', My_Book);
export default My_Book_Schema;