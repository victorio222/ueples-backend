import { Router } from 'express';
import StudentController from '../controllers/students.controller.js';
import upload from '../middleware/multer.middleware.js'; // Same multer, different config/logic
import authController from '../controllers/auth.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
import multer from 'multer';

const studentRoutes = Router();

const memoryStorage = multer.memoryStorage();
const uploadExcel = multer({ storage: memoryStorage });

studentRoutes.get('/', authMiddleware.authToken, StudentController.getAll);

// GET a specific student profile by LRN
studentRoutes.get('/:lrn', authMiddleware.authToken, StudentController.show);

// POST - Import students via Excel
studentRoutes.post('/import', authMiddleware.authToken, authMiddleware.authorize('Admin', 'Principal', 'Secretary'), uploadExcel.single('excel_file'), StudentController.uploadExcel);

export default studentRoutes;