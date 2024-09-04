import mongoose, {Schema} from "mongoose";


const user= new Schema({
    userName: {type: String,required: true, unique: true},

    email: {type: String, required: true, unique: true},

    password: {type: String, required: true},
    
    date:{type: Date,default: Date.now}

});

const User_Schema = mongoose.model("User", user);

export default User_Schema;