import express from 'express';
import userController from '../controllers/user.controller.js';
import authMiddleware from '../utils/authMiddleware.js';

const router = express.Router();

router.get('/', userController.getAll);
router.get('/:id', authMiddleware.authToken, userController.getUserById);
router.put('/update/:id', userController.updateUser);

export default router;