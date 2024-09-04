import Book_Schema from '../models/Book_Schema.js';
import { body, validationResult } from 'express-validator';

// Validation middleware
export const validateBook = [
    body('name')
        .notEmpty().withMessage('Name is required')
        .isString().withMessage('Name must be a string'),
    body('title')
        .notEmpty().withMessage('Title is required')
        .isString().withMessage('Title must be a string')
        .isLength({ min: 3 }).withMessage('Title must be at least 3 characters long'),
    body('price')
        .isNumeric().withMessage('Price must be a number')
        .optional({ nullable: true, checkFalsy: true }),
    body('category')
        .isString().withMessage('Category must be a string')
        .optional({ nullable: true, checkFalsy: true }),
    body('image')
        .isString().withMessage('Image must be a string')
        .optional({ nullable: true, checkFalsy: true }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

export const Book_Controller = async (req, res) => {
    try {
        const Book = await Book_Schema.find();
        res.status(200).json(Book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

