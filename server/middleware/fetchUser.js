import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const jwt_relative = process.env.JWT_REAL;

const fetchUser = (req, res, next) =>{
    const token = req.header("authToken");
    
    if(!token){
        return res.status(401).json({error: "No Token, authorization denied!"});
    }

    try {
        const userVerified = jsonwebtoken.verify(token, jwt_relative);
        req.user = userVerified.user;
        next();
    } catch (error) {
        return res.status(500).json({error: error.message});
    }

}

export default fetchUser;