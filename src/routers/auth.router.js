import express from 'express';
import authController from '../controllers/auth.controller.js';
import upload from '../middleware/multer.middleware.js';

const authRouter = express.Router();

authRouter.post('/signin', authController.login);
authRouter.post('/signout', authController.logout);
authRouter.post('/register', upload.fields([{ name: 'id_card', maxCount: 1 }]), authController.register);
authRouter.post('/rememberToken', authController.refreshToken);
authRouter.get('/verify', authController.verifyEmail);

export default authRouter;