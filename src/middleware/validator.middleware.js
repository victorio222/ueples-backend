import { body, validationResult } from 'express-validator';

export const validateRegistration = [
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
    body('first_name').trim().notEmpty().escape().withMessage('First name is required'),
    
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

export const validateUserUpdate = [
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('first_name').trim().notEmpty().escape().withMessage('First name is required'),
    body('last_name').trim().notEmpty().escape().withMessage('First name is required'),
    
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

export const validateAcademicYear = [
    body('academic_year')
        .trim()
        .notEmpty().withMessage('Academic year is required')
        // Regex: 4 digits, a hyphen, 4 digits
        .matches(/^\d{4}-\d{4}$/).withMessage('Invalid format. Use YYYY-YYYY (e.g., 2025-2026)')
        .custom((value) => {
            const [start, end] = value.split('-').map(Number);
            if (end !== start + 1) {
                throw new Error('Academic year must be consecutive (e.g., 2025-2026)');
            }
            return true;
        }),
    
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ status: 'fail', message: errors.array()[0].msg });
        }
        next();
    }
];