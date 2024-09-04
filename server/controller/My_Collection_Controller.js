import My_Book_Schema from "../models/Persnal_Collection_Schema.js";
import { body, validationResult } from 'express-validator';

// Validation middleware for adding a book to the collection
export const validateAddToCollection = [
    body('name')
        .optional({ nullable: true, checkFalsy: true })
        .isString().withMessage('Name must be a string'),
    body('title')
        .notEmpty().withMessage('Title is required')
        .isString().withMessage('Title must be a string'),
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

export const Add_To_Collection_Controller = async (req, res) => {
    let success = false;
    const { name, title, price, category, image } = req.body;

    const userId = req.user.id; // Extracted from JWT

    try {
        // Check if the book already exists in the user's collection
        const existingBook = await My_Book_Schema.findOne({
            userId: userId,
            title: title
        });

        if (existingBook) {
            // If the book already exists, send a response indicating that
            return res.status(400).json({ message: 'Book already in your collection' });
        }

        // If the book does not exist, create and save the new book
        const newBook = new My_Book_Schema({
            userId: userId,
            name: name,
            title: title,
            price: price,
            category: category,
            image: image
        });

        await newBook.save();
        success = true;
        res.status(201).json({ message: 'Book purchased and added to your collection successfully!', book: newBook });

    } catch (error) {
        res.status(500).json({ message: 'Failed to purchase book', error });
    }
};
