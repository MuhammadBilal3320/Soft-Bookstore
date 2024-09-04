import User_Schema from '../models/User_Schema.js';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';
import { body, validationResult } from 'express-validator';

dotenv.config();

const jwt_Relative = process.env.JWT_REAL;

// Validation middleware for sign-in
export const validateSignIn = [
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format'),
    body('password')
        .notEmpty().withMessage('Password is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

export const SignIn_Controller = async (req, res) => {
    let success = false;
    try {
        const { email, password } = req.body;

        const user = await User_Schema.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct credentials!" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Please try to login with correct credentials!" });
        }

        const data = {
            user: {
                id: user._id,
                userName: user.userName
            }
        }

        const authToken = jsonwebtoken.sign(data, jwt_Relative);
        success = true;
        res.status(200).json({ success, token: authToken });

    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error!' });
    }
};
