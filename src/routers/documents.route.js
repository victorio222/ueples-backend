import { Router } from 'express';
import DocumentController from '../controllers/documents.controller.js';
import upload from '../middleware/multer.middleware.js'; // Your multer config
import authMiddleware from '../middleware/auth.middleware.js';
import { validateRegistration } from '../middleware/validator.middleware.js';
import multer from 'multer';
import documentTypeController from '../controllers/documentType.controller.js';

const documentRoutes = Router();

// GET all documents for the archive table
documentRoutes.get('/', authMiddleware.authToken, DocumentController.fetchAll);

documentRoutes.get('/type', authMiddleware.authToken, documentTypeController.index);

documentRoutes.get('/type/name/:name', authMiddleware.authToken, documentTypeController.getByName);

documentRoutes.post('/type/add', authMiddleware.authToken, documentTypeController.store);

documentRoutes.put('/type/:id/update', authMiddleware.authToken, documentTypeController.update);

documentRoutes.delete('/type/:id', authMiddleware.authToken, documentTypeController.delete);

documentRoutes.get('/year/:acad_year', authMiddleware.authToken, DocumentController.fetchByAcademicYear);

documentRoutes.post('/lock/:lrn', authMiddleware.authToken, DocumentController.handleLock);
documentRoutes.delete('/lock/:lrn', authMiddleware.authToken, DocumentController.handleReleaseLock);

// POST a new document (with file upload)
documentRoutes.post('/upload', authMiddleware.authToken, (req, res, next) => {
    upload.single('attachment')(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            if (err.code === 'LIMIT_FILE_SIZE') {
                return res.status(400).json({ message: "File is too large. Max limit is 5MB." });
            }
            return res.status(400).json({ message: err.message });
        } else if (err) {
            return res.status(400).json({ message: err.message });
        }
        next(); // Move to DocumentController.handleUpload
    });
}, DocumentController.handleUpload);

export default documentRoutes;