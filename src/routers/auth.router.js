import express from 'express';
import authController from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signin', authController.login);
router.post('/signout', authController.logout);
// router.post('/register');
router.post('/rememberToken', authController.refreshToken);

export default router;