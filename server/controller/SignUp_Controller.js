import User_Schema from '../models/User_Schema.js';
import bcrypt from 'bcrypt';
import { genSalt } from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';
import { body, validationResult } from 'express-validator';

dotenv.config();

const jwt_Relative = process.env.JWT_REAL;

// Validation middleware for sign-up
export const validateSignUp = [
    body('userName')
        .notEmpty().withMessage('User name is required')
        .isString().withMessage('User name must be a string')
        .isLength({ min: 3 }).withMessage('User name must be at least 3 characters long'),
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format'),
    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

export const Signup_Controller = async (req, res) => {
    let success = false;
    try {
        const { userName, email, password } = req.body;
        const user = await User_Schema.findOne({ $or: [{ userName: userName }, { email: email }] });

        if (user) {
            return res.status(400).json({ message: 'User already exists!' });
        }

        const salt = await genSalt(10);
        const secretPassword = await bcrypt.hash(password, salt);

        const newUser = new User_Schema({
            userName: userName,
            email: email,
            password: secretPassword,
        });
        await newUser.save();

        const data = {
            user: {
                id: newUser._id,
            }
        }

        const authToken = jsonwebtoken.sign(data, jwt_Relative);

        success = true;
        res.status(201).json([{ success }, { authToken }]);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error!' });
    }
};
