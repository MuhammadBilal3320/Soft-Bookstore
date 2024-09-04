import My_Book_Schema from "../models/Persnal_Collection_Schema.js";
import { body, validationResult } from 'express-validator';

// Validation middleware
export const validateCollection = [
    body('userId')
        .notEmpty().withMessage('User ID is required')
        .isMongoId().withMessage('User ID must be a valid MongoDB ObjectId'),
    body('name')
        .optional({ nullable: true, checkFalsy: true })
        .isString().withMessage('Name must be a string'),
    body('title')
        .optional({ nullable: true, checkFalsy: true })
        .isString().withMessage('Title must be a string'),
    body('price')
        .optional({ nullable: true, checkFalsy: true })
        .isNumeric().withMessage('Price must be a number'),
    body('category')
        .optional({ nullable: true, checkFalsy: true })
        .isString().withMessage('Category must be a string'),
    body('image')
        .optional({ nullable: true, checkFalsy: true })
        .isString().withMessage('Image must be a string'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

export const Get_Collection_Controller = async (req, res) => {
    const userId = req.user.id; 

    try {
        const books = await My_Book_Schema.find({ userId });
        res.status(200).json({ message: 'User book collection retrieved successfully!', books });
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve book collection', error });
    }
};
