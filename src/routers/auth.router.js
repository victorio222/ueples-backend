import express from 'express';
import authController from '../controllers/auth.controller.js';
import upload from '../middleware/multer.middleware.js';

const router = express.Router();

router.post('/signin', authController.login);
router.post('/signout', authController.logout);
router.post('/register', upload.fields([{ name: 'id_card', maxCount: 1 }]), authController.register);
router.post('/rememberToken', authController.refreshToken);
router.get('/verify', authController.verifyEmail);

export default router;