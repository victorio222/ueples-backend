import express from 'express';
import userController from '../controllers/user.controller.js';
import authMiddleware from '../utils/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware.authToken, userController.getAll);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);

export default router;