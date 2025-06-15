import express from 'express';
import userController from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', userController.getAll);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);

export default router;