import { Router } from 'express';
import AcademicYearController from '../controllers/academicYear.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
import { validateAcademicYear } from '../middleware/validator.middleware.js';

const academicYearRoutes = Router();

academicYearRoutes.get('/', authMiddleware.authToken, AcademicYearController.index);
academicYearRoutes.post('/add', authMiddleware.authToken, validateAcademicYear, AcademicYearController.store);

export default academicYearRoutes;