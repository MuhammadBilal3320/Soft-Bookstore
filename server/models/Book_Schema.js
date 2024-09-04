import mongoose, {Schema} from "mongoose";

const Book = new Schema({

    name: {type: String},
    title: {type: String},
    price: {type: Number},
    category: {type: String},
    image:{type: String},
    date:{type: Date,default: Date.now}
});

const Book_Schema = mongoose.model('Book', Book);
export default Book_Schema;