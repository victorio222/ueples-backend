import express from 'express';
import userController from '../controllers/user.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
import upload from '../middleware/multer.middleware.js';
import { validateRegistration, validateUserUpdate } from '../middleware/validator.middleware.js';
import authController from '../controllers/auth.controller.js';
// import authMiddleware from '../utils/authMiddleware.js';

const userRouter = express.Router();

userRouter.get('/', authMiddleware.authToken, userController.fetchAll);
userRouter.get('/:id', authMiddleware.authToken, userController.getUserById);
userRouter.post('/add', authMiddleware.authToken, validateRegistration, authController.addUser);
userRouter.put('/update/:id', upload.single("user_image"), authMiddleware.authToken, validateUserUpdate, userController.updateUser);
userRouter.put('/update/status/:id', authMiddleware.authToken, userController.updateStatus);
userRouter.patch('/change-pass/:id', authMiddleware.authToken, userController.changePassword);

export default userRouter;