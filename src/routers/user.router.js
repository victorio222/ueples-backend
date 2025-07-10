import express from 'express';
import userController from '../controllers/user.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
import upload from '../middleware/multer.middleware.js';
// import authMiddleware from '../utils/authMiddleware.js';

const router = express.Router();

router.get('/', userController.getAll);
router.get('/:id', authMiddleware.authToken, userController.getUserById);
router.put('/update/:id', upload.fields([{ name: 'user_image', maxCount: 1 }]), userController.updateUser);

export default router;